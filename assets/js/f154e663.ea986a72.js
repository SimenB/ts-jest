"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([["2626"],{4751:function(e,s,t){t.r(s),t.d(s,{default:()=>h,frontMatter:()=>a,metadata:()=>n,assets:()=>d,toc:()=>j,contentTitle:()=>c});var n=JSON.parse('{"id":"getting-started/options/diagnostics","title":"Diagnostics option","description":"The diagnostics option configures error reporting.","source":"@site/versioned_docs/version-29.0/getting-started/options/diagnostics.md","sourceDirName":"getting-started/options","slug":"/getting-started/options/diagnostics","permalink":"/ts-jest/docs/29.0/getting-started/options/diagnostics","draft":false,"unlisted":false,"editUrl":"https://github.com/kulshekhar/ts-jest/edit/main/website/versioned_docs/version-29.0/getting-started/options/diagnostics.md","tags":[],"version":"29.0","lastUpdatedBy":"ahnpnl","lastUpdatedAt":1744781649000,"frontMatter":{"title":"Diagnostics option"}}'),i=t("5893"),r=t("65"),o=t("7902"),l=t("5525");let a={title:"Diagnostics option"},c=void 0,d={},j=[{value:"Disabling/enabling",id:"disablingenabling",level:3},{value:"Advanced configuration",id:"advanced-configuration",level:3},{value:"Examples",id:"examples",level:3},{value:"Disabling diagnostics",id:"disabling-diagnostics",level:4},{value:"Advanced options",id:"advanced-options",level:4},{value:"Enabling diagnostics for test files only",id:"enabling-diagnostics-for-test-files-only",level:5},{value:"Do not fail on first error",id:"do-not-fail-on-first-error",level:5},{value:"Ignoring some error codes",id:"ignoring-some-error-codes",level:5}];function x(e){let s={a:"a",code:"code",em:"em",h3:"h3",h4:"h4",h5:"h5",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.code,{children:"diagnostics"})," option configures error reporting.\nIt can both be enabled/disabled entirely or limited to a specific type of errors and/or files."]}),"\n",(0,i.jsxs)(s.p,{children:["If a diagnostic is not filtered out, ",(0,i.jsx)(s.code,{children:"ts-jest"})," will fail the compilation and your test."]}),"\n",(0,i.jsx)(s.h3,{id:"disablingenabling",children:"Disabling/enabling"}),"\n",(0,i.jsxs)(s.p,{children:["By default all diagnostics are enabled. This is the same as setting the ",(0,i.jsx)(s.code,{children:"diagnostics"})," option to ",(0,i.jsx)(s.code,{children:"true"}),".\nTo disable all diagnostics, set ",(0,i.jsx)(s.code,{children:"diagnostics"})," to ",(0,i.jsx)(s.code,{children:"false"}),".\nThis might lead to slightly better performance, especially if you're not using Jest's cache."]}),"\n",(0,i.jsx)(s.h3,{id:"advanced-configuration",children:"Advanced configuration"}),"\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.code,{children:"diagnostics"})," option's value can also accept an object for more advanced configuration. Each config. key is optional:"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"warnOnly"})}),": If specified and ",(0,i.jsx)(s.code,{children:"true"}),", diagnostics will be reported but won't stop compilation (default: ",(0,i.jsx)(s.em,{children:"disabled"}),")."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"ignoreCodes"})}),": List of TypeScript error codes to ignore. Complete list can be found ",(0,i.jsx)(s.a,{href:"https://github.com/Microsoft/TypeScript/blob/main/src/compiler/diagnosticMessages.json",children:"there"}),". By default here are the ones ignored:","\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"6059"}),": ",(0,i.jsx)(s.em,{children:"'rootDir' is expected to contain all source files."})]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"18002"}),": ",(0,i.jsx)(s.em,{children:"The 'files' list in config file is empty."})," (it is strongly recommended including this one)"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"18003"}),": ",(0,i.jsx)(s.em,{children:"No inputs were found in config file."})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"exclude"})}),": If specified, diagnostics of source files which path ",(0,i.jsx)(s.strong,{children:"matches"})," will be ignored. This works a bit\nsimilar to ",(0,i.jsx)(s.code,{children:"tsconfig"})," option ",(0,i.jsx)(s.a,{href:"https://www.typescriptlang.org/tsconfig#exclude",children:"exclude"})," with the only difference is that\nin TypeScript, ",(0,i.jsx)(s.code,{children:"exclude"})," will also exclude files from compilation process."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"pretty"})}),": Enables/disables colorful and pretty output of errors (default: ",(0,i.jsx)(s.em,{children:"enabled"}),")."]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(s.h4,{id:"disabling-diagnostics",children:"Disabling diagnostics"}),"\n",(0,i.jsxs)(o.Z,{groupId:"code-examples",children:[(0,i.jsx)(l.Z,{value:"js",label:"JavaScript",children:(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-js",metastring:"tab",children:"// jest.config.js\n/** @type {import('ts-jest').JestConfigWithTsJest} */\nmodule.exports = {\n  // [...]\n  transform: {\n    // '^.+\\\\.[tj]sx?$' to process ts,js,tsx,jsx with `ts-jest`\n    // '^.+\\\\.m?[tj]sx?$' to process ts,js,tsx,jsx,mts,mjs,mtsx,mjsx with `ts-jest`\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        diagnostics: false,\n      },\n    ],\n  },\n}\n"})})}),(0,i.jsx)(l.Z,{value:"ts",label:"TypeScript",children:(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-ts",metastring:"tab",children:"// jest.config.ts\nimport type { JestConfigWithTsJest } from 'ts-jest'\n\nconst jestConfig: JestConfigWithTsJest = {\n  // [...]\n  transform: {\n    // '^.+\\\\.[tj]sx?$' to process ts,js,tsx,jsx with `ts-jest`\n    // '^.+\\\\.m?[tj]sx?$' to process ts,js,tsx,jsx,mts,mjs,mtsx,mjsx with `ts-jest`\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        diagnostics: false,\n      },\n    ],\n  },\n}\n\nexport default jestConfig\n"})})}),(0,i.jsx)(l.Z,{value:"JSON",children:(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-JSON",metastring:"tab",children:'// package.json\n{\n  // [...]\n  "jest": {\n    "transform": {\n      // \'^.+\\\\.[tj]sx?$\' to process ts,js,tsx,jsx with `ts-jest`\n      // \'^.+\\\\.m?[tj]sx?$\' to process ts,js,tsx,jsx,mts,mjs,mtsx,mjsx with `ts-jest`\n      "^.+\\\\.tsx?$": [\n        "ts-jest",\n        {\n          "diagnostics": false\n        }\n      ]\n    }\n  }\n}\n'})})})]}),"\n",(0,i.jsx)(s.h4,{id:"advanced-options",children:"Advanced options"}),"\n",(0,i.jsx)(s.h5,{id:"enabling-diagnostics-for-test-files-only",children:"Enabling diagnostics for test files only"}),"\n",(0,i.jsxs)(s.p,{children:["Assuming all your test files ends with ",(0,i.jsx)(s.code,{children:".spec.ts"})," or ",(0,i.jsx)(s.code,{children:".test.ts"}),", using the following config will enable error reporting only for those files:"]}),"\n",(0,i.jsxs)(o.Z,{groupId:"code-examples",children:[(0,i.jsx)(l.Z,{value:"js",label:"JavaScript",children:(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-js",metastring:"tab",children:"// jest.config.js\n/** @type {import('ts-jest').JestConfigWithTsJest} */\nmodule.exports = {\n  // [...]\n  transform: {\n    // '^.+\\\\.[tj]sx?$' to process ts,js,tsx,jsx with `ts-jest`\n    // '^.+\\\\.m?[tj]sx?$' to process ts,js,tsx,jsx,mts,mjs,mtsx,mjsx with `ts-jest`\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        diagnostics: {\n          exclude: ['!**/*.(spec|test).ts'],\n        },\n      },\n    ],\n  },\n}\n"})})}),(0,i.jsx)(l.Z,{value:"ts",label:"TypeScript",children:(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-ts",metastring:"tab",children:"// jest.config.ts\nimport type { JestConfigWithTsJest } from 'ts-jest'\n\nconst jestConfig: JestConfigWithTsJest = {\n  // [...]\n  transform: {\n    // '^.+\\\\.[tj]sx?$' to process ts,js,tsx,jsx with `ts-jest`\n    // '^.+\\\\.m?[tj]sx?$' to process ts,js,tsx,jsx,mts,mjs,mtsx,mjsx with `ts-jest`\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        diagnostics: {\n          exclude: ['!**/*.(spec|test).ts'],\n        },\n      },\n    ],\n  },\n}\n\nexport default jestConfig\n"})})}),(0,i.jsx)(l.Z,{value:"JSON",children:(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-JSON",metastring:"tab",children:'// package.json\n{\n  // [...]\n  "jest": {\n    "transform": {\n      // \'^.+\\\\.[tj]sx?$\' to process ts,js,tsx,jsx with `ts-jest`\n      // \'^.+\\\\.m?[tj]sx?$\' to process ts,js,tsx,jsx,mts,mjs,mtsx,mjsx with `ts-jest`\n      "^.+\\\\.tsx?$": [\n        "ts-jest",\n        {\n          "diagnostics": {\n            "exclude": ["!**/*.(spec|test).ts"]\n          }\n        }\n      ]\n    }\n  }\n}\n'})})})]}),"\n",(0,i.jsx)(s.h5,{id:"do-not-fail-on-first-error",children:"Do not fail on first error"}),"\n",(0,i.jsxs)(s.p,{children:["While some diagnostics are stop-blockers for the compilation, most of them are not. If you want the compilation (and so your tests) to continue when encountering those, set the ",(0,i.jsx)(s.code,{children:"warnOnly"})," to ",(0,i.jsx)(s.code,{children:"true"}),":"]}),"\n",(0,i.jsxs)(o.Z,{groupId:"code-examples",children:[(0,i.jsx)(l.Z,{value:"js",label:"JavaScript",children:(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-js",metastring:"tab",children:"// jest.config.js\n/** @type {import('ts-jest').JestConfigWithTsJest} */\nmodule.exports = {\n  // [...]\n  transform: {\n    // '^.+\\\\.[tj]sx?$' to process ts,js,tsx,jsx with `ts-jest`\n    // '^.+\\\\.m?[tj]sx?$' to process ts,js,tsx,jsx,mts,mjs,mtsx,mjsx with `ts-jest`\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        diagnostics: {\n          warnOnly: true,\n        },\n      },\n    ],\n  },\n}\n"})})}),(0,i.jsx)(l.Z,{value:"ts",label:"TypeScript",children:(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-ts",metastring:"tab",children:"// jest.config.ts\nimport type { JestConfigWithTsJest } from 'ts-jest'\n\nconst jestConfig: JestConfigWithTsJest = {\n  // [...]\n  transform: {\n    // '^.+\\\\.[tj]sx?$' to process ts,js,tsx,jsx with `ts-jest`\n    // '^.+\\\\.m?[tj]sx?$' to process ts,js,tsx,jsx,mts,mjs,mtsx,mjsx with `ts-jest`\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        diagnostics: {\n          warnOnly: true,\n        },\n      },\n    ],\n  },\n}\n\nexport default jestConfig\n"})})}),(0,i.jsx)(l.Z,{value:"JSON",children:(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-JSON",metastring:"tab",children:'// package.json\n{\n  // [...]\n  "jest": {\n    "transform": {\n      // \'^.+\\\\.[tj]sx?$\' to process ts,js,tsx,jsx with `ts-jest`\n      // \'^.+\\\\.m?[tj]sx?$\' to process ts,js,tsx,jsx,mts,mjs,mtsx,mjsx with `ts-jest`\n      "^.+\\\\.tsx?$": [\n        "ts-jest",\n        {\n          "diagnostics": {\n            "warnOnly": true\n          }\n        }\n      ]\n    }\n  }\n}\n'})})})]}),"\n",(0,i.jsx)(s.h5,{id:"ignoring-some-error-codes",children:"Ignoring some error codes"}),"\n",(0,i.jsxs)(s.p,{children:["All TypeScript error codes can be found ",(0,i.jsx)(s.a,{href:"https://github.com/Microsoft/TypeScript/blob/main/src/compiler/diagnosticMessages.json",children:"there"}),". The ",(0,i.jsx)(s.code,{children:"ignoreCodes"})," option accepts this values:"]}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["A single ",(0,i.jsx)(s.code,{children:"number"})," (example: ",(0,i.jsx)(s.code,{children:"1009"}),"): unique error code to ignore"]}),"\n",(0,i.jsxs)(s.li,{children:["A ",(0,i.jsx)(s.code,{children:"string"})," with a code (example ",(0,i.jsx)(s.code,{children:'"1009"'}),", ",(0,i.jsx)(s.code,{children:'"TS1009"'})," or ",(0,i.jsx)(s.code,{children:'"TS1009"'}),")"]}),"\n",(0,i.jsxs)(s.li,{children:["A ",(0,i.jsx)(s.code,{children:"string"})," with a list of the above (example: ",(0,i.jsx)(s.code,{children:'"1009, TS2571, 4072"'}),")"]}),"\n",(0,i.jsxs)(s.li,{children:["An ",(0,i.jsx)(s.code,{children:"array"})," of one or more from ",(0,i.jsx)(s.code,{children:"1"})," or ",(0,i.jsx)(s.code,{children:"3"})," (example: ",(0,i.jsx)(s.code,{children:'[1009, "TS2571", "6031"]'}),")"]}),"\n"]}),"\n",(0,i.jsxs)(o.Z,{groupId:"code-examples",children:[(0,i.jsx)(l.Z,{value:"js",label:"JavaScript",children:(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-js",metastring:"tab",children:"// jest.config.js\n/** @type {import('ts-jest').JestConfigWithTsJest} */\nmodule.exports = {\n  // [...]\n  transform: {\n    // '^.+\\\\.[tj]sx?$' to process ts,js,tsx,jsx with `ts-jest`\n    // '^.+\\\\.m?[tj]sx?$' to process ts,js,tsx,jsx,mts,mjs,mtsx,mjsx with `ts-jest`\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        diagnostics: {\n          ignoreCodes: [2571, 6031, 18003],\n        },\n      },\n    ],\n  },\n}\n"})})}),(0,i.jsx)(l.Z,{value:"ts",label:"TypeScript",children:(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-ts",metastring:"tab",children:"// jest.config.ts\nimport type { JestConfigWithTsJest } from 'ts-jest'\n\nconst jestConfig: JestConfigWithTsJest = {\n  // [...]\n  transform: {\n    // '^.+\\\\.[tj]sx?$' to process ts,js,tsx,jsx with `ts-jest`\n    // '^.+\\\\.m?[tj]sx?$' to process ts,js,tsx,jsx,mts,mjs,mtsx,mjsx with `ts-jest`\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        diagnostics: {\n          ignoreCodes: [2571, 6031, 18003],\n        },\n      },\n    ],\n  },\n}\n\nexport default jestConfig\n"})})}),(0,i.jsx)(l.Z,{value:"JSON",children:(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-JSON",metastring:"tab",children:'// package.json\n{\n  // [...]\n  "jest": {\n    "transform": {\n      // \'^.+\\\\.[tj]sx?$\' to process ts,js,tsx,jsx with `ts-jest`\n      // \'^.+\\\\.m?[tj]sx?$\' to process ts,js,tsx,jsx,mts,mjs,mtsx,mjsx with `ts-jest`\n      "^.+\\\\.tsx?$": [\n        "ts-jest",\n        {\n          "diagnostics": {\n            "ignoreCodes": [2571, 6031, 18003]\n          }\n        }\n      ]\n    }\n  }\n}\n'})})})]})]})}function h(e={}){let{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(x,{...e})}):x(e)}},5525:function(e,s,t){t.d(s,{Z:()=>r});var n=t("5893");t("7294");var i=t("7026");function r(e){let{children:s,hidden:t,className:r}=e;return(0,n.jsx)("div",{role:"tabpanel",className:(0,i.Z)("tabItem_Ymn6",r),hidden:t,children:s})}},7902:function(e,s,t){t.d(s,{Z:()=>f});var n=t("5893"),i=t("7294"),r=t("7026"),o=t("9599"),l=t("6550"),a=t("2000"),c=t("4520"),d=t("8341"),j=t("6009");function x(e){return i.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||i.isValidElement(e)&&function(e){let{props:s}=e;return!!s&&"object"==typeof s&&"value"in s}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function h(e){let{value:s,tabValues:t}=e;return t.some(e=>e.value===s)}var u=t("7227");function p(e){let{className:s,block:t,selectedValue:i,selectValue:l,tabValues:a}=e,c=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),j=e=>{let s=e.currentTarget,t=a[c.indexOf(s)].value;t!==i&&(d(s),l(t))},x=e=>{let s=null;switch(e.key){case"Enter":j(e);break;case"ArrowRight":{let t=c.indexOf(e.currentTarget)+1;s=c[t]??c[0];break}case"ArrowLeft":{let t=c.indexOf(e.currentTarget)-1;s=c[t]??c[c.length-1]}}s?.focus()};return(0,n.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},s),children:a.map(e=>{let{value:s,label:t,attributes:o}=e;return(0,n.jsx)("li",{role:"tab",tabIndex:i===s?0:-1,"aria-selected":i===s,ref:e=>{c.push(e)},onKeyDown:x,onClick:j,...o,className:(0,r.Z)("tabs__item","tabItem_LNqP",o?.className,{"tabs__item--active":i===s}),children:t??s},s)})})}function m(e){let{lazy:s,children:t,selectedValue:o}=e,l=(Array.isArray(t)?t:[t]).filter(Boolean);if(s){let e=l.find(e=>e.props.value===o);return e?(0,i.cloneElement)(e,{className:(0,r.Z)("margin-top--md",e.props.className)}):null}return(0,n.jsx)("div",{className:"margin-top--md",children:l.map((e,s)=>(0,i.cloneElement)(e,{key:s,hidden:e.props.value!==o}))})}function g(e){let s=function(e){let{defaultValue:s,queryString:t=!1,groupId:n}=e,r=function(e){let{values:s,children:t}=e;return(0,i.useMemo)(()=>{let e=s??x(t).map(e=>{let{props:{value:s,label:t,attributes:n,default:i}}=e;return{value:s,label:t,attributes:n,default:i}});return!function(e){let s=(0,d.lx)(e,(e,s)=>e.value===s.value);if(s.length>0)throw Error(`Docusaurus error: Duplicate values "${s.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[s,t])}(e),[o,u]=(0,i.useState)(()=>(function(e){let{defaultValue:s,tabValues:t}=e;if(0===t.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(s){if(!h({value:s,tabValues:t}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${s}" but none of its children has the corresponding value. Available values are: ${t.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return s}let n=t.find(e=>e.default)??t[0];if(!n)throw Error("Unexpected error: 0 tabValues");return n.value})({defaultValue:s,tabValues:r})),[p,m]=function(e){let{queryString:s=!1,groupId:t}=e,n=(0,l.k6)(),r=function(e){let{queryString:s=!1,groupId:t}=e;if("string"==typeof s)return s;if(!1===s)return null;if(!0===s&&!t)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:s,groupId:t});return[(0,c._X)(r),(0,i.useCallback)(e=>{if(!r)return;let s=new URLSearchParams(n.location.search);s.set(r,e),n.replace({...n.location,search:s.toString()})},[r,n])]}({queryString:t,groupId:n}),[g,f]=function(e){let{groupId:s}=e,t=s?`docusaurus.tab.${s}`:null,[n,r]=(0,j.Nk)(t);return[n,(0,i.useCallback)(e=>{t&&r.set(e)},[t,r])]}({groupId:n}),b=(()=>{let e=p??g;return h({value:e,tabValues:r})?e:null})();return(0,a.Z)(()=>{b&&u(b)},[b]),{selectedValue:o,selectValue:(0,i.useCallback)(e=>{if(!h({value:e,tabValues:r}))throw Error(`Can't select invalid tab value=${e}`);u(e),m(e),f(e)},[m,f,r]),tabValues:r}}(e);return(0,n.jsxs)("div",{className:(0,r.Z)("tabs-container","tabList__CuJ"),children:[(0,n.jsx)(p,{...s,...e}),(0,n.jsx)(m,{...s,...e})]})}function f(e){let s=(0,u.Z)();return(0,n.jsx)(g,{...e,children:x(e.children)},String(s))}},65:function(e,s,t){t.d(s,{Z:function(){return l},a:function(){return o}});var n=t(7294);let i={},r=n.createContext(i);function o(e){let s=n.useContext(r);return n.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);