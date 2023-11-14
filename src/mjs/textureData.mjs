// import * as fields from "../fields.mjs";

/** @type {import("./fields.mjs").DataFieldOptions} */
export const x = 1;

export class TextureData extends fields.SchemaField {
    /**
     * @param {import("./fields.mjs").DataFieldOptions} options  Options which are forwarded to the SchemaField constructor
     * @param {import("./fields.mjs").FilePathFieldOptions} srcOptions Additional options for the src field
     */
    constructor(options, { categories, initial, wildcard, label }) {}
}
