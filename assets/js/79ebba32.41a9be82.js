"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([[3046],{1530:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"getting-started/options/diagnostics","title":"Diagnostics option","description":"The diagnostics option configures error reporting.","source":"@site/versioned_docs/version-29.3/getting-started/options/diagnostics.md","sourceDirName":"getting-started/options","slug":"/getting-started/options/diagnostics","permalink":"/ts-jest/docs/getting-started/options/diagnostics","draft":false,"unlisted":false,"editUrl":"https://github.com/kulshekhar/ts-jest/edit/main/website/versioned_docs/version-29.3/getting-started/options/diagnostics.md","tags":[],"version":"29.3","lastUpdatedBy":"ahnpnl","lastUpdatedAt":1744315729000,"frontMatter":{"title":"Diagnostics option"}}');var i=n(4848),o=n(8453);const r={title:"Diagnostics option"},c=void 0,l={},d=[{value:"Disabling/enabling",id:"disablingenabling",level:3},{value:"Advanced configuration",id:"advanced-configuration",level:3},{value:"Examples",id:"examples",level:3},{value:"Disabling diagnostics",id:"disabling-diagnostics",level:4},{value:"Advanced options",id:"advanced-options",level:4},{value:"Enabling diagnostics for test files only",id:"enabling-diagnostics-for-test-files-only",level:5},{value:"Do not fail on first error",id:"do-not-fail-on-first-error",level:5},{value:"Ignoring some error codes",id:"ignoring-some-error-codes",level:5}];function a(e){const s={a:"a",code:"code",em:"em",h3:"h3",h4:"h4",h5:"h5",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.code,{children:"diagnostics"})," option configures error reporting.\nIt can both be enabled/disabled entirely or limited to a specific type of errors and/or files."]}),"\n",(0,i.jsxs)(s.p,{children:["If a diagnostic is not filtered out, ",(0,i.jsx)(s.code,{children:"ts-jest"})," will fail the compilation and your test."]}),"\n",(0,i.jsx)(s.h3,{id:"disablingenabling",children:"Disabling/enabling"}),"\n",(0,i.jsxs)(s.p,{children:["By default all diagnostics are enabled. This is the same as setting the ",(0,i.jsx)(s.code,{children:"diagnostics"})," option to ",(0,i.jsx)(s.code,{children:"true"}),".\nTo disable all diagnostics, set ",(0,i.jsx)(s.code,{children:"diagnostics"})," to ",(0,i.jsx)(s.code,{children:"false"}),".\nThis might lead to slightly better performance, especially if you're not using Jest's cache."]}),"\n",(0,i.jsx)(s.h3,{id:"advanced-configuration",children:"Advanced configuration"}),"\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.code,{children:"diagnostics"})," option's value can also accept an object for more advanced configuration. Each config. key is optional:"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"warnOnly"})}),": If specified and ",(0,i.jsx)(s.code,{children:"true"}),", diagnostics will be reported but won't stop compilation (default: ",(0,i.jsx)(s.em,{children:"disabled"}),")."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"ignoreCodes"})}),": List of TypeScript error codes to ignore. Complete list can be found ",(0,i.jsx)(s.a,{href:"https://github.com/Microsoft/TypeScript/blob/main/src/compiler/diagnosticMessages.json",children:"there"}),". By default here are the ones ignored:","\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"6059"}),": ",(0,i.jsx)(s.em,{children:"'rootDir' is expected to contain all source files."})]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"18002"}),": ",(0,i.jsx)(s.em,{children:"The 'files' list in config file is empty."})," (it is strongly recommended including this one)"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"18003"}),": ",(0,i.jsx)(s.em,{children:"No inputs were found in config file."})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"exclude"})}),": If specified, diagnostics of source files which path ",(0,i.jsx)(s.strong,{children:"matches"})," will be ignored. This works a bit\nsimilar to ",(0,i.jsx)(s.code,{children:"tsconfig"})," option ",(0,i.jsx)(s.a,{href:"https://www.typescriptlang.org/tsconfig#exclude",children:"exclude"})," with the only difference is that\nin TypeScript, ",(0,i.jsx)(s.code,{children:"exclude"})," will also exclude files from compilation process."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"pretty"})}),": Enables/disables colorful and pretty output of errors (default: ",(0,i.jsx)(s.em,{children:"enabled"}),")."]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(s.h4,{id:"disabling-diagnostics",children:"Disabling diagnostics"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-ts",metastring:'title="jest.config.ts"',children:"import type { Config } from 'jest'\n\nconst jestConfig: Config = {\n  // [...]\n  transform: {\n    // '^.+\\\\.[tj]sx?$' to process ts,js,tsx,jsx with `ts-jest`\n    // '^.+\\\\.m?[tj]sx?$' to process ts,js,tsx,jsx,mts,mjs,mtsx,mjsx with `ts-jest`\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        diagnostics: false,\n      },\n    ],\n  },\n}\n\nexport default jestConfig\n"})}),"\n",(0,i.jsx)(s.h4,{id:"advanced-options",children:"Advanced options"}),"\n",(0,i.jsx)(s.h5,{id:"enabling-diagnostics-for-test-files-only",children:"Enabling diagnostics for test files only"}),"\n",(0,i.jsxs)(s.p,{children:["Assuming all your test files ends with ",(0,i.jsx)(s.code,{children:".spec.ts"})," or ",(0,i.jsx)(s.code,{children:".test.ts"}),", using the following config will enable error reporting only for those files:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-ts",metastring:'title="jest.config.ts"',children:"import type { Config } from 'jest'\n\nconst jestConfig: Config = {\n  // [...]\n  transform: {\n    // '^.+\\\\.[tj]sx?$' to process ts,js,tsx,jsx with `ts-jest`\n    // '^.+\\\\.m?[tj]sx?$' to process ts,js,tsx,jsx,mts,mjs,mtsx,mjsx with `ts-jest`\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        diagnostics: {\n          exclude: ['!**/*.(spec|test).ts'],\n        },\n      },\n    ],\n  },\n}\n\nexport default jestConfig\n"})}),"\n",(0,i.jsx)(s.h5,{id:"do-not-fail-on-first-error",children:"Do not fail on first error"}),"\n",(0,i.jsxs)(s.p,{children:["While some diagnostics are stop-blockers for the compilation, most of them are not. If you want the compilation (and so your tests) to continue when encountering those, set the ",(0,i.jsx)(s.code,{children:"warnOnly"})," to ",(0,i.jsx)(s.code,{children:"true"}),":"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-ts",metastring:'title="jest.config.ts"',children:"import type { Config } from 'jest'\n\nconst jestConfig: Config = {\n  // [...]\n  transform: {\n    // '^.+\\\\.[tj]sx?$' to process ts,js,tsx,jsx with `ts-jest`\n    // '^.+\\\\.m?[tj]sx?$' to process ts,js,tsx,jsx,mts,mjs,mtsx,mjsx with `ts-jest`\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        diagnostics: {\n          warnOnly: true,\n        },\n      },\n    ],\n  },\n}\n\nexport default jestConfig\n"})}),"\n",(0,i.jsx)(s.h5,{id:"ignoring-some-error-codes",children:"Ignoring some error codes"}),"\n",(0,i.jsxs)(s.p,{children:["All TypeScript error codes can be found ",(0,i.jsx)(s.a,{href:"https://github.com/Microsoft/TypeScript/blob/main/src/compiler/diagnosticMessages.json",children:"there"}),". The ",(0,i.jsx)(s.code,{children:"ignoreCodes"})," option accepts this values:"]}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["A single ",(0,i.jsx)(s.code,{children:"number"})," (example: ",(0,i.jsx)(s.code,{children:"1009"}),"): unique error code to ignore"]}),"\n",(0,i.jsxs)(s.li,{children:["A ",(0,i.jsx)(s.code,{children:"string"})," with a code (example ",(0,i.jsx)(s.code,{children:'"1009"'}),", ",(0,i.jsx)(s.code,{children:'"TS1009"'})," or ",(0,i.jsx)(s.code,{children:'"TS1009"'}),")"]}),"\n",(0,i.jsxs)(s.li,{children:["A ",(0,i.jsx)(s.code,{children:"string"})," with a list of the above (example: ",(0,i.jsx)(s.code,{children:'"1009, TS2571, 4072"'}),")"]}),"\n",(0,i.jsxs)(s.li,{children:["An ",(0,i.jsx)(s.code,{children:"array"})," of one or more from ",(0,i.jsx)(s.code,{children:"1"})," or ",(0,i.jsx)(s.code,{children:"3"})," (example: ",(0,i.jsx)(s.code,{children:'[1009, "TS2571", "6031"]'}),")"]}),"\n"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-ts",metastring:'title="jest.config.ts"',children:"import type { Config } from 'jest'\n\nconst jestConfig: Config = {\n  // [...]\n  transform: {\n    // '^.+\\\\.[tj]sx?$' to process ts,js,tsx,jsx with `ts-jest`\n    // '^.+\\\\.m?[tj]sx?$' to process ts,js,tsx,jsx,mts,mjs,mtsx,mjsx with `ts-jest`\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        diagnostics: {\n          ignoreCodes: [2571, 6031, 18003],\n        },\n      },\n    ],\n  },\n}\n\nexport default jestConfig\n"})})]})}function h(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>r,x:()=>c});var t=n(6540);const i={},o=t.createContext(i);function r(e){const s=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(o.Provider,{value:s},e.children)}}}]);