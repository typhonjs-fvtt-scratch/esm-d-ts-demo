import { Base } from './Base.js';

/**
 * @inheritdoc
 */
export class Inherited extends Base
{
   /**
    * @inheritdoc
    */
   thing(one, two, three)
   {
      super.thing(one, two, three);
   }
}
