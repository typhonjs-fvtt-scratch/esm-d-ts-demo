This is a demo package showing configuration of [esm-d-ts](https://www.npmjs.com/package/@typhonjs-build-test/esm-d-ts)
to generate types from ESM source code.

You can see the bundled types output here:

- [.types/index.d.ts](https://github.com/typhonjs-fvtt-scratch/esm-d-ts-demo/blob/main/.types/index.d.ts)

`esm-d-ts` is configured as a NPM script here in [package.json](https://github.com/typhonjs-fvtt-scratch/esm-d-ts-demo/blob/main/package.json#L19)

TypeDoc is also configured to generate API docs from the bundled types instead of JS source files. You can review
the `typedoc.json` for setup. [@typhonjs-typedoc/ts-lib-docs](https://www.npmjs.com/package/@typhonjs-typedoc/ts-lib-docs) Typedoc
plugins are configured to link all TS built-in libs to create full end-to-end API docs.
