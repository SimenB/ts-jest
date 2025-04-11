"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([["1259"],{4099:function(e){e.exports=JSON.parse('{"version":{"pluginId":"default","version":"29.3","label":"29.3","banner":null,"badge":true,"noIndex":false,"className":"docs-version-29.3","isLast":true,"docsSidebars":{"docs":[{"type":"category","label":"ts-jest","items":[{"type":"link","label":"Introduction","href":"/ts-jest/docs/","docId":"introduction","unlisted":false},{"type":"link","label":"Processing flow","href":"/ts-jest/docs/processing","docId":"processing","unlisted":false},{"type":"link","label":"Contributing","href":"/ts-jest/docs/contributing","docId":"contributing","unlisted":false}],"collapsed":true,"collapsible":true},{"type":"category","label":"Getting Started","collapsed":false,"items":[{"type":"link","label":"Installation","href":"/ts-jest/docs/getting-started/installation","docId":"getting-started/installation","unlisted":false},{"type":"link","label":"Presets","href":"/ts-jest/docs/getting-started/presets","docId":"getting-started/presets","unlisted":false},{"type":"link","label":"Options","href":"/ts-jest/docs/getting-started/options","docId":"getting-started/options","unlisted":false},{"type":"link","label":"Paths mapping","href":"/ts-jest/docs/getting-started/paths-mapping","docId":"getting-started/paths-mapping","unlisted":false},{"type":"link","label":"Version checking","href":"/ts-jest/docs/getting-started/version-checking","docId":"getting-started/version-checking","unlisted":false}],"collapsible":true},{"type":"category","label":"Guides","collapsed":false,"items":[{"type":"link","label":"ESM Support","href":"/ts-jest/docs/guides/esm-support","docId":"guides/esm-support","unlisted":false},{"type":"link","label":"Hybrid Node module","href":"/ts-jest/docs/guides/hybrid-node-module","docId":"guides/hybrid-node-module","unlisted":false},{"type":"link","label":"Mock ES6 class","href":"/ts-jest/docs/guides/mock-es6-class","docId":"guides/mock-es6-class","unlisted":false},{"type":"link","label":"Using with React Native","href":"/ts-jest/docs/guides/react-native","docId":"guides/react-native","unlisted":false},{"type":"link","label":"Troubleshooting","href":"/ts-jest/docs/guides/troubleshooting","docId":"guides/troubleshooting","unlisted":false},{"type":"link","label":"Using with monorepo","href":"/ts-jest/docs/guides/using-with-monorepo","docId":"guides/using-with-monorepo","unlisted":false}],"collapsible":true},{"type":"link","label":"Babel7 or TypeScript","href":"/ts-jest/docs/babel7-or-ts","docId":"babel7-or-ts","unlisted":false},{"type":"link","label":"Migration from <=23.10","href":"/ts-jest/docs/migration","docId":"migration","unlisted":false},{"type":"link","label":"Debugging ts-jest","href":"/ts-jest/docs/debugging","docId":"debugging","unlisted":false}]},"docs":{"babel7-or-ts":{"id":"babel7-or-ts","title":"Babel7 or TypeScript","description":"In Sept. 2018 Babel7 got released with an interesting preset: @babel/preset-typescript.","sidebar":"docs"},"contributing":{"id":"contributing","title":"Contributing","description":"When contributing to this repository, please first discuss the change you wish to make via ts-jest GitHub discussion or issue with the owners of this repository before making a change.","sidebar":"docs"},"debugging":{"id":"debugging","title":"Debugging ts-jest","description":"You can activate the debug logger by setting the environment variable TSJESTLOG before running tests.","sidebar":"docs"},"getting-started/installation":{"id":"getting-started/installation","title":"Installation","description":"Dependencies","sidebar":"docs"},"getting-started/options":{"id":"getting-started/options","title":"Options","description":"Introduction","sidebar":"docs"},"getting-started/options/astTransformers":{"id":"getting-started/options/astTransformers","title":"AST transformers option","description":"ts-jest by default does hoisting for a few jest methods via a TypeScript AST transformer. One can also create custom"},"getting-started/options/babelConfig":{"id":"getting-started/options/babelConfig","title":"Babel Config option","description":"ts-jest by default does NOT use Babel. But you may want to use it, especially if your code rely on Babel plugins to make some transformations. ts-jest can call the BabelJest processor once TypeScript has transformed the source into JavaScript."},"getting-started/options/compiler":{"id":"getting-started/options/compiler","title":"Compiler option","description":"The compiler option allows you to define the compiler to be used. It\'ll be used to load the NodeJS module holding the TypeScript compiler."},"getting-started/options/diagnostics":{"id":"getting-started/options/diagnostics","title":"Diagnostics option","description":"The diagnostics option configures error reporting."},"getting-started/options/isolatedModules":{"id":"getting-started/options/isolatedModules","title":"isolatedModules option","description":"This page is now DEPRECATED and will be removed together with the config option isolatedModules in the next major release. Please use isolatedModules option in tsconfig.json instead."},"getting-started/options/stringifyContentPathRegex":{"id":"getting-started/options/stringifyContentPathRegex","title":"Stringify content option","description":"The stringifyContentPathRegex option has been kept for backward compatibility of HTML_TRANSFORM"},"getting-started/options/tsconfig":{"id":"getting-started/options/tsconfig","title":"TypeScript Config option","description":"The tsconfig option allows you to define which tsconfig JSON file to use. An inline compiler options object can also be specified instead of a file path."},"getting-started/options/useESM":{"id":"getting-started/options/useESM","title":"useESM option","description":"The useESM option allows ts-jest to transform codes to ESM syntax if possible."},"getting-started/paths-mapping":{"id":"getting-started/paths-mapping","title":"Paths mapping","description":"If you use \\"baseUrl\\" and \\"paths\\" options in your tsconfig file, you should make sure the \\"moduleNameMapper\\" option in your Jest config is setup accordingly.","sidebar":"docs"},"getting-started/presets":{"id":"getting-started/presets","title":"Presets","description":"In Jest, presets are pre-defined configurations that help streamline and standardize the process of setting up testing environments.","sidebar":"docs"},"getting-started/version-checking":{"id":"getting-started/version-checking","title":"Version checking","description":"The version checking is DEPRECATED in favor of native peerDependencies checking mechanism in package.json. This page will be removed in the next major version.","sidebar":"docs"},"guides/esm-support":{"id":"guides/esm-support","title":"ESM Support","description":"Jest will take into account of the following things when working with ESM:","sidebar":"docs"},"guides/hybrid-node-module":{"id":"guides/hybrid-node-module","title":"Hybrid Node module","description":"When using hybrid node module values, Node16/Node18/NodeNext, one should read TypeScript documentation","sidebar":"docs"},"guides/mock-es6-class":{"id":"guides/mock-es6-class","title":"Mock ES6 class","description":"TypeScript is transpiling your ts file and your module is likely being imported using ES2015s import.","sidebar":"docs"},"guides/react-native":{"id":"guides/react-native","title":"Using with React Native","description":"To use ts-jest with React Native + TypeScript and Babel 7, you\'ll first need to follow this tutorial.","sidebar":"docs"},"guides/troubleshooting":{"id":"guides/troubleshooting","title":"Troubleshooting","description":"During your development with ts-jest, you may encounter various issues. Use this guide to resolve them.","sidebar":"docs"},"guides/using-with-monorepo":{"id":"guides/using-with-monorepo","title":"Using with monorepo","description":"To use ts-jest in a project with monorepo structure, you\'ll need to use Jest projects configuration.","sidebar":"docs"},"introduction":{"id":"introduction","title":"Introduction","description":"A Jest transformer with source map support that lets you use Jest to test projects written in TypeScript.","sidebar":"docs"},"migration":{"id":"migration","title":"Migration from <=23.10","description":"You can use the config:migrate tool of ts-jest CLI if you\'re coming from an older version to help you migrate your Jest configuration.","sidebar":"docs"},"processing":{"id":"processing","title":"Processing flow","description":"These are internal technical documents. If you\'re not a contributor to ts-jest, but simply trying to use the library you\'ll find nothing of value here","sidebar":"docs"}}}}')}}]);