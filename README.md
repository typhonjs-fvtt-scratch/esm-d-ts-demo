This is a demo package showing configuration of [esm-d-ts](https://www.npmjs.com/package/@typhonjs-build-test/esm-d-ts)
to generate types and docs from ESM source code.

You can see the bundled types output here:

- [.types/index.d.ts](https://github.com/typhonjs-fvtt-scratch/esm-d-ts-demo/blob/main/.types/index.d.ts)
- [.types/index-post.d.ts](https://github.com/typhonjs-fvtt-scratch/esm-d-ts-demo/blob/main/.types/index-post.d.ts)

`esm-d-ts` was just upgraded with declaration postprocessing support for `@inheritDoc` tags. The source in this repo 
is run through `esm-d-ts` twice including a second run that includes the postprocessing of `@inheritDoc`. The 
main configuration file is here:

- [esm-d-ts.config.js](https://github.com/typhonjs-fvtt-scratch/esm-d-ts-demo/blob/main/esm-d-ts.config.js)

A NPM script is available to start `esm-d-ts` here:

- [package.json](https://github.com/typhonjs-fvtt-scratch/esm-d-ts-demo/blob/main/package.json#L19)

TypeDoc is also configured to generate API docs from the bundled types instead of JS source files. You can review
the [typedoc.json](https://github.com/typhonjs-fvtt-scratch/esm-d-ts-demo/tree/main/config) for setup. [@typhonjs-typedoc/ts-lib-docs](https://www.npmjs.com/package/@typhonjs-typedoc/ts-lib-docs) Typedoc
plugins are configured to link all TS built-in libs to create full end-to-end API docs.

[Here is the github-pages hosted docs](https://typhonjs-fvtt-scratch.github.io/esm-d-ts-demo/)
