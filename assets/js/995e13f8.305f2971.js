"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([["2254"],{8008:function(t,e,s){s.r(e),s.d(e,{default:()=>p,frontMatter:()=>r,metadata:()=>n,assets:()=>d,toc:()=>c,contentTitle:()=>a});var n=JSON.parse('{"id":"getting-started/options/useESM","title":"useESM option","description":"The useESM option allows ts-jest to transform codes to ESM syntax if possible.","source":"@site/versioned_docs/version-29.3/getting-started/options/useESM.md","sourceDirName":"getting-started/options","slug":"/getting-started/options/useESM","permalink":"/ts-jest/docs/getting-started/options/useESM","draft":false,"unlisted":false,"editUrl":"https://github.com/kulshekhar/ts-jest/edit/main/website/versioned_docs/version-29.3/getting-started/options/useESM.md","tags":[],"version":"29.3","lastUpdatedBy":"renovate[bot]","lastUpdatedAt":1744812965000,"frontMatter":{"title":"useESM option"}}'),o=s("5893"),i=s("65");let r={title:"useESM option"},a=void 0,d={},c=[{value:"Examples",id:"examples",level:3}];function l(t){let e={a:"a",admonition:"admonition",code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...t.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(e.p,{children:["The ",(0,o.jsx)(e.code,{children:"useESM"})," option allows ",(0,o.jsx)(e.code,{children:"ts-jest"})," to transform codes to ESM syntax ",(0,o.jsx)(e.strong,{children:"if possible"}),"."]}),"\n",(0,o.jsxs)(e.p,{children:["The default value is ",(0,o.jsx)(e.strong,{children:"false"}),", ",(0,o.jsx)(e.code,{children:"ts-jest"})," will transform codes to ",(0,o.jsx)(e.code,{children:"CommonJS"})," syntax."]}),"\n",(0,o.jsx)(e.admonition,{type:"tip",children:(0,o.jsxs)(e.p,{children:["See more about ESM support in ",(0,o.jsx)(e.a,{href:"/ts-jest/docs/guides/esm-support",children:"dedicated guide"})]})}),"\n",(0,o.jsx)(e.h3,{id:"examples",children:"Examples"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-ts",metastring:'title="jest.config.ts"',children:"import type { Config } from 'jest'\n\nconst jestConfig: Config = {\n  // [...]\n  transform: {\n    // '^.+\\\\.[tj]sx?$' to process ts,js,tsx,jsx with `ts-jest`\n    // '^.+\\\\.m?[tj]sx?$' to process ts,js,tsx,jsx,mts,mjs,mtsx,mjsx with `ts-jest`\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        useESM: true,\n      },\n    ],\n  },\n}\n\nexport default jestConfig\n"})})]})}function p(t={}){let{wrapper:e}={...(0,i.a)(),...t.components};return e?(0,o.jsx)(e,{...t,children:(0,o.jsx)(l,{...t})}):l(t)}},65:function(t,e,s){s.d(e,{Z:function(){return a},a:function(){return r}});var n=s(7294);let o={},i=n.createContext(o);function r(t){let e=n.useContext(i);return n.useMemo(function(){return"function"==typeof t?t(e):{...e,...t}},[e,t])}function a(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(o):t.components||o:r(t.components),n.createElement(i.Provider,{value:e},t.children)}}}]);