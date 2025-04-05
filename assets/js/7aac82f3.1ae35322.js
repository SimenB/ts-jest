"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([[6576,8737],{6926:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>u,default:()=>p,frontMatter:()=>c,metadata:()=>s,toc:()=>m});const s=JSON.parse('{"id":"guides/esm-support","title":"ESM Support","description":"ts-jest will take into account of the following things when working with ESM:","source":"@site/versioned_docs/version-29.0/guides/esm-support.md","sourceDirName":"guides","slug":"/guides/esm-support","permalink":"/ts-jest/docs/29.0/guides/esm-support","draft":false,"unlisted":false,"editUrl":"https://github.com/kulshekhar/ts-jest/edit/main/website/versioned_docs/version-29.0/guides/esm-support.md","tags":[],"version":"29.0","lastUpdatedBy":"renovate[bot]","lastUpdatedAt":1743857040000,"frontMatter":{"id":"esm-support","title":"ESM Support"},"sidebar":"version-29.0-docs","previous":{"title":"Version checking","permalink":"/ts-jest/docs/29.0/getting-started/version-checking"},"next":{"title":"Mock ES6 class","permalink":"/ts-jest/docs/29.0/guides/mock-es6-class"}}');var r=t(4848),o=t(8453),l=t(1470),i=t(9365),a=t(4252);const c={id:"esm-support",title:"ESM Support"},u="References",d={},m=[{value:"Configure Jest runtime",id:"configure-jest-runtime",level:2},{value:"Configure <code>tsconfig</code>",id:"configure-tsconfig",level:2},{value:"Using ES module values",id:"using-es-module-values",level:3},{value:"Using hybrid module values",id:"using-hybrid-module-values",level:3},{value:"Configure Jest config",id:"configure-jest-config",level:2},{value:"Example",id:"example",level:3},{value:"Resolve <code>.mjs/.mts</code> extensions",id:"resolve-mjsmts-extensions",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.admonition,{type:"important",children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"ts-jest"})," will take into account of the following things when working with ESM:"]}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://jestjs.io/docs/en/ecmascript-modules",children:"Jest Runtime"})}),"\n",(0,r.jsxs)(n.li,{children:["Check ",(0,r.jsx)(n.code,{children:'type: "module"'})," in ",(0,r.jsx)(n.code,{children:"package.json"})," ",(0,r.jsx)(n.strong,{children:"ONLY WHEN"})," ",(0,r.jsx)(n.code,{children:"module"})," in ",(0,r.jsx)(n.code,{children:"tsconfig"})," has hybrid value: either ",(0,r.jsx)(n.code,{children:"Node16"}),"/",(0,r.jsx)(n.code,{children:"Node18"}),"/",(0,r.jsx)(n.code,{children:"NodeNext"})]}),"\n",(0,r.jsxs)(n.li,{children:["When ",(0,r.jsx)(n.code,{children:"module"})," in ",(0,r.jsx)(n.code,{children:"tsconfig"})," isn't set to a hybrid value, ",(0,r.jsx)(n.code,{children:"module"})," ",(0,r.jsx)(n.strong,{children:"MUST HAVE"})," one of the ES values, e.g. ",(0,r.jsx)(n.code,{children:"ES2015"}),", ",(0,r.jsx)(n.code,{children:"ES2020"})," etc..."]}),"\n"]})]}),"\n",(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"references",children:"References"})}),"\n","\n",(0,r.jsx)(a.A,{toc:m.slice(0)}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"configure-jest-runtime",children:"Configure Jest runtime"}),"\n",(0,r.jsxs)(n.p,{children:["Check ",(0,r.jsx)(n.a,{href:"https://jestjs.io/docs/en/ecmascript-modules",children:"ESM Jest documentation"}),"."]}),"\n",(0,r.jsxs)(n.admonition,{type:"info",children:[(0,r.jsx)(n.p,{children:"Jest runtime currently has a few issues related to support ESM:"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Not taking into account of ",(0,r.jsx)(n.code,{children:'type: "module"'})," field in ",(0,r.jsx)(n.code,{children:"package.json"})," yet to run as ESM mode."]}),"\n",(0,r.jsxs)(n.li,{children:["Mocking ES modules are not supported yet, track progress here ",(0,r.jsx)(n.a,{href:"https://github.com/jestjs/jest/pull/10976",children:"https://github.com/jestjs/jest/pull/10976"})]}),"\n"]}),(0,r.jsxs)(n.p,{children:["Overall progress and discussion can be found at ",(0,r.jsx)(n.a,{href:"https://github.com/jestjs/jest/issues/9430",children:"https://github.com/jestjs/jest/issues/9430"})]})]}),"\n",(0,r.jsxs)(n.h2,{id:"configure-tsconfig",children:["Configure ",(0,r.jsx)(n.code,{children:"tsconfig"})]}),"\n",(0,r.jsx)(n.h3,{id:"using-es-module-values",children:"Using ES module values"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'// tsconfig.spec.json\n{\n  "compilerOptions": {\n    "module": "ESNext", // or any values starting with "es" or "ES"\n    "target": "ESNext",\n    "esModuleInterop": true\n  }\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"using-hybrid-module-values",children:"Using hybrid module values"}),"\n",(0,r.jsxs)(n.admonition,{type:"important",children:[(0,r.jsxs)(n.p,{children:["Hybrid module values requires ",(0,r.jsx)(n.code,{children:"type"})," field in ",(0,r.jsx)(n.code,{children:"package.json"})," to be set explicitly to:"]}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"commonjs"})," for ",(0,r.jsx)(n.code,{children:"CommonJS"})," code"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"module"})," for ",(0,r.jsx)(n.code,{children:"ESM"})," code"]}),"\n"]})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'// tsconfig.spec.json\n{\n  "compilerOptions": {\n    "module": "Node16", // or Node18/NodeNext\n    "target": "ESNext",\n    "esModuleInterop": true\n  }\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"configure-jest-config",children:"Configure Jest config"}),"\n",(0,r.jsxs)(n.p,{children:["Configure your Jest configuration to use one of the ",(0,r.jsx)(n.a,{href:"/ts-jest/docs/29.0/getting-started/presets",children:"utility functions"})]}),"\n",(0,r.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"// jest.config.ts\nimport type { Config } from 'jest'\n\nconst jestConfig: Config = {\n  // [...]\n  preset: 'ts-jest/presets/default-esm', // or other ESM presets\n  moduleNameMapper: {\n    '^(\\\\.{1,2}/.*)\\\\.js$': '$1',\n  },\n  transform: {\n    // '^.+\\\\.[tj]sx?$' to process ts,js,tsx,jsx with `ts-jest`\n    // '^.+\\\\.m?[tj]sx?$' to process ts,js,tsx,jsx,mts,mjs,mtsx,mjsx with `ts-jest`\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        useESM: true,\n      },\n    ],\n  },\n}\n\nexport default jestConfig\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"resolve-mjsmts-extensions",children:["Resolve ",(0,r.jsx)(n.code,{children:".mjs/.mts"})," extensions"]}),"\n",(0,r.jsxs)(n.p,{children:["To work with ",(0,r.jsx)(n.code,{children:".mts"})," extension, besides the requirement to run Jest and ",(0,r.jsx)(n.code,{children:"ts-jest"})," in ESM mode, there are a few extra requirements to be met:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"package.json"})," should contain ",(0,r.jsx)(n.code,{children:'"type": "module"'})]}),"\n",(0,r.jsxs)(n.li,{children:["A custom Jest resolver to resolve ",(0,r.jsx)(n.code,{children:".mjs"})," extension, for example:"]}),"\n"]}),"\n",(0,r.jsxs)(l.A,{groupId:"code-examples",children:[(0,r.jsx)(i.A,{value:"typescript-cjs",label:"TypeScript CJS",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",metastring:'tab={"label": "TypeScript CJS"}',children:"import type { SyncResolver } from 'jest-resolve'\n\nconst mjsResolver: SyncResolver = (path, options) => {\n  const mjsExtRegex = /\\.mjs$/i\n  const resolver = options.defaultResolver\n  if (mjsExtRegex.test(path)) {\n    try {\n      return resolver(path.replace(mjsExtRegex, '.mts'), options)\n    } catch {\n      // use default resolver\n    }\n  }\n\n  return resolver(path, options)\n}\n\nexport = mjsResolver\n"})})}),(0,r.jsx)(i.A,{value:"typescript-esm",label:"TypeScript ESM",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",metastring:'tab={"label": "TypeScript ESM"}',children:"import type { SyncResolver } from 'jest-resolve'\n\nconst mjsResolver: SyncResolver = (path, options) => {\n  const mjsExtRegex = /\\.mjs$/i\n  const resolver = options.defaultResolver\n  if (mjsExtRegex.test(path)) {\n    try {\n      return resolver(path.replace(mjsExtRegex, '.mts'), options)\n    } catch {\n      // use default resolver\n    }\n  }\n\n  return resolver(path, options)\n}\n\nexport default mjsResolver\n"})})})]})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},4252:(e,n,t)=>{t.d(n,{A:()=>l});t(6540);var s=t(5195);const r={tableOfContentsInline:"tableOfContentsInline_prmo"};var o=t(4848);function l(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:l}=e;return(0,o.jsx)("div",{className:r.tableOfContentsInline,children:(0,o.jsx)(s.A,{toc:n,minHeadingLevel:t,maxHeadingLevel:l,className:"table-of-contents",linkClassName:null})})}},5195:(e,n,t)=>{t.d(n,{A:()=>f});var s=t(6540),r=t(6342);function o(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const s=t.slice(2,e.level);e.parentIndex=Math.max(...s),t[e.level]=n}));const s=[];return n.forEach((e=>{const{parentIndex:t,...r}=e;t>=0?n[t].children.push(r):s.push(r)})),s}function l(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:s}=e;return n.flatMap((e=>{const n=l({toc:e.children,minHeadingLevel:t,maxHeadingLevel:s});return function(e){return e.level>=t&&e.level<=s}(e)?[{...e,children:n}]:n}))}function i(e){const n=e.getBoundingClientRect();return n.top===n.bottom?i(e.parentNode):n}function a(e,n){let{anchorTopOffset:t}=n;const s=e.find((e=>i(e).top>=t));if(s){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(i(s))?s:e[e.indexOf(s)-1]??null}return e[e.length-1]??null}function c(){const e=(0,s.useRef)(0),{navbar:{hideOnScroll:n}}=(0,r.p)();return(0,s.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function u(e){const n=(0,s.useRef)(void 0),t=c();(0,s.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:s,linkActiveClassName:r,minHeadingLevel:o,maxHeadingLevel:l}=e;function i(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(s),i=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const s=[];for(let r=n;r<=t;r+=1)s.push(`h${r}.anchor`);return Array.from(document.querySelectorAll(s.join()))}({minHeadingLevel:o,maxHeadingLevel:l}),c=a(i,{anchorTopOffset:t.current}),u=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(r),e.classList.add(r),n.current=e):e.classList.remove(r)}(e,e===u)}))}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),()=>{document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}}),[e,t])}var d=t(8774),m=t(4848);function h(e){let{toc:n,className:t,linkClassName:s,isChild:r}=e;return n.length?(0,m.jsx)("ul",{className:r?void 0:t,children:n.map((e=>(0,m.jsxs)("li",{children:[(0,m.jsx)(d.A,{to:`#${e.id}`,className:s??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,m.jsx)(h,{isChild:!0,toc:e.children,className:t,linkClassName:s})]},e.id)))}):null}const p=s.memo(h);function f(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:i="table-of-contents__link",linkActiveClassName:a,minHeadingLevel:c,maxHeadingLevel:d,...h}=e;const f=(0,r.p)(),j=c??f.tableOfContents.minHeadingLevel,x=d??f.tableOfContents.maxHeadingLevel,g=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:r}=e;return(0,s.useMemo)((()=>l({toc:o(n),minHeadingLevel:t,maxHeadingLevel:r})),[n,t,r])}({toc:n,minHeadingLevel:j,maxHeadingLevel:x});return u((0,s.useMemo)((()=>{if(i&&a)return{linkClassName:i,linkActiveClassName:a,minHeadingLevel:j,maxHeadingLevel:x}}),[i,a,j,x])),(0,m.jsx)(p,{toc:g,className:t,linkClassName:i,...h})}},9365:(e,n,t)=>{t.d(n,{A:()=>l});t(6540);var s=t(4164);const r={tabItem:"tabItem_Ymn6"};var o=t(4848);function l(e){let{children:n,hidden:t,className:l}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,s.A)(r.tabItem,l),hidden:t,children:n})}},1470:(e,n,t)=>{t.d(n,{A:()=>E});var s=t(6540),r=t(4164),o=t(3104),l=t(6347),i=t(205),a=t(7485),c=t(1682),u=t(679);function d(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:s,default:r}}=e;return{value:n,label:t,attributes:s,default:r}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const r=(0,l.W6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,a.aZ)(o),(0,s.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(r.location.search);n.set(o,e),r.replace({...r.location,search:n.toString()})}),[o,r])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,o=m(e),[l,a]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:o}))),[c,d]=p({queryString:t,groupId:r}),[f,j]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,o]=(0,u.Dv)(t);return[r,(0,s.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:r}),x=(()=>{const e=c??f;return h({value:e,tabValues:o})?e:null})();(0,i.A)((()=>{x&&a(x)}),[x]);return{selectedValue:l,selectValue:(0,s.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);a(e),d(e),j(e)}),[d,j,o]),tabValues:o}}var j=t(2303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(4848);function v(e){let{className:n,block:t,selectedValue:s,selectValue:l,tabValues:i}=e;const a=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),u=e=>{const n=e.currentTarget,t=a.indexOf(n),r=i[t].value;r!==s&&(c(n),l(r))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=a.indexOf(e.currentTarget)+1;n=a[t]??a[0];break}case"ArrowLeft":{const t=a.indexOf(e.currentTarget)-1;n=a[t]??a[a.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:o}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>{a.push(e)},onKeyDown:d,onClick:u,...o,className:(0,r.A)("tabs__item",x.tabItem,o?.className,{"tabs__item--active":s===n}),children:t??n},n)}))})}function b(e){let{lazy:n,children:t,selectedValue:o}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===o));return e?(0,s.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function y(e){const n=f(e);return(0,g.jsxs)("div",{className:(0,r.A)("tabs-container",x.tabList),children:[(0,g.jsx)(v,{...n,...e}),(0,g.jsx)(b,{...n,...e})]})}function E(e){const n=(0,j.A)();return(0,g.jsx)(y,{...e,children:d(e.children)},String(n))}},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>i});var s=t(6540);const r={},o=s.createContext(r);function l(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);