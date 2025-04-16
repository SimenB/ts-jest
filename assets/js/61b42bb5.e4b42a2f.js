"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([["9312"],{5626:function(e,t,n){n.r(t),n.d(t,{default:()=>d,frontMatter:()=>r,metadata:()=>s,assets:()=>p,toc:()=>c,contentTitle:()=>a});var s=JSON.parse('{"id":"getting-started/paths-mapping","title":"Paths mapping","description":"If you use \\"baseUrl\\" and \\"paths\\" options in your tsconfig file, you should make sure the \\"moduleNameMapper\\" option in your Jest config is setup accordingly.","source":"@site/versioned_docs/version-26.5/getting-started/paths-mapping.md","sourceDirName":"getting-started","slug":"/getting-started/paths-mapping","permalink":"/ts-jest/docs/26.5/getting-started/paths-mapping","draft":false,"unlisted":false,"editUrl":"https://github.com/kulshekhar/ts-jest/edit/main/website/versioned_docs/version-26.5/getting-started/paths-mapping.md","tags":[],"version":"26.5","lastUpdatedBy":"ahnpnl","lastUpdatedAt":1744781649000,"frontMatter":{"id":"paths-mapping","title":"Paths mapping"},"sidebar":"version-26.5-docs","previous":{"title":"Options","permalink":"/ts-jest/docs/26.5/getting-started/options"},"next":{"title":"Version checking","permalink":"/ts-jest/docs/26.5/getting-started/version-checking"}}'),i=n("5893"),o=n("65");let r={id:"paths-mapping",title:"Paths mapping"},a=void 0,p={},c=[{value:"Example",id:"example",level:3},{value:"TypeScript config",id:"typescript-config",level:4},{value:"Jest config (without helper)",id:"jest-config-without-helper",level:4},{value:"Jest config (with helper)",id:"jest-config-with-helper",level:4}];function l(e){let t={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["If you use ",(0,i.jsx)(t.a,{href:"https://www.typescriptlang.org/docs/handbook/module-resolution.html",children:'"baseUrl" and "paths" options'})," in your ",(0,i.jsx)(t.code,{children:"tsconfig"})," file, you should make sure the ",(0,i.jsx)(t.a,{href:"https://jestjs.io/docs/configuration#modulenamemapper-objectstring-string--arraystring",children:'"moduleNameMapper"'})," option in your Jest config is setup accordingly."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"ts-jest"})," provides a helper to transform the mapping from ",(0,i.jsx)(t.code,{children:"tsconfig"})," to Jest config format, but it needs the ",(0,i.jsx)(t.code,{children:".js"})," version of the config file."]}),"\n",(0,i.jsx)(t.h3,{id:"example",children:"Example"}),"\n",(0,i.jsx)(t.h4,{id:"typescript-config",children:"TypeScript config"}),"\n",(0,i.jsxs)(t.p,{children:["With the below config in your ",(0,i.jsx)(t.code,{children:"tsconfig"}),":"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'// tsconfig.json\n{\n  "compilerOptions": {\n    "baseUrl": ".",\n    "paths": {\n      "@App/*": ["src/*"],\n      "lib/*": ["common/*"]\n    }\n  }\n}\n'})}),"\n",(0,i.jsx)(t.h4,{id:"jest-config-without-helper",children:"Jest config (without helper)"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:"// jest.config.js\nmodule.exports = {\n  // [...]\n  moduleNameMapper: {\n    '^@App/(.*)$': '<rootDir>/src/$1',\n    '^lib/(.*)$': '<rootDir>/common/$1',\n  },\n}\n"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'// package.json\n{\n  // [...]\n  "jest": {\n    "moduleNameMapper": {\n      "^@App/(.*)$": "<rootDir>/src/$1",\n      "^lib/(.*)$": "<rootDir>/common/$1"\n    }\n  }\n}\n'})}),"\n",(0,i.jsx)(t.h4,{id:"jest-config-with-helper",children:"Jest config (with helper)"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:"// jest.config.js\nconst { pathsToModuleNameMapper } = require('ts-jest/utils')\n// In the following statement, replace `./tsconfig` with the path to your `tsconfig` file\n// which contains the path mapping (ie the `compilerOptions.paths` option):\nconst { compilerOptions } = require('./tsconfig')\n\nmodule.exports = {\n  // [...]\n  roots: ['<rootDir>'],\n  modulePaths: [compilerOptions.baseUrl], // <-- This will be set to 'baseUrl' value\n  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths /*, { prefix: '<rootDir>/' } */),\n}\n"})})]})}function d(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},65:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return r}});var s=n(7294);let i={},o=s.createContext(i);function r(e){let t=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);