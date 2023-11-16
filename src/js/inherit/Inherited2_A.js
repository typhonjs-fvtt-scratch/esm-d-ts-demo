import { Inherited1_A } from './Inherited1_A.js';

/**
 * Changes the method signature slightly again.
 *
 * @inheritDoc
 */
export class Inherited2_A extends Inherited1_A
{
   /**
    * @inheritDoc
    */
   constructor({ one, two, three })
   {
      super({ one, two, three });
   }

   /**
    * Keep same signature
    *
    * @inheritDoc
    */
   foo(one, two, three)
   {
      super.foo(one, two, three);
   }

   /**
    * Keep same signature
    *
    * @inheritDoc
    */
   bar(options)
   {
      return super.bar(options);
   }

   /**
    * Keep same signature
    *
    * @inheritDoc
    */
   zap({ one, two, three })
   {
      return super.zap({ one, two, three });
   }

   /**
    * Change signature
    *
    * @inheritDoc
    */
   bang(options)
   {
      return super.bang(options);
   }

   /**
    * Change signature
    *
    * @inheritDoc
    */
   boom({ one, two, three } = {})
   {
      return super.boom({ one, two, three });
   }
}
