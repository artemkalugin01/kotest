"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[6662],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,b=m["".concat(p,".").concat(d)]||m[d]||c[d]||o;return n?r.createElement(b,l(l({ref:t},u),{},{components:n})):r.createElement(b,l({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},41795:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),l=["components"],i={id:"genops",title:"Generator Operations",slug:"generator-operations.html"},p=void 0,s={unversionedId:"proptest/genops",id:"proptest/genops",title:"Generator Operations",description:"Next",source:"@site/docs/proptest/genops.md",sourceDirName:"proptest",slug:"/proptest/generator-operations.html",permalink:"/docs/next/proptest/generator-operations.html",editUrl:"https://github.com/kotest/kotest/blob/master/documentation/docs/proptest/genops.md",tags:[],version:"current",frontMatter:{id:"genops",title:"Generator Operations",slug:"generator-operations.html"},sidebar:"proptest",previous:{title:"Generators List",permalink:"/docs/next/proptest/property-test-generators-list.html"},next:{title:"Configuration",permalink:"/docs/next/proptest/property-test-config.html"}},u={},c=[{value:"Next",id:"next",level:2},{value:"Filter",id:"filter",level:2},{value:"Map",id:"map",level:2},{value:"FlatMap",id:"flatmap",level:2},{value:"Merging",id:"merging",level:2},{value:"Bind",id:"bind",level:2}],m={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"next"},"Next"),(0,o.kt)("p",null,"If you want to use an Arb to just return a value (even outside of a property test), then you can call next on it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"val arbA: Arb<A> = ...\nval a = arbA.next() // use Random.Default\nval a2 = arbA.next(rs) // pass in Random\n")),(0,o.kt)("h2",{id:"filter"},"Filter"),(0,o.kt)("p",null,"If you have an arb and you want to create a new arb that provides a subset of values, you can call filter on the source arb.\nFor example, one way of generating even numbers is to take the integer arb, and filter out odd values. Viz:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"val evens = Arb.int().filter { it.value % 2 == 0 }\nval odds = Arb.int().filter { it.value % 2 == 1 }\n")),(0,o.kt)("h2",{id:"map"},"Map"),(0,o.kt)("p",null,"If you have an arb and you want to transform the value generated, you can use map."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"val integerStrings: Arb<String> = Arb.int().map { it.toString() }\n")),(0,o.kt)("h2",{id:"flatmap"},"FlatMap"),(0,o.kt)("p",null,"If you have an arb whose emission or edge cases depends on the emission of the previous arbitraries, you can use flatMap."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'val dependentArbs: Arb<String> = Arb.of("foo", "bar").flatMap { prefix ->\n   Arb.int(1..10).map { integer ->\n      "${prefix}-${integer}"\n   }\n}\n')),(0,o.kt)("h2",{id:"merging"},"Merging"),(0,o.kt)("p",null,"Two generators can be merged together, so that the resulting elements are equally sampled from both generators."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"val merged = arbA.merge(arbB)\n")),(0,o.kt)("p",null,"So with the following example would have an equal chance to yield either ",(0,o.kt)("inlineCode",{parentName:"p"},'"a"')," or ",(0,o.kt)("inlineCode",{parentName:"p"},'"b"')," on each random sample:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'val a = arbitrary { "a" }\nval b = arbitrary { "b" }\nval ab = a.merge(b)\n\nprintln(ab.take(1000).groupingBy { it }.eachCount())\n// {a=493, b=507}\n')),(0,o.kt)("p",null,"For merging more than two arbitraries, ",(0,o.kt)("inlineCode",{parentName:"p"},"Arb.choice")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"Arb.choose")," might be more appropriate. For instance we can use:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Arb.choice(arbA, arbB, arbC)")," for uniform sampling between ",(0,o.kt)("inlineCode",{parentName:"li"},"arbA"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"arbB")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"arbC"),","),(0,o.kt)("li",{parentName:"ul"},"or ",(0,o.kt)("inlineCode",{parentName:"li"},"Arb.choose(4 to arbA, 1 to arbB, 5 to arbC)")," for a more granular control of frequency of each arbitrary.\nIn this example ",(0,o.kt)("inlineCode",{parentName:"li"},"arbA"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"arbB"),", and ",(0,o.kt)("inlineCode",{parentName:"li"},"arbC")," will be sampled 40%, 10%, and 50% of the time, respectively.")),(0,o.kt)("h2",{id:"bind"},"Bind"),(0,o.kt)("p",null,"Bind is useful if you want to apply multiple arbitraries. We can take a look at how we might construct values for a data class using bind."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"data class Person(val name: String, val age: Int)\n\nval personArb: Arb<Person> = Arb.bind(\n   Arb.string(),\n   Arb.int()\n) { name, age -> Person(name, age) }\n")))}d.isMDXComponent=!0}}]);