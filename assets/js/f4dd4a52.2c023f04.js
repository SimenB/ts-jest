"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([["8875"],{5754:function(e,t,s){s.r(t),s.d(t,{default:()=>p,frontMatter:()=>l,metadata:()=>n,assets:()=>j,toc:()=>u,contentTitle:()=>c});var n=JSON.parse('{"id":"getting-started/options/babelConfig","title":"Babel Config option","description":"ts-jest by default does NOT use Babel. But you may want to use it, especially if your code rely on Babel plugins to make some transformations. ts-jest can call the BabelJest processor once TypeScript has transformed the source into JavaScript.","source":"@site/versioned_docs/version-29.2/getting-started/options/babelConfig.md","sourceDirName":"getting-started/options","slug":"/getting-started/options/babelConfig","permalink":"/ts-jest/docs/29.2/getting-started/options/babelConfig","draft":false,"unlisted":false,"editUrl":"https://github.com/kulshekhar/ts-jest/edit/main/website/versioned_docs/version-29.2/getting-started/options/babelConfig.md","tags":[],"version":"29.2","lastUpdatedBy":"Ahn","lastUpdatedAt":1744459608000,"frontMatter":{"title":"Babel Config option"}}'),r=s("5893"),o=s("65"),a=s("7902"),i=s("5525");let l={title:"Babel Config option"},c=void 0,j={},u=[{value:"Examples",id:"examples",level:3},{value:"Use default <code>babelrc</code> file",id:"use-default-babelrc-file",level:4},{value:"Path to a <code>babelrc</code> file",id:"path-to-a-babelrc-file",level:4},{value:"Inline compiler options",id:"inline-compiler-options",level:4}];function d(e){let t={a:"a",code:"code",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"ts-jest"})," by default does ",(0,r.jsx)(t.strong,{children:"NOT"})," use Babel. But you may want to use it, especially if your code rely on Babel plugins to make some transformations. ",(0,r.jsx)(t.code,{children:"ts-jest"})," can call the BabelJest processor once TypeScript has transformed the source into JavaScript."]}),"\n",(0,r.jsxs)(t.p,{children:["The option is ",(0,r.jsx)(t.code,{children:"babelConfig"})," and it works pretty much as the ",(0,r.jsx)(t.code,{children:"tsconfig"})," option, except that it is disabled by default. Here is the possible values it can take:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"false"}),": the default, disables the use of Babel"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"true"}),": enables Babel processing. ",(0,r.jsx)(t.code,{children:"ts-jest"})," will try to find a ",(0,r.jsx)(t.code,{children:".babelrc"}),", ",(0,r.jsx)(t.code,{children:".babelrc.js"}),", ",(0,r.jsx)(t.code,{children:"babel.config.js"})," file or a ",(0,r.jsx)(t.code,{children:"babel"})," section in the ",(0,r.jsx)(t.code,{children:"package.json"})," file of your project and use it as the config to pass to ",(0,r.jsx)(t.code,{children:"babel-jest"})," processor."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"{ ... }"}),": inline ",(0,r.jsx)(t.a,{href:"https://babeljs.io/docs/en/next/options",children:"Babel options"}),". You can also set this to an empty object (",(0,r.jsx)(t.code,{children:"{}"}),") so that the default Babel config file is not used."]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,r.jsxs)(t.h4,{id:"use-default-babelrc-file",children:["Use default ",(0,r.jsx)(t.code,{children:"babelrc"})," file"]}),"\n",(0,r.jsxs)(a.Z,{groupId:"code-examples",children:[(0,r.jsx)(i.Z,{value:"js",label:"JavaScript",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",metastring:"tab",children:"// jest.config.js\n/** @type {import('ts-jest').JestConfigWithTsJest} */\nmodule.exports = {\n  // [...]\n  transform: {\n    // '^.+\\\\.[tj]sx?$' to process ts,js,tsx,jsx with `ts-jest`\n    // '^.+\\\\.m?[tj]sx?$' to process ts,js,tsx,jsx,mts,mjs,mtsx,mjsx with `ts-jest`\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        babelConfig: true,\n      },\n    ],\n  },\n}\n"})})}),(0,r.jsx)(i.Z,{value:"ts",label:"TypeScript",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:"tab",children:"// jest.config.ts\nimport type { JestConfigWithTsJest } from 'ts-jest'\n\nconst jestConfig: JestConfigWithTsJest = {\n  // [...]\n  transform: {\n    // '^.+\\\\.[tj]sx?$' to process ts,js,tsx,jsx with `ts-jest`\n    // '^.+\\\\.m?[tj]sx?$' to process ts,js,tsx,jsx,mts,mjs,mtsx,mjsx with `ts-jest`\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        babelConfig: true,\n      },\n    ],\n  },\n}\n\nexport default jestConfig\n"})})}),(0,r.jsx)(i.Z,{value:"JSON",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-JSON",metastring:"tab",children:'// package.json\n{\n  // [...]\n  "jest": {\n    "transform": {\n      // \'^.+\\\\.[tj]sx?$\' to process ts,js,tsx,jsx with `ts-jest`\n      // \'^.+\\\\.m?[tj]sx?$\' to process ts,js,tsx,jsx,mts,mjs,mtsx,mjsx with `ts-jest`\n      "^.+\\\\.tsx?$": [\n        "ts-jest",\n        {\n          "babelConfig": true\n        }\n      ]\n    }\n  }\n}\n'})})})]}),"\n",(0,r.jsxs)(t.h4,{id:"path-to-a-babelrc-file",children:["Path to a ",(0,r.jsx)(t.code,{children:"babelrc"})," file"]}),"\n",(0,r.jsxs)(t.p,{children:["The path should be relative to the current working directory where you start Jest from. You can also use ",(0,r.jsx)(t.code,{children:"\\<rootDir>"})," in the path, or use an absolute path (this last one is strongly not recommended)."]}),"\n",(0,r.jsxs)(a.Z,{groupId:"code-examples",children:[(0,r.jsx)(i.Z,{value:"js",label:"JavaScript",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",metastring:"tab",children:"// jest.config.js\n/** @type {import('ts-jest').JestConfigWithTsJest} */\nmodule.exports = {\n  // [...]\n  transform: {\n    // '^.+\\\\.[tj]sx?$' to process ts,js,tsx,jsx with `ts-jest`\n    // '^.+\\\\.m?[tj]sx?$' to process ts,js,tsx,jsx,mts,mjs,mtsx,mjsx with `ts-jest`\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        babelConfig: 'babelrc.test.js',\n      },\n    ],\n  },\n}\n"})})}),(0,r.jsx)(i.Z,{value:"ts",label:"TypeScript",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:"tab",children:"// jest.config.ts\nimport type { JestConfigWithTsJest } from 'ts-jest'\n\nconst jestConfig: JestConfigWithTsJest = {\n  // [...]\n  transform: {\n    // '^.+\\\\.[tj]sx?$' to process ts,js,tsx,jsx with `ts-jest`\n    // '^.+\\\\.m?[tj]sx?$' to process ts,js,tsx,jsx,mts,mjs,mtsx,mjsx with `ts-jest`\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        babelConfig: 'babelrc.test.js',\n      },\n    ],\n  },\n}\n\nexport default jestConfig\n"})})}),(0,r.jsx)(i.Z,{value:"JSON",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-JSON",metastring:"tab",children:'// package.json\n{\n  // [...]\n  "jest": {\n    "transform": {\n      // \'^.+\\\\.[tj]sx?$\' to process ts,js,tsx,jsx with `ts-jest`\n      // \'^.+\\\\.m?[tj]sx?$\' to process ts,js,tsx,jsx,mts,mjs,mtsx,mjsx with `ts-jest`\n      "^.+\\\\.tsx?$": [\n        "ts-jest",\n        {\n          "babelConfig": "babelrc.test.js"\n        }\n      ]\n    }\n  }\n}\n'})})})]}),"\n",(0,r.jsx)(t.p,{children:"or importing directly the config file:"}),"\n",(0,r.jsxs)(a.Z,{groupId:"code-examples",children:[(0,r.jsx)(i.Z,{value:"js",label:"JavaScript",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",metastring:"tab",children:"// jest.config.js\n/** @type {import('ts-jest').JestConfigWithTsJest} */\nmodule.exports = {\n  // [...]\n  transform: {\n    // '^.+\\\\.[tj]sx?$' to process ts,js,tsx,jsx with `ts-jest`\n    // '^.+\\\\.m?[tj]sx?$' to process ts,js,tsx,jsx,mts,mjs,mtsx,mjsx with `ts-jest`\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        babelConfig: require('./babelrc.test.js'),\n      },\n    ],\n  },\n}\n"})})}),(0,r.jsx)(i.Z,{value:"ts",label:"TypeScript",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:"tab",children:"// jest.config.ts\nimport type { JestConfigWithTsJest } from 'ts-jest'\nimport babelConfig from './babelrc.test.js'\n\nconst jestConfig: JestConfigWithTsJest = {\n  // [...]\n  transform: {\n    // '^.+\\\\.[tj]sx?$' to process ts,js,tsx,jsx with `ts-jest`\n    // '^.+\\\\.m?[tj]sx?$' to process ts,js,tsx,jsx,mts,mjs,mtsx,mjsx with `ts-jest`\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        babelConfig,\n      },\n    ],\n  },\n}\n\nexport default jestConfig\n"})})})]}),"\n",(0,r.jsx)(t.h4,{id:"inline-compiler-options",children:"Inline compiler options"}),"\n",(0,r.jsxs)(t.p,{children:["Refer to the ",(0,r.jsx)(t.a,{href:"https://babeljs.io/docs/en/next/options",children:"Babel options"})," to know what can be used there."]}),"\n",(0,r.jsxs)(a.Z,{groupId:"code-examples",children:[(0,r.jsx)(i.Z,{value:"js",label:"JavaScript",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",metastring:"tab",children:"// jest.config.js\n/** @type {import('ts-jest').JestConfigWithTsJest} */\nmodule.exports = {\n  // [...]\n  transform: {\n    // '^.+\\\\.[tj]sx?$' to process ts,js,tsx,jsx with `ts-jest`\n    // '^.+\\\\.m?[tj]sx?$' to process ts,js,tsx,jsx,mts,mjs,mtsx,mjsx with `ts-jest`\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        babelConfig: {\n          comments: false,\n          plugins: ['@babel/plugin-transform-for-of'],\n        },\n      },\n    ],\n  },\n}\n"})})}),(0,r.jsx)(i.Z,{value:"ts",label:"TypeScript",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:"tab",children:"// jest.config.ts\nimport type { JestConfigWithTsJest } from 'ts-jest'\n\nconst jestConfig: JestConfigWithTsJest = {\n  // [...]\n  transform: {\n    // '^.+\\\\.[tj]sx?$' to process ts,js,tsx,jsx with `ts-jest`\n    // '^.+\\\\.m?[tj]sx?$' to process ts,js,tsx,jsx,mts,mjs,mtsx,mjsx with `ts-jest`\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        babelConfig: {\n          comments: false,\n          plugins: ['@babel/plugin-transform-for-of'],\n        },\n      },\n    ],\n  },\n}\n\nexport default jestConfig\n"})})}),(0,r.jsx)(i.Z,{value:"JSON",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-JSON",metastring:"tab",children:'// package.json\n{\n  // [...]\n  "jest": {\n    "transform": {\n      // \'^.+\\\\.[tj]sx?$\' to process ts,js,tsx,jsx with `ts-jest`\n      // \'^.+\\\\.m?[tj]sx?$\' to process ts,js,tsx,jsx,mts,mjs,mtsx,mjsx with `ts-jest`\n      "^.+\\\\.tsx?$": [\n        "ts-jest",\n        {\n          "babelConfig": {\n            "comments": false,\n            "plugins": ["@babel/plugin-transform-for-of"]\n          }\n        }\n      ]\n    }\n  }\n}\n'})})})]})]})}function p(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},5525:function(e,t,s){s.d(t,{Z:()=>o});var n=s("5893");s("7294");var r=s("7026");function o(e){let{children:t,hidden:s,className:o}=e;return(0,n.jsx)("div",{role:"tabpanel",className:(0,r.Z)("tabItem_Ymn6",o),hidden:s,children:t})}},7902:function(e,t,s){s.d(t,{Z:()=>b});var n=s("5893"),r=s("7294"),o=s("7026"),a=s("9599"),i=s("6550"),l=s("2000"),c=s("4520"),j=s("8341"),u=s("6009");function d(e){return r.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||r.isValidElement(e)&&function(e){let{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function p(e){let{value:t,tabValues:s}=e;return s.some(e=>e.value===t)}var x=s("7227");function h(e){let{className:t,block:s,selectedValue:r,selectValue:i,tabValues:l}=e,c=[],{blockElementScrollPositionUntilNextRender:j}=(0,a.o5)(),u=e=>{let t=e.currentTarget,s=l[c.indexOf(t)].value;s!==r&&(j(t),i(s))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{let s=c.indexOf(e.currentTarget)+1;t=c[s]??c[0];break}case"ArrowLeft":{let s=c.indexOf(e.currentTarget)-1;t=c[s]??c[c.length-1]}}t?.focus()};return(0,n.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":s},t),children:l.map(e=>{let{value:t,label:s,attributes:a}=e;return(0,n.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>{c.push(e)},onKeyDown:d,onClick:u,...a,className:(0,o.Z)("tabs__item","tabItem_LNqP",a?.className,{"tabs__item--active":r===t}),children:s??t},t)})})}function m(e){let{lazy:t,children:s,selectedValue:a}=e,i=(Array.isArray(s)?s:[s]).filter(Boolean);if(t){let e=i.find(e=>e.props.value===a);return e?(0,r.cloneElement)(e,{className:(0,o.Z)("margin-top--md",e.props.className)}):null}return(0,n.jsx)("div",{className:"margin-top--md",children:i.map((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))})}function f(e){let t=function(e){let{defaultValue:t,queryString:s=!1,groupId:n}=e,o=function(e){let{values:t,children:s}=e;return(0,r.useMemo)(()=>{let e=t??d(s).map(e=>{let{props:{value:t,label:s,attributes:n,default:r}}=e;return{value:t,label:s,attributes:n,default:r}});return!function(e){let t=(0,j.lx)(e,(e,t)=>e.value===t.value);if(t.length>0)throw Error(`Docusaurus error: Duplicate values "${t.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[t,s])}(e),[a,x]=(0,r.useState)(()=>(function(e){let{defaultValue:t,tabValues:s}=e;if(0===s.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:s}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${s.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}let n=s.find(e=>e.default)??s[0];if(!n)throw Error("Unexpected error: 0 tabValues");return n.value})({defaultValue:t,tabValues:o})),[h,m]=function(e){let{queryString:t=!1,groupId:s}=e,n=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:s}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!s)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:t,groupId:s});return[(0,c._X)(o),(0,r.useCallback)(e=>{if(!o)return;let t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})},[o,n])]}({queryString:s,groupId:n}),[f,b]=function(e){let{groupId:t}=e,s=t?`docusaurus.tab.${t}`:null,[n,o]=(0,u.Nk)(s);return[n,(0,r.useCallback)(e=>{s&&o.set(e)},[s,o])]}({groupId:n}),g=(()=>{let e=h??f;return p({value:e,tabValues:o})?e:null})();return(0,l.Z)(()=>{g&&x(g)},[g]),{selectedValue:a,selectValue:(0,r.useCallback)(e=>{if(!p({value:e,tabValues:o}))throw Error(`Can't select invalid tab value=${e}`);x(e),m(e),b(e)},[m,b,o]),tabValues:o}}(e);return(0,n.jsxs)("div",{className:(0,o.Z)("tabs-container","tabList__CuJ"),children:[(0,n.jsx)(h,{...t,...e}),(0,n.jsx)(m,{...t,...e})]})}function b(e){let t=(0,x.Z)();return(0,n.jsx)(f,{...e,children:d(e.children)},String(t))}},65:function(e,t,s){s.d(t,{Z:function(){return i},a:function(){return a}});var n=s(7294);let r={},o=n.createContext(r);function a(e){let t=n.useContext(o);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);