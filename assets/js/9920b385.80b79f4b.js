"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([["4374"],{4474:function(e,t,s){s.r(t),s.d(t,{default:()=>j,frontMatter:()=>l,metadata:()=>n,assets:()=>a,toc:()=>c,contentTitle:()=>r});var n=JSON.parse('{"id":"getting-started/options/babelConfig","title":"Babel Config option","description":"ts-jest by default does NOT use Babel. But you may want to use it, especially if your code rely on Babel plugins to make some transformations. ts-jest can call the BabelJest processor once TypeScript has transformed the source into JavaScript.","source":"@site/docs/getting-started/options/babelConfig.md","sourceDirName":"getting-started/options","slug":"/getting-started/options/babelConfig","permalink":"/ts-jest/docs/next/getting-started/options/babelConfig","draft":false,"unlisted":false,"editUrl":"https://github.com/kulshekhar/ts-jest/edit/main/website/docs/getting-started/options/babelConfig.md","tags":[],"version":"current","lastUpdatedBy":"Ahn","lastUpdatedAt":1744459608000,"frontMatter":{"title":"Babel Config option"}}'),o=s("5893"),i=s("65");let l={title:"Babel Config option"},r=void 0,a={},c=[{value:"Examples",id:"examples",level:3},{value:"Use default <code>babelrc</code> file",id:"use-default-babelrc-file",level:4},{value:"Path to a <code>babelrc</code> file",id:"path-to-a-babelrc-file",level:4},{value:"Inline compiler options",id:"inline-compiler-options",level:4}];function d(e){let t={a:"a",code:"code",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"ts-jest"})," by default does ",(0,o.jsx)(t.strong,{children:"NOT"})," use Babel. But you may want to use it, especially if your code rely on Babel plugins to make some transformations. ",(0,o.jsx)(t.code,{children:"ts-jest"})," can call the BabelJest processor once TypeScript has transformed the source into JavaScript."]}),"\n",(0,o.jsxs)(t.p,{children:["The option is ",(0,o.jsx)(t.code,{children:"babelConfig"})," and it works pretty much as the ",(0,o.jsx)(t.code,{children:"tsconfig"})," option, except that it is disabled by default. Here is the possible values it can take:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"false"}),": the default, disables the use of Babel"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"true"}),": enables Babel processing. ",(0,o.jsx)(t.code,{children:"ts-jest"})," will try to find a ",(0,o.jsx)(t.code,{children:".babelrc"}),", ",(0,o.jsx)(t.code,{children:".babelrc.js"}),", ",(0,o.jsx)(t.code,{children:"babel.config.js"})," file or a ",(0,o.jsx)(t.code,{children:"babel"})," section in the ",(0,o.jsx)(t.code,{children:"package.json"})," file of your project and use it as the config to pass to ",(0,o.jsx)(t.code,{children:"babel-jest"})," processor."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"{ ... }"}),": inline ",(0,o.jsx)(t.a,{href:"https://babeljs.io/docs/en/next/options",children:"Babel options"}),". You can also set this to an empty object (",(0,o.jsx)(t.code,{children:"{}"}),") so that the default Babel config file is not used."]}),"\n"]}),"\n",(0,o.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,o.jsxs)(t.h4,{id:"use-default-babelrc-file",children:["Use default ",(0,o.jsx)(t.code,{children:"babelrc"})," file"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",metastring:'title="jest.config.ts"',children:"import type { Config } from 'jest'\n\nconst jestConfig: Config = {\n  // [...]\n  transform: {\n    // '^.+\\\\.[tj]sx?$' to process ts,js,tsx,jsx with `ts-jest`\n    // '^.+\\\\.m?[tj]sx?$' to process ts,js,tsx,jsx,mts,mjs,mtsx,mjsx with `ts-jest`\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        babelConfig: true,\n      },\n    ],\n  },\n}\n\nexport default jestConfig\n"})}),"\n",(0,o.jsxs)(t.h4,{id:"path-to-a-babelrc-file",children:["Path to a ",(0,o.jsx)(t.code,{children:"babelrc"})," file"]}),"\n",(0,o.jsxs)(t.p,{children:["The path should be relative to the current working directory where you start Jest from. You can also use ",(0,o.jsx)(t.code,{children:"\\<rootDir>"})," in the path, or use an absolute path (this last one is strongly not recommended)."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",metastring:'title="jest.config.ts"',children:"import type { Config } from 'jest'\n\nconst jestConfig: Config = {\n  // [...]\n  transform: {\n    // '^.+\\\\.[tj]sx?$' to process ts,js,tsx,jsx with `ts-jest`\n    // '^.+\\\\.m?[tj]sx?$' to process ts,js,tsx,jsx,mts,mjs,mtsx,mjsx with `ts-jest`\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        babelConfig: 'babelrc.test.js',\n      },\n    ],\n  },\n}\n\nexport default jestConfig\n"})}),"\n",(0,o.jsx)(t.p,{children:"or importing directly the config file:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",metastring:'title="jest.config.ts"',children:"import type { Config } from 'jest'\nimport babelConfig from './babelrc.test.js'\n\nconst jestConfig: Config = {\n  // [...]\n  transform: {\n    // '^.+\\\\.[tj]sx?$' to process ts,js,tsx,jsx with `ts-jest`\n    // '^.+\\\\.m?[tj]sx?$' to process ts,js,tsx,jsx,mts,mjs,mtsx,mjsx with `ts-jest`\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        babelConfig,\n      },\n    ],\n  },\n}\n\nexport default jestConfig\n"})}),"\n",(0,o.jsx)(t.h4,{id:"inline-compiler-options",children:"Inline compiler options"}),"\n",(0,o.jsxs)(t.p,{children:["Refer to the ",(0,o.jsx)(t.a,{href:"https://babeljs.io/docs/en/next/options",children:"Babel options"})," to know what can be used there."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",metastring:'title="jest.config.ts"',children:"import type { Config } from 'jest'\n\nconst jestConfig: Config = {\n  // [...]\n  transform: {\n    // '^.+\\\\.[tj]sx?$' to process ts,js,tsx,jsx with `ts-jest`\n    // '^.+\\\\.m?[tj]sx?$' to process ts,js,tsx,jsx,mts,mjs,mtsx,mjsx with `ts-jest`\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        babelConfig: {\n          comments: false,\n          plugins: ['@babel/plugin-transform-for-of'],\n        },\n      },\n    ],\n  },\n}\n\nexport default jestConfig\n"})})]})}function j(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},65:function(e,t,s){s.d(t,{Z:function(){return r},a:function(){return l}});var n=s(7294);let o={},i=n.createContext(o);function l(e){let t=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);