"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[9783],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return c}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(n),c=r,g=m["".concat(o,".").concat(c)]||m[c]||d[c]||l;return n?a.createElement(g,i(i({ref:t},u),{},{components:n})):a.createElement(g,i({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},70015:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return o},default:function(){return c},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],s={id:"tags",title:"Grouping Tests with Tags",slug:"tags.html",sidebar_label:"Grouping Tests"},o=void 0,p={unversionedId:"framework/tags",id:"version-5.2/framework/tags",title:"Grouping Tests with Tags",description:"Sometimes you don't want to run all tests and Kotest provides tags to be able to determine which",source:"@site/versioned_docs/version-5.2/framework/tags.md",sourceDirName:"framework",slug:"/framework/tags.html",permalink:"/docs/5.2/framework/tags.html",editUrl:"https://github.com/kotest/kotest/blob/master/documentation/versioned_docs/version-5.2/framework/tags.md",tags:[],version:"5.2",frontMatter:{id:"tags",title:"Grouping Tests with Tags",slug:"tags.html",sidebar_label:"Grouping Tests"},sidebar:"framework",previous:{title:"Test Ordering",permalink:"/docs/5.2/framework/test-ordering.html"},next:{title:"Closing resources automatically",permalink:"/docs/5.2/framework/autoclose.html"}},u={},d=[{value:"Marking Tests",id:"marking-tests",level:2},{value:"Running with Tags",id:"running-with-tags",level:2},{value:"Tag Expression Operators",id:"tag-expression-operators",level:2},{value:"Tagging All Tests",id:"tagging-all-tests",level:2},{value:"Tagging a Spec",id:"tagging-a-spec",level:2},{value:"Gradle",id:"gradle",level:2}],m={toc:d};function c(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Sometimes you don't want to run all tests and Kotest provides tags to be able to determine which\ntests are executed at runtime. Tags are objects inheriting from ",(0,l.kt)("inlineCode",{parentName:"p"},"io.kotest.core.Tag"),"."),(0,l.kt)("p",null,"For example, to group tests by operating system you could define the following tags:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"object Linux : Tag()\nobject Windows: Tag()\n")),(0,l.kt)("p",null,"Alternatively, tags can be defined using the ",(0,l.kt)("inlineCode",{parentName:"p"},"NamedTag")," class. When using this class, observe the following rules:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"A tag must not be null or blank."),(0,l.kt)("li",{parentName:"ul"},"A tag must not contain whitespace."),(0,l.kt)("li",{parentName:"ul"},"A tag must not contain ISO control characters."),(0,l.kt)("li",{parentName:"ul"},"A tag must not contain any of the following characters:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"!: exclamation mark"),(0,l.kt)("li",{parentName:"ul"},"(: left paren"),(0,l.kt)("li",{parentName:"ul"},"): right paren"),(0,l.kt)("li",{parentName:"ul"},"&: ampersand"),(0,l.kt)("li",{parentName:"ul"},"|: pipe")))),(0,l.kt)("p",null,"For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'val tag = NamedTag("Linux")\n')),(0,l.kt)("h2",{id:"marking-tests"},"Marking Tests"),(0,l.kt)("p",null,"Test cases can then be marked with tags using the ",(0,l.kt)("inlineCode",{parentName:"p"},"config")," function:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'import io.kotest.specs.StringSpec\n\nclass MyTest : StringSpec() {\n  init {\n    "should run on Windows".config(tags = setOf(Windows)) {\n      // ...\n    }\n\n    "should run on Linux".config(tags = setOf(Linux)) {\n      // ...\n    }\n\n    "should run on Windows and Linux".config(tags = setOf(Windows, Linux)) {\n      // ...\n    }\n  }\n}\n')),(0,l.kt)("h2",{id:"running-with-tags"},"Running with Tags"),(0,l.kt)("p",null,"Then by invoking the test runner with a system property of ",(0,l.kt)("inlineCode",{parentName:"p"},"kotest.tags")," you can control which tests are run. The expression to be\npassed in is a simple boolean expression using boolean operators: ",(0,l.kt)("inlineCode",{parentName:"p"},"&"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"|"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"!"),", with parenthesis for association."),(0,l.kt)("p",null,"For example, ",(0,l.kt)("inlineCode",{parentName:"p"},"Tag1 & (Tag2 | Tag3)")),(0,l.kt)("p",null,"Provide the simple names of tag object (without package) when you run the tests.\nPlease pay attention to the use of upper case and lower case! If two tag objects have the same simple name (in different name spaces) they are treated as the same tag."),(0,l.kt)("p",null,"Example: To run only test tagged with ",(0,l.kt)("inlineCode",{parentName:"p"},"Linux"),", but not tagged with ",(0,l.kt)("inlineCode",{parentName:"p"},"Database"),", you would invoke\nGradle like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'gradle test -Dkotest.tags="Linux & !Database"\n')),(0,l.kt)("p",null,"Tags can also be included/excluded in runtime (for example, if you're running a project configuration instead of properties) through the ",(0,l.kt)("inlineCode",{parentName:"p"},"RuntimeTagExtension"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'RuntimeTagExpressionExtension.expression = "Linux & !Database"\n')),(0,l.kt)("h2",{id:"tag-expression-operators"},"Tag Expression Operators"),(0,l.kt)("p",null,"Operators (in descending order of precedence)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Operator"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"!"),(0,l.kt)("td",{parentName:"tr",align:null},"not"),(0,l.kt)("td",{parentName:"tr",align:null},"!macos")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"&"),(0,l.kt)("td",{parentName:"tr",align:null},"and"),(0,l.kt)("td",{parentName:"tr",align:null},"linux & integration")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"|"),(0,l.kt)("td",{parentName:"tr",align:null},"or"),(0,l.kt)("td",{parentName:"tr",align:null},"windows ","|"," microservice")))),(0,l.kt)("h2",{id:"tagging-all-tests"},"Tagging All Tests"),(0,l.kt)("p",null,"You can add a tag to all tests in a spec using the tags function in the spec itself. For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'class MyTestClass : FunSpec({\n\n  tags(Linux, Mysql)\n\n  test("my test") { } // automatically marked with the above tags\n})\n')),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"When tagging tests in this way, the spec class will still need to be instantiated in order to examine the tags on each test, because the test itself may define further tags."))),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"If no root tests are active at runtime, the ",(0,l.kt)("a",{parentName:"p",href:"/docs/5.2/framework/lifecycle-hooks.html"},"beforeSpec")," and ",(0,l.kt)("a",{parentName:"p",href:"/docs/5.2/framework/lifecycle-hooks.html"},"afterSpec")," callbacks will ",(0,l.kt)("em",{parentName:"p"},"not")," be invoked."))),(0,l.kt)("h2",{id:"tagging-a-spec"},"Tagging a Spec"),(0,l.kt)("p",null,"There are two annotations you can add to a spec class itself - @Tags and @RequiresTag - which accept one or more tag names as their arguments."),(0,l.kt)("p",null,"The first tag - @Tags - will be applied to all tests in the class, however this will only stop a spec from being instantiated if we can guarantee\nthat no tests would be executed (because a tag is being explicitly excluded)."),(0,l.kt)("p",null,"Consider the following example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'@Tags("Linux")\nclass MyTestClass : FunSpec({\n\n  tags(UnitTest)\n\n  beforeSpec { println("Before") }\n\n  test("A").config(tags = setOf(Mysql)) {}\n  test("B").config(tags = setOf(Postgres)) {}\n  test("C") {}\n})\n')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Runtime Tags"),(0,l.kt)("th",{parentName:"tr",align:null},"Spec Created"),(0,l.kt)("th",{parentName:"tr",align:null},"Callbacks"),(0,l.kt)("th",{parentName:"tr",align:null},"Outcome"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"kotest.tags=Linux"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"A, B, C are executed because all tests inherit the ",(0,l.kt)("inlineCode",{parentName:"td"},"Linux")," tag from the annotation")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"kotest.tags=Linux & Mysql"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"A is executed only because all tests have the ",(0,l.kt)("inlineCode",{parentName:"td"},"Linux")," tag, but only A has the ",(0,l.kt)("inlineCode",{parentName:"td"},"Mysql")," tag")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"kotest.tags=!Linux"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"No tests are executed, and the MyTestClass is not instantiated because we can exclude it based on the tags annotation")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"kotest.tags=!UnitTest"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"No tests are executed because all tests inherit ",(0,l.kt)("inlineCode",{parentName:"td"},"UnitTest")," from the tags function. MyTestClass is instantiated in order to retrieve the tags defined in the class. The beforeSpec callback is not executed because there are no active tests.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"kotest.tags=Mysql"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"A is executed only, because that is the only test marked with ",(0,l.kt)("inlineCode",{parentName:"td"},"Mysql"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"kotest.tags=!Mysql"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"B, C are executed only, because A is excluded by being marked with ",(0,l.kt)("inlineCode",{parentName:"td"},"Mysql"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"kotest.tags=Linux & !Mysql"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"B, C are executed only, because all tests inherit ",(0,l.kt)("inlineCode",{parentName:"td"},"Linux")," from the annotation, but A is excluded by the ",(0,l.kt)("inlineCode",{parentName:"td"},"Mysql")," tag")))),(0,l.kt)("p",null,"The second tag - @RequiresTag - only checks that all the referenced tags are present and if not, will skip the spec."),(0,l.kt)("p",null,"For example, the following spec would be skipped and not instantiated unless the Linux and Mysql tags were\nspecified at runtime."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'@RequireTags("Linux", "Mysql")\nclass MyTestClass : FunSpec()\n')),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},'Note that when you use these annotations you pass the tag string name, not the tag itself. This is due to Kotlin annotations only allow "primitive" arguments'))),(0,l.kt)("h2",{id:"gradle"},"Gradle"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Special attention is needed in your gradle configuration")),(0,l.kt)("p",null,"To use System Properties (-Dx=y), your gradle must be configured to propagate them to the test executors, and an extra configuration must be added to your tests:"),(0,l.kt)("p",null,"Groovy:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-groovy"},"test {\n    //... Other configurations ...\n    systemProperties = System.properties\n}\n")),(0,l.kt)("p",null,"Kotlin Gradle DSL:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"val test by tasks.getting(Test::class) {\n    // ... Other configurations ...\n    systemProperties = System.getProperties().associate { it.key.toString() to it.value }\n}\n")),(0,l.kt)("p",null,"This will guarantee that the system property is correctly read by the JVM."))}c.isMDXComponent=!0}}]);