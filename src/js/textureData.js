/** @type {import("./fields").DataFieldOptions} */
export const x = 1;

export class TextureData extends fields.SchemaField
{
   /**
    * @param {import("./fields").DataFieldOptions} options  Options which are forwarded to the SchemaField constructor
    *
    * @param {object} [opts] - Additional options.
    *
    * @param {import("./fields").FilePathFieldOptions} [opts.categories] Additional options for the src field
    *
    * @param {import("./fields").FilePathFieldOptions} [opts.initial] Additional options for the src field
    *
    * @param {import("./fields").FilePathFieldOptions} [opts.wildcard] Additional options for the src field
    *
    * @param {import("./fields").FilePathFieldOptions} [opts.label] Additional options for the src field
    */
   constructor(options, { categories, initial, wildcard, label } = {}) { super(); }

   /**
    * Example of linking TS Lib API docs. `Promise` as well as `HTMLDivElement` is a known symbol and linked.
    *
    * @returns {Promise<[HTMLDivElement]>}
    */
   loadTexture() { return Promise.resolve([]); }
}
