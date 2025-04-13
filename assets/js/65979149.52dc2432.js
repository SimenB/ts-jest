"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([["9625"],{5895:function(e,t,s){s.r(t),s.d(t,{default:()=>a,frontMatter:()=>r,metadata:()=>o,assets:()=>c,toc:()=>p,contentTitle:()=>l});var o=JSON.parse('{"id":"getting-started/options/compiler","title":"Compiler option","description":"The compiler option allows you to define the compiler to be used. It\'ll be used to load the NodeJS module holding the TypeScript compiler.","source":"@site/versioned_docs/version-29.3/getting-started/options/compiler.md","sourceDirName":"getting-started/options","slug":"/getting-started/options/compiler","permalink":"/ts-jest/docs/getting-started/options/compiler","draft":false,"unlisted":false,"editUrl":"https://github.com/kulshekhar/ts-jest/edit/main/website/versioned_docs/version-29.3/getting-started/options/compiler.md","tags":[],"version":"29.3","lastUpdatedBy":"renovate[bot]","lastUpdatedAt":1744541888000,"frontMatter":{"title":"Compiler option"}}'),n=s("5893"),i=s("65");let r={title:"Compiler option"},l=void 0,c={},p=[{value:"Example",id:"example",level:3}];function d(e){let t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"compiler"})," option allows you to define the compiler to be used. It'll be used to load the NodeJS module holding the TypeScript compiler."]}),"\n",(0,n.jsxs)(t.p,{children:["The default value is ",(0,n.jsx)(t.code,{children:"typescript"}),", which will load the original ",(0,n.jsx)(t.a,{href:"https://www.npmjs.com/package/typescript",children:"TypeScript compiler module"}),".\nThe loaded version will depend on the one installed in your project."]}),"\n",(0,n.jsxs)(t.p,{children:["If you use a custom compiler, such as ",(0,n.jsx)(t.code,{children:"ttypescript"}),", make sure its API is the same as the original TypeScript, at least for what ",(0,n.jsx)(t.code,{children:"ts-jest"})," is using."]}),"\n",(0,n.jsx)(t.h3,{id:"example",children:"Example"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",metastring:'title="jest.config.ts"',children:"import type { Config } from 'jest'\n\nconst jestConfig: Config = {\n  // [...]\n  transform: {\n    // '^.+\\\\.[tj]sx?$' to process ts,js,tsx,jsx with `ts-jest`\n    // '^.+\\\\.m?[tj]sx?$' to process ts,js,tsx,jsx,mts,mjs,mtsx,mjsx with `ts-jest`\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        compiler: 'ttypescript',\n      },\n    ],\n  },\n}\n\nexport default jestConfig\n"})})]})}function a(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},65:function(e,t,s){s.d(t,{Z:function(){return l},a:function(){return r}});var o=s(7294);let n={},i=o.createContext(n);function r(e){let t=o.useContext(i);return o.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);