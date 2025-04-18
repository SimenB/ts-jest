"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([["2916"],{8250:function(e,t,n){n.r(t),n.d(t,{default:()=>d,frontMatter:()=>r,metadata:()=>s,assets:()=>a,toc:()=>c,contentTitle:()=>l});var s=JSON.parse('{"id":"getting-started/paths-mapping","title":"Paths mapping","description":"If you use \\"baseUrl\\" and \\"paths\\" options in your tsconfig file, you should make sure the \\"moduleNameMapper\\" option in your Jest config is setup accordingly.","source":"@site/versioned_docs/version-29.3/getting-started/paths-mapping.md","sourceDirName":"getting-started","slug":"/getting-started/paths-mapping","permalink":"/ts-jest/docs/getting-started/paths-mapping","draft":false,"unlisted":false,"editUrl":"https://github.com/kulshekhar/ts-jest/edit/main/website/versioned_docs/version-29.3/getting-started/paths-mapping.md","tags":[],"version":"29.3","lastUpdatedBy":"renovate[bot]","lastUpdatedAt":1744958977000,"frontMatter":{"id":"paths-mapping","title":"Paths mapping"},"sidebar":"docs","previous":{"title":"Options","permalink":"/ts-jest/docs/getting-started/options"},"next":{"title":"Version checking","permalink":"/ts-jest/docs/getting-started/version-checking"}}'),o=n("5893"),i=n("65");let r={id:"paths-mapping",title:"Paths mapping"},l=void 0,a={},c=[{value:"Example",id:"example",level:3},{value:"TypeScript config",id:"typescript-config",level:4},{value:"Jest config (without helper)",id:"jest-config-without-helper",level:4},{value:"Jest config (with helper)",id:"jest-config-with-helper",level:4},{value:"If using <code>globalSetup</code> or <code>globalTeardown</code>",id:"if-using-globalsetup-or-globalteardown",level:4},{value:"Global setup file with <code>tsconfig-paths</code>",id:"global-setup-file-with-tsconfig-paths",level:5}];function p(e){let t={a:"a",code:"code",h3:"h3",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["If you use ",(0,o.jsx)(t.a,{href:"https://www.typescriptlang.org/docs/handbook/module-resolution.html",children:'"baseUrl" and "paths" options'})," in your ",(0,o.jsx)(t.code,{children:"tsconfig"})," file, you should make sure the ",(0,o.jsx)(t.a,{href:"https://jestjs.io/docs/configuration#modulenamemapper-objectstring-string--arraystring",children:'"moduleNameMapper"'})," option in your Jest config is setup accordingly."]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"ts-jest"})," provides a helper to transform the mapping from ",(0,o.jsx)(t.code,{children:"tsconfig"})," to Jest config format, but it needs the ",(0,o.jsx)(t.code,{children:".js"})," version of the config file."]}),"\n",(0,o.jsx)(t.h3,{id:"example",children:"Example"}),"\n",(0,o.jsx)(t.h4,{id:"typescript-config",children:"TypeScript config"}),"\n",(0,o.jsxs)(t.p,{children:["With the below config in your ",(0,o.jsx)(t.code,{children:"tsconfig"}),":"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-json",metastring:'title="tsconfig.json"',children:'{\n  "compilerOptions": {\n    "baseUrl": ".",\n    "paths": {\n      "@App/*": ["src/*"],\n      "lib/*": ["common/*"]\n    }\n  }\n}\n'})}),"\n",(0,o.jsx)(t.h4,{id:"jest-config-without-helper",children:"Jest config (without helper)"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",metastring:'title="jest.config.ts"',children:"import type { Config } from 'jest'\n\nconst jestConfig: Config = {\n  // [...]\n  moduleNameMapper: {\n    '^@App/(.*)$': '<rootDir>/src/$1',\n    '^lib/(.*)$': '<rootDir>/common/$1',\n  },\n}\n\nexport default jestConfig\n"})}),"\n",(0,o.jsx)(t.h4,{id:"jest-config-with-helper",children:"Jest config (with helper)"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",metastring:'title="jest.config.ts"',children:"import { pathsToModuleNameMapper } from 'ts-jest'\n// In the following statement, replace `./tsconfig` with the path to your `tsconfig` file\n// which contains the path mapping (ie the `compilerOptions.paths` option):\nimport { compilerOptions } from './tsconfig'\nimport type { Config } from 'jest'\n\nconst jestConfig: Config = {\n  // [...]\n  roots: ['<rootDir>'],\n  modulePaths: [compilerOptions.baseUrl], // <-- This will be set to 'baseUrl' value\n  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths /*, { prefix: '<rootDir>/' } */),\n}\n\nexport default jestConfig\n"})}),"\n",(0,o.jsx)(t.p,{children:"With extra options as 2nd argument:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"prefix"}),": append prefix to each of mapped config in the result"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"useESM"}),": when using ",(0,o.jsx)(t.code,{children:"type: module"})," in ",(0,o.jsx)(t.code,{children:"package.json"}),", TypeScript enforces users to have explicit ",(0,o.jsx)(t.code,{children:"js"})," extension when importing\na ",(0,o.jsx)(t.code,{children:"ts"})," file. This option is to help ",(0,o.jsx)(t.code,{children:"pathsToModuleNameMapper"})," to create a config to suit with this scenario."]}),"\n"]}),"\n",(0,o.jsxs)(t.h4,{id:"if-using-globalsetup-or-globalteardown",children:["If using ",(0,o.jsx)(t.code,{children:"globalSetup"})," or ",(0,o.jsx)(t.code,{children:"globalTeardown"})]}),"\n",(0,o.jsxs)(t.p,{children:["Files used for ",(0,o.jsx)(t.a,{href:"https://jestjs.io/docs/configuration#globalsetup-string",children:(0,o.jsx)(t.code,{children:"globalSetup"})})," or ",(0,o.jsx)(t.a,{href:"https://jestjs.io/docs/configuration#globalteardown-string",children:(0,o.jsx)(t.code,{children:"globalTeardown"})})," are not directly processes by ",(0,o.jsx)(t.code,{children:"jest"}),", so those do not use the ",(0,o.jsx)(t.a,{href:"https://jestjs.io/docs/configuration#modulenamemapper-objectstring-string--arraystring",children:'"moduleNameMapper"'})," mapping. So you have to make sure those are able to map the paths themselves."]}),"\n",(0,o.jsxs)(t.h5,{id:"global-setup-file-with-tsconfig-paths",children:["Global setup file with ",(0,o.jsx)(t.code,{children:"tsconfig-paths"})]}),"\n",(0,o.jsxs)(t.p,{children:["For those files to be able to use ",(0,o.jsx)(t.a,{href:"https://www.npmjs.com/package/tsconfig-paths",children:(0,o.jsx)(t.code,{children:"tsconfig-paths"})}),", you have to import it directly"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",metastring:'title="global-setup.ts"',children:"import 'tsconfig-paths/register'\n\n/**\n * Your global setup\n */\n\n// ./path/to/globalTeardown.ts\nimport 'tsconfig-paths/register'\n\n/**\n * Your global teardown\n */\n"})})]})}function d(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},65:function(e,t,n){n.d(t,{Z:function(){return l},a:function(){return r}});var s=n(7294);let o={},i=s.createContext(o);function r(e){let t=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);