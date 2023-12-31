import { Base } from './Base.js';

/**
 * @inheritDoc
 */
export class Inherited1_A extends Base
{
   /**
    * @inheritDoc
    */
   constructor(options)
   {
      super(options);
   }

   /**
    * @inheritDoc
    */
   foo(one, two, three)
   {
      super.foo(one, two, three);
   }

   /**
    * @inheritDoc
    */
   bar(options)
   {
      return super.bar(options);
   }

   /**
    * @inheritDoc
    */
   zap({ one, two, three })
   {
      return super.zap({ one, two, three });
   }

   /**
    * @inheritDoc
    */
   bang({ one, two, three } = {})
   {
      return super.bang({ one, two, three });
   }

   /**
    * @inheritDoc
    */
   boom(options)
   {
      return super.boom(options);
   }
}
