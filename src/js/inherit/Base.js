/**
 * A base class to test `inheritdoc`.
 */
export class Base
{
   /**
    * Required parameters.
    *
    * @param {number}   one - First parameter
    *
    * @param {string}   two - Second parameter
    *
    * @param {boolean}  three - Third parameter
    */
   foo(one, two, three)
   {

   }

   /**
    * Required object parameters.
    *
    * @param options - options
    *
    * @param {number}   options.one - First parameter
    *
    * @param {string}   options.two - Second parameter
    *
    * @param {boolean}  options.three - Third parameter
    */
   bar({ one, two, three })
   {

   }

   /**
    * Optional object parameters.
    *
    * @param [options] - options
    *
    * @param {number}   [options.one] - First parameter
    *
    * @param {string}   [options.two] - Second parameter
    *
    * @param {boolean}  [options.three] - Third parameter
    */
   bang({ one, two, three } = {})
   {

   }
}
