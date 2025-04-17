"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([["3421"],{6937:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>l,metadata:()=>s,assets:()=>a,toc:()=>r,contentTitle:()=>d});var s=JSON.parse('{"id":"getting-started/options/isolatedModules","title":"isolatedModules option","description":"This page is now DEPRECATED and will be removed together with the config option isolatedModules in the next major release. Please use isolatedModules option in tsconfig.json instead.","source":"@site/docs/getting-started/options/isolatedModules.md","sourceDirName":"getting-started/options","slug":"/getting-started/options/isolatedModules","permalink":"/ts-jest/docs/next/getting-started/options/isolatedModules","draft":false,"unlisted":false,"editUrl":"https://github.com/kulshekhar/ts-jest/edit/main/website/docs/getting-started/options/isolatedModules.md","tags":[],"version":"current","lastUpdatedBy":"dependabot[bot]","lastUpdatedAt":1744874816000,"frontMatter":{"title":"isolatedModules option"}}'),o=n("5893"),i=n("65");let l={title:"isolatedModules option"},d=void 0,a={},r=[{value:"Example",id:"example",level:3},{value:"Performance",id:"performance",level:2},{value:"Example",id:"example-1",level:3},{value:"Caveats",id:"caveats",level:2}];function c(e){let t={admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.admonition,{title:"DEPRECATED",type:"warning",children:(0,o.jsxs)(t.p,{children:["This page is now ",(0,o.jsx)(t.strong,{children:"DEPRECATED"})," and will be removed together with the config option ",(0,o.jsx)(t.code,{children:"isolatedModules"})," in the next major release. Please use ",(0,o.jsx)(t.code,{children:"isolatedModules"})," option in ",(0,o.jsx)(t.code,{children:"tsconfig.json"})," instead."]})}),"\n",(0,o.jsxs)(t.p,{children:["By default ",(0,o.jsx)(t.code,{children:"ts-jest"})," uses TypeScript compiler in the context of a project (yours), with full type-checking and features.\nBut it can also be used to compile each file separately, what TypeScript calls an 'isolated module'.\nThat's what the ",(0,o.jsx)(t.code,{children:"isolatedModules"})," option (which defaults to ",(0,o.jsx)(t.code,{children:"false"}),") does."]}),"\n",(0,o.jsxs)(t.p,{children:["You'll lose type-checking ability and some features such as ",(0,o.jsx)(t.code,{children:"const enum"}),", but in the case you plan on using Jest with the cache disabled (",(0,o.jsx)(t.code,{children:"jest --no-cache"}),"), your tests will then run much faster."]}),"\n",(0,o.jsx)(t.p,{children:"Here is how to disable type-checking and compile each file as an isolated module:"}),"\n",(0,o.jsx)(t.h3,{id:"example",children:"Example"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",metastring:'title="jest.config.ts"',children:"import type { Config } from 'jest'\n\nconst jestConfig: Config = {\n  // [...]\n  transform: {\n    // '^.+\\\\.[tj]sx?$' to process js/ts with `ts-jest`\n    // '^.+\\\\.m?[tj]sx?$' to process js/ts/mjs/mts with `ts-jest`\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        isolatedModules: true,\n      },\n    ],\n  },\n}\n\nexport default jestConfig\n"})}),"\n",(0,o.jsx)(t.h2,{id:"performance",children:"Performance"}),"\n",(0,o.jsxs)(t.p,{children:["Using ",(0,o.jsx)(t.code,{children:"isolatedModules: false"})," comes with a cost of performance comparing to ",(0,o.jsx)(t.code,{children:"isolatedModules: true"}),". There is a way\nto improve the performance when using this mode by changing the value of ",(0,o.jsx)(t.code,{children:"include"})," in ",(0,o.jsx)(t.code,{children:"tsconfig"})," which is used by ",(0,o.jsx)(t.code,{children:"ts-jest"}),".\nThe least amount of files which are provided in ",(0,o.jsx)(t.code,{children:"include"}),", the more performance the test run can gain."]}),"\n",(0,o.jsx)(t.h3,{id:"example-1",children:"Example"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-json",metastring:'title="tsconfig.json"',children:'{\n  // ...other configs\n  "include": ["my-typings/*", "my-global-modules/*"]\n}\n'})}),"\n",(0,o.jsx)(t.h2,{id:"caveats",children:"Caveats"}),"\n",(0,o.jsxs)(t.p,{children:["Limiting the amount of files loaded via ",(0,o.jsx)(t.code,{children:"include"})," can greatly boost performance when running tests. However, the trade off\nis ",(0,o.jsx)(t.code,{children:"ts-jest"})," might not recognize all files which are intended to use with ",(0,o.jsx)(t.code,{children:"jest"}),". One can run into issues with custom typings,\nglobal modules, etc..."]}),"\n",(0,o.jsxs)(t.p,{children:["The suggested solution is what is needed for the test environment should be captured by\nglob patterns in ",(0,o.jsx)(t.code,{children:"include"}),", to gain both performance boost and avoid breaking behaviors."]})]})}function h(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},65:function(e,t,n){n.d(t,{Z:function(){return d},a:function(){return l}});var s=n(7294);let o={},i=s.createContext(o);function l(e){let t=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);