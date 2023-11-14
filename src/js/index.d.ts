/** @typedef {number} DataFieldOptions */
/** @typedef {number} FilePathFieldOptions */
declare class SchemaField {
}
type DataFieldOptions = number;
type FilePathFieldOptions = number;

/** @type {import("./fields").DataFieldOptions} */
declare const x: DataFieldOptions;
declare class TextureData {
    /**
     * @param {import("./fields").DataFieldOptions} options  Options which are forwarded to the SchemaField constructor
     * @param {import("./fields").FilePathFieldOptions} srcOptions Additional options for the src field
     */
    constructor(options: DataFieldOptions, { categories, initial, wildcard, label }: FilePathFieldOptions);
}

export { DataFieldOptions, FilePathFieldOptions, SchemaField, TextureData, x };
