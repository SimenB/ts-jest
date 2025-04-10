"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([[1797],{6111:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"babel7-or-ts","title":"Babel7 or TypeScript","description":"In Sept. 2018 Babel7 got released with an interesting preset: @babel/preset-typescript.","source":"@site/versioned_docs/version-26.5/babel7-or-ts.md","sourceDirName":".","slug":"/babel7-or-ts","permalink":"/ts-jest/docs/26.5/babel7-or-ts","draft":false,"unlisted":false,"editUrl":"https://github.com/kulshekhar/ts-jest/edit/main/website/versioned_docs/version-26.5/babel7-or-ts.md","tags":[],"version":"26.5","lastUpdatedBy":"ahnpnl","lastUpdatedAt":1744315729000,"frontMatter":{"id":"babel7-or-ts","title":"Babel7 or TypeScript"},"sidebar":"version-26.5-docs","previous":{"title":"Using with monorepo","permalink":"/ts-jest/docs/26.5/guides/using-with-monorepo"},"next":{"title":"Migration from <=23.10","permalink":"/ts-jest/docs/26.5/migration"}}');var i=t(4848),o=t(8453);const r={id:"babel7-or-ts",title:"Babel7 or TypeScript"},c=void 0,a={},l=[{value:"Limitations",id:"limitations",level:2},{value:"No type-checking",id:"no-type-checking",level:4},{value:"No <code>namespace</code>",id:"no-namespace",level:4},{value:"No <code>const enum</code>",id:"no-const-enum",level:4},{value:"No declaration merging (<code>enum</code>, <code>namespace</code>, ...)",id:"no-declaration-merging-enum-namespace-",level:4},{value:"No legacy <code>import</code>/<code>export</code>",id:"no-legacy-importexport",level:4},{value:"No caret type-casting with JSX enabled",id:"no-caret-type-casting-with-jsx-enabled",level:4}];function d(e){const n={a:"a",code:"code",h2:"h2",h4:"h4",hr:"hr",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["In Sept. 2018 Babel7 got released with an interesting preset: ",(0,i.jsx)(n.code,{children:"@babel/preset-typescript"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["The goal is to make it easy for users using Babel to try TypeScript without moving out from Babel, just by adding a preset in their Babel config (here is the ",(0,i.jsx)(n.a,{href:"https://blogs.msdn.microsoft.com/typescript/2018/08/27/typescript-and-babel-7/",children:"MSDN blog post"})," about TypeScript and Babel 7)."]}),"\n",(0,i.jsx)(n.h2,{id:"limitations",children:"Limitations"}),"\n",(0,i.jsxs)(n.p,{children:["While ",(0,i.jsx)(n.code,{children:"@babel/preset-typescript"})," is a great preset, you must know the limitation of it. Here is what is possible with TypeScript (and ",(0,i.jsx)(n.code,{children:"ts-jest"}),"), which is not with Babel7 and ",(0,i.jsx)(n.code,{children:"@babel/preset-typescript"}),":"]}),"\n",(0,i.jsx)(n.h4,{id:"no-type-checking",children:"No type-checking"}),"\n",(0,i.jsxs)(n.p,{children:["This is the big ",(0,i.jsx)(n.strong,{children:"PRO"})," of using TypeScript vs Babel, you have type-checking out of the box."]}),"\n",(0,i.jsxs)(n.p,{children:["You'll get a more fluent TDD experience (when using ",(0,i.jsx)(n.code,{children:"ts-jest"}),") since files will be type-checked at the same time they're compiled and ran."]}),"\n",(0,i.jsx)(n.p,{children:"Here TypeScript will throw while Babel won't:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"const str: string = 42\n"})}),"\n",(0,i.jsx)(n.p,{children:'With Babel, files are transpiled as isolated modules, there is no notion of "project". With TypeScript, files are part of a project and are compiled in that scope.'}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsxs)(n.h4,{id:"no-namespace",children:["No ",(0,i.jsx)(n.code,{children:"namespace"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"namespace app {\n  export const VERSION = '1.0.0'\n  export class App {\n    /* ... */\n  }\n}\n"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsxs)(n.h4,{id:"no-const-enum",children:["No ",(0,i.jsx)(n.code,{children:"const enum"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"const enum Directions {\n  Up,\n  Down,\n  Left,\n  Right,\n}\n"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsxs)(n.h4,{id:"no-declaration-merging-enum-namespace-",children:["No declaration merging (",(0,i.jsx)(n.code,{children:"enum"}),", ",(0,i.jsx)(n.code,{children:"namespace"}),", ...)"]}),"\n",(0,i.jsxs)(n.p,{children:["You won't be able to do ",(0,i.jsx)(n.a,{href:"https://www.typescriptlang.org/docs/handbook/declaration-merging.html",children:"declaration merging"}),"."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsxs)(n.h4,{id:"no-legacy-importexport",children:["No legacy ",(0,i.jsx)(n.code,{children:"import"}),"/",(0,i.jsx)(n.code,{children:"export"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import lib = require('lib')\n// ...\nexport = myVar\n"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h4,{id:"no-caret-type-casting-with-jsx-enabled",children:"No caret type-casting with JSX enabled"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"const val = <string>input\n"})})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>c});var s=t(6540);const i={},o=s.createContext(i);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);