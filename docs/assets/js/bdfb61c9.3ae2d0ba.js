"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[5562],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=c(n),d=s,m=h["".concat(i,".").concat(d)]||h[d]||p[d]||o;return n?a.createElement(m,r(r({ref:t},u),{},{components:n})):a.createElement(m,r({ref:t},u))}));function d(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,r=new Array(o);r[0]=h;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:s,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},73183:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var a=n(87462),s=n(63366),o=(n(67294),n(3905)),r=["components"],l={id:"concurrency",title:"Concurrency",slug:"concurrency.html"},i=void 0,c={unversionedId:"framework/concurrency",id:"framework/concurrency",title:"Concurrency",description:"Concurrency is at the heart of Kotlin, with compiler support for continuations (suspend functions), enabling",source:"@site/docs/framework/concurrency.md",sourceDirName:"framework",slug:"/framework/concurrency.html",permalink:"/docs/next/framework/concurrency.html",editUrl:"https://github.com/kotest/kotest/blob/master/documentation/docs/framework/concurrency.md",tags:[],version:"current",frontMatter:{id:"concurrency",title:"Concurrency",slug:"concurrency.html"}},u={},p=[{value:"Concurrency Mode",id:"concurrency-mode",level:2},{value:"ConcurrencyMode.None",id:"concurrencymodenone",level:3},{value:"ConcurrencyMode.Spec",id:"concurrencymodespec",level:3},{value:"ConcurrencyMode.Test",id:"concurrencymodetest",level:3},{value:"ConcurrencyMode.All",id:"concurrencymodeall",level:3},{value:"@Isolate Safety Hatch",id:"isolate-safety-hatch",level:3},{value:"Multiple Threads",id:"multiple-threads",level:3}],h={toc:p};function d(e){var t=e.components,n=(0,s.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Concurrency is at the heart of Kotlin, with compiler support for continuations (suspend functions), enabling\nthe powerful coroutines library, in addition to the standard Java concurrency tools."),(0,o.kt)("p",null,"So it is expected that a Kotlin test framework should offer full support for executing tests concurrently, whether that is through\ntraditional blocking calls or suspendable functions."),(0,o.kt)("p",null,"Kotest offers the following features:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ability to launch specs and tests concurrently in separate coroutines to support context switching when using suspending functions."),(0,o.kt)("li",{parentName:"ul"},"The ability to configure multiple threads to take advantage of multi-core environments and to allow for calls that use blocking APIs.")),(0,o.kt)("p",null,"These two features are orthogonal but complimentary."),(0,o.kt)("p",null,"By default, Kotest will execute each test case sequentially using a single thread.\nThis means if a test inside a spec suspends or blocks, the whole test run will suspend or block until that test case resumes."),(0,o.kt)("p",null,"This is the safest default to use, since it places no burden or expectation on the user to write thread-safe tests. For example,\ntests can share state or use instance fields which are not thread safe. It won't subject your tests to race conditions or require you to know Java's memory model. Specs can use before and after methods confidently knowing they won't interfere with each other."),(0,o.kt)("p",null,"However, it is understandable that many users will want to run tests concurrently to reduce the total execution time of their test suite.\nThis is especially true when testing code that suspends or blocks - the performance gains from allowing tests to run concurrently can be significant."),(0,o.kt)("h2",{id:"concurrency-mode"},"Concurrency Mode"),(0,o.kt)("p",null,"Kotest offers the ability to launch each spec and/or test in separate coroutines that can run concurrently.\nThen, whenever a test suspends, another coroutine can be swapped onto that thread."),(0,o.kt)("p",null,"For example, if we were testing some kind of retry function, which sleeps for a period of time between invocations, the\ntest engine would simply be idling while the retry was suspended unless there were other coroutines that could be swapped onto the thread."),(0,o.kt)("p",null,"We can configure this feature by setting the configuration field ",(0,o.kt)("inlineCode",{parentName:"p"},"concurrencyMode")," or the system property ",(0,o.kt)("inlineCode",{parentName:"p"},"kotest.framework.concurrency.mode"),"."),(0,o.kt)("p",null,"There are four values:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"None")," - Launch specs and tests ",(0,o.kt)("strong",{parentName:"li"},"sequentially"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Spec")," - Launch specs ",(0,o.kt)("strong",{parentName:"li"},"concurrently"),", but tests within each spec ",(0,o.kt)("strong",{parentName:"li"},"sequentially"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Test")," - Launch specs ",(0,o.kt)("strong",{parentName:"li"},"sequentially"),", but tests within each spec ",(0,o.kt)("strong",{parentName:"li"},"concurrently"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"All")," - Launch ",(0,o.kt)("strong",{parentName:"li"},"both")," specs and tests ",(0,o.kt)("strong",{parentName:"li"},"concurrently"),".")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),'"Caveats"')),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This setting does not change the thread count, but allows for co-operative concurrency when using suspendable functions.\nIf you are testing code that does not use coroutines or uses frequent blocking calls then this setting alone is not sufficient.\nSee the section on multiple threads."))),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),'"Blocking Methods"')),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Usage of blocking calls - such as those from Java's IO Api or Thread.sleep - will block the thread and not allow that\nthread for other coroutines regardless of this setting."),(0,o.kt)("p",{parentName:"div"},"One can either try to avoid the use of blocking calls in favour of suspendable equivalents or wrap blocking calls\ninside a ",(0,o.kt)("inlineCode",{parentName:"p"},"withContext")," block to move the offending code onto another dispatcher, such as ",(0,o.kt)("inlineCode",{parentName:"p"},"Dispatchers.IO"),"."))),(0,o.kt)("h3",{id:"concurrencymodenone"},"ConcurrencyMode.None"),(0,o.kt)("p",null,"This is the default setting, which launches all specs and tests sequentially. That is, the next spec and test are launched\nonly when the previous one completes."),(0,o.kt)("p",null,"Consider the following specs:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'class MyTest1 : FunSpec() {\n   init {\n      test("a") {\n      }\n      test("b") {\n      }\n   }\n}\n\nclass MyTest2 : FunSpec() {\n   init {\n      test("c") {\n      }\n      test("d") {\n      }\n   }\n}\n')),(0,o.kt)("p",null,"When using ",(0,o.kt)("inlineCode",{parentName:"p"},"ConcurrencyMode.None"),", this would perform like the following pseudo-code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"val spec1 = MyTest1()\nspec1.testa()\nspec1.testb()\n\nval spec2 = MyTest2()\nspec2.testc()\nspec2.testd()\n")),(0,o.kt)("p",null,"Suspension or blocking will suspend or block the entire test run. All callback methods such as ",(0,o.kt)("inlineCode",{parentName:"p"},"beforeTest")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"afterSpec")," are\nguaranteed to run in isolation."),(0,o.kt)("h3",{id:"concurrencymodespec"},"ConcurrencyMode.Spec"),(0,o.kt)("p",null,"This setting launches each spec at once, but tests inside each coroutine sequentially."),(0,o.kt)("p",null,"It is common for tests inside the same class to re-use variables or use instance fields which are not thread safe.\nEven when executing specs concurrently, we may not want tests inside the same spec to run concurrently."),(0,o.kt)("p",null,"Using the same example as before, using ",(0,o.kt)("inlineCode",{parentName:"p"},"ConcurrencyMode.Spec"),", this would perform like the following pseudo-code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"launch { // coroutine 1\n  val spec1 = MyTest1()\n  spec1.testa() // a suspend here would suspend spec1 only\n  spec1.testb() // this test will only run once testa has completed\n}\n\nlaunch { // coroutine 2\n  val spec2 = MyTest2()\n  spec2.testc() // a suspend here would suspend spec2 only\n  spec2.testd() // this test will only run once testc has completed\n}\n")),(0,o.kt)("p",null,"As you can see, the two specs are launched at the same time, and will execute concurrently\nbut the tests inside any particular spec will still execute sequentially."),(0,o.kt)("p",null,"If a test case suspends, only the containing spec will suspend until that test case resumes, but other spec coroutines are free to run."),(0,o.kt)("p",null,"Specs must be thread-safe with respect to other specs, but tests inside each spec are free to use shared state and\nthread unsafe code that is contained within that spec. Test level callback methods such as ",(0,o.kt)("inlineCode",{parentName:"p"},"beforeTest")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"afterTest")," are\nguaranteed to run in isolation, but spec level callback methods such as ",(0,o.kt)("inlineCode",{parentName:"p"},"beforeSpec")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"afterSpec")," can run concurrently."),(0,o.kt)("h3",{id:"concurrencymodetest"},"ConcurrencyMode.Test"),(0,o.kt)("p",null,"This setting launches each spec sequentially, but each root test inside a spec concurrently."),(0,o.kt)("p",null,"With the same example as before, in ",(0,o.kt)("inlineCode",{parentName:"p"},"ConcurrencyMode.Test")," mode, this would look like the following pseudo-code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"coroutineScope { // the scope ensures we wait for the whole spec to complete\n  val spec1 = MyTest1()\n  launch { // both tests launched at the same time\n    spec1.testa()\n  }\n  launch {\n    spec1.testb()\n  }\n}\n\ncoroutineScope { // the scope ensures we wait for the whole spec to complete\n  val spec2 = MyTest2()\n  launch { // both tests launched at the same time\n    spec2.testc()\n  }\n  launch {\n    spec2.testd()\n  }\n}\n")),(0,o.kt)("p",null,"As you can see, the first spec will launch all of its tests at the same time, then suspend until they complete.\nOnly after all the contained tests have completed, will the next spec launch.\nThis mode is useful if you need thread safety between specs but tests inside each spec can run thread safe."),(0,o.kt)("p",null,"Test level callback methods such as ",(0,o.kt)("inlineCode",{parentName:"p"},"beforeTest")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"afterTest")," can run concurrently,\nbut spec level callback methods such as ",(0,o.kt)("inlineCode",{parentName:"p"},"beforeSpec")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"afterSpec")," are guaranteed to run in isolation."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),'"Isolation mode"')),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The default isolation mode for specs is ",(0,o.kt)("em",{parentName:"p"},"single instance per class")," - which means the same instance of\nthe spec class is used for all tests of that class. If you have top level variables in your class, they must\nbe thread safe."))),(0,o.kt)("h3",{id:"concurrencymodeall"},"ConcurrencyMode.All"),(0,o.kt)("p",null,"This setting launches each spec concurrently and each test inside each spec concurrently. In effect, this is like\nthrowing all the tests into one giant pot and launching them all at the same time."),(0,o.kt)("p",null,"With the same example as before, in ",(0,o.kt)("inlineCode",{parentName:"p"},"ConcurrencyMode.All")," mode, this would look like the following pseudo-code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"launch {\n  val spec1 = MyTest1()\n  launch {\n    spec1.testa()\n  }\n  launch {\n    spec1.testb()\n  }\n}\n\nlaunch {\n  val spec2 = MyTest2()\n  launch {\n    spec2.testc()\n  }\n  launch {\n    spec2.testd()\n  }\n}\n")),(0,o.kt)("p",null,"Now you can see that every spec and all tests in those specs are launched immediately."),(0,o.kt)("p",null,"All callback methods such as ",(0,o.kt)("inlineCode",{parentName:"p"},"beforeTest")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"afterSpec")," can run concurrently. Users must ensure all callback is thread safe."),(0,o.kt)("p",null,"!!! warning\nThis setting will give the maximum possible performance, but every single test must be thread safe (see @Isolate)"),(0,o.kt)("p",null,'!!! warning "Isolation mode"\nThe default isolation mode for specs is ',(0,o.kt)("em",{parentName:"p"},"single instance per class")," - which means the same instance of\nthe spec class is used for all tests of that class. If you have top level variables in your class, they must\nbe thread safe."),(0,o.kt)("h3",{id:"isolate-safety-hatch"},"@Isolate Safety Hatch"),(0,o.kt)("p",null,"It is common to have many tests that are safe to run concurrently, while having some tests that must run in isolation.\nKotest supports this through the ",(0,o.kt)("inlineCode",{parentName:"p"},"@Isolate")," annotation at the spec level."),(0,o.kt)("p",null,"Any specs annotated with this will always run sequentially, after all other specs (those not annotated) have finished."),(0,o.kt)("h3",{id:"multiple-threads"},"Multiple Threads"),(0,o.kt)("p",null,"The second feature Kotest offers for concurrency is the ability to take advantage of multiple cores.\nWhen running in a multi-core environment, more than one spec could be executing in parallel."),(0,o.kt)("p",null,"Kotest supports this through the ",(0,o.kt)("inlineCode",{parentName:"p"},"parallelism")," configuration setting or the ",(0,o.kt)("inlineCode",{parentName:"p"},"kotest.framework.parallelism")," system property."),(0,o.kt)("p",null,"By default, the value is set to 1 so that the test engine would use a single thread for the entire test run.\nWhen we set this flag to a value greater than 1, multiple threads will be created for executing tests."),(0,o.kt)("p",null,"For example, setting this to K will (subject to caveats around blocking tests) allow up to K tests to be executing in parallel."),(0,o.kt)("p",null,"This setting has no effect on Javascript tests."),(0,o.kt)("p",null,'!!! note "Thread stickiness"\nWhen using multiple threads, all the tests of a particular spec (and the associated lifecycle callbacks) are guaranteed to be executed in the same thread.\nIn other words, different threads are only used across different specs.'),(0,o.kt)("p",null,'!!! tip "Blocking calls"\nSetting this value higher than the number of cores offers a benefit if you are testing code that is using\nblocking calls and you are unable to move the calls onto another dispatcher.'),(0,o.kt)("p",null,"!!! note\nSetting parallelism > 1 automatically enables ",(0,o.kt)("inlineCode",{parentName:"p"},"Spec")," concurrency mode unless another concurrency mode is set explicitly."))}d.isMDXComponent=!0}}]);