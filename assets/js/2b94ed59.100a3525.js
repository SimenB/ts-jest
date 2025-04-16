"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([["5398"],{2776:function(e,t,n){n.r(t),n.d(t,{default:()=>d,frontMatter:()=>r,metadata:()=>o,assets:()=>c,toc:()=>p,contentTitle:()=>l});var o=JSON.parse('{"id":"getting-started/options/compiler","title":"Compiler option","description":"The compiler option allows you to define the compiler to be used. It\'ll be used to load the NodeJS module holding the TypeScript compiler.","source":"@site/versioned_docs/version-26.5/getting-started/options/compiler.md","sourceDirName":"getting-started/options","slug":"/getting-started/options/compiler","permalink":"/ts-jest/docs/26.5/getting-started/options/compiler","draft":false,"unlisted":false,"editUrl":"https://github.com/kulshekhar/ts-jest/edit/main/website/versioned_docs/version-26.5/getting-started/options/compiler.md","tags":[],"version":"26.5","lastUpdatedBy":"renovate[bot]","lastUpdatedAt":1744812965000,"frontMatter":{"title":"Compiler option"}}'),s=n("5893"),i=n("65");let r={title:"Compiler option"},l=void 0,c={},p=[{value:"Example",id:"example",level:3}];function a(e){let t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"compiler"})," option allows you to define the compiler to be used. It'll be used to load the NodeJS module holding the TypeScript compiler."]}),"\n",(0,s.jsxs)(t.p,{children:["The default value is ",(0,s.jsx)(t.code,{children:"typescript"}),", which will load the original ",(0,s.jsx)(t.a,{href:"https://www.npmjs.com/package/typescript",children:"TypeScript compiler module"}),".\nThe loaded version will depend on the one installed in your project."]}),"\n",(0,s.jsxs)(t.p,{children:["If you use a custom compiler, such as ",(0,s.jsx)(t.code,{children:"ttypescript"}),", make sure its API is the same as the original TypeScript, at least for what ",(0,s.jsx)(t.code,{children:"ts-jest"})," is using."]}),"\n",(0,s.jsx)(t.h3,{id:"example",children:"Example"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"// jest.config.js\nmodule.exports = {\n  // [...]\n  globals: {\n    'ts-jest': {\n      compiler: 'ttypescript',\n    },\n  },\n}\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'// package.json\n{\n  // [...]\n  "jest": {\n    "globals": {\n      "ts-jest": {\n        "compiler": "ttypescript"\n      }\n    }\n  }\n}\n'})})]})}function d(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},65:function(e,t,n){n.d(t,{Z:function(){return l},a:function(){return r}});var o=n(7294);let s={},i=o.createContext(s);function r(e){let t=o.useContext(i);return o.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);