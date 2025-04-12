"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([["74"],{1740:function(t,e,s){s.r(e),s.d(e,{default:()=>m,frontMatter:()=>i,metadata:()=>n,assets:()=>c,toc:()=>d,contentTitle:()=>a});var n=JSON.parse('{"id":"getting-started/options/astTransformers","title":"AST transformers option","description":"ts-jest by default does hoisting for a few jest methods via a TypeScript AST transformer. One can also create custom","source":"@site/versioned_docs/version-29.3/getting-started/options/astTransformers.md","sourceDirName":"getting-started/options","slug":"/getting-started/options/astTransformers","permalink":"/ts-jest/docs/getting-started/options/astTransformers","draft":false,"unlisted":false,"editUrl":"https://github.com/kulshekhar/ts-jest/edit/main/website/versioned_docs/version-29.3/getting-started/options/astTransformers.md","tags":[],"version":"29.3","lastUpdatedBy":"renovate[bot]","lastUpdatedAt":1744445151000,"frontMatter":{"title":"AST transformers option"}}'),r=s("5893"),o=s("65");let i={title:"AST transformers option"},a=void 0,c={},d=[{value:"Examples",id:"examples",level:3},{value:"Basic Transformers",id:"basic-transformers",level:4},{value:"Configuring transformers with options",id:"configuring-transformers-with-options",level:4},{value:"Writing custom TypeScript AST transformers",id:"writing-custom-typescript-ast-transformers",level:3}];function l(t){let e={a:"a",admonition:"admonition",code:"code",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...t.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"ts-jest"})," by default does hoisting for a few ",(0,r.jsx)(e.code,{children:"jest"})," methods via a TypeScript AST transformer. One can also create custom\nTypeScript AST transformers and provide them to ",(0,r.jsx)(e.code,{children:"ts-jest"})," to include into compilation process."]}),"\n",(0,r.jsxs)(e.p,{children:["The option is ",(0,r.jsx)(e.code,{children:"astTransformers"})," and it allows ones to specify which 3 types of TypeScript AST transformers to use with ",(0,r.jsx)(e.code,{children:"ts-jest"}),":"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"before"})," means your transformers get run before TS ones, which means your transformers will get raw TS syntax\ninstead of transpiled syntax (e.g ",(0,r.jsx)(e.code,{children:"import"})," instead of ",(0,r.jsx)(e.code,{children:"require"})," or ",(0,r.jsx)(e.code,{children:"define"})," )."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"after"})," means your transformers get run after TS ones, which gets transpiled syntax."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"afterDeclarations"})," means your transformers get run during ",(0,r.jsx)(e.code,{children:"d.ts"})," generation phase, allowing you to transform output type declarations."]}),"\n"]}),"\n",(0,r.jsx)(e.h3,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(e.h4,{id:"basic-transformers",children:"Basic Transformers"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",metastring:'title="jest.config.ts"',children:"import type { Config } from 'jest'\n\nconst jestConfig: Config = {\n  // [...]\n  transform: {\n    // '^.+\\\\.[tj]sx?$' to process ts,js,tsx,jsx with `ts-jest`\n    // '^.+\\\\.m?[tj]sx?$' to process ts,js,tsx,jsx,mts,mjs,mtsx,mjsx with `ts-jest`\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        astTransformers: {\n          before: ['my-custom-transformer'],\n        },\n      },\n    ],\n  },\n}\n\nexport default jestConfig\n"})}),"\n",(0,r.jsx)(e.h4,{id:"configuring-transformers-with-options",children:"Configuring transformers with options"}),"\n",(0,r.jsx)(e.admonition,{type:"important",children:(0,r.jsxs)(e.p,{children:["The ",(0,r.jsx)(e.code,{children:"options"})," config option will be serialized by ",(0,r.jsx)(e.a,{href:"https://github.com/jestjs/jest/tree/main/packages/jest-worker",children:(0,r.jsx)(e.code,{children:"jest-worker"})})," therefore only ",(0,r.jsx)(e.strong,{children:"SERIALIZABLE"})," values are allowed."]})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",metastring:'title="jest.config.ts"',children:"import type { Config } from 'jest'\n\nconst jestConfig: Config = {\n  // [...]\n  transform: {\n    // '^.+\\\\.[tj]sx?$' to process ts,js,tsx,jsx with `ts-jest`\n    // '^.+\\\\.m?[tj]sx?$' to process ts,js,tsx,jsx,mts,mjs,mtsx,mjsx with `ts-jest`\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        astTransformers: {\n          before: [\n            {\n              path: 'my-custom-transformer-that-needs-extra-opts',\n              options: {}, // extra options to pass to transformers here\n            },\n          ],\n        },\n      },\n    ],\n  },\n}\n\nexport default jestConfig\n"})}),"\n",(0,r.jsx)(e.h3,{id:"writing-custom-typescript-ast-transformers",children:"Writing custom TypeScript AST transformers"}),"\n",(0,r.jsxs)(e.p,{children:["To write a custom TypeScript AST transformers, one can take a look at ",(0,r.jsx)(e.a,{href:"https://github.com/kulshekhar/ts-jest/tree/main/src/transformers",children:"the one"})," that ",(0,r.jsx)(e.code,{children:"ts-jest"})," is using."]})]})}function m(t={}){let{wrapper:e}={...(0,o.a)(),...t.components};return e?(0,r.jsx)(e,{...t,children:(0,r.jsx)(l,{...t})}):l(t)}},65:function(t,e,s){s.d(e,{Z:function(){return a},a:function(){return i}});var n=s(7294);let r={},o=n.createContext(r);function i(t){let e=n.useContext(o);return n.useMemo(function(){return"function"==typeof t?t(e):{...e,...t}},[e,t])}function a(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:i(t.components),n.createElement(o.Provider,{value:e},t.children)}}}]);