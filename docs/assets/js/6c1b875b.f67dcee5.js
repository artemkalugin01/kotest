"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[2484],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return k}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),l=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(a.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(n),k=o,d=m["".concat(a,".").concat(k)]||m[k]||u[k]||i;return n?r.createElement(d,s(s({ref:t},p),{},{components:n})):r.createElement(d,s({ref:t},p))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=m;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var l=2;l<i;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},62727:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return a},default:function(){return k},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),s=["components"],c={id:"wiremock",title:"WireMock",sidebar_label:"WireMock",slug:"wiremock.html"},a=void 0,l={unversionedId:"extensions/wiremock",id:"extensions/wiremock",title:"WireMock",description:"WireMock",source:"@site/docs/extensions/wiremock.md",sourceDirName:"extensions",slug:"/extensions/wiremock.html",permalink:"/docs/next/extensions/wiremock.html",editUrl:"https://github.com/kotest/kotest/blob/master/documentation/docs/extensions/wiremock.md",tags:[],version:"current",frontMatter:{id:"wiremock",title:"WireMock",sidebar_label:"WireMock",slug:"wiremock.html"},sidebar:"extensions",previous:{title:"Koin",permalink:"/docs/next/extensions/koin.html"},next:{title:"Robolectric",permalink:"/docs/next/extensions/robolectric.html"}},p={},u=[{value:"WireMock",id:"wiremock",level:2}],m={toc:u};function k(e){var t=e.components,n=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"wiremock"},"WireMock"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/tomakehurst/wiremock"},"WireMock")," is a library which provides HTTP response stubbing, matchable on\nURL, header and body content patterns etc."),(0,i.kt)("p",null,"Kotest provides a module ",(0,i.kt)("inlineCode",{parentName:"p"},"kotest-extensions-wiremock")," for integration with wiremock."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://search.maven.org/artifact/io.kotest.extensions/kotest-extensions-wiremock"},(0,i.kt)("img",{src:"https://img.shields.io/maven-central/v/io.kotest.extensions/kotest-extensions-wiremock.svg?label=latest%20release"})),"\n",(0,i.kt)("a",{parentName:"p",href:"https://oss.sonatype.org/content/repositories/snapshots/io/kotest/extensions/kotest-extensions-wiremock/"},(0,i.kt)("img",{src:"https://img.shields.io/nexus/s/https/oss.sonatype.org/io.kotest.extensions/kotest-extensions-wiremock.svg?label=latest%20snapshot"}))),(0,i.kt)("p",null,"To begin, add the following dependency to your build:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"io.kotest.extensions:kotest-extensions-wiremock:{version}\n")),(0,i.kt)("p",null,"Having this dependency in the classpath brings ",(0,i.kt)("inlineCode",{parentName:"p"},"WireMockListener")," into scope.\n",(0,i.kt)("inlineCode",{parentName:"p"},"WireMockListener")," manages  the lifecycle of a ",(0,i.kt)("inlineCode",{parentName:"p"},"WireMockServer")," during your test."),(0,i.kt)("p",null,"For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'\nclass SomeTest : FunSpec({\n  val customerServiceServer = WireMockServer(9000)\n  listener(WireMockListener(customerServiceServer, ListenerMode.PER_SPEC))\n\n  test("let me get customer information") {\n    customerServiceServer.stubFor(\n      WireMock.get(WireMock.urlEqualTo("/customers/123"))\n        .willReturn(WireMock.ok())\n    )\n\n    val connection = URL("http://localhost:9000/customers/123").openConnection() as HttpURLConnection\n    connection.responseCode shouldBe 200\n  }\n\n    //  ------------OTHER TEST BELOW ----------------\n})\n')),(0,i.kt)("p",null,"In above example we created an instance of ",(0,i.kt)("inlineCode",{parentName:"p"},"WireMockListener")," which starts a ",(0,i.kt)("inlineCode",{parentName:"p"},"WireMockServer")," before running the tests\nin the spec and stops it after completing all the tests in the spec."),(0,i.kt)("p",null,"You can use ",(0,i.kt)("inlineCode",{parentName:"p"},"WireMockServer.perSpec(customerServiceServer)")," to achieve same result."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'\nclass SomeTest : FunSpec({\n  val customerServiceServer = WireMockServer(9000)\n  listener(WireMockListener(customerServiceServer, ListenerMode.PER_TEST))\n\n  test("let me get customer information") {\n    customerServiceServer.stubFor(\n      WireMock.get(WireMock.urlEqualTo("/customers/123"))\n        .willReturn(WireMock.ok())\n    )\n\n    val connection = URL("http://localhost:9000/customers/123").openConnection() as HttpURLConnection\n    connection.responseCode shouldBe 200\n  }\n\n  //  ------------OTHER TEST BELOW ----------------\n})\n')),(0,i.kt)("p",null,"In above example we created an instance of ",(0,i.kt)("inlineCode",{parentName:"p"},"WireMockListener")," which starts a ",(0,i.kt)("inlineCode",{parentName:"p"},"WireMockServer")," before running every test\nin the spec and stops it after completing every test in the spec.\nYou can use ",(0,i.kt)("inlineCode",{parentName:"p"},"WireMockServer.perTest(customerServiceServer)")," to achieve same result."))}k.isMDXComponent=!0}}]);