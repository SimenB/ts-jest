"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([["3846"],{8823:function(e,t,n){n.r(t),n.d(t,{default:()=>p,frontMatter:()=>o,metadata:()=>r,assets:()=>d,toc:()=>u,contentTitle:()=>c});var r=JSON.parse('{"id":"getting-started/installation","title":"Installation","description":"Dependencies","source":"@site/versioned_docs/version-29.0/getting-started/installation.md","sourceDirName":"getting-started","slug":"/getting-started/installation","permalink":"/ts-jest/docs/29.0/getting-started/installation","draft":false,"unlisted":false,"editUrl":"https://github.com/kulshekhar/ts-jest/edit/main/website/versioned_docs/version-29.0/getting-started/installation.md","tags":[],"version":"29.0","lastUpdatedBy":"renovate[bot]","lastUpdatedAt":1744541888000,"frontMatter":{"id":"installation","title":"Installation"},"sidebar":"version-29.0-docs","previous":{"title":"Contributing","permalink":"/ts-jest/docs/29.0/contributing"},"next":{"title":"Presets","permalink":"/ts-jest/docs/29.0/getting-started/presets"}}'),s=n("5893"),i=n("65"),a=n("7902"),l=n("5525");let o={id:"installation",title:"Installation"},c=void 0,d={},u=[{value:"Dependencies",id:"dependencies",level:3},{value:"Jest config file",id:"jest-config-file",level:3},{value:"Creating",id:"creating",level:4},{value:"Customizing",id:"customizing",level:4}];function h(e){let t={a:"a",admonition:"admonition",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h3,{id:"dependencies",children:"Dependencies"}),"\n",(0,s.jsxs)(t.p,{children:["You can install ",(0,s.jsx)(t.code,{children:"ts-jest"})," and dependencies all at once with one of the following commands."]}),"\n",(0,s.jsxs)(a.Z,{groupId:"npm2yarn",children:[(0,s.jsx)(l.Z,{value:"npm",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"npm install --save-dev jest typescript ts-jest @types/jest\n"})})}),(0,s.jsx)(l.Z,{value:"yarn",label:"Yarn",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"yarn add --dev jest typescript ts-jest @types/jest\n"})})}),(0,s.jsx)(l.Z,{value:"pnpm",label:"pnpm",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"pnpm add --save-dev jest typescript ts-jest @types/jest\n"})})})]}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsxs)(t.p,{children:["Tip: If you get an error with the following ",(0,s.jsx)(t.code,{children:"npm"})," commands such as ",(0,s.jsx)(t.code,{children:"npx: command not found"}),", you can replace ",(0,s.jsx)(t.code,{children:"npx XXX"})," with ",(0,s.jsx)(t.code,{children:"node node_modules/.bin/XXX"})," from the root of your project."]})}),"\n",(0,s.jsx)(t.h3,{id:"jest-config-file",children:"Jest config file"}),"\n",(0,s.jsx)(t.h4,{id:"creating",children:"Creating"}),"\n",(0,s.jsxs)(t.p,{children:["By default, Jest can run without any config files, but it will not compile ",(0,s.jsx)(t.code,{children:".ts"})," files.\nTo make it transpile TypeScript with ",(0,s.jsx)(t.code,{children:"ts-jest"}),", we will need to create a configuration file that will tell Jest to use a ",(0,s.jsx)(t.code,{children:"ts-jest"})," preset."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"ts-jest"})," can create the configuration file for you automatically:"]}),"\n",(0,s.jsxs)(a.Z,{groupId:"code-examples",children:[(0,s.jsx)(l.Z,{value:"npm",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-npm",metastring:"tab",children:"npx ts-jest config:init\n"})})}),(0,s.jsx)(l.Z,{value:"Yarn",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-Yarn",metastring:"tab",children:"yarn ts-jest config:init\n"})})})]}),"\n",(0,s.jsxs)(t.p,{children:["This will create a basic Jest configuration file which will inform Jest about how to handle ",(0,s.jsx)(t.code,{children:".ts"})," files correctly."]}),"\n",(0,s.jsxs)(t.p,{children:["You can also use the ",(0,s.jsx)(t.code,{children:"jest --init"})," command (prefixed with either ",(0,s.jsx)(t.code,{children:"npx"})," or ",(0,s.jsx)(t.code,{children:"yarn"})," depending on what you're using) to have more options related to Jest.\nHowever, answer ",(0,s.jsx)(t.code,{children:"no"})," to the Jest question about whether or not to enable TypeScript. Instead, add the line: ",(0,s.jsx)(t.code,{children:'preset: "ts-jest"'})," to the ",(0,s.jsx)(t.code,{children:"jest.config.js"})," file afterwards."]}),"\n",(0,s.jsx)(t.h4,{id:"customizing",children:"Customizing"}),"\n",(0,s.jsxs)(t.p,{children:["For customizing jest, please follow their ",(0,s.jsx)(t.a,{href:"https://jestjs.io/docs/en/configuration.html",children:"official guide online"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"ts-jest"})," specific options can be found ",(0,s.jsx)(t.a,{href:"/ts-jest/docs/29.0/getting-started/options",children:"here"}),"."]})]})}function p(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},5525:function(e,t,n){n.d(t,{Z:()=>i});var r=n("5893");n("7294");var s=n("7026");function i(e){let{children:t,hidden:n,className:i}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.Z)("tabItem_Ymn6",i),hidden:n,children:t})}},7902:function(e,t,n){n.d(t,{Z:()=>x});var r=n("5893"),s=n("7294"),i=n("7026"),a=n("9599"),l=n("6550"),o=n("2000"),c=n("4520"),d=n("8341"),u=n("6009");function h(e){return s.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||s.isValidElement(e)&&function(e){let{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function p(e){let{value:t,tabValues:n}=e;return n.some(e=>e.value===t)}var f=n("7227");function m(e){let{className:t,block:n,selectedValue:s,selectValue:l,tabValues:o}=e,c=[],{blockElementScrollPositionUntilNextRender:d}=(0,a.o5)(),u=e=>{let t=e.currentTarget,n=o[c.indexOf(t)].value;n!==s&&(d(t),l(n))},h=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{let n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{let n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1]}}t?.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t),children:o.map(e=>{let{value:t,label:n,attributes:a}=e;return(0,r.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>{c.push(e)},onKeyDown:h,onClick:u,...a,className:(0,i.Z)("tabs__item","tabItem_LNqP",a?.className,{"tabs__item--active":s===t}),children:n??t},t)})})}function j(e){let{lazy:t,children:n,selectedValue:a}=e,l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){let e=l.find(e=>e.props.value===a);return e?(0,s.cloneElement)(e,{className:(0,i.Z)("margin-top--md",e.props.className)}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:l.map((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==a}))})}function g(e){let t=function(e){let{defaultValue:t,queryString:n=!1,groupId:r}=e,i=function(e){let{values:t,children:n}=e;return(0,s.useMemo)(()=>{let e=t??h(n).map(e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}});return!function(e){let t=(0,d.lx)(e,(e,t)=>e.value===t.value);if(t.length>0)throw Error(`Docusaurus error: Duplicate values "${t.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[t,n])}(e),[a,f]=(0,s.useState)(()=>(function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}let r=n.find(e=>e.default)??n[0];if(!r)throw Error("Unexpected error: 0 tabValues");return r.value})({defaultValue:t,tabValues:i})),[m,j]=function(e){let{queryString:t=!1,groupId:n}=e,r=(0,l.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c._X)(i),(0,s.useCallback)(e=>{if(!i)return;let t=new URLSearchParams(r.location.search);t.set(i,e),r.replace({...r.location,search:t.toString()})},[i,r])]}({queryString:n,groupId:r}),[g,x]=function(e){let{groupId:t}=e,n=t?`docusaurus.tab.${t}`:null,[r,i]=(0,u.Nk)(n);return[r,(0,s.useCallback)(e=>{n&&i.set(e)},[n,i])]}({groupId:r}),v=(()=>{let e=m??g;return p({value:e,tabValues:i})?e:null})();return(0,o.Z)(()=>{v&&f(v)},[v]),{selectedValue:a,selectValue:(0,s.useCallback)(e=>{if(!p({value:e,tabValues:i}))throw Error(`Can't select invalid tab value=${e}`);f(e),j(e),x(e)},[j,x,i]),tabValues:i}}(e);return(0,r.jsxs)("div",{className:(0,i.Z)("tabs-container","tabList__CuJ"),children:[(0,r.jsx)(m,{...t,...e}),(0,r.jsx)(j,{...t,...e})]})}function x(e){let t=(0,f.Z)();return(0,r.jsx)(g,{...e,children:h(e.children)},String(t))}},65:function(e,t,n){n.d(t,{Z:function(){return l},a:function(){return a}});var r=n(7294);let s={},i=r.createContext(s);function a(e){let t=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);