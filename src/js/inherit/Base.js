/**
 * A base class to test `inheritdoc`.
 */
export class Base
{
   /**
    * Optional parameters
    *
    * @param {object}   [options] - Options.
    *
    * @param {boolean}  [options.one] - First parameter
    *
    * @param {string}   [options.two] - Second parameter
    *
    * @param {number}   [options.three] - Third parameter
    */
   constructor({ one, two, three } = {})
   {

   }

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
    * @param {object}   options - options
    *
    * @param {number}   options.one - First parameter
    *
    * @param {string}   options.two - Second parameter
    *
    * @param {boolean}  options.three - Third parameter
    *
    * @returns {boolean} Boolean result.
    */
   bar(options)
   {
      return true;
   }

   /**
    * Required object parameters.
    *
    * @param {object}   options - options
    *
    * @param {number}   options.one - First parameter
    *
    * @param {string}   options.two - Second parameter
    *
    * @param {boolean}  options.three - Third parameter
    *
    * @returns {boolean} Boolean result.
    */
   zap({ one, two, three })
   {
      return true;
   }

   /**
    * Optional object parameters.
    *
    * @param {object}   [options] - options
    *
    * @param {number}   [options.one] - First parameter
    *
    * @param {string}   [options.two] - Second parameter
    *
    * @param {boolean}  [options.three] - Third parameter
    *
    * @returns {string} String result.
    */
   bang({ one, two, three } = {})
   {
      return '';
   }

   /**
    * Optional object parameters.
    *
    * @param {object}   [options] - options
    *
    * @param {number}   [options.one] - First parameter
    *
    * @param {string}   [options.two] - Second parameter
    *
    * @param {boolean}  [options.three] - Third parameter
    *
    * @returns {{ foo: boolean, bar: boolean }} Object result
    */
   boom({ one, two, three } = {})
   {
      return { foo: true, bar: false };
   }
}
