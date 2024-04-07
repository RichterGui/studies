import { readFile } from "fs/promises";
import { errors } from "./constantes.js";
const DEFAULT_OPTION = {
  maxLines: 3,
  fields: ["id", "name", "profession", "age"],
};
export default class File {
  static async csvToJSON(filePath) {
    const content = await readFile(filePath, "utf8");
    const validation = this.isValid(content);
    if (!validation.valid) throw new Error(validation.error);

    const result = this.parseCsvToJson(content);
    return result;
  }

  static isValid(csvString, options = DEFAULT_OPTION) {
    const [headers, ...fileWithoutHeader] = csvString.split(/\r?\n/);
    const isHeaderValid = headers === options.fields.join(",");
    if (!isHeaderValid) {
      return {
        error: errors.error.FILE_FIELDS_ERROR_MESSAGE,
        valid: false,
      };
    }
    if (
      !fileWithoutHeader.length ||
      fileWithoutHeader.length > options.maxLines
    ) {
      return {
        error: errors.error.FILE_LENGTH_ERROR_MESSAGE,
        valid: false,
      };
    }
    return { valid: true };
  }

  static parseCsvToJson(csvString) {
    const lines = csvString.split(/\r?\n/);
    const firstLine = lines.shift();
    const header = firstLine.split(",");

    const users = lines.map((line) => {
      const columns = line.split(",");
      const user = {};
      for (const index in columns) {
        user[header[index]] = columns[index].trim();
      }
      return user;
    });
    return users;
  }
}
