"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([["4157"],{6256:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>l,metadata:()=>i,assets:()=>c,toc:()=>d,contentTitle:()=>r});var i=JSON.parse('{"id":"getting-started/installation","title":"Installation","description":"Dependencies","source":"@site/versioned_docs/version-28.0/getting-started/installation.md","sourceDirName":"getting-started","slug":"/getting-started/installation","permalink":"/ts-jest/docs/28.0/getting-started/installation","draft":false,"unlisted":false,"editUrl":"https://github.com/kulshekhar/ts-jest/edit/main/website/versioned_docs/version-28.0/getting-started/installation.md","tags":[],"version":"28.0","lastUpdatedBy":"Ahn","lastUpdatedAt":1744459608000,"frontMatter":{"id":"installation","title":"Installation"},"sidebar":"version-28.0-docs","previous":{"title":"Contributing","permalink":"/ts-jest/docs/28.0/contributing"},"next":{"title":"Presets","permalink":"/ts-jest/docs/28.0/getting-started/presets"}}'),s=n("5893"),o=n("65");let l={id:"installation",title:"Installation"},r=void 0,c={},d=[{value:"Dependencies",id:"dependencies",level:3},{value:"NPM",id:"npm",level:4},{value:"Yarn",id:"yarn",level:4},{value:"Jest config file",id:"jest-config-file",level:3},{value:"Creating",id:"creating",level:4},{value:"NPM",id:"npm-1",level:4},{value:"Yarn",id:"yarn-1",level:4},{value:"Customizing",id:"customizing",level:4}];function a(e){let t={a:"a",admonition:"admonition",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h3,{id:"dependencies",children:"Dependencies"}),"\n",(0,s.jsxs)(t.p,{children:["You can install ",(0,s.jsx)(t.code,{children:"ts-jest"})," and dependencies all at once with one of the following commands."]}),"\n",(0,s.jsx)(t.h4,{id:"npm",children:"NPM"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sh",children:"npm install --save-dev jest typescript ts-jest @types/jest\n"})}),"\n",(0,s.jsx)(t.h4,{id:"yarn",children:"Yarn"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sh",children:"yarn add --dev jest typescript ts-jest @types/jest\n"})}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsxs)(t.p,{children:["Tip: If you get an error with the following ",(0,s.jsx)(t.code,{children:"npm"})," commands such as ",(0,s.jsx)(t.code,{children:"npx: command not found"}),", you can replace ",(0,s.jsx)(t.code,{children:"npx XXX"})," with ",(0,s.jsx)(t.code,{children:"node node_modules/.bin/XXX"})," from the root of your project."]})}),"\n",(0,s.jsx)(t.h3,{id:"jest-config-file",children:"Jest config file"}),"\n",(0,s.jsx)(t.h4,{id:"creating",children:"Creating"}),"\n",(0,s.jsxs)(t.p,{children:["By default, Jest can run without any config files, but it will not compile ",(0,s.jsx)(t.code,{children:".ts"})," files.\nTo make it transpile TypeScript with ",(0,s.jsx)(t.code,{children:"ts-jest"}),", we will need to create a configuration file that will tell Jest to use a ",(0,s.jsx)(t.code,{children:"ts-jest"})," preset."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"ts-jest"})," can create the configuration file for you automatically:"]}),"\n",(0,s.jsx)(t.h4,{id:"npm-1",children:"NPM"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sh",children:"npx ts-jest config:init\n"})}),"\n",(0,s.jsx)(t.h4,{id:"yarn-1",children:"Yarn"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sh",children:"yarn ts-jest config:init\n"})}),"\n",(0,s.jsxs)(t.p,{children:["This will create a basic Jest configuration file which will inform Jest about how to handle ",(0,s.jsx)(t.code,{children:".ts"})," files correctly."]}),"\n",(0,s.jsxs)(t.p,{children:["You can also use the ",(0,s.jsx)(t.code,{children:"jest --init"})," command (prefixed with either ",(0,s.jsx)(t.code,{children:"npx"})," or ",(0,s.jsx)(t.code,{children:"yarn"})," depending on what you're using) to have more options related to Jest.\nHowever, answer ",(0,s.jsx)(t.code,{children:"no"})," to the Jest question about whether or not to enable TypeScript. Instead, add the line: ",(0,s.jsx)(t.code,{children:'preset: "ts-jest"'})," to the ",(0,s.jsx)(t.code,{children:"jest.config.js"})," file afterwards."]}),"\n",(0,s.jsx)(t.h4,{id:"customizing",children:"Customizing"}),"\n",(0,s.jsxs)(t.p,{children:["For customizing jest, please follow their ",(0,s.jsx)(t.a,{href:"https://jestjs.io/docs/en/configuration.html",children:"official guide online"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"ts-jest"})," specific options can be found ",(0,s.jsx)(t.a,{href:"/ts-jest/docs/28.0/getting-started/options",children:"here"}),"."]})]})}function h(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},65:function(e,t,n){n.d(t,{Z:function(){return r},a:function(){return l}});var i=n(7294);let s={},o=i.createContext(s);function l(e){let t=i.useContext(o);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);