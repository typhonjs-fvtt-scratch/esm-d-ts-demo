import { Base } from './Base.js';

/**
 * @inheritDoc
 */
export class Inherited1_A extends Base
{
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
   bar({ one, two, three })
   {
      super.foo({ one, two, three });
   }

   /**
    * @inheritDoc
    */
   bang({ one, two, three } = {})
   {
      super.bang({ one, two });
   }
}
