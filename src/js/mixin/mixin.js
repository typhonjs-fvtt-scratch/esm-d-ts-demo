// See alternate suggestion for pure JS solution below after function.

/**
 * Mixin function that adds `addOne` method to a base class.
 *
 * @template T
 *
 * @param {T} BaseClass - The base class to be extended.
 *
 * @returns {T & new (...args: any[]) => import('./types').MyMixin} The mixed class.
 */
export function mixin(BaseClass)
{
   return class extends BaseClass
   {
      addOne(n)
      {
         return n + 1;
      }

      addTwo(n)
      {
         return n + 2;
      }
   };
}

/*
 * You can instead define `MyMixin` as a typedef, but it will be listed under `properties` instead of `methods` in
 * documentation.
 *
 * In the mixin function above substitute:
 * `@returns {T & new (...args: any[]) => import('./types').MyMixin} The mixed class.`
 *
 * for:
 *
 * `@returns {T & new (...args: any[]) => MyMixin} The mixed class.`
 *
 * and uncomment the typedef below and comment out the interface definition in `./types.ts`
 */

// /**
//  * @typedef {object} MyMixin
//  *
//  * @property {(n: number) => number} addOne - Add one to the provided number.
//  */
