import { PartialInherited1_A } from './PartialInherited1_A.js';

/**
 * @inheritDoc
 */
export class PartialInherited2_A extends PartialInherited1_A
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
   zap({ one, two, three })
   {
      return super.zap({ one, two, three });
   }

   /**
    * @inheritDoc
    */
   bang(options)
   {
      return super.bang(options);
   }

   /**
    * @inheritDoc
    */
   boom(options)
   {
      return super.boom(options);
   }
}
