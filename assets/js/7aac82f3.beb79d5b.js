"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([["5232"],{9532:function(e,s,n){n.r(s),n.d(s,{default:()=>p,frontMatter:()=>d,metadata:()=>t,assets:()=>h,toc:()=>u,contentTitle:()=>a});var t=JSON.parse('{"id":"guides/esm-support","title":"ESM Support","description":"ts-jest will take into account of the following things when working with ESM:","source":"@site/versioned_docs/version-29.0/guides/esm-support.md","sourceDirName":"guides","slug":"/guides/esm-support","permalink":"/ts-jest/docs/29.0/guides/esm-support","draft":false,"unlisted":false,"editUrl":"https://github.com/kulshekhar/ts-jest/edit/main/website/versioned_docs/version-29.0/guides/esm-support.md","tags":[],"version":"29.0","lastUpdatedBy":"renovate[bot]","lastUpdatedAt":1744541888000,"frontMatter":{"id":"esm-support","title":"ESM Support"},"sidebar":"version-29.0-docs","previous":{"title":"Version checking","permalink":"/ts-jest/docs/29.0/getting-started/version-checking"},"next":{"title":"Mock ES6 class","permalink":"/ts-jest/docs/29.0/guides/mock-es6-class"}}'),o=n("5893"),i=n("65"),r=n("7902"),l=n("5525"),c=n("7600");let d={id:"esm-support",title:"ESM Support"},a="References",h={},u=[{value:"Configure Jest runtime",id:"configure-jest-runtime",level:2},{value:"Configure <code>tsconfig</code>",id:"configure-tsconfig",level:2},{value:"Using ES module values",id:"using-es-module-values",level:3},{value:"Using hybrid module values",id:"using-hybrid-module-values",level:3},{value:"Configure Jest config",id:"configure-jest-config",level:2},{value:"Example",id:"example",level:3},{value:"Resolve <code>.mjs/.mts</code> extensions",id:"resolve-mjsmts-extensions",level:2}];function j(e){let s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(s.admonition,{type:"important",children:[(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.code,{children:"ts-jest"})," will take into account of the following things when working with ESM:"]}),(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:(0,o.jsx)(s.a,{href:"https://jestjs.io/docs/en/ecmascript-modules",children:"Jest Runtime"})}),"\n",(0,o.jsxs)(s.li,{children:["Check ",(0,o.jsx)(s.code,{children:'type: "module"'})," in ",(0,o.jsx)(s.code,{children:"package.json"})," ",(0,o.jsx)(s.strong,{children:"ONLY WHEN"})," ",(0,o.jsx)(s.code,{children:"module"})," in ",(0,o.jsx)(s.code,{children:"tsconfig"})," has hybrid value: either ",(0,o.jsx)(s.code,{children:"Node16"}),"/",(0,o.jsx)(s.code,{children:"Node18"}),"/",(0,o.jsx)(s.code,{children:"NodeNext"})]}),"\n",(0,o.jsxs)(s.li,{children:["When ",(0,o.jsx)(s.code,{children:"module"})," in ",(0,o.jsx)(s.code,{children:"tsconfig"})," isn't set to a hybrid value, ",(0,o.jsx)(s.code,{children:"module"})," ",(0,o.jsx)(s.strong,{children:"MUST HAVE"})," one of the ES values, e.g. ",(0,o.jsx)(s.code,{children:"ES2015"}),", ",(0,o.jsx)(s.code,{children:"ES2020"})," etc..."]}),"\n"]})]}),"\n",(0,o.jsx)(s.header,{children:(0,o.jsx)(s.h1,{id:"references",children:"References"})}),"\n","\n",(0,o.jsx)(c.Z,{toc:u.slice(0)}),"\n",(0,o.jsx)(s.hr,{}),"\n",(0,o.jsx)(s.h2,{id:"configure-jest-runtime",children:"Configure Jest runtime"}),"\n",(0,o.jsxs)(s.p,{children:["Check ",(0,o.jsx)(s.a,{href:"https://jestjs.io/docs/en/ecmascript-modules",children:"ESM Jest documentation"}),"."]}),"\n",(0,o.jsxs)(s.admonition,{type:"info",children:[(0,o.jsx)(s.p,{children:"Jest runtime currently has a few issues related to support ESM:"}),(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:["Not taking into account of ",(0,o.jsx)(s.code,{children:'type: "module"'})," field in ",(0,o.jsx)(s.code,{children:"package.json"})," yet to run as ESM mode."]}),"\n",(0,o.jsxs)(s.li,{children:["Mocking ES modules are not supported yet, track progress here ",(0,o.jsx)(s.a,{href:"https://github.com/jestjs/jest/pull/10976",children:"https://github.com/jestjs/jest/pull/10976"})]}),"\n"]}),(0,o.jsxs)(s.p,{children:["Overall progress and discussion can be found at ",(0,o.jsx)(s.a,{href:"https://github.com/jestjs/jest/issues/9430",children:"https://github.com/jestjs/jest/issues/9430"})]})]}),"\n",(0,o.jsxs)(s.h2,{id:"configure-tsconfig",children:["Configure ",(0,o.jsx)(s.code,{children:"tsconfig"})]}),"\n",(0,o.jsx)(s.h3,{id:"using-es-module-values",children:"Using ES module values"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-json",children:'// tsconfig.spec.json\n{\n  "compilerOptions": {\n    "module": "ESNext", // or any values starting with "es" or "ES"\n    "target": "ESNext",\n    "esModuleInterop": true\n  }\n}\n'})}),"\n",(0,o.jsx)(s.h3,{id:"using-hybrid-module-values",children:"Using hybrid module values"}),"\n",(0,o.jsxs)(s.admonition,{type:"important",children:[(0,o.jsxs)(s.p,{children:["Hybrid module values requires ",(0,o.jsx)(s.code,{children:"type"})," field in ",(0,o.jsx)(s.code,{children:"package.json"})," to be set explicitly to:"]}),(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.code,{children:"commonjs"})," for ",(0,o.jsx)(s.code,{children:"CommonJS"})," code"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.code,{children:"module"})," for ",(0,o.jsx)(s.code,{children:"ESM"})," code"]}),"\n"]})]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-json",children:'// tsconfig.spec.json\n{\n  "compilerOptions": {\n    "module": "Node16", // or Node18/NodeNext\n    "target": "ESNext",\n    "esModuleInterop": true\n  }\n}\n'})}),"\n",(0,o.jsx)(s.h2,{id:"configure-jest-config",children:"Configure Jest config"}),"\n",(0,o.jsxs)(s.p,{children:["Configure your Jest configuration to use one of the ",(0,o.jsx)(s.a,{href:"/ts-jest/docs/29.0/getting-started/presets",children:"utility functions"})]}),"\n",(0,o.jsx)(s.h3,{id:"example",children:"Example"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-ts",children:"// jest.config.ts\nimport type { Config } from 'jest'\n\nconst jestConfig: Config = {\n  // [...]\n  preset: 'ts-jest/presets/default-esm', // or other ESM presets\n  moduleNameMapper: {\n    '^(\\\\.{1,2}/.*)\\\\.js$': '$1',\n  },\n  transform: {\n    // '^.+\\\\.[tj]sx?$' to process ts,js,tsx,jsx with `ts-jest`\n    // '^.+\\\\.m?[tj]sx?$' to process ts,js,tsx,jsx,mts,mjs,mtsx,mjsx with `ts-jest`\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        useESM: true,\n      },\n    ],\n  },\n}\n\nexport default jestConfig\n"})}),"\n",(0,o.jsxs)(s.h2,{id:"resolve-mjsmts-extensions",children:["Resolve ",(0,o.jsx)(s.code,{children:".mjs/.mts"})," extensions"]}),"\n",(0,o.jsxs)(s.p,{children:["To work with ",(0,o.jsx)(s.code,{children:".mts"})," extension, besides the requirement to run Jest and ",(0,o.jsx)(s.code,{children:"ts-jest"})," in ESM mode, there are a few extra requirements to be met:"]}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.code,{children:"package.json"})," should contain ",(0,o.jsx)(s.code,{children:'"type": "module"'})]}),"\n",(0,o.jsxs)(s.li,{children:["A custom Jest resolver to resolve ",(0,o.jsx)(s.code,{children:".mjs"})," extension, for example:"]}),"\n"]}),"\n",(0,o.jsxs)(r.Z,{groupId:"code-examples",children:[(0,o.jsx)(l.Z,{value:"typescript-cjs",label:"TypeScript CJS",children:(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-ts",metastring:'tab={"label": "TypeScript CJS"}',children:"import type { SyncResolver } from 'jest-resolve'\n\nconst mjsResolver: SyncResolver = (path, options) => {\n  const mjsExtRegex = /\\.mjs$/i\n  const resolver = options.defaultResolver\n  if (mjsExtRegex.test(path)) {\n    try {\n      return resolver(path.replace(mjsExtRegex, '.mts'), options)\n    } catch {\n      // use default resolver\n    }\n  }\n\n  return resolver(path, options)\n}\n\nexport = mjsResolver\n"})})}),(0,o.jsx)(l.Z,{value:"typescript-esm",label:"TypeScript ESM",children:(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-ts",metastring:'tab={"label": "TypeScript ESM"}',children:"import type { SyncResolver } from 'jest-resolve'\n\nconst mjsResolver: SyncResolver = (path, options) => {\n  const mjsExtRegex = /\\.mjs$/i\n  const resolver = options.defaultResolver\n  if (mjsExtRegex.test(path)) {\n    try {\n      return resolver(path.replace(mjsExtRegex, '.mts'), options)\n    } catch {\n      // use default resolver\n    }\n  }\n\n  return resolver(path, options)\n}\n\nexport default mjsResolver\n"})})})]})]})}function p(e={}){let{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(j,{...e})}):j(e)}}}]);