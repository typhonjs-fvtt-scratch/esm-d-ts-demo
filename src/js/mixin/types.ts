/*
 * With the `esm-d-ts` tool you can define any complex types or other declarations that are too difficult to
 * construct / impossible w/ JSDoc. You can still reference these declarations using `import types` in JSDoc.
 */

declare interface MyMixin
{
   /**
    * Add one to the provided number.
    *
    * @param {number} n - The number to increment.
    *
    * @returns {number} - The incremented number.
    */
   addOne(n: number): number;
}

export { MyMixin }
