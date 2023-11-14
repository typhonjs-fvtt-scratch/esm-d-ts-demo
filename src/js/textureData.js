// import * as fields from "../fields.js";

/** @type {import("./fields").DataFieldOptions} */
export const x = 1;

export class TextureData extends fields.SchemaField {
    /**
     * @param {import("./fields").DataFieldOptions} options  Options which are forwarded to the SchemaField constructor
     * @param {import("./fields").FilePathFieldOptions} srcOptions Additional options for the src field
     */
    constructor(options, { categories, initial, wildcard, label }) {}
}
