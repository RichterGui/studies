import File from "./src/file.js";
import { errors } from "./src/constantes.js";
import assert from "assert";

(async () => {
  {
    const filePath = "./mocks/emptyFile-invalid.csv";
    const expected = new Error(errors.error.FILE_LENGTH_ERROR_MESSAGE);
    const result = File.csvToJSON(filePath);
    await assert.rejects(result, expected);
  }

  {
    const filePath = "./mocks/invalid-header.csv";
    const expected = new Error(errors.error.FILE_FIELDS_ERROR_MESSAGE);
    const result = File.csvToJSON(filePath);
    await assert.rejects(result, expected);
  }

  {
    const filePath = "./mocks/fiveItems-invalid.csv";
    const expected = new Error(errors.error.FILE_LENGTH_ERROR_MESSAGE);
    const result = File.csvToJSON(filePath);
    await assert.rejects(result, expected);
  }

  {
    const filePath = "./mocks/threeItems-valid.csv";
    const expected = [
      {
        id: 1,
        name: "claudio",
        profession: "autonomo",
        age: 34,
      },
      {
        id: 2,
        name: "ramos",
        profession: "policial",
        age: 61,
      },
      {
        id: 3,
        name: "getulio",
        profession: "professor",
        age: 53,
      },
    ];
    const result = await File.csvToJSON(filePath);
    assert.deepEqual(result, expected);
  }
})();
