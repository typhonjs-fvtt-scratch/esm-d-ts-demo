import { A }      from './A.js';
import { mixin }  from '../mixin/index.js';

/**
 * Extended class with mixin behavior. Extends {@link A} and mixes in {@link MyMixin}
 */
export class B extends mixin(A) {}
