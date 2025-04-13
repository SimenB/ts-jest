"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([["6027"],{6739:function(t,e,s){s.r(e),s.d(e,{default:()=>p,frontMatter:()=>l,metadata:()=>n,assets:()=>u,toc:()=>d,contentTitle:()=>c});var n=JSON.parse('{"id":"getting-started/options/tsconfig","title":"TypeScript Config option","description":"The tsconfig option allows you to define which tsconfig JSON file to use. An inline compiler options object can also be specified instead of a file path.","source":"@site/versioned_docs/version-29.0/getting-started/options/tsconfig.md","sourceDirName":"getting-started/options","slug":"/getting-started/options/tsconfig","permalink":"/ts-jest/docs/29.0/getting-started/options/tsconfig","draft":false,"unlisted":false,"editUrl":"https://github.com/kulshekhar/ts-jest/edit/main/website/versioned_docs/version-29.0/getting-started/options/tsconfig.md","tags":[],"version":"29.0","lastUpdatedBy":"ahnpnl","lastUpdatedAt":1744529341000,"frontMatter":{"title":"TypeScript Config option"}}'),o=s("5893"),r=s("65"),i=s("7902"),a=s("5525");let l={title:"TypeScript Config option"},c=void 0,u={},d=[{value:"Examples",id:"examples",level:3},{value:"Path to a <code>tsconfig</code> file",id:"path-to-a-tsconfig-file",level:4},{value:"Inline compiler options",id:"inline-compiler-options",level:4},{value:"Disable auto-lookup",id:"disable-auto-lookup",level:4}];function j(t){let e={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.a)(),...t.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(e.p,{children:["The ",(0,o.jsx)(e.code,{children:"tsconfig"})," option allows you to define which ",(0,o.jsx)(e.code,{children:"tsconfig"})," JSON file to use. An inline ",(0,o.jsx)(e.a,{href:"https://www.typescriptlang.org/docs/handbook/compiler-options.html#compiler-options",children:"compiler options"})," object can also be specified instead of a file path."]}),"\n",(0,o.jsxs)(e.p,{children:["By default ",(0,o.jsx)(e.code,{children:"ts-jest"})," will try to find a ",(0,o.jsx)(e.code,{children:"tsconfig.json"})," in your project. If it cannot find one, it will use the default TypeScript ",(0,o.jsx)(e.a,{href:"https://www.typescriptlang.org/docs/handbook/compiler-options.html#compiler-options",children:"compiler options"}),"; except, ",(0,o.jsx)(e.code,{children:"ES2015"})," is used as ",(0,o.jsx)(e.code,{children:"target"})," instead of ",(0,o.jsx)(e.code,{children:"ES5"}),"."]}),"\n",(0,o.jsxs)(e.p,{children:["If you need to use defaults and force ",(0,o.jsx)(e.code,{children:"ts-jest"})," to use the defaults even if there is a ",(0,o.jsx)(e.code,{children:"tsconfig.json"})," in your project, you can set this option to ",(0,o.jsx)(e.code,{children:"false"}),"."]}),"\n",(0,o.jsx)(e.h3,{id:"examples",children:"Examples"}),"\n",(0,o.jsxs)(e.h4,{id:"path-to-a-tsconfig-file",children:["Path to a ",(0,o.jsx)(e.code,{children:"tsconfig"})," file"]}),"\n",(0,o.jsxs)(e.p,{children:["The path should be relative to the current working directory where you start Jest from. You can also use ",(0,o.jsx)(e.code,{children:"<rootDir>"})," in the path to start from the project root dir."]}),"\n",(0,o.jsxs)(i.Z,{groupId:"code-examples",children:[(0,o.jsx)(a.Z,{value:"js",label:"JavaScript",children:(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-js",metastring:"tab",children:"// jest.config.js\n/** @type {import('ts-jest').JestConfigWithTsJest} */\nmodule.exports = {\n  // [...]\n  transform: {\n    // '^.+\\\\.[tj]sx?$' to process ts,js,tsx,jsx with `ts-jest`\n    // '^.+\\\\.m?[tj]sx?$' to process ts,js,tsx,jsx,mts,mjs,mtsx,mjsx with `ts-jest`\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        tsconfig: 'tsconfig.test.json',\n      },\n    ],\n  },\n}\n"})})}),(0,o.jsx)(a.Z,{value:"ts",label:"TypeScript",children:(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-ts",metastring:"tab",children:"// jest.config.ts\nimport type { JestConfigWithTsJest } from 'ts-jest'\n\nconst jestConfig: JestConfigWithTsJest = {\n  // [...]\n  transform: {\n    // '^.+\\\\.[tj]sx?$' to process ts,js,tsx,jsx with `ts-jest`\n    // '^.+\\\\.m?[tj]sx?$' to process ts,js,tsx,jsx,mts,mjs,mtsx,mjsx with `ts-jest`\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        tsconfig: 'tsconfig.test.json',\n      },\n    ],\n  },\n}\n\nexport default jestConfig\n"})})}),(0,o.jsx)(a.Z,{value:"JSON",children:(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-JSON",metastring:"tab",children:'// package.json\n{\n  // [...]\n  "jest": {\n    "transform": {\n      // \'^.+\\\\.[tj]sx?$\' to process ts,js,tsx,jsx with `ts-jest`\n      // \'^.+\\\\.m?[tj]sx?$\' to process ts,js,tsx,jsx,mts,mjs,mtsx,mjsx with `ts-jest`\n      "^.+\\\\.tsx?$": [\n        "ts-jest",\n        {\n          "tsconfig": "tsconfig.test.json"\n        }\n      ]\n    }\n  }\n}\n'})})})]}),"\n",(0,o.jsx)(e.h4,{id:"inline-compiler-options",children:"Inline compiler options"}),"\n",(0,o.jsxs)(e.p,{children:["Refer to the TypeScript ",(0,o.jsx)(e.a,{href:"https://www.typescriptlang.org/docs/handbook/compiler-options.html#compiler-options",children:"compiler options"})," for reference.\nIt's basically the same object you'd put in your ",(0,o.jsx)(e.code,{children:"tsconfig.json"}),"'s ",(0,o.jsx)(e.code,{children:"compilerOptions"}),"."]}),"\n",(0,o.jsxs)(i.Z,{groupId:"code-examples",children:[(0,o.jsx)(a.Z,{value:"js",label:"JavaScript",children:(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-js",metastring:"tab",children:"// jest.config.js\n/** @type {import('ts-jest').JestConfigWithTsJest} */\nmodule.exports = {\n  // [...]\n  transform: {\n    // '^.+\\\\.[tj]sx?$' to process ts,js,tsx,jsx with `ts-jest`\n    // '^.+\\\\.m?[tj]sx?$' to process ts,js,tsx,jsx,mts,mjs,mtsx,mjsx with `ts-jest`\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        tsconfig: {\n          importHelpers: true,\n        },\n      },\n    ],\n  },\n}\n"})})}),(0,o.jsx)(a.Z,{value:"ts",label:"TypeScript",children:(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-ts",metastring:"tab",children:"// jest.config.ts\nimport type { JestConfigWithTsJest } from 'ts-jest'\n\nconst jestConfig: JestConfigWithTsJest = {\n  // [...]\n  transform: {\n    // '^.+\\\\.[tj]sx?$' to process ts,js,tsx,jsx with `ts-jest`\n    // '^.+\\\\.m?[tj]sx?$' to process ts,js,tsx,jsx,mts,mjs,mtsx,mjsx with `ts-jest`\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        tsconfig: {\n          importHelpers: true,\n        },\n      },\n    ],\n  },\n}\n\nexport default jestConfig\n"})})}),(0,o.jsx)(a.Z,{value:"JSON",children:(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-JSON",metastring:"tab",children:'// package.json\n{\n  // [...]\n  "jest": {\n    "transform": {\n      // \'^.+\\\\.[tj]sx?$\' to process ts,js,tsx,jsx with `ts-jest`\n      // \'^.+\\\\.m?[tj]sx?$\' to process ts,js,tsx,jsx,mts,mjs,mtsx,mjsx with `ts-jest`\n      "^.+\\\\.tsx?$": [\n        "ts-jest",\n        {\n          "tsconfig": {\n            "importHelpers": true\n          }\n        }\n      ]\n    }\n  }\n}\n'})})})]}),"\n",(0,o.jsx)(e.h4,{id:"disable-auto-lookup",children:"Disable auto-lookup"}),"\n",(0,o.jsxs)(e.p,{children:["By default ",(0,o.jsx)(e.code,{children:"ts-jest"})," will try to find a ",(0,o.jsx)(e.code,{children:"tsconfig.json"})," in your project. But you may not want to use it at all and keep TypeScript default options. You can achieve this by setting ",(0,o.jsx)(e.code,{children:"tsconfig"})," to ",(0,o.jsx)(e.code,{children:"false"}),"."]}),"\n",(0,o.jsxs)(i.Z,{groupId:"code-examples",children:[(0,o.jsx)(a.Z,{value:"js",label:"JavaScript",children:(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-js",metastring:"tab",children:"// jest.config.js\n/** @type {import('ts-jest').JestConfigWithTsJest} */\nmodule.exports = {\n  // [...]\n  transform: {\n    // '^.+\\\\.[tj]sx?$' to process ts,js,tsx,jsx with `ts-jest`\n    // '^.+\\\\.m?[tj]sx?$' to process ts,js,tsx,jsx,mts,mjs,mtsx,mjsx with `ts-jest`\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        tsconfig: false,\n      },\n    ],\n  },\n}\n"})})}),(0,o.jsx)(a.Z,{value:"ts",label:"TypeScript",children:(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-ts",metastring:"tab",children:"// jest.config.ts\nimport type { JestConfigWithTsJest } from 'ts-jest'\n\nconst jestConfig: JestConfigWithTsJest = {\n  // [...]\n  transform: {\n    // '^.+\\\\.[tj]sx?$' to process ts,js,tsx,jsx with `ts-jest`\n    // '^.+\\\\.m?[tj]sx?$' to process ts,js,tsx,jsx,mts,mjs,mtsx,mjsx with `ts-jest`\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        tsconfig: false,\n      },\n    ],\n  },\n}\n\nexport default jestConfig\n"})})}),(0,o.jsx)(a.Z,{value:"JSON",children:(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-JSON",metastring:"tab",children:'// package.json\n{\n  // [...]\n  "jest": {\n    "transform": {\n      // \'^.+\\\\.[tj]sx?$\' to process ts,js,tsx,jsx with `ts-jest`\n      // \'^.+\\\\.m?[tj]sx?$\' to process ts,js,tsx,jsx,mts,mjs,mtsx,mjsx with `ts-jest`\n      "^.+\\\\.tsx?$": [\n        "ts-jest",\n        {\n          "tsconfig": {\n            "tsconfig": false\n          }\n        }\n      ]\n    }\n  }\n}\n'})})})]})]})}function p(t={}){let{wrapper:e}={...(0,r.a)(),...t.components};return e?(0,o.jsx)(e,{...t,children:(0,o.jsx)(j,{...t})}):j(t)}},5525:function(t,e,s){s.d(e,{Z:()=>r});var n=s("5893");s("7294");var o=s("7026");function r(t){let{children:e,hidden:s,className:r}=t;return(0,n.jsx)("div",{role:"tabpanel",className:(0,o.Z)("tabItem_Ymn6",r),hidden:s,children:e})}},7902:function(t,e,s){s.d(e,{Z:()=>g});var n=s("5893"),o=s("7294"),r=s("7026"),i=s("9599"),a=s("6550"),l=s("2000"),c=s("4520"),u=s("8341"),d=s("6009");function j(t){return o.Children.toArray(t).filter(t=>"\n"!==t).map(t=>{if(!t||o.isValidElement(t)&&function(t){let{props:e}=t;return!!e&&"object"==typeof e&&"value"in e}(t))return t;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function p(t){let{value:e,tabValues:s}=t;return s.some(t=>t.value===e)}var h=s("7227");function f(t){let{className:e,block:s,selectedValue:o,selectValue:a,tabValues:l}=t,c=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.o5)(),d=t=>{let e=t.currentTarget,s=l[c.indexOf(e)].value;s!==o&&(u(e),a(s))},j=t=>{let e=null;switch(t.key){case"Enter":d(t);break;case"ArrowRight":{let s=c.indexOf(t.currentTarget)+1;e=c[s]??c[0];break}case"ArrowLeft":{let s=c.indexOf(t.currentTarget)-1;e=c[s]??c[c.length-1]}}e?.focus()};return(0,n.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":s},e),children:l.map(t=>{let{value:e,label:s,attributes:i}=t;return(0,n.jsx)("li",{role:"tab",tabIndex:o===e?0:-1,"aria-selected":o===e,ref:t=>{c.push(t)},onKeyDown:j,onClick:d,...i,className:(0,r.Z)("tabs__item","tabItem_LNqP",i?.className,{"tabs__item--active":o===e}),children:s??e},e)})})}function x(t){let{lazy:e,children:s,selectedValue:i}=t,a=(Array.isArray(s)?s:[s]).filter(Boolean);if(e){let t=a.find(t=>t.props.value===i);return t?(0,o.cloneElement)(t,{className:(0,r.Z)("margin-top--md",t.props.className)}):null}return(0,n.jsx)("div",{className:"margin-top--md",children:a.map((t,e)=>(0,o.cloneElement)(t,{key:e,hidden:t.props.value!==i}))})}function m(t){let e=function(t){let{defaultValue:e,queryString:s=!1,groupId:n}=t,r=function(t){let{values:e,children:s}=t;return(0,o.useMemo)(()=>{let t=e??j(s).map(t=>{let{props:{value:e,label:s,attributes:n,default:o}}=t;return{value:e,label:s,attributes:n,default:o}});return!function(t){let e=(0,u.lx)(t,(t,e)=>t.value===e.value);if(e.length>0)throw Error(`Docusaurus error: Duplicate values "${e.map(t=>t.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(t),t},[e,s])}(t),[i,h]=(0,o.useState)(()=>(function(t){let{defaultValue:e,tabValues:s}=t;if(0===s.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!p({value:e,tabValues:s}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${s.map(t=>t.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}let n=s.find(t=>t.default)??s[0];if(!n)throw Error("Unexpected error: 0 tabValues");return n.value})({defaultValue:e,tabValues:r})),[f,x]=function(t){let{queryString:e=!1,groupId:s}=t,n=(0,a.k6)(),r=function(t){let{queryString:e=!1,groupId:s}=t;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!s)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:e,groupId:s});return[(0,c._X)(r),(0,o.useCallback)(t=>{if(!r)return;let e=new URLSearchParams(n.location.search);e.set(r,t),n.replace({...n.location,search:e.toString()})},[r,n])]}({queryString:s,groupId:n}),[m,g]=function(t){let{groupId:e}=t,s=e?`docusaurus.tab.${e}`:null,[n,r]=(0,d.Nk)(s);return[n,(0,o.useCallback)(t=>{s&&r.set(t)},[s,r])]}({groupId:n}),b=(()=>{let t=f??m;return p({value:t,tabValues:r})?t:null})();return(0,l.Z)(()=>{b&&h(b)},[b]),{selectedValue:i,selectValue:(0,o.useCallback)(t=>{if(!p({value:t,tabValues:r}))throw Error(`Can't select invalid tab value=${t}`);h(t),x(t),g(t)},[x,g,r]),tabValues:r}}(t);return(0,n.jsxs)("div",{className:(0,r.Z)("tabs-container","tabList__CuJ"),children:[(0,n.jsx)(f,{...e,...t}),(0,n.jsx)(x,{...e,...t})]})}function g(t){let e=(0,h.Z)();return(0,n.jsx)(m,{...t,children:j(t.children)},String(e))}},65:function(t,e,s){s.d(e,{Z:function(){return a},a:function(){return i}});var n=s(7294);let o={},r=n.createContext(o);function i(t){let e=n.useContext(r);return n.useMemo(function(){return"function"==typeof t?t(e):{...e,...t}},[e,t])}function a(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(o):t.components||o:i(t.components),n.createElement(r.Provider,{value:e},t.children)}}}]);