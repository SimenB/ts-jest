"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([["4308"],{3397:function(e,t,n){n.r(t),n.d(t,{default:()=>p,frontMatter:()=>r,metadata:()=>s,assets:()=>a,toc:()=>l,contentTitle:()=>c});var s=JSON.parse('{"id":"babel7-or-ts","title":"Babel7 or TypeScript","description":"In Sept. 2018 Babel7 got released with an interesting preset: @babel/preset-typescript.","source":"@site/versioned_docs/version-27.1/babel7-or-ts.md","sourceDirName":".","slug":"/babel7-or-ts","permalink":"/ts-jest/docs/27.1/babel7-or-ts","draft":false,"unlisted":false,"editUrl":"https://github.com/kulshekhar/ts-jest/edit/main/website/versioned_docs/version-27.1/babel7-or-ts.md","tags":[],"version":"27.1","lastUpdatedBy":"renovate[bot]","lastUpdatedAt":1744958977000,"frontMatter":{"id":"babel7-or-ts","title":"Babel7 or TypeScript"},"sidebar":"version-27.1-docs","previous":{"title":"Using with monorepo","permalink":"/ts-jest/docs/27.1/guides/using-with-monorepo"},"next":{"title":"Migration from <=23.10","permalink":"/ts-jest/docs/27.1/migration"}}'),i=n("5893"),o=n("65");let r={id:"babel7-or-ts",title:"Babel7 or TypeScript"},c=void 0,a={},l=[{value:"Limitations",id:"limitations",level:2},{value:"No type-checking",id:"no-type-checking",level:4},{value:"No <code>namespace</code>",id:"no-namespace",level:4},{value:"No <code>const enum</code>",id:"no-const-enum",level:4},{value:"No declaration merging (<code>enum</code>, <code>namespace</code>, ...)",id:"no-declaration-merging-enum-namespace-",level:4},{value:"No legacy <code>import</code>/<code>export</code>",id:"no-legacy-importexport",level:4},{value:"No caret type-casting with JSX enabled",id:"no-caret-type-casting-with-jsx-enabled",level:4}];function d(e){let t={a:"a",code:"code",h2:"h2",h4:"h4",hr:"hr",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["In Sept. 2018 Babel7 got released with an interesting preset: ",(0,i.jsx)(t.code,{children:"@babel/preset-typescript"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["The goal is to make it easy for users using Babel to try TypeScript without moving out from Babel, just by adding a preset in their Babel config (here is the ",(0,i.jsx)(t.a,{href:"https://blogs.msdn.microsoft.com/typescript/2018/08/27/typescript-and-babel-7/",children:"MSDN blog post"})," about TypeScript and Babel 7)."]}),"\n",(0,i.jsx)(t.h2,{id:"limitations",children:"Limitations"}),"\n",(0,i.jsxs)(t.p,{children:["While ",(0,i.jsx)(t.code,{children:"@babel/preset-typescript"})," is a great preset, you must know the limitation of it. Here is what is possible with TypeScript (and ",(0,i.jsx)(t.code,{children:"ts-jest"}),"), which is not with Babel7 and ",(0,i.jsx)(t.code,{children:"@babel/preset-typescript"}),":"]}),"\n",(0,i.jsx)(t.h4,{id:"no-type-checking",children:"No type-checking"}),"\n",(0,i.jsxs)(t.p,{children:["This is the big ",(0,i.jsx)(t.strong,{children:"PRO"})," of using TypeScript vs Babel, you have type-checking out of the box."]}),"\n",(0,i.jsxs)(t.p,{children:["You'll get a more fluent TDD experience (when using ",(0,i.jsx)(t.code,{children:"ts-jest"}),") since files will be type-checked at the same time they're compiled and ran."]}),"\n",(0,i.jsx)(t.p,{children:"Here TypeScript will throw while Babel won't:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"const str: string = 42\n"})}),"\n",(0,i.jsx)(t.p,{children:'With Babel, files are transpiled as isolated modules, there is no notion of "project". With TypeScript, files are part of a project and are compiled in that scope.'}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsxs)(t.h4,{id:"no-namespace",children:["No ",(0,i.jsx)(t.code,{children:"namespace"})]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"namespace app {\n  export const VERSION = '1.0.0'\n  export class App {\n    /* ... */\n  }\n}\n"})}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsxs)(t.h4,{id:"no-const-enum",children:["No ",(0,i.jsx)(t.code,{children:"const enum"})]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"const enum Directions {\n  Up,\n  Down,\n  Left,\n  Right,\n}\n"})}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsxs)(t.h4,{id:"no-declaration-merging-enum-namespace-",children:["No declaration merging (",(0,i.jsx)(t.code,{children:"enum"}),", ",(0,i.jsx)(t.code,{children:"namespace"}),", ...)"]}),"\n",(0,i.jsxs)(t.p,{children:["You won't be able to do ",(0,i.jsx)(t.a,{href:"https://www.typescriptlang.org/docs/handbook/declaration-merging.html",children:"declaration merging"}),"."]}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsxs)(t.h4,{id:"no-legacy-importexport",children:["No legacy ",(0,i.jsx)(t.code,{children:"import"}),"/",(0,i.jsx)(t.code,{children:"export"})]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"import lib = require('lib')\n// ...\nexport = myVar\n"})}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h4,{id:"no-caret-type-casting-with-jsx-enabled",children:"No caret type-casting with JSX enabled"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"const val = <string>input\n"})})]})}function p(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},65:function(e,t,n){n.d(t,{Z:function(){return c},a:function(){return r}});var s=n(7294);let i={},o=s.createContext(i);function r(e){let t=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);