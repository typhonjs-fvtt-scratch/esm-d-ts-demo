import { Base } from './Base.js';

/**
 * @inheritDoc
 */
export class PartialInherited1_A extends Base
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
   bar(options)
   {
      return super.bar(options);
   }
}
