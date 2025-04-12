"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([["2562"],{4139:function(e,t,n){n.r(t),n.d(t,{default:()=>m,frontMatter:()=>i,metadata:()=>r,assets:()=>c,toc:()=>d,contentTitle:()=>u});var r=JSON.parse('{"id":"guides/mock-es6-class","title":"Mock ES6 class","description":"TypeScript is transpiling your ts file and your module is likely being imported using ES2015s import.","source":"@site/versioned_docs/version-29.0/guides/mock-es6-class.md","sourceDirName":"guides","slug":"/guides/mock-es6-class","permalink":"/ts-jest/docs/29.0/guides/mock-es6-class","draft":false,"unlisted":false,"editUrl":"https://github.com/kulshekhar/ts-jest/edit/main/website/versioned_docs/version-29.0/guides/mock-es6-class.md","tags":[],"version":"29.0","lastUpdatedBy":"renovate[bot]","lastUpdatedAt":1744445151000,"frontMatter":{"id":"mock-es6-class","title":"Mock ES6 class"},"sidebar":"version-29.0-docs","previous":{"title":"ESM Support","permalink":"/ts-jest/docs/29.0/guides/esm-support"},"next":{"title":"Using with React Native","permalink":"/ts-jest/docs/29.0/guides/react-native"}}'),s=n("5893"),a=n("65"),l=n("7902"),o=n("5525");let i={id:"mock-es6-class",title:"Mock ES6 class"},u=void 0,c={},d=[];function p(e){let t={code:"code",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["TypeScript is transpiling your ts file and your module is likely being imported using ES2015s import.\n",(0,s.jsx)(t.code,{children:"const soundPlayer = require('./sound-player')"}),". Therefore creating an instance of the class that was exported as\na default will look like this: ",(0,s.jsx)(t.code,{children:"new soundPlayer.default()"}),". However if you are mocking the class as suggested by the documentation."]}),"\n",(0,s.jsxs)(l.Z,{groupId:"code-examples",children:[(0,s.jsx)(o.Z,{value:"js",label:"JavaScript",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",metastring:"tab",children:"jest.mock('./sound-player', () => {\n  return jest.fn().mockImplementation(() => {\n    return { playSoundFile: mockPlaySoundFile }\n  })\n})\n"})})}),(0,s.jsx)(o.Z,{value:"ts",label:"TypeScript",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",metastring:"tab",children:"jest.mock('./sound-player', () => {\n  return jest.fn().mockImplementation(() => {\n    return { playSoundFile: mockPlaySoundFile }\n  })\n})\n"})})})]}),"\n",(0,s.jsx)(t.p,{children:"You will get the error"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"TypeError: sound_player_1.default is not a constructor\n"})}),"\n",(0,s.jsxs)(t.p,{children:["because ",(0,s.jsx)(t.code,{children:"soundPlayer.default"})," does not point to a function. Your mock has to return an object which has a property default\nthat points to a function."]}),"\n",(0,s.jsxs)(l.Z,{groupId:"code-examples",children:[(0,s.jsx)(o.Z,{value:"js",label:"JavaScript",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",metastring:"tab",children:"jest.mock('./sound-player', () => {\n  return {\n    default: jest.fn().mockImplementation(() => {\n      return {\n        playSoundFile: mockPlaySoundFile,\n      }\n    }),\n  }\n})\n"})})}),(0,s.jsx)(o.Z,{value:"ts",label:"TypeScript",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",metastring:"tab",children:"jest.mock('./sound-player', () => {\n  return {\n    default: jest.fn().mockImplementation(() => {\n      return {\n        playSoundFile: mockPlaySoundFile,\n      }\n    }),\n  }\n})\n"})})})]}),"\n",(0,s.jsxs)(t.p,{children:["For named imports, like ",(0,s.jsx)(t.code,{children:"import { OAuth2 } from './oauth'"}),", replace ",(0,s.jsx)(t.code,{children:"default"})," with imported module name, ",(0,s.jsx)(t.code,{children:"OAuth2"})," in this example:"]}),"\n",(0,s.jsxs)(l.Z,{groupId:"code-examples",children:[(0,s.jsx)(o.Z,{value:"js",label:"JavaScript",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",metastring:"tab",children:"jest.mock('./oauth', () => {\n    return {\n        OAuth2: ... // mock here\n    }\n})\n"})})}),(0,s.jsx)(o.Z,{value:"ts",label:"TypeScript",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",metastring:"tab",children:"jest.mock('./oauth', () => {\n    return {\n        OAuth2: ... // mock here\n    }\n})\n"})})})]})]})}function m(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},5525:function(e,t,n){n.d(t,{Z:()=>a});var r=n("5893");n("7294");var s=n("7026");function a(e){let{children:t,hidden:n,className:a}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.Z)("tabItem_Ymn6",a),hidden:n,children:t})}},7902:function(e,t,n){n.d(t,{Z:()=>b});var r=n("5893"),s=n("7294"),a=n("7026"),l=n("9599"),o=n("6550"),i=n("2000"),u=n("4520"),c=n("8341"),d=n("6009");function p(e){return s.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||s.isValidElement(e)&&function(e){let{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function m(e){let{value:t,tabValues:n}=e;return n.some(e=>e.value===t)}var h=n("7227");function f(e){let{className:t,block:n,selectedValue:s,selectValue:o,tabValues:i}=e,u=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),d=e=>{let t=e.currentTarget,n=i[u.indexOf(t)].value;n!==s&&(c(t),o(n))},p=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{let n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1]}}t?.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t),children:i.map(e=>{let{value:t,label:n,attributes:l}=e;return(0,r.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>{u.push(e)},onKeyDown:p,onClick:d,...l,className:(0,a.Z)("tabs__item","tabItem_LNqP",l?.className,{"tabs__item--active":s===t}),children:n??t},t)})})}function j(e){let{lazy:t,children:n,selectedValue:l}=e,o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){let e=o.find(e=>e.props.value===l);return e?(0,s.cloneElement)(e,{className:(0,a.Z)("margin-top--md",e.props.className)}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:o.map((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==l}))})}function g(e){let t=function(e){let{defaultValue:t,queryString:n=!1,groupId:r}=e,a=function(e){let{values:t,children:n}=e;return(0,s.useMemo)(()=>{let e=t??p(n).map(e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}});return!function(e){let t=(0,c.lx)(e,(e,t)=>e.value===t.value);if(t.length>0)throw Error(`Docusaurus error: Duplicate values "${t.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[t,n])}(e),[l,h]=(0,s.useState)(()=>(function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}let r=n.find(e=>e.default)??n[0];if(!r)throw Error("Unexpected error: 0 tabValues");return r.value})({defaultValue:t,tabValues:a})),[f,j]=function(e){let{queryString:t=!1,groupId:n}=e,r=(0,o.k6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(a),(0,s.useCallback)(e=>{if(!a)return;let t=new URLSearchParams(r.location.search);t.set(a,e),r.replace({...r.location,search:t.toString()})},[a,r])]}({queryString:n,groupId:r}),[g,b]=function(e){let{groupId:t}=e,n=t?`docusaurus.tab.${t}`:null,[r,a]=(0,d.Nk)(n);return[r,(0,s.useCallback)(e=>{n&&a.set(e)},[n,a])]}({groupId:r}),v=(()=>{let e=f??g;return m({value:e,tabValues:a})?e:null})();return(0,i.Z)(()=>{v&&h(v)},[v]),{selectedValue:l,selectValue:(0,s.useCallback)(e=>{if(!m({value:e,tabValues:a}))throw Error(`Can't select invalid tab value=${e}`);h(e),j(e),b(e)},[j,b,a]),tabValues:a}}(e);return(0,r.jsxs)("div",{className:(0,a.Z)("tabs-container","tabList__CuJ"),children:[(0,r.jsx)(f,{...t,...e}),(0,r.jsx)(j,{...t,...e})]})}function b(e){let t=(0,h.Z)();return(0,r.jsx)(g,{...e,children:p(e.children)},String(t))}},65:function(e,t,n){n.d(t,{Z:function(){return o},a:function(){return l}});var r=n(7294);let s={},a=r.createContext(s);function l(e){let t=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);