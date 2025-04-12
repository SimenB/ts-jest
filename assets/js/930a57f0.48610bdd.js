"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([["7737"],{3349:function(e,t,s){s.r(t),s.d(t,{default:()=>a,frontMatter:()=>o,metadata:()=>n,assets:()=>c,toc:()=>l,contentTitle:()=>d});var n=JSON.parse('{"id":"getting-started/options","title":"Options","description":"Introduction","source":"@site/versioned_docs/version-29.3/getting-started/options.md","sourceDirName":"getting-started","slug":"/getting-started/options","permalink":"/ts-jest/docs/getting-started/options","draft":false,"unlisted":false,"editUrl":"https://github.com/kulshekhar/ts-jest/edit/main/website/versioned_docs/version-29.3/getting-started/options.md","tags":[],"version":"29.3","lastUpdatedBy":"renovate[bot]","lastUpdatedAt":1744445151000,"frontMatter":{"id":"options","title":"Options"},"sidebar":"docs","previous":{"title":"Presets","permalink":"/ts-jest/docs/getting-started/presets"},"next":{"title":"Paths mapping","permalink":"/ts-jest/docs/getting-started/paths-mapping"}}'),i=s("5893"),r=s("65");let o={id:"options",title:"Options"},d=void 0,c={},l=[{value:"Introduction",id:"introduction",level:3},{value:"Options",id:"options",level:3}];function h(e){let t={a:"a",admonition:"admonition",code:"code",em:"em",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h3,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsx)(t.admonition,{type:"caution",children:(0,i.jsxs)(t.p,{children:["If you are using custom ",(0,i.jsx)(t.code,{children:"transform"})," config, please remove ",(0,i.jsx)(t.code,{children:"preset"})," from your Jest config to avoid issues that Jest doesn't transform files correctly."]})}),"\n",(0,i.jsxs)(t.p,{children:["All ",(0,i.jsx)(t.code,{children:"ts-jest"})," specific options can be defined in Jest ",(0,i.jsx)(t.code,{children:"transform"})," config object in the ",(0,i.jsx)(t.code,{children:"package.json"})," file of your project,\nor through a ",(0,i.jsx)(t.code,{children:"jest.config.js"}),", or ",(0,i.jsx)(t.code,{children:"jest.config.ts"})," file."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",metastring:'title="jest.config.ts"',children:"import type { Config } from 'jest'\nimport { createDefaultPreset } from 'ts-jest'\n\nconst config: Config = {\n  // [...]\n  ...createDefaultPreset(),\n}\n\nexport default config\n"})}),"\n",(0,i.jsx)(t.admonition,{type:"important",children:(0,i.jsxs)(t.p,{children:["When using TypeScript Jest config file, Jest will use ",(0,i.jsx)(t.code,{children:"ts-node"})," to compile the config file. ",(0,i.jsx)(t.code,{children:"ts-jest"})," doesn't take part in\nthat process."]})}),"\n",(0,i.jsx)(t.h3,{id:"options",children:"Options"}),"\n",(0,i.jsx)(t.p,{children:"All options have default values which should fit most of the projects. Click on the option's name to see details and example(s)."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Option"}),(0,i.jsx)(t.th,{children:"Description"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Default"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"options/compiler",children:(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:"compiler"})})})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"options/compiler",children:"TypeScript module to use as compiler."})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"string"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:'"typescript"'})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"options/tsconfig",children:(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:"tsconfig"})})})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"options/tsconfig",children:"TypeScript compiler related configuration."})}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.code,{children:"string"}),"|",(0,i.jsx)(t.code,{children:"object"}),"|",(0,i.jsx)(t.code,{children:"boolean"})]}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.em,{children:"auto"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"options/isolatedModules",children:(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:"isolatedModules"})})})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"options/isolatedModules",children:"Disable type-checking"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"boolean"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.em,{children:"disabled"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"options/astTransformers",children:(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:"astTransformers"})})})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"options/astTransformers",children:"Custom TypeScript AST transformers"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"object"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.em,{children:"auto"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"options/diagnostics",children:(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:"diagnostics"})})})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"options/diagnostics",children:"Diagnostics related configuration."})}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.code,{children:"boolean"}),"|",(0,i.jsx)(t.code,{children:"object"})]}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.em,{children:"enabled"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"options/babelConfig",children:(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:"babelConfig"})})})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"options/babelConfig",children:"Babel(Jest) related configuration."})}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.code,{children:"boolean"}),"|",(0,i.jsx)(t.code,{children:"string"}),"|",(0,i.jsx)(t.code,{children:"object"})]}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.em,{children:"disabled"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"options/stringifyContentPathRegex",children:(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:"stringifyContentPathRegex"})})})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"options/stringifyContentPathRegex",children:"Files which will become modules returning self content."})}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.code,{children:"string"}),"|",(0,i.jsx)(t.code,{children:"RegExp"})]}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.em,{children:"disabled"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"options/useESM",children:(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:"useESM"})})})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"options/useESM",children:"Enable ESM support"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"boolean"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.em,{children:"auto"})})]})]})]})]})}function a(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},65:function(e,t,s){s.d(t,{Z:function(){return d},a:function(){return o}});var n=s(7294);let i={},r=n.createContext(i);function o(e){let t=n.useContext(r);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);