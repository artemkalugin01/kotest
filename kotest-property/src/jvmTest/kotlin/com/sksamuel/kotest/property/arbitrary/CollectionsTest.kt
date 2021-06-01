package com.sksamuel.kotest.property.arbitrary

import io.kotest.assertions.throwables.shouldThrowAny
import io.kotest.core.spec.style.DescribeSpec
import io.kotest.inspectors.forAll
import io.kotest.matchers.collections.shouldContain
import io.kotest.matchers.collections.shouldHaveAtLeastSize
import io.kotest.matchers.collections.shouldHaveAtMostSize
import io.kotest.matchers.collections.shouldNotBeEmpty
import io.kotest.matchers.shouldBe
import io.kotest.property.Arb
import io.kotest.property.Exhaustive
import io.kotest.property.arbitrary.double
import io.kotest.property.arbitrary.edgecases
import io.kotest.property.arbitrary.int
import io.kotest.property.arbitrary.list
import io.kotest.property.arbitrary.of
import io.kotest.property.arbitrary.positiveInt
import io.kotest.property.arbitrary.set
import io.kotest.property.arbitrary.single
import io.kotest.property.checkAll
import io.kotest.property.exhaustive.constant
import io.kotest.property.forAll

class CollectionsTest : DescribeSpec({

   describe("Arb.list should") {

      it("not include empty edgecases as first sample") {
         val numGen = Arb.list(Arb.int(), 1..10)
         forAll(1, numGen) { it.isNotEmpty() }
      }

      it("return lists of underlying generators") {
         val gen = Arb.list(Exhaustive.constant(1), 2..10)
         checkAll(gen) {
            it.shouldHaveAtLeastSize(2)
            it.shouldHaveAtMostSize(10)
            it.toSet() shouldBe setOf(1)
         }
      }

      it("include repeated elements in edge cases") {
         val edgecase = Arb.positiveInt().edgecases().firstOrNull()
         Arb.list(Arb.positiveInt()).edgecases() shouldContain listOf(edgecase, edgecase)
         Arb.list(Arb.positiveInt(), 4..6).edgecases() shouldContain listOf(edgecase, edgecase, edgecase, edgecase)

      }

      it("include empty list in edge cases") {
         Arb.list(Arb.positiveInt()).edgecases() shouldContain emptyList()
      }

      it("respect bounds in edgecases") {
         val edges = Arb.list(Arb.positiveInt(), 2..10).edgecases().toSet()
         edges.forAll { it.shouldNotBeEmpty() }
      }

      it("generate lists of length up to 100 by default") {
         checkAll(10_000, Arb.list(Arb.double())) {
            it.shouldHaveAtMostSize(100)
         }
      }

      it("generate lists in the given range") {
         checkAll(1000, Arb.list(Arb.double(), 250..500)) {
            it.shouldHaveAtLeastSize(250)
            it.shouldHaveAtMostSize(500)
         }
      }
   }

   describe("Arb.set should") {

      it("not include empty edgecases as first sample") {
         val numGen = Arb.set(Arb.int(), 1..10)
         forAll(1, numGen) { it.isNotEmpty() }
      }

      it("throw when underlying arb cardinality is lower than expected set cardinality") {
         val arbUnderlying = Arb.of("foo", "bar", "baz")
         shouldThrowAny {
            Arb.set(arbUnderlying, 5..100).single()
         }
      }

      it("generate when sufficient cardinality is available, even if dups are periodically generated") {
         // this arb will generate 100 ints, but the first 1000 we take are almost certain to not be unique,
         // so this test will ensure, as long as the arb can still complete, it does.
         val arbUnderlying = Arb.int(0..1000)
         Arb.set(arbUnderlying, 1000).single()
      }

      it("generate when sufficient cardinality is available, regardless of size") {
         val arbUnderlying = Arb.int()
         Arb.set(arbUnderlying, 1000000).single()
      }

      it("generate sets of length up to 100 by default") {
         checkAll(10_000, Arb.set(Arb.double())) {
            it.shouldHaveAtMostSize(100)
         }
      }

      it("generate sets in the given range") {
         checkAll(1000, Arb.set(Arb.double(), 250..500)) {
            it.shouldHaveAtLeastSize(250)
            it.shouldHaveAtMostSize(500)
         }
      }
   }
})
