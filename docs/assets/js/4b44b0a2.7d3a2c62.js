"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[9672],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var a=o.createContext({}),s=function(e){var t=o.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=s(e.components);return o.createElement(a.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(r),f=n,d=p["".concat(a,".").concat(f)]||p[f]||m[f]||i;return r?o.createElement(d,c(c({ref:t},l),{},{components:r})):o.createElement(d,c({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=p;var u={};for(var a in t)hasOwnProperty.call(t,a)&&(u[a]=t[a]);u.originalType=e,u.mdxType="string"==typeof e?e:n,c[1]=u;for(var s=2;s<i;s++)c[s]=r[s];return o.createElement.apply(null,c)}return o.createElement.apply(null,r)}p.displayName="MDXCreateElement"},83052:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return a},default:function(){return f},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return m}});var o=r(87462),n=r(63366),i=(r(67294),r(3905)),c=["components"],u={id:"project_timeout",title:"Project Timeout",slug:"project-timeouts.html",sidebar_label:"Project Timeout"},a=void 0,s={unversionedId:"framework/timeouts/project_timeout",id:"version-5.2/framework/timeouts/project_timeout",title:"Project Timeout",description:"Kotest supports a project level timeout.",source:"@site/versioned_docs/version-5.2/framework/timeouts/project_timeout.md",sourceDirName:"framework/timeouts",slug:"/framework/timeouts/project-timeouts.html",permalink:"/docs/5.2/framework/timeouts/project-timeouts.html",editUrl:"https://github.com/kotest/kotest/blob/master/documentation/versioned_docs/version-5.2/framework/timeouts/project_timeout.md",tags:[],version:"5.2",frontMatter:{id:"project_timeout",title:"Project Timeout",slug:"project-timeouts.html",sidebar_label:"Project Timeout"},sidebar:"framework",previous:{title:"Test Timeouts",permalink:"/docs/5.2/framework/timeouts/test-timeouts.html"},next:{title:"Blocking Tests",permalink:"/docs/5.2/framework/timeouts/blocking-tests.html"}},l={},m=[],p={toc:m};function f(e){var t=e.components,r=(0,n.Z)(e,c);return(0,i.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Kotest supports a project level timeout.\nThis timeout applies to all tests in a module and includes the setup/teardown time of every spec/test in the module."),(0,i.kt)("p",null,"To enable this, we can use ",(0,i.kt)("a",{parentName:"p",href:"/docs/5.2/framework/project-config.html"},"ProjectConfig"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"class ProjectConfig : AbstractProjectConfig() {\n  override val projectTimeout: Duration = 10.minutes\n}\n")),(0,i.kt)("p",null,"In the above example, we have specified a project timeout of 10 minutes. All specs and tests must complete within\nthat 10 minute period or the build will fail."))}f.isMDXComponent=!0}}]);