import { Base } from './Base.js';

/**
 * @inheritdoc
 */
export class Inherited1_B extends Base
{
   /**
    * @inheritdoc
    */
   constructor(options)
   {
      super(options);
   }

   /**
    * @inheritdoc
    */
   foo(one, two, three)
   {
      super.foo(one, two, three);
   }

   /**
    * @inheritdoc
    */
   bar(options)
   {
      return super.bar(options);
   }

   /**
    * @inheritdoc
    */
   zap({ one, two, three })
   {
      return super.zap({ one, two, three });
   }

   /**
    * @inheritdoc
    */
   bang(options)
   {
      return super.bang(options);
   }

   /**
    * @inheritdoc
    */
   boom(options)
   {
      return super.boom(options);
   }
}
