"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([["5138"],{3137:function(e,t,n){n.r(t),n.d(t,{default:()=>m,frontMatter:()=>i,metadata:()=>s,assets:()=>u,toc:()=>p,contentTitle:()=>c});var s=JSON.parse('{"id":"getting-started/options/compiler","title":"Compiler option","description":"The compiler option allows you to define the compiler to be used. It\'ll be used to load the NodeJS module holding the TypeScript compiler.","source":"@site/versioned_docs/version-29.2/getting-started/options/compiler.md","sourceDirName":"getting-started/options","slug":"/getting-started/options/compiler","permalink":"/ts-jest/docs/29.2/getting-started/options/compiler","draft":false,"unlisted":false,"editUrl":"https://github.com/kulshekhar/ts-jest/edit/main/website/versioned_docs/version-29.2/getting-started/options/compiler.md","tags":[],"version":"29.2","lastUpdatedBy":"renovate[bot]","lastUpdatedAt":1744958977000,"frontMatter":{"title":"Compiler option"}}'),r=n("5893"),o=n("65"),a=n("7902"),l=n("5525");let i={title:"Compiler option"},c=void 0,u={},p=[{value:"Example",id:"example",level:3}];function d(e){let t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"compiler"})," option allows you to define the compiler to be used. It'll be used to load the NodeJS module holding the TypeScript compiler."]}),"\n",(0,r.jsxs)(t.p,{children:["The default value is ",(0,r.jsx)(t.code,{children:"typescript"}),", which will load the original ",(0,r.jsx)(t.a,{href:"https://www.npmjs.com/package/typescript",children:"TypeScript compiler module"}),".\nThe loaded version will depend on the one installed in your project."]}),"\n",(0,r.jsxs)(t.p,{children:["If you use a custom compiler, such as ",(0,r.jsx)(t.code,{children:"ttypescript"}),", make sure its API is the same as the original TypeScript, at least for what ",(0,r.jsx)(t.code,{children:"ts-jest"})," is using."]}),"\n",(0,r.jsx)(t.h3,{id:"example",children:"Example"}),"\n",(0,r.jsxs)(a.Z,{groupId:"code-examples",children:[(0,r.jsx)(l.Z,{value:"js",label:"JavaScript",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",metastring:"tab",children:"// jest.config.js\n/** @type {import('ts-jest').JestConfigWithTsJest} */\nmodule.exports = {\n  // [...]\n  transform: {\n    // '^.+\\\\.[tj]sx?$' to process ts,js,tsx,jsx with `ts-jest`\n    // '^.+\\\\.m?[tj]sx?$' to process ts,js,tsx,jsx,mts,mjs,mtsx,mjsx with `ts-jest`\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        compiler: 'ttypescript',\n      },\n    ],\n  },\n}\n"})})}),(0,r.jsx)(l.Z,{value:"ts",label:"TypeScript",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:"tab",children:"// jest.config.ts\nimport type { JestConfigWithTsJest } from 'ts-jest'\n\nconst jestConfig: JestConfigWithTsJest = {\n  // [...]\n  transform: {\n    // '^.+\\\\.[tj]sx?$' to process ts,js,tsx,jsx with `ts-jest`\n    // '^.+\\\\.m?[tj]sx?$' to process ts,js,tsx,jsx,mts,mjs,mtsx,mjsx with `ts-jest`\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        compiler: 'ttypescript',\n      },\n    ],\n  },\n}\n\nexport default jestConfig\n"})})}),(0,r.jsx)(l.Z,{value:"JSON",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-JSON",metastring:"tab",children:'// package.json\n{\n  // [...]\n  "jest": {\n    "transform": {\n      // \'^.+\\\\.[tj]sx?$\' to process ts,js,tsx,jsx with `ts-jest`\n      // \'^.+\\\\.m?[tj]sx?$\' to process ts,js,tsx,jsx,mts,mjs,mtsx,mjsx with `ts-jest`\n      "^.+\\\\.tsx?$": [\n        "ts-jest",\n        {\n          "compiler": "ttypescript"\n        }\n      ]\n    }\n  }\n}\n'})})})]})]})}function m(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},5525:function(e,t,n){n.d(t,{Z:()=>o});var s=n("5893");n("7294");var r=n("7026");function o(e){let{children:t,hidden:n,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)("tabItem_Ymn6",o),hidden:n,children:t})}},7902:function(e,t,n){n.d(t,{Z:()=>g});var s=n("5893"),r=n("7294"),o=n("7026"),a=n("9599"),l=n("6550"),i=n("2000"),c=n("4520"),u=n("8341"),p=n("6009");function d(e){return r.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||r.isValidElement(e)&&function(e){let{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function m(e){let{value:t,tabValues:n}=e;return n.some(e=>e.value===t)}var h=n("7227");function f(e){let{className:t,block:n,selectedValue:r,selectValue:l,tabValues:i}=e,c=[],{blockElementScrollPositionUntilNextRender:u}=(0,a.o5)(),p=e=>{let t=e.currentTarget,n=i[c.indexOf(t)].value;n!==r&&(u(t),l(n))},d=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{let n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{let n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1]}}t?.focus()};return(0,s.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t),children:i.map(e=>{let{value:t,label:n,attributes:a}=e;return(0,s.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>{c.push(e)},onKeyDown:d,onClick:p,...a,className:(0,o.Z)("tabs__item","tabItem_LNqP",a?.className,{"tabs__item--active":r===t}),children:n??t},t)})})}function j(e){let{lazy:t,children:n,selectedValue:a}=e,l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){let e=l.find(e=>e.props.value===a);return e?(0,r.cloneElement)(e,{className:(0,o.Z)("margin-top--md",e.props.className)}):null}return(0,s.jsx)("div",{className:"margin-top--md",children:l.map((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))})}function x(e){let t=function(e){let{defaultValue:t,queryString:n=!1,groupId:s}=e,o=function(e){let{values:t,children:n}=e;return(0,r.useMemo)(()=>{let e=t??d(n).map(e=>{let{props:{value:t,label:n,attributes:s,default:r}}=e;return{value:t,label:n,attributes:s,default:r}});return!function(e){let t=(0,u.lx)(e,(e,t)=>e.value===t.value);if(t.length>0)throw Error(`Docusaurus error: Duplicate values "${t.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[t,n])}(e),[a,h]=(0,r.useState)(()=>(function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}let s=n.find(e=>e.default)??n[0];if(!s)throw Error("Unexpected error: 0 tabValues");return s.value})({defaultValue:t,tabValues:o})),[f,j]=function(e){let{queryString:t=!1,groupId:n}=e,s=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c._X)(o),(0,r.useCallback)(e=>{if(!o)return;let t=new URLSearchParams(s.location.search);t.set(o,e),s.replace({...s.location,search:t.toString()})},[o,s])]}({queryString:n,groupId:s}),[x,g]=function(e){let{groupId:t}=e,n=t?`docusaurus.tab.${t}`:null,[s,o]=(0,p.Nk)(n);return[s,(0,r.useCallback)(e=>{n&&o.set(e)},[n,o])]}({groupId:s}),v=(()=>{let e=f??x;return m({value:e,tabValues:o})?e:null})();return(0,i.Z)(()=>{v&&h(v)},[v]),{selectedValue:a,selectValue:(0,r.useCallback)(e=>{if(!m({value:e,tabValues:o}))throw Error(`Can't select invalid tab value=${e}`);h(e),j(e),g(e)},[j,g,o]),tabValues:o}}(e);return(0,s.jsxs)("div",{className:(0,o.Z)("tabs-container","tabList__CuJ"),children:[(0,s.jsx)(f,{...t,...e}),(0,s.jsx)(j,{...t,...e})]})}function g(e){let t=(0,h.Z)();return(0,s.jsx)(x,{...e,children:d(e.children)},String(t))}},65:function(e,t,n){n.d(t,{Z:function(){return l},a:function(){return a}});var s=n(7294);let r={},o=s.createContext(r);function a(e){let t=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);