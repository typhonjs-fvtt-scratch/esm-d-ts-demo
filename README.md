This is a demo package showing configuration of [esm-d-ts](https://www.npmjs.com/package/@typhonjs-build-test/esm-d-ts)
to generate types from ESM source code.

This trial shows that Typescript currently requires `.mjs` files when using `import types` to include the extension
`.mjs`. For example [see here](https://github.com/typhonjs-fvtt-scratch/esm-d-ts-demo/blob/main/src/mjs/textureData.mjs#L8-L9) 

You can see the output of type generation as follows between `.js` and `.mjs` files here:

- [src/js/index.d.ts](https://github.com/typhonjs-fvtt-scratch/esm-d-ts-demo/blob/main/src/js/index.d.ts)
- [src/mjs/index.d.ts](https://github.com/typhonjs-fvtt-scratch/esm-d-ts-demo/blob/main/src/mjs/index.d.ts)

`esm-d-ts` is configured as a NPM script here in [package.json](https://github.com/typhonjs-fvtt-scratch/esm-d-ts-demo/blob/main/package.json#L16)
