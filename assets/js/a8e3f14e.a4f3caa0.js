"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([["3564"],{8911:function(e,t,n){n.r(t),n.d(t,{default:()=>f,frontMatter:()=>l,metadata:()=>s,assets:()=>c,toc:()=>d,contentTitle:()=>u});var s=JSON.parse('{"id":"getting-started/options/stringifyContentPathRegex","title":"Stringify content option","description":"The stringifyContentPathRegex option has been kept for backward compatibility of HTML_TRANSFORM","source":"@site/versioned_docs/version-29.0/getting-started/options/stringifyContentPathRegex.md","sourceDirName":"getting-started/options","slug":"/getting-started/options/stringifyContentPathRegex","permalink":"/ts-jest/docs/29.0/getting-started/options/stringifyContentPathRegex","draft":false,"unlisted":false,"editUrl":"https://github.com/kulshekhar/ts-jest/edit/main/website/versioned_docs/version-29.0/getting-started/options/stringifyContentPathRegex.md","tags":[],"version":"29.0","lastUpdatedBy":"renovate[bot]","lastUpdatedAt":1744812965000,"frontMatter":{"title":"Stringify content option"}}'),r=n("5893"),o=n("65"),a=n("7902"),i=n("5525");let l={title:"Stringify content option"},u=void 0,c={},d=[{value:"Example",id:"example",level:3}];function h(e){let t={code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"stringifyContentPathRegex"})," option has been kept for backward compatibility of ",(0,r.jsx)(t.code,{children:"__HTML_TRANSFORM__"}),"\nIt's a regular expression pattern used to match the path of file to be transformed.\nIf it matches, the file will be exported as a module exporting its content."]}),"\n",(0,r.jsxs)(t.p,{children:["Let's say for example that you have a file ",(0,r.jsx)(t.code,{children:"foo.ts"})," which contains ",(0,r.jsx)(t.code,{children:'export default "bar"'}),", and your ",(0,r.jsx)(t.code,{children:"stringifyContentPathRegex"})," is set to ",(0,r.jsx)(t.code,{children:"foo\\\\.ts$"}),", the resulting module won't be the result of compiling ",(0,r.jsx)(t.code,{children:"foo.ts"})," source, but instead it'll be a module which exports the string ",(0,r.jsx)(t.code,{children:'"export default \\"bar\\""'}),"."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"CAUTION"}),": Whatever file(s) you want to match with ",(0,r.jsx)(t.code,{children:"stringifyContentPathRegex"})," pattern, you must ensure the Jest ",(0,r.jsx)(t.code,{children:"transform"})," option pointing to ",(0,r.jsx)(t.code,{children:"ts-jest"})," matches them. You may also have to add the extension(s) of this/those file(s) to ",(0,r.jsx)(t.code,{children:"moduleFileExtensions"})," Jest option."]}),"\n",(0,r.jsx)(t.h3,{id:"example",children:"Example"}),"\n",(0,r.jsxs)(t.p,{children:["In the ",(0,r.jsx)(t.code,{children:"jest.config.js"})," version, you could do as in the ",(0,r.jsx)(t.code,{children:"package.json"})," version of the config, but extending from the preset will ensure more compatibility without any changes when updating."]}),"\n",(0,r.jsxs)(a.Z,{groupId:"code-examples",children:[(0,r.jsx)(i.Z,{value:"js",label:"JavaScript",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",metastring:"tab",children:"// jest.config.js\nconst { defaults: tsjPreset } = require('ts-jest/presets')\n\n/** @type {import('ts-jest').JestConfigWithTsJest} */\nmodule.exports = {\n  // [...]\n  moduleFileExtensions: [...tsjPreset.moduleFileExtensions, 'html'],\n  transform: {\n    ...tsjPreset.transform,\n    '\\\\.html$': [\n      'ts-jest',\n      {\n        stringifyContentPathRegex: /\\.html$/,\n      },\n    ],\n  },\n}\n"})})}),(0,r.jsx)(i.Z,{value:"ts",label:"TypeScript",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:"tab",children:"// jest.config.ts\nimport type { JestConfigWithTsJest } from 'ts-jest'\nimport tsJestPresets from 'ts-jest/presets'\n\nconst jestConfig: JestConfigWithTsJest = {\n  // [...]\n  moduleFileExtensions: [...tsJestPresets.defaults.moduleFileExtensions, 'html'],\n  transform: {\n    ...tsJestPresets.defaults.transform,\n    '\\\\.html$': [\n      'ts-jest',\n      {\n        stringifyContentPathRegex: /\\.html$/,\n      },\n    ],\n  },\n}\n"})})}),(0,r.jsx)(i.Z,{value:"JSON",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-JSON",metastring:"tab",children:'// package.json\n{\n  // [...]\n  "jest": {\n    "moduleFileExtensions": ["js", "ts", "html"],\n    "transform": {\n      "\\\\.(html|ts|js)$": [\n        "ts-jest",\n        {\n          "stringifyContentPathRegex": "\\\\.html$"\n        }\n      ]\n    }\n  }\n}\n'})})})]})]})}function f(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},5525:function(e,t,n){n.d(t,{Z:()=>o});var s=n("5893");n("7294");var r=n("7026");function o(e){let{children:t,hidden:n,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)("tabItem_Ymn6",o),hidden:n,children:t})}},7902:function(e,t,n){n.d(t,{Z:()=>j});var s=n("5893"),r=n("7294"),o=n("7026"),a=n("9599"),i=n("6550"),l=n("2000"),u=n("4520"),c=n("8341"),d=n("6009");function h(e){return r.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||r.isValidElement(e)&&function(e){let{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function f(e){let{value:t,tabValues:n}=e;return n.some(e=>e.value===t)}var p=n("7227");function m(e){let{className:t,block:n,selectedValue:r,selectValue:i,tabValues:l}=e,u=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.o5)(),d=e=>{let t=e.currentTarget,n=l[u.indexOf(t)].value;n!==r&&(c(t),i(n))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{let n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1]}}t?.focus()};return(0,s.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t),children:l.map(e=>{let{value:t,label:n,attributes:a}=e;return(0,s.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>{u.push(e)},onKeyDown:h,onClick:d,...a,className:(0,o.Z)("tabs__item","tabItem_LNqP",a?.className,{"tabs__item--active":r===t}),children:n??t},t)})})}function g(e){let{lazy:t,children:n,selectedValue:a}=e,i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){let e=i.find(e=>e.props.value===a);return e?(0,r.cloneElement)(e,{className:(0,o.Z)("margin-top--md",e.props.className)}):null}return(0,s.jsx)("div",{className:"margin-top--md",children:i.map((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))})}function x(e){let t=function(e){let{defaultValue:t,queryString:n=!1,groupId:s}=e,o=function(e){let{values:t,children:n}=e;return(0,r.useMemo)(()=>{let e=t??h(n).map(e=>{let{props:{value:t,label:n,attributes:s,default:r}}=e;return{value:t,label:n,attributes:s,default:r}});return!function(e){let t=(0,c.lx)(e,(e,t)=>e.value===t.value);if(t.length>0)throw Error(`Docusaurus error: Duplicate values "${t.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[t,n])}(e),[a,p]=(0,r.useState)(()=>(function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:n}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}let s=n.find(e=>e.default)??n[0];if(!s)throw Error("Unexpected error: 0 tabValues");return s.value})({defaultValue:t,tabValues:o})),[m,g]=function(e){let{queryString:t=!1,groupId:n}=e,s=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(o),(0,r.useCallback)(e=>{if(!o)return;let t=new URLSearchParams(s.location.search);t.set(o,e),s.replace({...s.location,search:t.toString()})},[o,s])]}({queryString:n,groupId:s}),[x,j]=function(e){let{groupId:t}=e,n=t?`docusaurus.tab.${t}`:null,[s,o]=(0,d.Nk)(n);return[s,(0,r.useCallback)(e=>{n&&o.set(e)},[n,o])]}({groupId:s}),b=(()=>{let e=m??x;return f({value:e,tabValues:o})?e:null})();return(0,l.Z)(()=>{b&&p(b)},[b]),{selectedValue:a,selectValue:(0,r.useCallback)(e=>{if(!f({value:e,tabValues:o}))throw Error(`Can't select invalid tab value=${e}`);p(e),g(e),j(e)},[g,j,o]),tabValues:o}}(e);return(0,s.jsxs)("div",{className:(0,o.Z)("tabs-container","tabList__CuJ"),children:[(0,s.jsx)(m,{...t,...e}),(0,s.jsx)(g,{...t,...e})]})}function j(e){let t=(0,p.Z)();return(0,s.jsx)(x,{...e,children:h(e.children)},String(t))}},65:function(e,t,n){n.d(t,{Z:function(){return i},a:function(){return a}});var s=n(7294);let r={},o=s.createContext(r);function a(e){let t=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);