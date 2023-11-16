import { processInheritDoc } from '@typhonjs-build-test/esm-d-ts/postprocess';

/**
 * Generate DTS for with a mainline bundle then add experimental postprocessing to adjust declarations for
 * `@inheritDoc` support.
 *
 * Note: to reference GenerateConfig when installing `esm-d-ts` use:
 * `import('@typhonjs-build-test/esm-d-ts').GenerateConfig)`
 */

/** @type {import('@typhonjs-build-test/esm-d-ts').GenerateConfig[]} */
const configs = [
   { input: './src/js/index.js', output: './.types/index.d.ts' },
   { input: './src/js/index.js', output: './.types/index-post.d.ts', postprocess: [processInheritDoc], logLevel: 'verbose' },
];

export default configs;
