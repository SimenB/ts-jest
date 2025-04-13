"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([["279"],{5786:function(e,n,s){s.r(n),s.d(n,{default:()=>a,frontMatter:()=>r,metadata:()=>t,assets:()=>c,toc:()=>l,contentTitle:()=>d});var t=JSON.parse('{"id":"getting-started/options","title":"Options","description":"Introduction","source":"@site/versioned_docs/version-28.0/getting-started/options.md","sourceDirName":"getting-started","slug":"/getting-started/options","permalink":"/ts-jest/docs/28.0/getting-started/options","draft":false,"unlisted":false,"editUrl":"https://github.com/kulshekhar/ts-jest/edit/main/website/versioned_docs/version-28.0/getting-started/options.md","tags":[],"version":"28.0","lastUpdatedBy":"renovate[bot]","lastUpdatedAt":1744541888000,"frontMatter":{"id":"options","title":"Options"},"sidebar":"version-28.0-docs","previous":{"title":"Presets","permalink":"/ts-jest/docs/28.0/getting-started/presets"},"next":{"title":"Paths mapping","permalink":"/ts-jest/docs/28.0/getting-started/paths-mapping"}}'),i=s("5893"),o=s("65");let r={id:"options",title:"Options"},d=void 0,c={},l=[{value:"Introduction",id:"introduction",level:3},{value:"Options",id:"options",level:3}];function h(e){let n={a:"a",admonition:"admonition",code:"code",em:"em",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h3,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsxs)(n.p,{children:["All ",(0,i.jsx)(n.code,{children:"ts-jest"})," specific options are located under the ",(0,i.jsx)(n.code,{children:"globals"})," of Jest config object in the ",(0,i.jsx)(n.code,{children:"package.json"})," file of your project,\nor through a ",(0,i.jsx)(n.code,{children:"jest.config.js"}),", or ",(0,i.jsx)(n.code,{children:"jest.config.ts"})," file."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'// package.json\n{\n  // [...]\n  "jest": {\n    "globals": {\n      "ts-jest": {\n        // ts-jest configuration goes here\n      }\n    }\n  }\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"Or through JavaScript:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"// jest.config.js\nmodule.exports = {\n  // [...]\n  globals: {\n    'ts-jest': {\n      // ts-jest configuration goes here\n    },\n  },\n}\n"})}),"\n",(0,i.jsxs)(n.admonition,{type:"tip",children:[(0,i.jsxs)(n.p,{children:["To utilize IDE suggestions, you can use ",(0,i.jsx)(n.code,{children:"JSDoc"})," comments to provide suggested ",(0,i.jsx)(n.code,{children:"ts-jest"})," configs for your Jest config:"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"// jest.config.js\n/** @type {import('ts-jest').InitialOptionsTsJest} */\nmodule.exports = config = {\n  // [...]\n  globals: {\n    'ts-jest': {\n      // ts-jest configuration goes here and your IDE will suggest which configs when typing\n    },\n  },\n}\n"})})]}),"\n",(0,i.jsxs)(n.p,{children:["Or through TypeScript (if ",(0,i.jsx)(n.code,{children:"ts-node"})," is installed):"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"// jest.config.ts\nimport type { InitialOptionsTsJest } from 'ts-jest'\n\nconst config: InitialOptionsTsJest = {\n  globals: {\n    'ts-jest': {\n      // ts-jest configuration goes here\n    },\n  },\n}\nexport default config\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"important",children:(0,i.jsxs)(n.p,{children:["When using TypeScript Jest config file, Jest will use ",(0,i.jsx)(n.code,{children:"ts-node"})," to compile the config file. ",(0,i.jsx)(n.code,{children:"ts-jest"})," doesn't take part in\nthat process."]})}),"\n",(0,i.jsx)(n.h3,{id:"options",children:"Options"}),"\n",(0,i.jsx)(n.p,{children:"All options have default values which should fit most of the projects. Click on the option's name to see details and example(s)."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Option"}),(0,i.jsx)(n.th,{children:"Description"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Default"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"options/compiler",children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"compiler"})})})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"options/compiler",children:"TypeScript module to use as compiler."})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:'"typescript"'})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"options/tsconfig",children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"tsconfig"})})})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"options/tsconfig",children:"TypeScript compiler related configuration."})}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:"string"}),"|",(0,i.jsx)(n.code,{children:"object"}),"|",(0,i.jsx)(n.code,{children:"boolean"})]}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.em,{children:"auto"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"options/isolatedModules",children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"isolatedModules"})})})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"options/isolatedModules",children:"Disable type-checking"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"boolean"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.em,{children:"disabled"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"options/astTransformers",children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"astTransformers"})})})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"options/astTransformers",children:"Custom TypeScript AST transformers"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"object"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.em,{children:"auto"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"options/diagnostics",children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"diagnostics"})})})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"options/diagnostics",children:"Diagnostics related configuration."})}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:"boolean"}),"|",(0,i.jsx)(n.code,{children:"object"})]}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.em,{children:"enabled"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"options/babelConfig",children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"babelConfig"})})})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"options/babelConfig",children:"Babel(Jest) related configuration."})}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:"boolean"}),"|",(0,i.jsx)(n.code,{children:"string"}),"|",(0,i.jsx)(n.code,{children:"object"})]}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.em,{children:"disabled"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"options/stringifyContentPathRegex",children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"stringifyContentPathRegex"})})})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"options/stringifyContentPathRegex",children:"Files which will become modules returning self content."})}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:"string"}),"|",(0,i.jsx)(n.code,{children:"RegExp"})]}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.em,{children:"disabled"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"options/useESM",children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"useESM"})})})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"options/useESM",children:"Enable ESM support"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"boolean"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.em,{children:"auto"})})]})]})]})]})}function a(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},65:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return r}});var t=s(7294);let i={},o=t.createContext(i);function r(e){let n=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);