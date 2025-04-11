"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([["4478"],{7600:function(e,t,n){n.d(t,{Z:()=>a});var r=n("5893");n("7294");var l=n("6365");function a(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,r.jsx)("div",{className:"tableOfContentsInline_prmo",children:(0,r.jsx)(l.Z,{toc:t,minHeadingLevel:n,maxHeadingLevel:a,className:"table-of-contents",linkClassName:null})})}},6365:function(e,t,n){n.d(t,{Z:()=>i});var r=n("5893"),l=n("7294"),a=n("140");function o(e){let t=e.getBoundingClientRect();return t.top===t.bottom?o(e.parentNode):t}var u=n("3012");let s=l.memo(function e(t){let{toc:n,className:l,linkClassName:a,isChild:o}=t;return n.length?(0,r.jsx)("ul",{className:o?void 0:l,children:n.map(t=>(0,r.jsxs)("li",{children:[(0,r.jsx)(u.Z,{to:`#${t.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:t.value}}),(0,r.jsx)(e,{isChild:!0,toc:t.children,className:l,linkClassName:a})]},t.id))}):null});function i(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:u="table-of-contents__link",linkActiveClassName:i,minHeadingLevel:c,maxHeadingLevel:f,...d}=e,m=(0,a.L)(),h=c??m.tableOfContents.minHeadingLevel,v=f??m.tableOfContents.maxHeadingLevel,p=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:r}=e;return(0,l.useMemo)(()=>(function e(t){let{toc:n,minHeadingLevel:r,maxHeadingLevel:l}=t;return n.flatMap(t=>{let n=e({toc:t.children,minHeadingLevel:r,maxHeadingLevel:l});return t.level>=r&&t.level<=l?[{...t,children:n}]:n})})({toc:function(e){let t=e.map(e=>({...e,parentIndex:-1,children:[]})),n=Array(7).fill(-1);t.forEach((e,t)=>{let r=n.slice(2,e.level);e.parentIndex=Math.max(...r),n[e.level]=t});let r=[];return t.forEach(e=>{let{parentIndex:n,...l}=e;n>=0?t[n].children.push(l):r.push(l)}),r}(t),minHeadingLevel:n,maxHeadingLevel:r}),[t,n,r])}({toc:t,minHeadingLevel:h,maxHeadingLevel:v});return!function(e){let t=(0,l.useRef)(void 0),n=function(){let e=(0,l.useRef)(0),{navbar:{hideOnScroll:t}}=(0,a.L)();return(0,l.useEffect)(()=>{e.current=t?0:document.querySelector(".navbar").clientHeight},[t]),e}();(0,l.useEffect)(()=>{if(!e)return()=>{};let{linkClassName:r,linkActiveClassName:l,minHeadingLevel:a,maxHeadingLevel:u}=e;function s(){let e=Array.from(document.getElementsByClassName(r)),s=function(e,t){let{anchorTopOffset:n}=t,r=e.find(e=>o(e).top>=n);if(r){var l;return(l=o(r)).top>0&&l.bottom<window.innerHeight/2?r:e[e.indexOf(r)-1]??null}return e[e.length-1]??null}(function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e,r=[];for(let e=t;e<=n;e+=1)r.push(`h${e}.anchor`);return Array.from(document.querySelectorAll(r.join()))}({minHeadingLevel:a,maxHeadingLevel:u}),{anchorTopOffset:n.current}),i=e.find(e=>s&&s.id===decodeURIComponent(e.href.substring(e.href.indexOf("#")+1)));e.forEach(e=>{e===i?(t.current&&t.current!==e&&t.current.classList.remove(l),e.classList.add(l),t.current=e):e.classList.remove(l)})}return document.addEventListener("scroll",s),document.addEventListener("resize",s),s(),()=>{document.removeEventListener("scroll",s),document.removeEventListener("resize",s)}},[e,n])}((0,l.useMemo)(()=>{if(u&&i)return{linkClassName:u,linkActiveClassName:i,minHeadingLevel:h,maxHeadingLevel:v}},[u,i,h,v])),(0,r.jsx)(s,{toc:p,className:n,linkClassName:u,...d})}},5525:function(e,t,n){n.d(t,{Z:()=>a});var r=n("5893");n("7294");var l=n("7026");function a(e){let{children:t,hidden:n,className:a}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,l.Z)("tabItem_Ymn6",a),hidden:n,children:t})}},7902:function(e,t,n){n.d(t,{Z:()=>x});var r=n("5893"),l=n("7294"),a=n("7026"),o=n("9599"),u=n("6550"),s=n("2000"),i=n("4520"),c=n("8341"),f=n("6009");function d(e){return l.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||l.isValidElement(e)&&function(e){let{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function m(e){let{value:t,tabValues:n}=e;return n.some(e=>e.value===t)}var h=n("7227");function v(e){let{className:t,block:n,selectedValue:l,selectValue:u,tabValues:s}=e,i=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),f=e=>{let t=e.currentTarget,n=s[i.indexOf(t)].value;n!==l&&(c(t),u(n))},d=e=>{let t=null;switch(e.key){case"Enter":f(e);break;case"ArrowRight":{let n=i.indexOf(e.currentTarget)+1;t=i[n]??i[0];break}case"ArrowLeft":{let n=i.indexOf(e.currentTarget)-1;t=i[n]??i[i.length-1]}}t?.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t),children:s.map(e=>{let{value:t,label:n,attributes:o}=e;return(0,r.jsx)("li",{role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,ref:e=>{i.push(e)},onKeyDown:d,onClick:f,...o,className:(0,a.Z)("tabs__item","tabItem_LNqP",o?.className,{"tabs__item--active":l===t}),children:n??t},t)})})}function p(e){let{lazy:t,children:n,selectedValue:o}=e,u=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){let e=u.find(e=>e.props.value===o);return e?(0,l.cloneElement)(e,{className:(0,a.Z)("margin-top--md",e.props.className)}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:u.map((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==o}))})}function b(e){let t=function(e){let{defaultValue:t,queryString:n=!1,groupId:r}=e,a=function(e){let{values:t,children:n}=e;return(0,l.useMemo)(()=>{let e=t??d(n).map(e=>{let{props:{value:t,label:n,attributes:r,default:l}}=e;return{value:t,label:n,attributes:r,default:l}});return!function(e){let t=(0,c.lx)(e,(e,t)=>e.value===t.value);if(t.length>0)throw Error(`Docusaurus error: Duplicate values "${t.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[t,n])}(e),[o,h]=(0,l.useState)(()=>(function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}let r=n.find(e=>e.default)??n[0];if(!r)throw Error("Unexpected error: 0 tabValues");return r.value})({defaultValue:t,tabValues:a})),[v,p]=function(e){let{queryString:t=!1,groupId:n}=e,r=(0,u.k6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(a),(0,l.useCallback)(e=>{if(!a)return;let t=new URLSearchParams(r.location.search);t.set(a,e),r.replace({...r.location,search:t.toString()})},[a,r])]}({queryString:n,groupId:r}),[b,x]=function(e){let{groupId:t}=e,n=t?`docusaurus.tab.${t}`:null,[r,a]=(0,f.Nk)(n);return[r,(0,l.useCallback)(e=>{n&&a.set(e)},[n,a])]}({groupId:r}),g=(()=>{let e=v??b;return m({value:e,tabValues:a})?e:null})();return(0,s.Z)(()=>{g&&h(g)},[g]),{selectedValue:o,selectValue:(0,l.useCallback)(e=>{if(!m({value:e,tabValues:a}))throw Error(`Can't select invalid tab value=${e}`);h(e),p(e),x(e)},[p,x,a]),tabValues:a}}(e);return(0,r.jsxs)("div",{className:(0,a.Z)("tabs-container","tabList__CuJ"),children:[(0,r.jsx)(v,{...t,...e}),(0,r.jsx)(p,{...t,...e})]})}function x(e){let t=(0,h.Z)();return(0,r.jsx)(b,{...e,children:d(e.children)},String(t))}},65:function(e,t,n){n.d(t,{Z:function(){return u},a:function(){return o}});var r=n(7294);let l={},a=r.createContext(l);function o(e){let t=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function u(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);