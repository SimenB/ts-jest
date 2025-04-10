"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([[3960],{984:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>d,default:()=>a,frontMatter:()=>r,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"getting-started/options","title":"Options","description":"Introduction","source":"@site/versioned_docs/version-26.5/getting-started/options.md","sourceDirName":"getting-started","slug":"/getting-started/options","permalink":"/ts-jest/docs/26.5/getting-started/options","draft":false,"unlisted":false,"editUrl":"https://github.com/kulshekhar/ts-jest/edit/main/website/versioned_docs/version-26.5/getting-started/options.md","tags":[],"version":"26.5","lastUpdatedBy":"ahnpnl","lastUpdatedAt":1744315729000,"frontMatter":{"id":"options","title":"Options"},"sidebar":"version-26.5-docs","previous":{"title":"Presets","permalink":"/ts-jest/docs/26.5/getting-started/presets"},"next":{"title":"Paths mapping","permalink":"/ts-jest/docs/26.5/getting-started/paths-mapping"}}');var i=n(4848),o=n(8453);const r={id:"options",title:"Options"},d=void 0,c={},l=[{value:"Introduction",id:"introduction",level:3},{value:"Options",id:"options",level:3}];function h(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h3,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsxs)(s.p,{children:["All ",(0,i.jsx)(s.code,{children:"ts-jest"})," specific options are located under the ",(0,i.jsx)(s.code,{children:"globals"})," of Jest config object in the ",(0,i.jsx)(s.code,{children:"package.json"})," file of your project,\nor through a ",(0,i.jsx)(s.code,{children:"jest.config.js"}),", or ",(0,i.jsx)(s.code,{children:"jest.config.ts"})," file."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-json",children:'// package.json\n{\n  // [...]\n  "jest": {\n    "globals": {\n      "ts-jest": {\n        // ts-jest configuration goes here\n      }\n    }\n  }\n}\n'})}),"\n",(0,i.jsx)(s.p,{children:"Or through JavaScript:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-js",children:"// jest.config.js\nmodule.exports = {\n  // [...]\n  globals: {\n    'ts-jest': {\n      // ts-jest configuration goes here\n    },\n  },\n}\n"})}),"\n",(0,i.jsxs)(s.admonition,{type:"tip",children:[(0,i.jsxs)(s.p,{children:["To utilize IDE suggestions, you can use ",(0,i.jsx)(s.code,{children:"JSDoc"})," comments to provide suggested ",(0,i.jsx)(s.code,{children:"ts-jest"})," configs for your Jest config:"]}),(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-js",children:"// jest.config.js\n/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */\nmodule.exports = config = {\n  // [...]\n  globals: {\n    'ts-jest': {\n      // ts-jest configuration goes here and your IDE will suggest which configs when typing\n    },\n  },\n}\n"})})]}),"\n",(0,i.jsx)(s.h3,{id:"options",children:"Options"}),"\n",(0,i.jsx)(s.p,{children:"All options have default values which should fit most of the projects. Click on the option's name to see details and example(s)."}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Option"}),(0,i.jsx)(s.th,{children:"Description"}),(0,i.jsx)(s.th,{children:"Type"}),(0,i.jsx)(s.th,{children:"Default"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"options/compiler",children:(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"compiler"})})})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"options/compiler",children:"TypeScript module to use as compiler."})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"string"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:'"typescript"'})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"options/tsconfig",children:(0,i.jsxs)(s.strong,{children:[(0,i.jsx)(s.code,{children:"tsconfig"})," or ",(0,i.jsx)(s.code,{children:"tsConfig(DEPRECATED)"})]})})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"options/tsconfig",children:"TypeScript compiler related configuration."})}),(0,i.jsxs)(s.td,{children:[(0,i.jsx)(s.code,{children:"string"}),"|",(0,i.jsx)(s.code,{children:"object"}),"|",(0,i.jsx)(s.code,{children:"boolean"})]}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.em,{children:"auto"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"options/isolatedModules",children:(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"isolatedModules"})})})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"options/isolatedModules",children:"Disable type-checking"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"boolean"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.em,{children:"disabled"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"options/astTransformers",children:(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"astTransformers"})})})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"options/astTransformers",children:"Custom TypeScript AST transformers"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"object"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.em,{children:"auto"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"options/diagnostics",children:(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"diagnostics"})})})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"options/diagnostics",children:"Diagnostics related configuration."})}),(0,i.jsxs)(s.td,{children:[(0,i.jsx)(s.code,{children:"boolean"}),"|",(0,i.jsx)(s.code,{children:"object"})]}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.em,{children:"enabled"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"options/babelConfig",children:(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"babelConfig"})})})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"options/babelConfig",children:"Babel(Jest) related configuration."})}),(0,i.jsxs)(s.td,{children:[(0,i.jsx)(s.code,{children:"boolean"}),"|",(0,i.jsx)(s.code,{children:"string"}),"|",(0,i.jsx)(s.code,{children:"object"})]}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.em,{children:"disabled"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"options/stringifyContentPathRegex",children:(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"stringifyContentPathRegex"})})})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"options/stringifyContentPathRegex",children:"Files which will become modules returning self content."})}),(0,i.jsxs)(s.td,{children:[(0,i.jsx)(s.code,{children:"string"}),"|",(0,i.jsx)(s.code,{children:"RegExp"})]}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.em,{children:"disabled"})})]})]})]})]})}function a(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>r,x:()=>d});var t=n(6540);const i={},o=t.createContext(i);function r(e){const s=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(o.Provider,{value:s},e.children)}}}]);