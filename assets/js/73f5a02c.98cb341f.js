"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([["1040"],{1451:function(t,e,n){n.r(e),n.d(e,{default:()=>h,frontMatter:()=>r,metadata:()=>o,assets:()=>c,toc:()=>d,contentTitle:()=>a});var o=JSON.parse('{"id":"getting-started/options/stringifyContentPathRegex","title":"Stringify content option","description":"The stringifyContentPathRegex option has been kept for backward compatibility of HTML_TRANSFORM","source":"@site/docs/getting-started/options/stringifyContentPathRegex.md","sourceDirName":"getting-started/options","slug":"/getting-started/options/stringifyContentPathRegex","permalink":"/ts-jest/docs/next/getting-started/options/stringifyContentPathRegex","draft":false,"unlisted":false,"editUrl":"https://github.com/kulshekhar/ts-jest/edit/main/website/docs/getting-started/options/stringifyContentPathRegex.md","tags":[],"version":"current","lastUpdatedBy":"renovate[bot]","lastUpdatedAt":1744445151000,"frontMatter":{"title":"Stringify content option"}}'),s=n("5893"),i=n("65");let r={title:"Stringify content option"},a=void 0,c={},d=[{value:"Example",id:"example",level:3}];function l(t){let e={code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...t.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(e.p,{children:["The ",(0,s.jsx)(e.code,{children:"stringifyContentPathRegex"})," option has been kept for backward compatibility of ",(0,s.jsx)(e.code,{children:"__HTML_TRANSFORM__"}),"\nIt's a regular expression pattern used to match the path of file to be transformed.\nIf it matches, the file will be exported as a module exporting its content."]}),"\n",(0,s.jsxs)(e.p,{children:["Let's say for example that you have a file ",(0,s.jsx)(e.code,{children:"foo.ts"})," which contains ",(0,s.jsx)(e.code,{children:'export default "bar"'}),", and your ",(0,s.jsx)(e.code,{children:"stringifyContentPathRegex"})," is set to ",(0,s.jsx)(e.code,{children:"foo\\\\.ts$"}),", the resulting module won't be the result of compiling ",(0,s.jsx)(e.code,{children:"foo.ts"})," source, but instead it'll be a module which exports the string ",(0,s.jsx)(e.code,{children:'"export default \\"bar\\""'}),"."]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"CAUTION"}),": Whatever file(s) you want to match with ",(0,s.jsx)(e.code,{children:"stringifyContentPathRegex"})," pattern, you must ensure the Jest ",(0,s.jsx)(e.code,{children:"transform"})," option pointing to ",(0,s.jsx)(e.code,{children:"ts-jest"})," matches them. You may also have to add the extension(s) of this/those file(s) to ",(0,s.jsx)(e.code,{children:"moduleFileExtensions"})," Jest option."]}),"\n",(0,s.jsx)(e.h3,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(e.p,{children:["In the ",(0,s.jsx)(e.code,{children:"jest.config.js"})," version, you could do as in the ",(0,s.jsx)(e.code,{children:"package.json"})," version of the config, but extending from the preset will ensure more compatibility without any changes when updating."]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",metastring:'title="jest.config.ts"',children:"import type { Config } from 'jest'\n\nconst jestConfig: Config = {\n  // [...]\n  moduleFileExtensions: ['html'],\n  transform: {\n    // [...]\n    '\\\\.html$': [\n      'ts-jest',\n      {\n        stringifyContentPathRegex: /\\.html$/,\n      },\n    ],\n  },\n}\n\nexport default jestConfig\n"})})]})}function h(t={}){let{wrapper:e}={...(0,i.a)(),...t.components};return e?(0,s.jsx)(e,{...t,children:(0,s.jsx)(l,{...t})}):l(t)}},65:function(t,e,n){n.d(e,{Z:function(){return a},a:function(){return r}});var o=n(7294);let s={},i=o.createContext(s);function r(t){let e=o.useContext(i);return o.useMemo(function(){return"function"==typeof t?t(e):{...e,...t}},[e,t])}function a(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:r(t.components),o.createElement(i.Provider,{value:e},t.children)}}}]);