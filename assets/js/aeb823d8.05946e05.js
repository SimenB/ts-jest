"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([[3790],{2403:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"getting-started/options/isolatedModules","title":"Isolated Modules option","description":"By default ts-jest uses TypeScript compiler in the context of a project (yours), with full type-checking and features.","source":"@site/versioned_docs/version-29.2/getting-started/options/isolatedModules.md","sourceDirName":"getting-started/options","slug":"/getting-started/options/isolatedModules","permalink":"/ts-jest/docs/29.2/getting-started/options/isolatedModules","draft":false,"unlisted":false,"editUrl":"https://github.com/kulshekhar/ts-jest/edit/main/website/versioned_docs/version-29.2/getting-started/options/isolatedModules.md","tags":[],"version":"29.2","lastUpdatedBy":"ahnpnl","lastUpdatedAt":1744315729000,"frontMatter":{"title":"Isolated Modules option"}}');var a=s(4848),r=s(8453),o=s(1470),l=s(9365);const i={title:"Isolated Modules option"},c=void 0,u={},d=[{value:"Example",id:"example",level:3},{value:"Performance",id:"performance",level:2},{value:"Example",id:"example-1",level:3},{value:"Caveats",id:"caveats",level:2}];function h(e){const t={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["By default ",(0,a.jsx)(t.code,{children:"ts-jest"})," uses TypeScript compiler in the context of a project (yours), with full type-checking and features.\nBut it can also be used to compile each file separately, what TypeScript calls an 'isolated module'.\nThat's what the ",(0,a.jsx)(t.code,{children:"isolatedModules"})," option (which defaults to ",(0,a.jsx)(t.code,{children:"false"}),") does."]}),"\n",(0,a.jsxs)(t.p,{children:["You'll lose type-checking ability and some features such as ",(0,a.jsx)(t.code,{children:"const enum"}),", but in the case you plan on using Jest with the cache disabled (",(0,a.jsx)(t.code,{children:"jest --no-cache"}),"), your tests will then run much faster."]}),"\n",(0,a.jsx)(t.p,{children:"Here is how to disable type-checking and compile each file as an isolated module:"}),"\n",(0,a.jsx)(t.h3,{id:"example",children:"Example"}),"\n",(0,a.jsxs)(o.A,{groupId:"code-examples",children:[(0,a.jsx)(l.A,{value:"js",label:"JavaScript",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",metastring:"tab",children:"// jest.config.js\n/** @type {import('ts-jest').JestConfigWithTsJest} */\nmodule.exports = {\n  // [...]\n  transform: {\n    // '^.+\\\\.[tj]sx?$' to process ts,js,tsx,jsx with `ts-jest`\n    // '^.+\\\\.m?[tj]sx?$' to process ts,js,tsx,jsx,mts,mjs,mtsx,mjsx with `ts-jest`\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        isolatedModules: true,\n      },\n    ],\n  },\n}\n"})})}),(0,a.jsx)(l.A,{value:"ts",label:"TypeScript",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",metastring:"tab",children:"// jest.config.ts\nimport type { JestConfigWithTsJest } from 'ts-jest'\n\nconst jestConfig: JestConfigWithTsJest = {\n  // [...]\n  transform: {\n    // '^.+\\\\.[tj]sx?$' to process js/ts with `ts-jest`\n    // '^.+\\\\.m?[tj]sx?$' to process js/ts/mjs/mts with `ts-jest`\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        isolatedModules: true,\n      },\n    ],\n  },\n}\n\nexport default jestConfig\n"})})}),(0,a.jsx)(l.A,{value:"JSON",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-JSON",metastring:"tab",children:'// package.json\n{\n  // [...]\n  "jest": {\n    "transform": {\n    // \'^.+\\\\.[tj]sx?$\' to process js/ts with `ts-jest`\n      // \'^.+\\\\.m?[tj]sx?$\' to process js/ts/mjs/mts with `ts-jest`\n      "^.+\\\\.tsx?$": [\n        "ts-jest",\n        {\n          "isolatedModules": true\n        }\n      ]\n    }\n  }\n}\n'})})})]}),"\n",(0,a.jsx)(t.h2,{id:"performance",children:"Performance"}),"\n",(0,a.jsxs)(t.p,{children:["Using ",(0,a.jsx)(t.code,{children:"isolatedModules: false"})," comes with a cost of performance comparing to ",(0,a.jsx)(t.code,{children:"isolatedModules: true"}),". There is a way\nto improve the performance when using this mode by changing the value of ",(0,a.jsx)(t.code,{children:"include"})," in ",(0,a.jsx)(t.code,{children:"tsconfig"})," which is used by ",(0,a.jsx)(t.code,{children:"ts-jest"}),".\nThe least amount of files which are provided in ",(0,a.jsx)(t.code,{children:"include"}),", the more performance the test run can gain."]}),"\n",(0,a.jsx)(t.h3,{id:"example-1",children:"Example"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-json",children:'// tsconfig.json\n{\n  // ...other configs\n  "include": ["my-typings/*", "my-global-modules/*"]\n}\n'})}),"\n",(0,a.jsx)(t.h2,{id:"caveats",children:"Caveats"}),"\n",(0,a.jsxs)(t.p,{children:["Limiting the amount of files loaded via ",(0,a.jsx)(t.code,{children:"include"})," can greatly boost performance when running tests. However, the trade off\nis ",(0,a.jsx)(t.code,{children:"ts-jest"})," might not recognize all files which are intended to use with ",(0,a.jsx)(t.code,{children:"jest"}),". One can run into issues with custom typings,\nglobal modules, etc..."]}),"\n",(0,a.jsxs)(t.p,{children:["The suggested solution is what is needed for the test environment should be captured by\nglob patterns in ",(0,a.jsx)(t.code,{children:"include"}),", to gain both performance boost and avoid breaking behaviors."]})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},9365:(e,t,s)=>{s.d(t,{A:()=>o});s(6540);var n=s(4164);const a={tabItem:"tabItem_Ymn6"};var r=s(4848);function o(e){let{children:t,hidden:s,className:o}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,n.A)(a.tabItem,o),hidden:s,children:t})}},1470:(e,t,s)=>{s.d(t,{A:()=>w});var n=s(6540),a=s(4164),r=s(3104),o=s(6347),l=s(205),i=s(7485),c=s(1682),u=s(679);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:s}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:s,attributes:n,default:a}}=e;return{value:t,label:s,attributes:n,default:a}}))}(s);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,s])}function p(e){let{value:t,tabValues:s}=e;return s.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:s}=e;const a=(0,o.W6)(),r=function(e){let{queryString:t=!1,groupId:s}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:t,groupId:s});return[(0,i.aZ)(r),(0,n.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})}),[r,a])]}function f(e){const{defaultValue:t,queryString:s=!1,groupId:a}=e,r=h(e),[o,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=s.find((e=>e.default))??s[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[c,d]=m({queryString:s,groupId:a}),[f,j]=function(e){let{groupId:t}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,r]=(0,u.Dv)(s);return[a,(0,n.useCallback)((e=>{s&&r.set(e)}),[s,r])]}({groupId:a}),g=(()=>{const e=c??f;return p({value:e,tabValues:r})?e:null})();(0,l.A)((()=>{g&&i(g)}),[g]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),j(e)}),[d,j,r]),tabValues:r}}var j=s(2303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=s(4848);function x(e){let{className:t,block:s,selectedValue:n,selectValue:o,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),u=e=>{const t=e.currentTarget,s=i.indexOf(t),a=l[s].value;a!==n&&(c(t),o(a))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const s=i.indexOf(e.currentTarget)+1;t=i[s]??i[0];break}case"ArrowLeft":{const s=i.indexOf(e.currentTarget)-1;t=i[s]??i[i.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":s},t),children:l.map((e=>{let{value:t,label:s,attributes:r}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>{i.push(e)},onKeyDown:d,onClick:u,...r,className:(0,a.A)("tabs__item",g.tabItem,r?.className,{"tabs__item--active":n===t}),children:s??t},t)}))})}function v(e){let{lazy:t,children:s,selectedValue:r}=e;const o=(Array.isArray(s)?s:[s]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function y(e){const t=f(e);return(0,b.jsxs)("div",{className:(0,a.A)("tabs-container",g.tabList),children:[(0,b.jsx)(x,{...t,...e}),(0,b.jsx)(v,{...t,...e})]})}function w(e){const t=(0,j.A)();return(0,b.jsx)(y,{...e,children:d(e.children)},String(t))}},8453:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>l});var n=s(6540);const a={},r=n.createContext(a);function o(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);