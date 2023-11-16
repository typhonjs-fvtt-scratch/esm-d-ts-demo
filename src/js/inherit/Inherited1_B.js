import { Base } from './Base.js';

/**
 * @inheritdoc
 */
export class Inherited1_B extends Base
{
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
   bar({ one, two, three })
   {
      super.foo({ one, two, three });
   }

   /**
    * @inheritdoc
    */
   bang({ one, two, three } = {})
   {
      super.bang({ one, two });
   }
}
