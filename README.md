This is a demo package showing configuration of [esm-d-ts](https://www.npmjs.com/package/@typhonjs-build-test/esm-d-ts)
to generate types from ESM source code.

This trial shows that Typescript currently has issues with `.mjs` files in generating correct types.
You can see the output of type generation as follows between `.js` and `.mjs` files here:

- [src/js/index.d.ts](https://github.com/typhonjs-fvtt-scratch/esm-d-ts-demo/blob/main/src/js/index.d.ts)
- [src/mjs/index.d.ts](https://github.com/typhonjs-fvtt-scratch/esm-d-ts-demo/blob/main/src/mjs/index.d.ts)

`esm-d-ts` is configured as a NPM script here in [package.json](https://github.com/typhonjs-fvtt-scratch/esm-d-ts-demo/blob/main/package.json#L16)
