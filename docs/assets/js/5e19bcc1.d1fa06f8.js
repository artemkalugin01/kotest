"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[2844],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},71057:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],s={id:"junit_xml",title:"JUnit XML Format Reporter",sidebar_label:"JUnit XML",slug:"junit_xml.html"},l=void 0,c={unversionedId:"extensions/junit_xml",id:"version-5.2/extensions/junit_xml",title:"JUnit XML Format Reporter",description:"Latest Release",source:"@site/versioned_docs/version-5.2/extensions/junit_xml.md",sourceDirName:"extensions",slug:"/extensions/junit_xml.html",permalink:"/docs/5.2/extensions/junit_xml.html",editUrl:"https://github.com/kotest/kotest/blob/master/documentation/versioned_docs/version-5.2/extensions/junit_xml.md",tags:[],version:"5.2",frontMatter:{id:"junit_xml",title:"JUnit XML Format Reporter",sidebar_label:"JUnit XML",slug:"junit_xml.html"},sidebar:"extensions",previous:{title:"MockServer",permalink:"/docs/5.2/extensions/mockserver.html"},next:{title:"HTML Reporter",permalink:"/docs/5.2/extensions/html_reporter.html"}},u={},p=[{value:"Parameters",id:"parameters",level:3}],m={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://search.maven.org/artifact/io.kotest/kotest-extensions-junitxml"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/maven-central/v/io.kotest/kotest-extensions-junitxml",alt:"Latest Release"}))),(0,a.kt)("p",null,"JUnit includes an XML report generator that it calls\nthe ",(0,a.kt)("a",{parentName:"p",href:"https://junit.org/junit5/docs/5.5.0-RC2/api/org/junit/platform/reporting/legacy/xml/LegacyXmlReportGeneratingListener.html"},"legacy xml report"),"\n. Many tools integrate with this format so it is very useful. However, this report has no concept of nesting tests.\nTherefore when used with a nested ",(0,a.kt)("a",{parentName:"p",href:"/docs/5.2/framework/testing-styles.html"},"test style")," in Kotest, it will include parent tests as\norphans."),(0,a.kt)("p",null,"To solve this, Kotest has it's own implementation of the same format, that is configurable on whether to include parent\ntests and/or collapse the names."),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"The following module is needed: ",(0,a.kt)("inlineCode",{parentName:"p"},"io.kotest:kotest-extensions-junitxml")," in your build. Search maven central for latest version ",(0,a.kt)("a",{parentName:"p",href:"https://search.maven.org/search?q=kotest-extensions-junitxml"},"here"),"."))),(0,a.kt)("p",null,"To configure in your project, you need to add the ",(0,a.kt)("inlineCode",{parentName:"p"},"JunitXmlReporter")," using ",(0,a.kt)("a",{parentName:"p",href:"/docs/5.2/framework/project-config.html"},"project config"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"class MyConfig : AbstractProjectConfig() {\n  override fun extensions(): List<Extension> = listOf(\n    JunitXmlReporter(\n      includeContainers = false,\n      useTestPathAsName = true\n    )\n  )\n}\n")),(0,a.kt)("p",null,"Additionally, the reporter needs to know where your build output folder is by setting a system property.\nGradle also needs to know that it should not generate JUnit XML reports by itself.\nWe configure that in the tests block in gradle."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'tasks.named<Test>("test") {\n  useJUnitPlatform()\n  reports {\n    junitXml.required.set(false)\n  }\n  systemProperty("gradle.build.dir", project.buildDir)\n}\n')),(0,a.kt)("h3",{id:"parameters"},"Parameters"),(0,a.kt)("p",null,"The reporter has two parameters:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"includeContainers")," when true, all intermediate tests are included in the report as tests in their own right. Defaults\nto false."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"useTestPathAsName")," when true, the full test path will be used as the name. In other words the name will include the\nname of any parent tests as a single string.")))}d.isMDXComponent=!0}}]);