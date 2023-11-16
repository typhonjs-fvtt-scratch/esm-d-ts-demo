import { Base } from './Base.js';

/**
 * @inheritDoc
 */
export class Inherited extends Base
{

   /**
    * @inheritDoc
    */
   thing(one, two, three)
   {
      super.thing(one, two, three);
   }
}
