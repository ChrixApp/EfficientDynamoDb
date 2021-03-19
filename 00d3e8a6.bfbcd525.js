(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{118:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return y}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),b=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=b(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=b(r),u=n,y=p["".concat(o,".").concat(u)]||p[u]||d[u]||i;return r?a.a.createElement(y,l(l({ref:t},s),{},{components:r})):a.a.createElement(y,l({ref:t},s))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},73:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(7),i=(r(0),r(118)),o={id:"retry-strategies",title:"Retry Strategies",slug:"../dev-guide/retry-strategies"},l={unversionedId:"dev_guide/retry-strategies",id:"dev_guide/retry-strategies",isDocsHomePage:!1,title:"Retry Strategies",description:"Why do you need retries",source:"@site/docs/dev_guide/retry-strategies.md",slug:"/dev-guide/retry-strategies",permalink:"/EfficientDynamoDb/docs/dev-guide/retry-strategies",editUrl:"https://github.com/alloczero/EfficientDynamoDb/edit/master/website/docs/dev_guide/retry-strategies.md",version:"current",sidebar:"someSidebar",previous:{title:"Low-Level API",permalink:"/EfficientDynamoDb/docs/dev-guide/low-level"},next:{title:"RegionEndpoint",permalink:"/EfficientDynamoDb/docs/api-reference/region-endpoint"}},c=[{value:"Why do you need retries",id:"why-do-you-need-retries",children:[]},{value:"Retries in EfficientDynamoDb",id:"retries-in-efficientdynamodb",children:[]},{value:"Default retry strategies",id:"default-retry-strategies",children:[{value:"DefaultRetryStrategy",id:"defaultretrystrategy",children:[]},{value:"ExponentialBackoffRetryStrategy",id:"exponentialbackoffretrystrategy",children:[]},{value:"JitteredExponentialBackoffRetryStrategy",id:"jitteredexponentialbackoffretrystrategy",children:[]}]},{value:"Implementing custom retry strategy",id:"implementing-custom-retry-strategy",children:[{value:"Best practices",id:"best-practices",children:[]}]}],s={toc:c};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"why-do-you-need-retries"},"Why do you need retries"),Object(i.b)("p",null,"When working with DynamoDB, you may face errors that can be solved by retrying the operation.\nRate limiting happens often and is considered a ",Object(i.b)("em",{parentName:"p"},"normal (to some degree)")," behavior that should be handled appropriately."),Object(i.b)("h2",{id:"retries-in-efficientdynamodb"},"Retries in EfficientDynamoDb"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"EfficientDynamoDb")," aims to simplify retries so that you don't have to handle them in your business layer.\nYou can specify a desired ",Object(i.b)("inlineCode",{parentName:"p"},"RetryStrategy")," for every retriable issue that may happen while interacting with DynamoDB."),Object(i.b)("p",null,"EfficientDynamoDb supports retries for the following errors:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"InternalServerErrorStrategy")," - Internal server error happened on AWS."),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"LimitExceededStrategy")," - There are too many concurrent control plane operations.\nThe cumulative number of tables and indexes in the ",Object(i.b)("inlineCode",{parentName:"li"},"CREATING"),", ",Object(i.b)("inlineCode",{parentName:"li"},"DELETING"),", or ",Object(i.b)("inlineCode",{parentName:"li"},"UPDATING")," state cannot exceed 50."),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"ProvisionedThroughputExceededStrategy")," - Maximum allowed provisioned throughput for a table or for one or more global secondary indexes was exceeded."),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"RequestLimitExceededStrategy")," - Throughput exceeds the current throughput limit for the account."),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"ServiceUnavailableStrategy")," - DynamoDB is currently unavailable. (This should be a temporary state.)"),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"ThrottlingStrategy")," - Control plane API operations are performed too rapidly.")),Object(i.b)("p",null,"You're free to select any predefined strategy for every error or create your behavior for retries.\nMore info about creating own retry policies is in ",Object(i.b)("a",{parentName:"p",href:"#implementing-custom-retry-strategy"},"this section")),Object(i.b)("h2",{id:"default-retry-strategies"},"Default retry strategies"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"EfficientDynamoDb")," package contains predefined retry strategies that are most common and suit most DynamoDB users."),Object(i.b)("h3",{id:"defaultretrystrategy"},"DefaultRetryStrategy"),Object(i.b)("p",null,"The most simple retry policy. It retries 5 times with 50ms delays between attempts."),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://github.com/AllocZero/EfficientDynamoDb/blob/master/src/EfficientDynamoDb/Configs/Retries/DefaultRetryStrategy.cs"},"Sources")),Object(i.b)("h3",{id:"exponentialbackoffretrystrategy"},"ExponentialBackoffRetryStrategy"),Object(i.b)("p",null,"Work in progress"),Object(i.b)("h3",{id:"jitteredexponentialbackoffretrystrategy"},"JitteredExponentialBackoffRetryStrategy"),Object(i.b)("p",null,"Work in progress"),Object(i.b)("h2",{id:"implementing-custom-retry-strategy"},"Implementing custom retry strategy"),Object(i.b)("p",null,"All retry strategies must implement the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/AllocZero/EfficientDynamoDb/blob/master/src/EfficientDynamoDb/Configs/Retries/IRetryStrategy.cs"},"IRetryStrategy")," interface.\nIt contains a single ",Object(i.b)("inlineCode",{parentName:"p"},"bool TryGetRetryDelay(int attempt, out TimeSpan delay)")," method to calculate the actual delay required for the specified retry attempt."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Parameters:")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"int attempt")," - 0-based index of the retry attempt.\nE.g., for the first retry value of ",Object(i.b)("inlineCode",{parentName:"li"},"attempt")," is ",Object(i.b)("inlineCode",{parentName:"li"},"0"),", and for the 3rd retry, it is ",Object(i.b)("inlineCode",{parentName:"li"},"2"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"out TimeSpan delay")," - out parameter that contains a calculated delay for the specified attempt.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"false")," if retry shouldn't happen, e.g., when the maximum number of retries is reached. Otherwise, return ",Object(i.b)("inlineCode",{parentName:"p"},"true"),"."),Object(i.b)("h3",{id:"best-practices"},"Best practices"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Make sure your strategy implementation is thread-safe if you share it across different retriable issues."),Object(i.b)("li",{parentName:"ol"},"Try to keep the strategy simple to avoid performance degradations due to complex calculations combined with frequent retries.")))}b.isMDXComponent=!0}}]);