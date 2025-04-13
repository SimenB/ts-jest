"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([["9035"],{3455:function(e,s,t){t.r(s),t.d(s,{default:()=>x,frontMatter:()=>o,metadata:()=>r,assets:()=>a,toc:()=>j,contentTitle:()=>d});var r=JSON.parse('{"id":"getting-started/presets","title":"Presets","description":"The presets","source":"@site/versioned_docs/version-29.0/getting-started/presets.md","sourceDirName":"getting-started","slug":"/getting-started/presets","permalink":"/ts-jest/docs/29.0/getting-started/presets","draft":false,"unlisted":false,"editUrl":"https://github.com/kulshekhar/ts-jest/edit/main/website/versioned_docs/version-29.0/getting-started/presets.md","tags":[],"version":"29.0","lastUpdatedBy":"renovate[bot]","lastUpdatedAt":1744541888000,"frontMatter":{"id":"presets","title":"Presets"},"sidebar":"version-29.0-docs","previous":{"title":"Installation","permalink":"/ts-jest/docs/29.0/getting-started/installation"},"next":{"title":"Options","permalink":"/ts-jest/docs/29.0/getting-started/options"}}'),n=t("5893"),i=t("65"),l=t("7902"),c=t("5525");let o={id:"presets",title:"Presets"},d=void 0,a={},j=[{value:"The presets",id:"the-presets",level:3},{value:"Basic usage",id:"basic-usage",level:3},{value:"Advanced",id:"advanced",level:3}];function h(e){let s={admonition:"admonition",code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h3,{id:"the-presets",children:"The presets"}),"\n",(0,n.jsx)(s.admonition,{type:"important",children:(0,n.jsxs)(s.p,{children:["Starting from ",(0,n.jsx)(s.strong,{children:"v28.0.0"}),", ",(0,n.jsx)(s.code,{children:"ts-jest"})," will gradually opt in adoption of ",(0,n.jsx)(s.code,{children:"esbuild"}),"/",(0,n.jsx)(s.code,{children:"swc"})," more to improve the performance. To make the transition smoothly, we introduce ",(0,n.jsx)(s.code,{children:"legacy"})," presets as a fallback when the new codes don't work yet."]})}),"\n",(0,n.jsx)(s.admonition,{type:"caution",children:(0,n.jsxs)(s.p,{children:["If you are using custom ",(0,n.jsx)(s.code,{children:"transform"})," config, please remove ",(0,n.jsx)(s.code,{children:"preset"})," from your Jest config to avoid issues that Jest doesn't transform files correctly."]})}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"ts-jest"})," comes with several presets, covering most of the project's base configuration:"]}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Preset name"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.code,{children:"ts-jest/presets/default"}),(0,n.jsx)("br",{}),"or ",(0,n.jsx)(s.code,{children:"ts-jest"})]}),(0,n.jsxs)(s.td,{children:["TypeScript files (",(0,n.jsx)(s.code,{children:".ts"}),", ",(0,n.jsx)(s.code,{children:".tsx"}),") will be transformed by ",(0,n.jsx)(s.code,{children:"ts-jest"})," to ",(0,n.jsx)(s.strong,{children:"CommonJS"})," syntax, leaving JavaScript files (",(0,n.jsx)(s.code,{children:".js"}),", ",(0,n.jsx)(s.code,{children:"jsx"}),") as-is."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.code,{children:"ts-jest/presets/default-legacy"}),(0,n.jsx)("br",{}),"or ",(0,n.jsx)(s.code,{children:"ts-jest/legacy"})," (",(0,n.jsx)(s.strong,{children:"LEGACY"}),")"]}),(0,n.jsxs)(s.td,{children:["TypeScript files (",(0,n.jsx)(s.code,{children:".ts"}),", ",(0,n.jsx)(s.code,{children:".tsx"}),") will be transformed by ",(0,n.jsx)(s.code,{children:"ts-jest"})," to ",(0,n.jsx)(s.strong,{children:"CommonJS"})," syntax, leaving JavaScript files (",(0,n.jsx)(s.code,{children:".js"}),", ",(0,n.jsx)(s.code,{children:"jsx"}),") as-is."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.code,{children:"ts-jest/presets/default-esm"}),(0,n.jsx)("br",{})]}),(0,n.jsxs)(s.td,{children:["TypeScript files (",(0,n.jsx)(s.code,{children:".ts"}),", ",(0,n.jsx)(s.code,{children:".tsx"}),") will be transformed by ",(0,n.jsx)(s.code,{children:"ts-jest"})," to ",(0,n.jsx)(s.strong,{children:"ESM"})," syntax, leaving JavaScript files (",(0,n.jsx)(s.code,{children:".js"}),", ",(0,n.jsx)(s.code,{children:"jsx"}),") as-is."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.code,{children:"ts-jest/presets/default-esm-legacy"}),(0,n.jsx)("br",{})," (",(0,n.jsx)(s.strong,{children:"LEGACY"}),")"]}),(0,n.jsxs)(s.td,{children:["TypeScript files (",(0,n.jsx)(s.code,{children:".ts"}),", ",(0,n.jsx)(s.code,{children:".tsx"}),") will be transformed by ",(0,n.jsx)(s.code,{children:"ts-jest"})," to ",(0,n.jsx)(s.strong,{children:"ESM"})," syntax, leaving JavaScript files (",(0,n.jsx)(s.code,{children:".js"}),", ",(0,n.jsx)(s.code,{children:"jsx"}),") as-is."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"ts-jest/presets/js-with-ts"})}),(0,n.jsxs)(s.td,{children:["TypeScript and JavaScript files (",(0,n.jsx)(s.code,{children:".ts"}),", ",(0,n.jsx)(s.code,{children:".tsx"}),", ",(0,n.jsx)(s.code,{children:".js"}),", ",(0,n.jsx)(s.code,{children:".jsx"}),") will be transformed by ",(0,n.jsx)(s.code,{children:"ts-jest"})," to ",(0,n.jsx)(s.strong,{children:"CommonJS"})," syntax.",(0,n.jsx)("br",{}),"You'll need to set ",(0,n.jsx)(s.code,{children:"allowJs"})," to ",(0,n.jsx)(s.code,{children:"true"})," in your ",(0,n.jsx)(s.code,{children:"tsconfig.json"})," file."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.code,{children:"ts-jest/presets/js-with-ts-legacy"})," (",(0,n.jsx)(s.strong,{children:"LEGACY"}),")"]}),(0,n.jsxs)(s.td,{children:["TypeScript and JavaScript files (",(0,n.jsx)(s.code,{children:".ts"}),", ",(0,n.jsx)(s.code,{children:".tsx"}),", ",(0,n.jsx)(s.code,{children:".js"}),", ",(0,n.jsx)(s.code,{children:".jsx"}),") will be transformed by ",(0,n.jsx)(s.code,{children:"ts-jest"})," to ",(0,n.jsx)(s.strong,{children:"CommonJS"})," syntax.",(0,n.jsx)("br",{}),"You'll need to set ",(0,n.jsx)(s.code,{children:"allowJs"})," to ",(0,n.jsx)(s.code,{children:"true"})," in your ",(0,n.jsx)(s.code,{children:"tsconfig.json"})," file."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"ts-jest/presets/js-with-ts-esm"})}),(0,n.jsxs)(s.td,{children:["TypeScript and JavaScript files (",(0,n.jsx)(s.code,{children:".ts"}),", ",(0,n.jsx)(s.code,{children:".tsx"}),", ",(0,n.jsx)(s.code,{children:".js"}),", ",(0,n.jsx)(s.code,{children:".jsx"}),", ",(0,n.jsx)(s.code,{children:".mjs"}),") will be transformed by ",(0,n.jsx)(s.code,{children:"ts-jest"})," to ",(0,n.jsx)(s.strong,{children:"ESM"})," syntax.",(0,n.jsx)("br",{}),"You'll need to set ",(0,n.jsx)(s.code,{children:"allowJs"})," to ",(0,n.jsx)(s.code,{children:"true"})," in your ",(0,n.jsx)(s.code,{children:"tsconfig.json"})," file."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.code,{children:"ts-jest/presets/js-with-ts-esm-legacy"})," (",(0,n.jsx)(s.strong,{children:"LEGACY"}),")"]}),(0,n.jsxs)(s.td,{children:["TypeScript and JavaScript files (",(0,n.jsx)(s.code,{children:".ts"}),", ",(0,n.jsx)(s.code,{children:".tsx"}),", ",(0,n.jsx)(s.code,{children:".js"}),", ",(0,n.jsx)(s.code,{children:".jsx"}),", ",(0,n.jsx)(s.code,{children:".mjs"}),") will be transformed by ",(0,n.jsx)(s.code,{children:"ts-jest"})," to ",(0,n.jsx)(s.strong,{children:"ESM"})," syntax.",(0,n.jsx)("br",{}),"You'll need to set ",(0,n.jsx)(s.code,{children:"allowJs"})," to ",(0,n.jsx)(s.code,{children:"true"})," in your ",(0,n.jsx)(s.code,{children:"tsconfig.json"})," file."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"ts-jest/presets/js-with-babel"})}),(0,n.jsxs)(s.td,{children:["TypeScript files (",(0,n.jsx)(s.code,{children:".ts"}),", ",(0,n.jsx)(s.code,{children:".tsx"}),") will be transformed by ",(0,n.jsx)(s.code,{children:"ts-jest"})," to ",(0,n.jsx)(s.strong,{children:"CommonJS"})," syntax, and JavaScript files (",(0,n.jsx)(s.code,{children:".js"}),", ",(0,n.jsx)(s.code,{children:"jsx"}),") will be transformed by ",(0,n.jsx)(s.code,{children:"babel-jest"}),"."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.code,{children:"ts-jest/presets/js-with-babel-legacy"})," (",(0,n.jsx)(s.strong,{children:"LEGACY"}),")"]}),(0,n.jsxs)(s.td,{children:["TypeScript files (",(0,n.jsx)(s.code,{children:".ts"}),", ",(0,n.jsx)(s.code,{children:".tsx"}),") will be transformed by ",(0,n.jsx)(s.code,{children:"ts-jest"})," to ",(0,n.jsx)(s.strong,{children:"CommonJS"})," syntax, and JavaScript files (",(0,n.jsx)(s.code,{children:".js"}),", ",(0,n.jsx)(s.code,{children:"jsx"}),") will be transformed by ",(0,n.jsx)(s.code,{children:"babel-jest"}),"."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"ts-jest/presets/js-with-babel-esm"})}),(0,n.jsxs)(s.td,{children:["TypeScript files (",(0,n.jsx)(s.code,{children:".ts"}),", ",(0,n.jsx)(s.code,{children:".tsx"}),") will be transformed by ",(0,n.jsx)(s.code,{children:"ts-jest"})," to ",(0,n.jsx)(s.strong,{children:"ESM"})," syntax, and JavaScript files (",(0,n.jsx)(s.code,{children:".js"}),", ",(0,n.jsx)(s.code,{children:"jsx"}),", ",(0,n.jsx)(s.code,{children:".mjs"}),") will be transformed by ",(0,n.jsx)(s.code,{children:"babel-jest"}),"."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.code,{children:"ts-jest/presets/js-with-babel-esm-legacy"})," (",(0,n.jsx)(s.strong,{children:"LEGACY"}),")"]}),(0,n.jsxs)(s.td,{children:["TypeScript files (",(0,n.jsx)(s.code,{children:".ts"}),", ",(0,n.jsx)(s.code,{children:".tsx"}),") will be transformed by ",(0,n.jsx)(s.code,{children:"ts-jest"})," to ",(0,n.jsx)(s.strong,{children:"ESM"})," syntax, and JavaScript files (",(0,n.jsx)(s.code,{children:".js"}),", ",(0,n.jsx)(s.code,{children:"jsx"}),", ",(0,n.jsx)(s.code,{children:".mjs"}),") will be transformed by ",(0,n.jsx)(s.code,{children:"babel-jest"}),"."]})]})]})]}),"\n",(0,n.jsx)(s.h3,{id:"basic-usage",children:"Basic usage"}),"\n",(0,n.jsxs)(s.p,{children:["In most cases, simply setting the ",(0,n.jsx)(s.code,{children:"preset"})," key to the desired preset name in your Jest config should be enough to start\nusing TypeScript with Jest (assuming you added ",(0,n.jsx)(s.code,{children:"ts-jest"})," to your ",(0,n.jsx)(s.code,{children:"devDependencies"})," of course):"]}),"\n",(0,n.jsxs)(l.Z,{groupId:"code-examples",children:[(0,n.jsx)(c.Z,{value:"js",label:"JavaScript",children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-js",metastring:"tab",children:"// jest.config.js\n/** @type {import('ts-jest').JestConfigWithTsJest} */\nmodule.exports = {\n  // [...]\n  // Replace `ts-jest` with the preset you want to use\n  // from the above list\n  preset: 'ts-jest',\n}\n"})})}),(0,n.jsx)(c.Z,{value:"ts",label:"TypeScript",children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-ts",metastring:"tab",children:"// jest.config.ts\nimport type { JestConfigWithTsJest } from 'ts-jest'\n\nconst jestConfig: JestConfigWithTsJest = {\n  // [...]\n  // Replace `ts-jest` with the preset you want to use\n  // from the above list\n  preset: 'ts-jest',\n}\n\nexport default jestConfig\n"})})}),(0,n.jsx)(c.Z,{value:"JSON",children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-JSON",metastring:"tab",children:'// package.json\n\n{\n  // [...]\n  "jest": {\n    // Replace `ts-jest` with the preset you want to use\n    // from the above list\n    "preset": "ts-jest"\n  }\n}\n'})})})]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Note:"})," presets use ",(0,n.jsx)(s.code,{children:"testMatch"}),", like Jest does in its defaults. If you want to use ",(0,n.jsx)(s.code,{children:"testRegex"})," instead in your configuration, you MUST set ",(0,n.jsx)(s.code,{children:"testMatch"})," to ",(0,n.jsx)(s.code,{children:"null"})," or Jest will bail."]}),"\n",(0,n.jsx)(s.h3,{id:"advanced",children:"Advanced"}),"\n",(0,n.jsxs)(s.p,{children:["Any preset can also be used with other options.\nIf you're already using another preset, you might want only some specific settings from the chosen ",(0,n.jsx)(s.code,{children:"ts-jest"})," preset.\nIn this case you'll need to use the JavaScript version of Jest config (comment/uncomment according to your use case):"]}),"\n",(0,n.jsxs)(l.Z,{groupId:"code-examples",children:[(0,n.jsx)(c.Z,{value:"js",label:"JavaScript",children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-js",metastring:"tab",children:"// jest.config.js\nconst { defaults: tsjPreset } = require('ts-jest/presets')\n// const { defaultsESM: tsjPreset } = require('ts-jest/presets')\n// const { jsWithTs: tsjPreset } = require('ts-jest/presets')\n// const { jsWithTsESM: tsjPreset } = require('ts-jest/presets')\n// const { jsWithBabel: tsjPreset } = require('ts-jest/presets')\n// const { jsWithBabelESM: tsjPreset } = require('ts-jest/presets')\n\n/** @type {import('ts-jest').JestConfigWithTsJest} */\nmodule.exports = {\n  // [...]\n  transform: {\n    ...tsjPreset.transform,\n    // [...]\n  },\n}\n"})})}),(0,n.jsx)(c.Z,{value:"ts",label:"TypeScript",children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-ts",metastring:"tab",children:"// jest.config.ts\nimport type { JestConfigWithTsJest } from 'ts-jest'\n\nimport { defaults as tsjPreset } from 'ts-jest/presets'\n// import { defaultsESM as tsjPreset } from 'ts-jest/presets';\n// import { jsWithTs as tsjPreset } from 'ts-jest/presets';\n// import { jsWithTsESM as tsjPreset } from 'ts-jest/presets';\n// import { jsWithBabel as tsjPreset } from 'ts-jest/presets';\n// import { jsWithBabelESM as tsjPreset } from 'ts-jest/presets';\n\nconst jestConfig: JestConfigWithTsJest = {\n  // [...]\n  transform: {\n    ...tsjPreset.transform,\n    // [...]\n  },\n}\n\nexport default jestConfig\n"})})})]})]})}function x(e={}){let{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},5525:function(e,s,t){t.d(s,{Z:()=>i});var r=t("5893");t("7294");var n=t("7026");function i(e){let{children:s,hidden:t,className:i}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,n.Z)("tabItem_Ymn6",i),hidden:t,children:s})}},7902:function(e,s,t){t.d(s,{Z:()=>b});var r=t("5893"),n=t("7294"),i=t("7026"),l=t("9599"),c=t("6550"),o=t("2000"),d=t("4520"),a=t("8341"),j=t("6009");function h(e){return n.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||n.isValidElement(e)&&function(e){let{props:s}=e;return!!s&&"object"==typeof s&&"value"in s}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function x(e){let{value:s,tabValues:t}=e;return t.some(e=>e.value===s)}var u=t("7227");function p(e){let{className:s,block:t,selectedValue:n,selectValue:c,tabValues:o}=e,d=[],{blockElementScrollPositionUntilNextRender:a}=(0,l.o5)(),j=e=>{let s=e.currentTarget,t=o[d.indexOf(s)].value;t!==n&&(a(s),c(t))},h=e=>{let s=null;switch(e.key){case"Enter":j(e);break;case"ArrowRight":{let t=d.indexOf(e.currentTarget)+1;s=d[t]??d[0];break}case"ArrowLeft":{let t=d.indexOf(e.currentTarget)-1;s=d[t]??d[d.length-1]}}s?.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},s),children:o.map(e=>{let{value:s,label:t,attributes:l}=e;return(0,r.jsx)("li",{role:"tab",tabIndex:n===s?0:-1,"aria-selected":n===s,ref:e=>{d.push(e)},onKeyDown:h,onClick:j,...l,className:(0,i.Z)("tabs__item","tabItem_LNqP",l?.className,{"tabs__item--active":n===s}),children:t??s},s)})})}function f(e){let{lazy:s,children:t,selectedValue:l}=e,c=(Array.isArray(t)?t:[t]).filter(Boolean);if(s){let e=c.find(e=>e.props.value===l);return e?(0,n.cloneElement)(e,{className:(0,i.Z)("margin-top--md",e.props.className)}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:c.map((e,s)=>(0,n.cloneElement)(e,{key:s,hidden:e.props.value!==l}))})}function m(e){let s=function(e){let{defaultValue:s,queryString:t=!1,groupId:r}=e,i=function(e){let{values:s,children:t}=e;return(0,n.useMemo)(()=>{let e=s??h(t).map(e=>{let{props:{value:s,label:t,attributes:r,default:n}}=e;return{value:s,label:t,attributes:r,default:n}});return!function(e){let s=(0,a.lx)(e,(e,s)=>e.value===s.value);if(s.length>0)throw Error(`Docusaurus error: Duplicate values "${s.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[s,t])}(e),[l,u]=(0,n.useState)(()=>(function(e){let{defaultValue:s,tabValues:t}=e;if(0===t.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(s){if(!x({value:s,tabValues:t}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${s}" but none of its children has the corresponding value. Available values are: ${t.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return s}let r=t.find(e=>e.default)??t[0];if(!r)throw Error("Unexpected error: 0 tabValues");return r.value})({defaultValue:s,tabValues:i})),[p,f]=function(e){let{queryString:s=!1,groupId:t}=e,r=(0,c.k6)(),i=function(e){let{queryString:s=!1,groupId:t}=e;if("string"==typeof s)return s;if(!1===s)return null;if(!0===s&&!t)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:s,groupId:t});return[(0,d._X)(i),(0,n.useCallback)(e=>{if(!i)return;let s=new URLSearchParams(r.location.search);s.set(i,e),r.replace({...r.location,search:s.toString()})},[i,r])]}({queryString:t,groupId:r}),[m,b]=function(e){let{groupId:s}=e,t=s?`docusaurus.tab.${s}`:null,[r,i]=(0,j.Nk)(t);return[r,(0,n.useCallback)(e=>{t&&i.set(e)},[t,i])]}({groupId:r}),g=(()=>{let e=p??m;return x({value:e,tabValues:i})?e:null})();return(0,o.Z)(()=>{g&&u(g)},[g]),{selectedValue:l,selectValue:(0,n.useCallback)(e=>{if(!x({value:e,tabValues:i}))throw Error(`Can't select invalid tab value=${e}`);u(e),f(e),b(e)},[f,b,i]),tabValues:i}}(e);return(0,r.jsxs)("div",{className:(0,i.Z)("tabs-container","tabList__CuJ"),children:[(0,r.jsx)(p,{...s,...e}),(0,r.jsx)(f,{...s,...e})]})}function b(e){let s=(0,u.Z)();return(0,r.jsx)(m,{...e,children:h(e.children)},String(s))}},65:function(e,s,t){t.d(s,{Z:function(){return c},a:function(){return l}});var r=t(7294);let n={},i=r.createContext(n);function l(e){let s=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);