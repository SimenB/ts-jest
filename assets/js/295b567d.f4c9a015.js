"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([["2172"],{2789:function(e,t,r){r.r(t),r.d(t,{default:()=>m,frontMatter:()=>l,metadata:()=>n,assets:()=>c,toc:()=>d,contentTitle:()=>u});var n=JSON.parse('{"id":"migration","title":"Migration from <=23.10","description":"You can use the config:migrate tool of ts-jest CLI if you\'re coming from an older version to help you migrate your Jest configuration.","source":"@site/docs/migration.md","sourceDirName":".","slug":"/migration","permalink":"/ts-jest/docs/next/migration","draft":false,"unlisted":false,"editUrl":"https://github.com/kulshekhar/ts-jest/edit/main/website/docs/migration.md","tags":[],"version":"current","lastUpdatedBy":"ahnpnl","lastUpdatedAt":1744349156000,"frontMatter":{"id":"migration","title":"Migration from <=23.10"},"sidebar":"docs","previous":{"title":"Babel7 or TypeScript","permalink":"/ts-jest/docs/next/babel7-or-ts"},"next":{"title":"Debugging ts-jest","permalink":"/ts-jest/docs/next/debugging"}}'),a=r("5893"),s=r("65"),o=r("7902"),i=r("5525");let l={id:"migration",title:"Migration from <=23.10"},u=void 0,c={},d=[];function f(e){let t={code:"code",em:"em",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["You can use the ",(0,a.jsx)(t.code,{children:"config:migrate"})," tool of ",(0,a.jsx)(t.code,{children:"ts-jest"})," CLI if you're coming from an older version to help you migrate your Jest configuration."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsxs)(t.em,{children:["If you're using ",(0,a.jsx)(t.code,{children:"jest.config.js"}),":"]})}),"\n",(0,a.jsxs)(o.Z,{groupId:"code-examples",children:[(0,a.jsx)(i.Z,{value:"npm",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-npm",metastring:"tab",children:"npx ts-jest config:migrate jest.config.js\n"})})}),(0,a.jsx)(i.Z,{value:"Yarn",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-Yarn",metastring:"tab",children:"yarn ts-jest config:migrate jest.config.js\n"})})})]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsxs)(t.em,{children:["If you're using ",(0,a.jsx)(t.code,{children:"jest"})," config property of ",(0,a.jsx)(t.code,{children:"package.json"}),":"]})}),"\n",(0,a.jsxs)(o.Z,{groupId:"code-examples",children:[(0,a.jsx)(i.Z,{value:"npm",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-npm",metastring:"tab",children:"npx ts-jest config:migrate package.json\n"})})}),(0,a.jsx)(i.Z,{value:"Yarn",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-Yarn",metastring:"tab",children:"yarn ts-jest config:migrate package.json\n"})})})]})]})}function m(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(f,{...e})}):f(e)}},5525:function(e,t,r){r.d(t,{Z:()=>s});var n=r("5893");r("7294");var a=r("7026");function s(e){let{children:t,hidden:r,className:s}=e;return(0,n.jsx)("div",{role:"tabpanel",className:(0,a.Z)("tabItem_Ymn6",s),hidden:r,children:t})}},7902:function(e,t,r){r.d(t,{Z:()=>x});var n=r("5893"),a=r("7294"),s=r("7026"),o=r("9599"),i=r("6550"),l=r("2000"),u=r("4520"),c=r("8341"),d=r("6009");function f(e){return a.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||a.isValidElement(e)&&function(e){let{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function m(e){let{value:t,tabValues:r}=e;return r.some(e=>e.value===t)}var p=r("7227");function h(e){let{className:t,block:r,selectedValue:a,selectValue:i,tabValues:l}=e,u=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),d=e=>{let t=e.currentTarget,r=l[u.indexOf(t)].value;r!==a&&(c(t),i(r))},f=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let r=u.indexOf(e.currentTarget)+1;t=u[r]??u[0];break}case"ArrowLeft":{let r=u.indexOf(e.currentTarget)-1;t=u[r]??u[u.length-1]}}t?.focus()};return(0,n.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":r},t),children:l.map(e=>{let{value:t,label:r,attributes:o}=e;return(0,n.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>{u.push(e)},onKeyDown:f,onClick:d,...o,className:(0,s.Z)("tabs__item","tabItem_LNqP",o?.className,{"tabs__item--active":a===t}),children:r??t},t)})})}function g(e){let{lazy:t,children:r,selectedValue:o}=e,i=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){let e=i.find(e=>e.props.value===o);return e?(0,a.cloneElement)(e,{className:(0,s.Z)("margin-top--md",e.props.className)}):null}return(0,n.jsx)("div",{className:"margin-top--md",children:i.map((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==o}))})}function j(e){let t=function(e){let{defaultValue:t,queryString:r=!1,groupId:n}=e,s=function(e){let{values:t,children:r}=e;return(0,a.useMemo)(()=>{let e=t??f(r).map(e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}});return!function(e){let t=(0,c.lx)(e,(e,t)=>e.value===t.value);if(t.length>0)throw Error(`Docusaurus error: Duplicate values "${t.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[t,r])}(e),[o,p]=(0,a.useState)(()=>(function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}let n=r.find(e=>e.default)??r[0];if(!n)throw Error("Unexpected error: 0 tabValues");return n.value})({defaultValue:t,tabValues:s})),[h,g]=function(e){let{queryString:t=!1,groupId:r}=e,n=(0,i.k6)(),s=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,u._X)(s),(0,a.useCallback)(e=>{if(!s)return;let t=new URLSearchParams(n.location.search);t.set(s,e),n.replace({...n.location,search:t.toString()})},[s,n])]}({queryString:r,groupId:n}),[j,x]=function(e){let{groupId:t}=e,r=t?`docusaurus.tab.${t}`:null,[n,s]=(0,d.Nk)(r);return[n,(0,a.useCallback)(e=>{r&&s.set(e)},[r,s])]}({groupId:n}),b=(()=>{let e=h??j;return m({value:e,tabValues:s})?e:null})();return(0,l.Z)(()=>{b&&p(b)},[b]),{selectedValue:o,selectValue:(0,a.useCallback)(e=>{if(!m({value:e,tabValues:s}))throw Error(`Can't select invalid tab value=${e}`);p(e),g(e),x(e)},[g,x,s]),tabValues:s}}(e);return(0,n.jsxs)("div",{className:(0,s.Z)("tabs-container","tabList__CuJ"),children:[(0,n.jsx)(h,{...t,...e}),(0,n.jsx)(g,{...t,...e})]})}function x(e){let t=(0,p.Z)();return(0,n.jsx)(j,{...e,children:f(e.children)},String(t))}},65:function(e,t,r){r.d(t,{Z:function(){return i},a:function(){return o}});var n=r(7294);let a={},s=n.createContext(a);function o(e){let t=n.useContext(s);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);