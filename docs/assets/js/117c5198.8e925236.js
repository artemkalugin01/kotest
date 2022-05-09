"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[3271],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),p=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(a.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=p(n),m=o,d=f["".concat(a,".").concat(m)]||f[m]||u[m]||i;return n?r.createElement(d,c(c({ref:t},l),{},{components:n})):r.createElement(d,c({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=f;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s.mdxType="string"==typeof e?e:o,c[1]=s;for(var p=2;p<i;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},62416:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return a},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),c=["components"],s={id:"exceptions",title:"Testing Exceptions",sidebar_label:"Exceptions",slug:"exceptions.html"},a=void 0,p={unversionedId:"framework/exceptions",id:"version-5.3/framework/exceptions",title:"Testing Exceptions",description:"Testing for exceptions is easy with Kotest:",source:"@site/versioned_docs/version-5.3/framework/exceptions.md",sourceDirName:"framework",slug:"/framework/exceptions.html",permalink:"/docs/framework/exceptions.html",editUrl:"https://github.com/kotest/kotest/blob/master/documentation/versioned_docs/version-5.3/framework/exceptions.md",tags:[],version:"5.3",frontMatter:{id:"exceptions",title:"Testing Exceptions",sidebar_label:"Exceptions",slug:"exceptions.html"},sidebar:"framework",previous:{title:"Coroutine Debugging",permalink:"/docs/framework/coroutines/coroutine-debugging.html"},next:{title:"Introduction",permalink:"/docs/framework/datatesting/data-driven-testing.html"}},l={},u=[],f={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Testing for ",(0,i.kt)("a",{parentName:"p",href:"https://kotest.io/docs/assertions/exceptions.html"},"exceptions")," is easy with Kotest:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'val exception = shouldThrow<IllegalAccessException> {\n   // code in here that you expect to throw an IllegalAccessException\n}\nexception.message should startWith("Something went wrong")\n')))}m.isMDXComponent=!0}}]);