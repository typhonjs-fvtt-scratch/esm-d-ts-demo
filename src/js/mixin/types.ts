/*
 * With the `esm-d-ts` tool you can define any complex types or other declarations that are too difficult to
 * construct / impossible w/ JSDoc. You can still reference these declarations using `import types` in JSDoc.
 */

declare interface BaseMixin
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

declare interface MyMixin extends BaseMixin
{
   /**
    * Add two to the provided number.
    *
    * @param {number} n - The number to increment.
    *
    * @returns {number} - The incremented number.
    */
   addTwo(n: number): number;
}

export { BaseMixin, MyMixin }
