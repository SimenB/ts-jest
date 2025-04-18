"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([["7799"],{2445:function(e,t,n){n.r(t),n.d(t,{default:()=>u,frontMatter:()=>i,metadata:()=>s,assets:()=>a,toc:()=>l,contentTitle:()=>c});var s=JSON.parse('{"id":"guides/mock-es6-class","title":"Mock ES6 class","description":"TypeScript is transpiling your ts file and your module is likely being imported using ES2015s import.","source":"@site/versioned_docs/version-27.0/guides/mock-es6-class.md","sourceDirName":"guides","slug":"/guides/mock-es6-class","permalink":"/ts-jest/docs/27.0/guides/mock-es6-class","draft":false,"unlisted":false,"editUrl":"https://github.com/kulshekhar/ts-jest/edit/main/website/versioned_docs/version-27.0/guides/mock-es6-class.md","tags":[],"version":"27.0","lastUpdatedBy":"renovate[bot]","lastUpdatedAt":1744958977000,"frontMatter":{"id":"mock-es6-class","title":"Mock ES6 class"},"sidebar":"version-27.0-docs","previous":{"title":"ESM Support","permalink":"/ts-jest/docs/27.0/guides/esm-support"},"next":{"title":"Using with React Native","permalink":"/ts-jest/docs/27.0/guides/react-native"}}'),o=n("5893"),r=n("65");let i={id:"mock-es6-class",title:"Mock ES6 class"},c=void 0,a={},l=[];function d(e){let t={code:"code",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["TypeScript is transpiling your ts file and your module is likely being imported using ES2015s import.\n",(0,o.jsx)(t.code,{children:"const soundPlayer = require('./sound-player')"}),". Therefore creating an instance of the class that was exported as\na default will look like this: ",(0,o.jsx)(t.code,{children:"new soundPlayer.default()"}),". However if you are mocking the class as suggested by the documentation."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"jest.mock('./sound-player', () => {\n  return jest.fn().mockImplementation(() => {\n    return { playSoundFile: mockPlaySoundFile }\n  })\n})\n"})}),"\n",(0,o.jsx)(t.p,{children:"You will get the error"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"TypeError: sound_player_1.default is not a constructor\n"})}),"\n",(0,o.jsxs)(t.p,{children:["because ",(0,o.jsx)(t.code,{children:"soundPlayer.default"})," does not point to a function. Your mock has to return an object which has a property default\nthat points to a function."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"jest.mock('./sound-player', () => {\n  return {\n    default: jest.fn().mockImplementation(() => {\n      return {\n        playSoundFile: mockPlaySoundFile,\n      }\n    }),\n  }\n})\n"})}),"\n",(0,o.jsxs)(t.p,{children:["For named imports, like ",(0,o.jsx)(t.code,{children:"import { OAuth2 } from './oauth'"}),", replace ",(0,o.jsx)(t.code,{children:"default"})," with imported module name, ",(0,o.jsx)(t.code,{children:"OAuth2"})," in this example:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"jest.mock('./oauth', () => {\n    return {\n        OAuth2: ... // mock here\n    }\n})\n"})})]})}function u(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},65:function(e,t,n){n.d(t,{Z:function(){return c},a:function(){return i}});var s=n(7294);let o={},r=s.createContext(o);function i(e){let t=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);