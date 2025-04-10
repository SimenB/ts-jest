"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([[106,8737],{248:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>d,default:()=>p,frontMatter:()=>c,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"guides/esm-support","title":"ESM Support","description":"Jest will take into account of the following things when working with ESM:","source":"@site/docs/guides/esm-support.md","sourceDirName":"guides","slug":"/guides/esm-support","permalink":"/ts-jest/docs/next/guides/esm-support","draft":false,"unlisted":false,"editUrl":"https://github.com/kulshekhar/ts-jest/edit/main/website/docs/guides/esm-support.md","tags":[],"version":"current","lastUpdatedBy":"ahnpnl","lastUpdatedAt":1744315729000,"frontMatter":{"id":"esm-support","title":"ESM Support"},"sidebar":"docs","previous":{"title":"Version checking","permalink":"/ts-jest/docs/next/getting-started/version-checking"},"next":{"title":"Hybrid Node module","permalink":"/ts-jest/docs/next/guides/hybrid-node-module"}}');var r=t(4848),o=t(8453),i=t(1470),l=t(9365),a=t(4252);const c={id:"esm-support",title:"ESM Support"},d=void 0,u={},h=[{value:"Configure Jest runtime",id:"configure-jest-runtime",level:2},{value:"Configure <code>tsconfig</code>",id:"configure-tsconfig",level:2},{value:"Using ES module values",id:"using-es-module-values",level:3},{value:"Using hybrid module values",id:"using-hybrid-module-values",level:3},{value:"Configure Jest config",id:"configure-jest-config",level:2},{value:"Using ESM presets",id:"using-esm-presets",level:3},{value:"NOT using ESM presets",id:"not-using-esm-presets",level:3},{value:"Resolve <code>.mjs/.mts</code> extensions",id:"resolve-mjsmts-extensions",level:2}];function m(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.admonition,{type:"important",children:[(0,r.jsx)(n.p,{children:"Jest will take into account of the following things when working with ESM:"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://jestjs.io/docs/en/ecmascript-modules",children:"ESM runtime"})}),"\n",(0,r.jsxs)(n.li,{children:["The value of ",(0,r.jsx)(n.code,{children:"module"})," option in tsconfig file is either:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Node16/Node18/NodeNext"}),": this ",(0,r.jsx)(n.strong,{children:"MUST"})," go together with ",(0,r.jsx)(n.code,{children:'type: "module"'})," in ",(0,r.jsx)(n.code,{children:"package.json"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Otherwise, the value ",(0,r.jsx)(n.strong,{children:"MUST BE"})," one of the ES values, e.g. ",(0,r.jsx)(n.code,{children:"ES2015"}),", ",(0,r.jsx)(n.code,{children:"ES2020"})," etc..."]}),"\n"]}),"\n"]}),"\n"]})]}),"\n",(0,r.jsxs)(n.p,{children:["One can configure ",(0,r.jsx)(n.code,{children:"ts-jest"})," to work with Jest in ESM mode by following the steps below."]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["We have ",(0,r.jsx)(n.a,{href:"https://github.com/kulshekhar/ts-jest/tree/main/examples",children:(0,r.jsx)(n.strong,{children:"EXAMPLE APPS"})})," which contains some projects which have basic setup to work with ESM (next to CJS config)."]})}),"\n","\n",(0,r.jsx)(a.A,{toc:h.slice(0)}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"configure-jest-runtime",children:"Configure Jest runtime"}),"\n",(0,r.jsxs)(n.admonition,{type:"warning",children:[(0,r.jsx)(n.p,{children:"Jest runtime currently has a few issues related to support ESM:"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Not taking into account of ",(0,r.jsx)(n.code,{children:'type: "module"'})," field in ",(0,r.jsx)(n.code,{children:"package.json"})," yet to run as ESM mode."]}),"\n",(0,r.jsxs)(n.li,{children:["Mocking ES modules are not supported yet, track progress here ",(0,r.jsx)(n.a,{href:"https://github.com/jestjs/jest/pull/10976",children:"https://github.com/jestjs/jest/pull/10976"})]}),"\n"]}),(0,r.jsxs)(n.p,{children:["Overall progress and discussion can be found at ",(0,r.jsx)(n.a,{href:"https://github.com/jestjs/jest/issues/9430",children:"https://github.com/jestjs/jest/issues/9430"})]})]}),"\n",(0,r.jsxs)(n.admonition,{type:"info",children:[(0,r.jsxs)(n.p,{children:["If one is using Jest config in TypeScript, one should install ",(0,r.jsx)(n.code,{children:"ts-node"})," as a dev dependency."]}),(0,r.jsxs)(i.A,{groupId:"npm2yarn",children:[(0,r.jsx)(l.A,{value:"npm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"\nnpm install -D ts-node\n\n"})})}),(0,r.jsx)(l.A,{value:"yarn",label:"Yarn",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"\nyarn add --dev ts-node\n\n"})})}),(0,r.jsx)(l.A,{value:"pnpm",label:"pnpm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"\npnpm add -D ts-node\n\n"})})})]})]}),"\n",(0,r.jsxs)(n.p,{children:["Execute Jest with with ",(0,r.jsx)(n.code,{children:"--experimental-vm-modules"})," flag for ",(0,r.jsx)(n.code,{children:"NodeJs"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"\nnode --experimental-vm-modules node_modules/jest/bin/jest.js\n\n"})}),"\n",(0,r.jsxs)(n.admonition,{type:"tip",children:[(0,r.jsxs)(n.p,{children:["Alternative way for ",(0,r.jsx)(n.code,{children:"Yarn"})," users:"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"\nyarn node --experimental-vm-modules $(yarn bin jest)\n\n"})}),(0,r.jsxs)(n.p,{children:["This command will also work if you use ",(0,r.jsx)(n.code,{children:"Yarn Plug'n'Play."})]})]}),"\n",(0,r.jsxs)(n.h2,{id:"configure-tsconfig",children:["Configure ",(0,r.jsx)(n.code,{children:"tsconfig"})]}),"\n",(0,r.jsxs)(n.p,{children:["One can choose ",(0,r.jsx)(n.strong,{children:"EITHER ONE"})," of the following options for ",(0,r.jsx)(n.code,{children:"tsconfig"}),":"]}),"\n",(0,r.jsx)(n.h3,{id:"using-es-module-values",children:"Using ES module values"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["See more details about ",(0,r.jsx)(n.a,{href:"https://www.typescriptlang.org/docs/handbook/modules/reference.html#es2015-es2020-es2022-esnext",children:"ES module values"})]})}),"\n",(0,r.jsx)(n.admonition,{type:"important",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"ts-jest"})," recommends to use ",(0,r.jsx)(n.code,{children:"ES2022"})," or ",(0,r.jsx)(n.code,{children:"ESNext"})," when using ",(0,r.jsx)(n.code,{children:"ES"})," module values to achieve full support for all recent ESM features."]})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",metastring:'title="tsconfig.spec.json"',children:'{\n  "compilerOptions": {\n    "module": "ES2022", // or `ESNext`\n    "target": "ESNext",\n    "esModuleInterop": true\n  }\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"using-hybrid-module-values",children:"Using hybrid module values"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["See more details about ",(0,r.jsx)(n.a,{href:"https://www.typescriptlang.org/docs/handbook/modules/reference.html#node16-node18-nodenext",children:"hybrid module"})]})}),"\n",(0,r.jsx)(n.admonition,{type:"important",children:(0,r.jsxs)(n.p,{children:["Currently, the code transpiler ",(0,r.jsx)(n.strong,{children:"ONLY"})," supports hybrid values with ",(0,r.jsx)(n.code,{children:"isolatedModules: true"})]})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",metastring:'title="tsconfig.spec.json"',children:'{\n  "compilerOptions": {\n    "module": "Node16", // or Node18/NodeNext\n    "target": "ESNext",\n    "esModuleInterop": true,\n    "isolatedModules": true\n  }\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"configure-jest-config",children:"Configure Jest config"}),"\n",(0,r.jsxs)(n.admonition,{type:"tip",children:[(0,r.jsxs)(n.p,{children:["Jest will attempt to load ",(0,r.jsx)(n.strong,{children:"ESM"})," files from ",(0,r.jsx)(n.code,{children:"node_modules"})," with default ",(0,r.jsx)(n.code,{children:"jest-resolve"})," which usually works for most of the cases.\nHowever, there are cases like Angular libraries ",(0,r.jsx)(n.strong,{children:"ESM"})," built files or ",(0,r.jsx)(n.strong,{children:"ESM"})," files which are outside ",(0,r.jsx)(n.code,{children:"node_modules"})," might not be loaded\ncorrectly."]}),(0,r.jsxs)(n.p,{children:["To fix that, one can use ",(0,r.jsx)(n.code,{children:"moduleNameMapper"})," in jest config to instruct Jest to load the correct ",(0,r.jsx)(n.strong,{children:"ESM"})," files or create a\ncustom Jest ",(0,r.jsx)(n.a,{href:"https://jestjs.io/docs/configuration#resolver-string",children:"resolver"}),"."]})]}),"\n",(0,r.jsx)(n.h3,{id:"using-esm-presets",children:"Using ESM presets"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["See available ESM preset creator functions ",(0,r.jsx)(n.a,{href:"/ts-jest/docs/next/getting-started/presets",children:(0,r.jsx)(n.strong,{children:"HERE"})})]})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",metastring:'title="jest.config.ts"',children:"import type { Config } from 'jest'\nimport { createDefaultEsmPreset } from 'ts-jest'\n\nconst presetConfig = createDefaultEsmPreset({\n  //...options\n})\n\nexport default {\n  ...presetConfig,\n} satisfies Config\n"})}),"\n",(0,r.jsx)(n.h3,{id:"not-using-esm-presets",children:"NOT using ESM presets"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",metastring:'title="jest.config.ts"',children:"import type { Config } from 'jest'\nimport { TS_EXT_TO_TREAT_AS_ESM, ESM_TS_TRANSFORM_PATTERN } from 'ts-jest'\n\nexport default {\n  extensionsToTreatAsEsm: [...TS_EXT_TO_TREAT_AS_ESM],\n  transform: {\n    [ESM_TS_TRANSFORM_PATTERN]: [\n      'ts-jest',\n      {\n        //...other `ts-jest` options\n        useESM: true,\n      },\n    ],\n  },\n} satisfies Config\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"resolve-mjsmts-extensions",children:["Resolve ",(0,r.jsx)(n.code,{children:".mjs/.mts"})," extensions"]}),"\n",(0,r.jsxs)(n.p,{children:["To work with ",(0,r.jsx)(n.code,{children:".mts"})," extension, besides the requirement to run Jest and ",(0,r.jsx)(n.code,{children:"ts-jest"})," in ESM mode, there are a few extra requirements to be met:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"package.json"})," should contain ",(0,r.jsx)(n.code,{children:'"type": "module"'})]}),"\n",(0,r.jsxs)(n.li,{children:["A custom Jest resolver to resolve ",(0,r.jsx)(n.code,{children:".mjs"})," extension, for example:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",metastring:'title="custom-resolver.ts"',children:"import type { SyncResolver } from 'jest-resolve'\n\nconst mjsResolver: SyncResolver = (path, options) => {\n  const mjsExtRegex = /\\.mjs$/i\n  const resolver = options.defaultResolver\n  if (mjsExtRegex.test(path)) {\n    try {\n      return resolver(path.replace(mjsExtRegex, '.mts'), options)\n    } catch {\n      // use default resolver\n    }\n  }\n\n  return resolver(path, options)\n}\n\nexport default mjsResolver\n"})}),"\n",(0,r.jsx)(n.p,{children:"and then add this to Jest config:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",metastring:'title="jest.config.ts"',children:"import type { Config } from 'jest'\n\nconst config: Config = {\n  //...other options\n  resolver: '<rootDir>/path/to/custom-resolver.ts',\n}\n"})})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},4252:(e,n,t)=>{t.d(n,{A:()=>i});t(6540);var s=t(5195);const r={tableOfContentsInline:"tableOfContentsInline_prmo"};var o=t(4848);function i(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:i}=e;return(0,o.jsx)("div",{className:r.tableOfContentsInline,children:(0,o.jsx)(s.A,{toc:n,minHeadingLevel:t,maxHeadingLevel:i,className:"table-of-contents",linkClassName:null})})}},5195:(e,n,t)=>{t.d(n,{A:()=>f});var s=t(6540),r=t(6342);function o(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const s=t.slice(2,e.level);e.parentIndex=Math.max(...s),t[e.level]=n}));const s=[];return n.forEach((e=>{const{parentIndex:t,...r}=e;t>=0?n[t].children.push(r):s.push(r)})),s}function i(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:s}=e;return n.flatMap((e=>{const n=i({toc:e.children,minHeadingLevel:t,maxHeadingLevel:s});return function(e){return e.level>=t&&e.level<=s}(e)?[{...e,children:n}]:n}))}function l(e){const n=e.getBoundingClientRect();return n.top===n.bottom?l(e.parentNode):n}function a(e,n){let{anchorTopOffset:t}=n;const s=e.find((e=>l(e).top>=t));if(s){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(l(s))?s:e[e.indexOf(s)-1]??null}return e[e.length-1]??null}function c(){const e=(0,s.useRef)(0),{navbar:{hideOnScroll:n}}=(0,r.p)();return(0,s.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function d(e){const n=(0,s.useRef)(void 0),t=c();(0,s.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:s,linkActiveClassName:r,minHeadingLevel:o,maxHeadingLevel:i}=e;function l(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(s),l=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const s=[];for(let r=n;r<=t;r+=1)s.push(`h${r}.anchor`);return Array.from(document.querySelectorAll(s.join()))}({minHeadingLevel:o,maxHeadingLevel:i}),c=a(l,{anchorTopOffset:t.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(r),e.classList.add(r),n.current=e):e.classList.remove(r)}(e,e===d)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),()=>{document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,t])}var u=t(8774),h=t(4848);function m(e){let{toc:n,className:t,linkClassName:s,isChild:r}=e;return n.length?(0,h.jsx)("ul",{className:r?void 0:t,children:n.map((e=>(0,h.jsxs)("li",{children:[(0,h.jsx)(u.A,{to:`#${e.id}`,className:s??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,h.jsx)(m,{isChild:!0,toc:e.children,className:t,linkClassName:s})]},e.id)))}):null}const p=s.memo(m);function f(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:l="table-of-contents__link",linkActiveClassName:a,minHeadingLevel:c,maxHeadingLevel:u,...m}=e;const f=(0,r.p)(),g=c??f.tableOfContents.minHeadingLevel,j=u??f.tableOfContents.maxHeadingLevel,x=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:r}=e;return(0,s.useMemo)((()=>i({toc:o(n),minHeadingLevel:t,maxHeadingLevel:r})),[n,t,r])}({toc:n,minHeadingLevel:g,maxHeadingLevel:j});return d((0,s.useMemo)((()=>{if(l&&a)return{linkClassName:l,linkActiveClassName:a,minHeadingLevel:g,maxHeadingLevel:j}}),[l,a,g,j])),(0,h.jsx)(p,{toc:x,className:t,linkClassName:l,...m})}},9365:(e,n,t)=>{t.d(n,{A:()=>i});t(6540);var s=t(4164);const r={tabItem:"tabItem_Ymn6"};var o=t(4848);function i(e){let{children:n,hidden:t,className:i}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,s.A)(r.tabItem,i),hidden:t,children:n})}},1470:(e,n,t)=>{t.d(n,{A:()=>y});var s=t(6540),r=t(4164),o=t(3104),i=t(6347),l=t(205),a=t(7485),c=t(1682),d=t(679);function u(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:s,default:r}}=e;return{value:n,label:t,attributes:s,default:r}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const r=(0,i.W6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,a.aZ)(o),(0,s.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(r.location.search);n.set(o,e),r.replace({...r.location,search:n.toString()})}),[o,r])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,o=h(e),[i,a]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:o}))),[c,u]=p({queryString:t,groupId:r}),[f,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,o]=(0,d.Dv)(t);return[r,(0,s.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:r}),j=(()=>{const e=c??f;return m({value:e,tabValues:o})?e:null})();(0,l.A)((()=>{j&&a(j)}),[j]);return{selectedValue:i,selectValue:(0,s.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);a(e),u(e),g(e)}),[u,g,o]),tabValues:o}}var g=t(2303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(4848);function v(e){let{className:n,block:t,selectedValue:s,selectValue:i,tabValues:l}=e;const a=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),d=e=>{const n=e.currentTarget,t=a.indexOf(n),r=l[t].value;r!==s&&(c(n),i(r))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=a.indexOf(e.currentTarget)+1;n=a[t]??a[0];break}case"ArrowLeft":{const t=a.indexOf(e.currentTarget)-1;n=a[t]??a[a.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:o}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>{a.push(e)},onKeyDown:u,onClick:d,...o,className:(0,r.A)("tabs__item",j.tabItem,o?.className,{"tabs__item--active":s===n}),children:t??n},n)}))})}function b(e){let{lazy:n,children:t,selectedValue:o}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===o));return e?(0,s.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function E(e){const n=f(e);return(0,x.jsxs)("div",{className:(0,r.A)("tabs-container",j.tabList),children:[(0,x.jsx)(v,{...n,...e}),(0,x.jsx)(b,{...n,...e})]})}function y(e){const n=(0,g.A)();return(0,x.jsx)(E,{...e,children:u(e.children)},String(n))}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var s=t(6540);const r={},o=s.createContext(r);function i(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);