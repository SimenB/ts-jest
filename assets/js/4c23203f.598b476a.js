"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([["3369"],{9e3:function(e,t,n){n.r(t),n.d(t,{default:()=>u,frontMatter:()=>c,metadata:()=>s,assets:()=>r,toc:()=>l,contentTitle:()=>a});var s=JSON.parse('{"id":"guides/react-native","title":"Using with React Native","description":"To use ts-jest with React Native + TypeScript and Babel 7, you\'ll first need to follow this tutorial.","source":"@site/versioned_docs/version-26.5/guides/react-native.md","sourceDirName":"guides","slug":"/guides/react-native","permalink":"/ts-jest/docs/26.5/guides/react-native","draft":false,"unlisted":false,"editUrl":"https://github.com/kulshekhar/ts-jest/edit/main/website/versioned_docs/version-26.5/guides/react-native.md","tags":[],"version":"26.5","lastUpdatedBy":"ahnpnl","lastUpdatedAt":1744781649000,"frontMatter":{"id":"react-native","title":"Using with React Native"},"sidebar":"version-26.5-docs","previous":{"title":"Mock ES6 class","permalink":"/ts-jest/docs/26.5/guides/mock-es6-class"},"next":{"title":"Test helpers","permalink":"/ts-jest/docs/26.5/guides/test-helpers"}}'),i=n("5893"),o=n("65");let c={id:"react-native",title:"Using with React Native"},a=void 0,r={},l=[{value:"Babel config",id:"babel-config",level:3},{value:"TypeScript Configuration",id:"typescript-configuration",level:3},{value:"Jest config",id:"jest-config",level:3}];function d(e){let t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["To use ",(0,i.jsx)(t.code,{children:"ts-jest"})," with React Native + TypeScript and Babel 7, you'll first need to follow ",(0,i.jsx)(t.a,{href:"https://reactnative.dev/blog/2018/05/07/using-typescript-with-react-native",children:"this tutorial"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"After that, some little modifications will be required as follows:"}),"\n",(0,i.jsx)(t.h3,{id:"babel-config",children:"Babel config"}),"\n",(0,i.jsxs)(t.p,{children:["If you didn't yet, move any Babel config from ",(0,i.jsx)(t.code,{children:".babelrc"})," to ",(0,i.jsx)(t.code,{children:"babel.config.js"}),". It should at least contain:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:"// babel.config.js\nmodule.exports = {\n  presets: ['module:metro-react-native-babel-preset'],\n}\n"})}),"\n",(0,i.jsx)(t.h3,{id:"typescript-configuration",children:"TypeScript Configuration"}),"\n",(0,i.jsxs)(t.p,{children:["Create a new ",(0,i.jsx)(t.code,{children:"tsconfig.spec.json"})," at the root of your project with the following content"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'// tsconfig.spec.json\n{\n  "extends": "./tsconfig.json",\n  "compilerOptions": {\n    "jsx": "react"\n  }\n}\n'})}),"\n",(0,i.jsx)(t.h3,{id:"jest-config",children:"Jest config"}),"\n",(0,i.jsxs)(t.p,{children:["In the same way that you moved Babel config, move Jest config from ",(0,i.jsx)(t.code,{children:"jest"})," key of ",(0,i.jsx)(t.code,{children:"package.json"})," to ",(0,i.jsx)(t.code,{children:"jest.config.js"}),". It should look like this:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:"// jest.config.js\nmodule.exports = {\n  preset: 'react-native',\n  globals: {\n    'ts-jest': {\n      tsconfig: 'tsconfig.spec.json',\n    },\n  },\n  transform: {\n    '^.+\\\\.jsx$': 'babel-jest',\n    '^.+\\\\.tsx?$': 'ts-jest',\n  },\n  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],\n}\n"})})]})}function u(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},65:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return c}});var s=n(7294);let i={},o=s.createContext(i);function c(e){let t=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);