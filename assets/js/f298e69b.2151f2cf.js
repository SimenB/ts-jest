"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([["4930"],{5858:function(e,t,n){n.r(t),n.d(t,{default:()=>p,frontMatter:()=>i,metadata:()=>s,assets:()=>u,toc:()=>d,contentTitle:()=>c});var s=JSON.parse('{"id":"getting-started/options/isolatedModules","title":"Isolated Modules option","description":"By default ts-jest uses TypeScript compiler in the context of a project (yours), with full type-checking and features.","source":"@site/versioned_docs/version-29.0/getting-started/options/isolatedModules.md","sourceDirName":"getting-started/options","slug":"/getting-started/options/isolatedModules","permalink":"/ts-jest/docs/29.0/getting-started/options/isolatedModules","draft":false,"unlisted":false,"editUrl":"https://github.com/kulshekhar/ts-jest/edit/main/website/versioned_docs/version-29.0/getting-started/options/isolatedModules.md","tags":[],"version":"29.0","lastUpdatedBy":"dependabot[bot]","lastUpdatedAt":1744874816000,"frontMatter":{"title":"Isolated Modules option"}}'),r=n("5893"),o=n("65"),a=n("7902"),l=n("5525");let i={title:"Isolated Modules option"},c=void 0,u={},d=[{value:"Example",id:"example",level:3},{value:"Performance",id:"performance",level:2},{value:"Example",id:"example-1",level:3},{value:"Caveats",id:"caveats",level:2}];function h(e){let t={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["By default ",(0,r.jsx)(t.code,{children:"ts-jest"})," uses TypeScript compiler in the context of a project (yours), with full type-checking and features.\nBut it can also be used to compile each file separately, what TypeScript calls an 'isolated module'.\nThat's what the ",(0,r.jsx)(t.code,{children:"isolatedModules"})," option (which defaults to ",(0,r.jsx)(t.code,{children:"false"}),") does."]}),"\n",(0,r.jsxs)(t.p,{children:["You'll lose type-checking ability and some features such as ",(0,r.jsx)(t.code,{children:"const enum"}),", but in the case you plan on using Jest with the cache disabled (",(0,r.jsx)(t.code,{children:"jest --no-cache"}),"), your tests will then run much faster."]}),"\n",(0,r.jsx)(t.p,{children:"Here is how to disable type-checking and compile each file as an isolated module:"}),"\n",(0,r.jsx)(t.h3,{id:"example",children:"Example"}),"\n",(0,r.jsxs)(a.Z,{groupId:"code-examples",children:[(0,r.jsx)(l.Z,{value:"js",label:"JavaScript",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",metastring:"tab",children:"// jest.config.js\n/** @type {import('ts-jest').JestConfigWithTsJest} */\nmodule.exports = {\n  // [...]\n  transform: {\n    // '^.+\\\\.[tj]sx?$' to process ts,js,tsx,jsx with `ts-jest`\n    // '^.+\\\\.m?[tj]sx?$' to process ts,js,tsx,jsx,mts,mjs,mtsx,mjsx with `ts-jest`\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        isolatedModules: true,\n      },\n    ],\n  },\n}\n"})})}),(0,r.jsx)(l.Z,{value:"ts",label:"TypeScript",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:"tab",children:"// jest.config.ts\nimport type { JestConfigWithTsJest } from 'ts-jest'\n\nconst jestConfig: JestConfigWithTsJest = {\n  // [...]\n  transform: {\n    // '^.+\\\\.[tj]sx?$' to process js/ts with `ts-jest`\n    // '^.+\\\\.m?[tj]sx?$' to process js/ts/mjs/mts with `ts-jest`\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        isolatedModules: true,\n      },\n    ],\n  },\n}\n\nexport default jestConfig\n"})})}),(0,r.jsx)(l.Z,{value:"JSON",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-JSON",metastring:"tab",children:'// package.json\n{\n  // [...]\n  "jest": {\n    "transform": {\n    // \'^.+\\\\.[tj]sx?$\' to process js/ts with `ts-jest`\n      // \'^.+\\\\.m?[tj]sx?$\' to process js/ts/mjs/mts with `ts-jest`\n      "^.+\\\\.tsx?$": [\n        "ts-jest",\n        {\n          "isolatedModules": true\n        }\n      ]\n    }\n  }\n}\n'})})})]}),"\n",(0,r.jsx)(t.h2,{id:"performance",children:"Performance"}),"\n",(0,r.jsxs)(t.p,{children:["Using ",(0,r.jsx)(t.code,{children:"isolatedModules: false"})," comes with a cost of performance comparing to ",(0,r.jsx)(t.code,{children:"isolatedModules: true"}),". There is a way\nto improve the performance when using this mode by changing the value of ",(0,r.jsx)(t.code,{children:"include"})," in ",(0,r.jsx)(t.code,{children:"tsconfig"})," which is used by ",(0,r.jsx)(t.code,{children:"ts-jest"}),".\nThe least amount of files which are provided in ",(0,r.jsx)(t.code,{children:"include"}),", the more performance the test run can gain."]}),"\n",(0,r.jsx)(t.h3,{id:"example-1",children:"Example"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'// tsconfig.json\n{\n  // ...other configs\n  "include": ["my-typings/*", "my-global-modules/*"]\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"caveats",children:"Caveats"}),"\n",(0,r.jsxs)(t.p,{children:["Limiting the amount of files loaded via ",(0,r.jsx)(t.code,{children:"include"})," can greatly boost performance when running tests. However, the trade off\nis ",(0,r.jsx)(t.code,{children:"ts-jest"})," might not recognize all files which are intended to use with ",(0,r.jsx)(t.code,{children:"jest"}),". One can run into issues with custom typings,\nglobal modules, etc..."]}),"\n",(0,r.jsxs)(t.p,{children:["The suggested solution is what is needed for the test environment should be captured by\nglob patterns in ",(0,r.jsx)(t.code,{children:"include"}),", to gain both performance boost and avoid breaking behaviors."]})]})}function p(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},5525:function(e,t,n){n.d(t,{Z:()=>o});var s=n("5893");n("7294");var r=n("7026");function o(e){let{children:t,hidden:n,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)("tabItem_Ymn6",o),hidden:n,children:t})}},7902:function(e,t,n){n.d(t,{Z:()=>g});var s=n("5893"),r=n("7294"),o=n("7026"),a=n("9599"),l=n("6550"),i=n("2000"),c=n("4520"),u=n("8341"),d=n("6009");function h(e){return r.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||r.isValidElement(e)&&function(e){let{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function p(e){let{value:t,tabValues:n}=e;return n.some(e=>e.value===t)}var f=n("7227");function m(e){let{className:t,block:n,selectedValue:r,selectValue:l,tabValues:i}=e,c=[],{blockElementScrollPositionUntilNextRender:u}=(0,a.o5)(),d=e=>{let t=e.currentTarget,n=i[c.indexOf(t)].value;n!==r&&(u(t),l(n))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{let n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1]}}t?.focus()};return(0,s.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t),children:i.map(e=>{let{value:t,label:n,attributes:a}=e;return(0,s.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>{c.push(e)},onKeyDown:h,onClick:d,...a,className:(0,o.Z)("tabs__item","tabItem_LNqP",a?.className,{"tabs__item--active":r===t}),children:n??t},t)})})}function j(e){let{lazy:t,children:n,selectedValue:a}=e,l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){let e=l.find(e=>e.props.value===a);return e?(0,r.cloneElement)(e,{className:(0,o.Z)("margin-top--md",e.props.className)}):null}return(0,s.jsx)("div",{className:"margin-top--md",children:l.map((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))})}function x(e){let t=function(e){let{defaultValue:t,queryString:n=!1,groupId:s}=e,o=function(e){let{values:t,children:n}=e;return(0,r.useMemo)(()=>{let e=t??h(n).map(e=>{let{props:{value:t,label:n,attributes:s,default:r}}=e;return{value:t,label:n,attributes:s,default:r}});return!function(e){let t=(0,u.lx)(e,(e,t)=>e.value===t.value);if(t.length>0)throw Error(`Docusaurus error: Duplicate values "${t.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[t,n])}(e),[a,f]=(0,r.useState)(()=>(function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}let s=n.find(e=>e.default)??n[0];if(!s)throw Error("Unexpected error: 0 tabValues");return s.value})({defaultValue:t,tabValues:o})),[m,j]=function(e){let{queryString:t=!1,groupId:n}=e,s=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c._X)(o),(0,r.useCallback)(e=>{if(!o)return;let t=new URLSearchParams(s.location.search);t.set(o,e),s.replace({...s.location,search:t.toString()})},[o,s])]}({queryString:n,groupId:s}),[x,g]=function(e){let{groupId:t}=e,n=t?`docusaurus.tab.${t}`:null,[s,o]=(0,d.Nk)(n);return[s,(0,r.useCallback)(e=>{n&&o.set(e)},[n,o])]}({groupId:s}),v=(()=>{let e=m??x;return p({value:e,tabValues:o})?e:null})();return(0,i.Z)(()=>{v&&f(v)},[v]),{selectedValue:a,selectValue:(0,r.useCallback)(e=>{if(!p({value:e,tabValues:o}))throw Error(`Can't select invalid tab value=${e}`);f(e),j(e),g(e)},[j,g,o]),tabValues:o}}(e);return(0,s.jsxs)("div",{className:(0,o.Z)("tabs-container","tabList__CuJ"),children:[(0,s.jsx)(m,{...t,...e}),(0,s.jsx)(j,{...t,...e})]})}function g(e){let t=(0,f.Z)();return(0,s.jsx)(x,{...e,children:h(e.children)},String(t))}},65:function(e,t,n){n.d(t,{Z:function(){return l},a:function(){return a}});var s=n(7294);let r={},o=s.createContext(r);function a(e){let t=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);