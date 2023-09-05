"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8691],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=u(r),d=a,m=c["".concat(p,".").concat(d)]||c[d]||f[d]||o;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5639:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const o={id:"return-values",title:"ReturnValues",slug:"../../api-reference/options/return-values"},i=void 0,l={unversionedId:"api_reference/options/return-values",id:"api_reference/options/return-values",title:"ReturnValues",description:"ReturnValues enum specifies what data will be returned after the write request.",source:"@site/docs/api_reference/options/return-values.md",sourceDirName:"api_reference/options",slug:"/api-reference/options/return-values",permalink:"/EfficientDynamoDb/docs/api-reference/options/return-values",draft:!1,editUrl:"https://github.com/alloczero/EfficientDynamoDb/edit/main/website/docs/api_reference/options/return-values.md",tags:[],version:"current",frontMatter:{id:"return-values",title:"ReturnValues",slug:"../../api-reference/options/return-values"},sidebar:"someSidebar",previous:{title:"Select Mode",permalink:"/EfficientDynamoDb/docs/api-reference/options/select-mode"},next:{title:"UpdateItem",permalink:"/EfficientDynamoDb/docs/api-reference/update-item"}},p={},u=[],s={toc:u},c="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ReturnValues")," enum specifies what data will be returned after the write request."),(0,a.kt)("p",null,"The subset of supported ",(0,a.kt)("inlineCode",{parentName:"p"},"ReturnValues")," values is different for every write operation.\nRefer to the API reference page of the operation or the AWS docs to see which values are supported in your case."),(0,a.kt)("p",null,"All possible values are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"None"),": No values are returned in the response."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"AllOld"),": Returns all of the attributes of the item, as they appeared before the operation."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"UpdatedOld"),": Returns only the updated attributes, as they appeared before the operation."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"AllNew"),": Returns all of the attributes of the item, as they appear after the operation."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"UpdatedNew"),": Returns only the updated attributes, as they appear after the operation.")))}f.isMDXComponent=!0}}]);