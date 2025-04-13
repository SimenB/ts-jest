"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([["1042"],{4661:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>l,metadata:()=>r,assets:()=>c,toc:()=>d,contentTitle:()=>u});var r=JSON.parse('{"id":"debugging","title":"Debugging ts-jest","description":"You can activate the debug logger by setting the environment variable TSJESTLOG before running tests.","source":"@site/versioned_docs/version-29.2/debugging.md","sourceDirName":".","slug":"/debugging","permalink":"/ts-jest/docs/29.2/debugging","draft":false,"unlisted":false,"editUrl":"https://github.com/kulshekhar/ts-jest/edit/main/website/versioned_docs/version-29.2/debugging.md","tags":[],"version":"29.2","lastUpdatedBy":"renovate[bot]","lastUpdatedAt":1744541888000,"frontMatter":{"id":"debugging","title":"Debugging ts-jest"},"sidebar":"version-29.1-docs","previous":{"title":"Migration from <=23.10","permalink":"/ts-jest/docs/29.2/migration"}}'),s=n("5893"),a=n("65"),o=n("7902"),i=n("5525");let l={id:"debugging",title:"Debugging ts-jest"},u=void 0,c={},d=[];function g(e){let t={code:"code",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["You can activate the debug logger by setting the environment variable ",(0,s.jsx)(t.code,{children:"TS_JEST_LOG"})," before running tests.\nThe output of the logger will be in ",(0,s.jsx)(t.strong,{children:"ts-jest.log"})," in current working directory."]}),"\n",(0,s.jsxs)(t.p,{children:["The debug logger contains some useful information about how internal ",(0,s.jsx)(t.code,{children:"ts-jest"})," works, including which files are processed,\nwhich Jest config or TypeScript config is used etc."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Linux/MacOS"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"export TS_JEST_LOG=ts-jest.log\n"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Windows"})}),"\n",(0,s.jsxs)(o.Z,{groupId:"code-examples",children:[(0,s.jsx)(i.Z,{value:"Command",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-Command",metastring:"Prompt tab",children:"set TS_JEST_LOG=ts-jest.log\n"})})}),(0,s.jsx)(i.Z,{value:"PowerShell",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-PowerShell",metastring:"tab",children:"$env:TS_JEST_LOG = 'ts-jest.log'\n"})})})]})]})}function h(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(g,{...e})}):g(e)}},5525:function(e,t,n){n.d(t,{Z:()=>a});var r=n("5893");n("7294");var s=n("7026");function a(e){let{children:t,hidden:n,className:a}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.Z)("tabItem_Ymn6",a),hidden:n,children:t})}},7902:function(e,t,n){n.d(t,{Z:()=>v});var r=n("5893"),s=n("7294"),a=n("7026"),o=n("9599"),i=n("6550"),l=n("2000"),u=n("4520"),c=n("8341"),d=n("6009");function g(e){return s.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||s.isValidElement(e)&&function(e){let{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function h(e){let{value:t,tabValues:n}=e;return n.some(e=>e.value===t)}var f=n("7227");function p(e){let{className:t,block:n,selectedValue:s,selectValue:i,tabValues:l}=e,u=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),d=e=>{let t=e.currentTarget,n=l[u.indexOf(t)].value;n!==s&&(c(t),i(n))},g=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{let n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1]}}t?.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t),children:l.map(e=>{let{value:t,label:n,attributes:o}=e;return(0,r.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>{u.push(e)},onKeyDown:g,onClick:d,...o,className:(0,a.Z)("tabs__item","tabItem_LNqP",o?.className,{"tabs__item--active":s===t}),children:n??t},t)})})}function m(e){let{lazy:t,children:n,selectedValue:o}=e,i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){let e=i.find(e=>e.props.value===o);return e?(0,s.cloneElement)(e,{className:(0,a.Z)("margin-top--md",e.props.className)}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:i.map((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==o}))})}function b(e){let t=function(e){let{defaultValue:t,queryString:n=!1,groupId:r}=e,a=function(e){let{values:t,children:n}=e;return(0,s.useMemo)(()=>{let e=t??g(n).map(e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}});return!function(e){let t=(0,c.lx)(e,(e,t)=>e.value===t.value);if(t.length>0)throw Error(`Docusaurus error: Duplicate values "${t.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[t,n])}(e),[o,f]=(0,s.useState)(()=>(function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}let r=n.find(e=>e.default)??n[0];if(!r)throw Error("Unexpected error: 0 tabValues");return r.value})({defaultValue:t,tabValues:a})),[p,m]=function(e){let{queryString:t=!1,groupId:n}=e,r=(0,i.k6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(a),(0,s.useCallback)(e=>{if(!a)return;let t=new URLSearchParams(r.location.search);t.set(a,e),r.replace({...r.location,search:t.toString()})},[a,r])]}({queryString:n,groupId:r}),[b,v]=function(e){let{groupId:t}=e,n=t?`docusaurus.tab.${t}`:null,[r,a]=(0,d.Nk)(n);return[r,(0,s.useCallback)(e=>{n&&a.set(e)},[n,a])]}({groupId:r}),j=(()=>{let e=p??b;return h({value:e,tabValues:a})?e:null})();return(0,l.Z)(()=>{j&&f(j)},[j]),{selectedValue:o,selectValue:(0,s.useCallback)(e=>{if(!h({value:e,tabValues:a}))throw Error(`Can't select invalid tab value=${e}`);f(e),m(e),v(e)},[m,v,a]),tabValues:a}}(e);return(0,r.jsxs)("div",{className:(0,a.Z)("tabs-container","tabList__CuJ"),children:[(0,r.jsx)(p,{...t,...e}),(0,r.jsx)(m,{...t,...e})]})}function v(e){let t=(0,f.Z)();return(0,r.jsx)(b,{...e,children:g(e.children)},String(t))}},65:function(e,t,n){n.d(t,{Z:function(){return i},a:function(){return o}});var r=n(7294);let s={},a=r.createContext(s);function o(e){let t=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);