"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[8791],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=l(n),m=o,d=f["".concat(p,".").concat(m)]||f[m]||u[m]||i;return n?r.createElement(d,a(a({ref:t},c),{},{components:n})):r.createElement(d,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},14062:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],s={id:"proptestconfig",title:"Configuration",slug:"property-test-config.html"},p=void 0,l={unversionedId:"proptest/proptestconfig",id:"version-5.2/proptest/proptestconfig",title:"Configuration",description:"Configuration",source:"@site/versioned_docs/version-5.2/proptest/config.md",sourceDirName:"proptest",slug:"/proptest/property-test-config.html",permalink:"/docs/5.2/proptest/property-test-config.html",editUrl:"https://github.com/kotest/kotest/blob/master/documentation/versioned_docs/version-5.2/proptest/config.md",tags:[],version:"5.2",frontMatter:{id:"proptestconfig",title:"Configuration",slug:"property-test-config.html"},sidebar:"proptest",previous:{title:"Generator Operations",permalink:"/docs/5.2/proptest/generator-operations.html"},next:{title:"Custom Generators",permalink:"/docs/5.2/proptest/custom-generators.html"}},c={},u=[{value:"Configuration",id:"configuration",level:2},{value:"Seed",id:"seed",level:3},{value:"Min Failure",id:"min-failure",level:3},{value:"PropTestListener",id:"proptestlistener",level:3}],f={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"Kotest provides for the  ability to specify some configuration options when running a property test. We do this by passing\nin an instance of ",(0,i.kt)("inlineCode",{parentName:"p"},"PropTestConfig")," to the test methods."),(0,i.kt)("p",null,"For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'class PropertyExample: StringSpec({\n   "String size" {\n      forAll<String, String>(PropTestConfig(options here...)) { a,b ->\n         (a + b).length == a.length + b.length\n      }\n   }\n})\n')),(0,i.kt)("h3",{id:"seed"},"Seed"),(0,i.kt)("p",null,"The most common configuration option is specifying the seed for the random instance. This is used when you want to\nreliably create the same values each time the test is run. You might want to do this if you find a test failure,\nand you want to ensure that that particular set of values continues to be executed in the future as a kind of regression\ntest."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Whenever a property test fails, Kotest will output the seed that was used. You can duplicate the test, setting it to use\nthis seed so you have permanent regression test for those values."))),(0,i.kt)("p",null,"For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'class PropertyExample: StringSpec({\n   "String size" {\n      forAll<String, String>(PropTestConfig(seed = 127305235)) { a,b ->\n         (a + b).length == a.length + b.length\n      }\n   }\n})\n')),(0,i.kt)("h3",{id:"min-failure"},"Min Failure"),(0,i.kt)("p",null,"By default, Kotest tolerates no failure. Perhaps you want to run some non-deterministic test a bunch of times, and you're happy\nto accept some small number of failures. You can specify that in config."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'class PropertyExample: StringSpec({\n   "some flakey test" {\n      forAll<String, String>(PropTestConfig(maxFailure = 3)) { a,b ->\n         // max of 3 inputs can fail\n      }\n   }\n})\n')),(0,i.kt)("h3",{id:"proptestlistener"},"PropTestListener"),(0,i.kt)("p",null,"Sometimes in property test it is required to perform some setup and tear down in each iteration of test.\nFor this purpose you can register a ",(0,i.kt)("inlineCode",{parentName:"p"},"PropTestListener")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"PropTestConfig"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'class PropertyExample: StringSpec({\n   "some property test which require setup and tear down in each iteration" {\n      forAll<String, String>(PropTestConfig(listeners = listOf(MyPropTestListener))) { a,b ->\n         // some assertion\n      }\n   }\n})\n')))}m.isMDXComponent=!0}}]);