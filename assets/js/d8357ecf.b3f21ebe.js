"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([[5580],{1466:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>a,frontMatter:()=>r,metadata:()=>n,toc:()=>p});const n=JSON.parse('{"id":"getting-started/options/compiler","title":"Compiler option","description":"The compiler option allows you to define the compiler to be used. It\'ll be used to load the NodeJS module holding the TypeScript compiler.","source":"@site/versioned_docs/version-27.1/getting-started/options/compiler.md","sourceDirName":"getting-started/options","slug":"/getting-started/options/compiler","permalink":"/ts-jest/docs/27.1/getting-started/options/compiler","draft":false,"unlisted":false,"editUrl":"https://github.com/kulshekhar/ts-jest/edit/main/website/versioned_docs/version-27.1/getting-started/options/compiler.md","tags":[],"version":"27.1","lastUpdatedBy":"renovate[bot]","lastUpdatedAt":1743857040000,"frontMatter":{"title":"Compiler option"}}');var s=o(4848),i=o(8453);const r={title:"Compiler option"},l=void 0,c={},p=[{value:"Example",id:"example",level:3}];function d(e){const t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"compiler"})," option allows you to define the compiler to be used. It'll be used to load the NodeJS module holding the TypeScript compiler."]}),"\n",(0,s.jsxs)(t.p,{children:["The default value is ",(0,s.jsx)(t.code,{children:"typescript"}),", which will load the original ",(0,s.jsx)(t.a,{href:"https://www.npmjs.com/package/typescript",children:"TypeScript compiler module"}),".\nThe loaded version will depend on the one installed in your project."]}),"\n",(0,s.jsxs)(t.p,{children:["If you use a custom compiler, such as ",(0,s.jsx)(t.code,{children:"ttypescript"}),", make sure its API is the same as the original TypeScript, at least for what ",(0,s.jsx)(t.code,{children:"ts-jest"})," is using."]}),"\n",(0,s.jsx)(t.h3,{id:"example",children:"Example"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"// jest.config.js\nmodule.exports = {\n  // [...]\n  globals: {\n    'ts-jest': {\n      compiler: 'ttypescript',\n    },\n  },\n}\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'// package.json\n{\n  // [...]\n  "jest": {\n    "globals": {\n      "ts-jest": {\n        "compiler": "ttypescript"\n      }\n    }\n  }\n}\n'})})]})}function a(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,t,o)=>{o.d(t,{R:()=>r,x:()=>l});var n=o(6540);const s={},i=n.createContext(s);function r(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);