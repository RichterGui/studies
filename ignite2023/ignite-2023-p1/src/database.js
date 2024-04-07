import fs from "node:fs/promises";

const databasePath = new URL("../db.json", import.meta.url);

export class Database {
  #database = {};

  constructor() {
    this.initialize();
  }
  async initialize() {
    try {
      const data = await fs.readFile(databasePath, "utf-8");
      this.#database = JSON.parse(data);
    } catch (error) {
      this.#database = {};
      this.#persist();
    }
  }

  #persist() {
    fs.writeFile(databasePath, JSON.stringify(this.#database));
  }

  select(table, ...searchCriteria) {
    let data = this.#database[table] ?? [];

    if (searchCriteria.length > 0) {
      data = data.filter((row) => {
        return searchCriteria.every(([key, value]) => {
          return row[key].toLowerCase().includes(value.toLowerCase());
        });
      });
    }

    return data;
  }

  async selectOne(table, fieldName, fieldValue) {
    await this.initialize();
    const data = this.#database[table] ?? [];
    // console.log(this.#database);

    const result = data.find((row) => {
      return row[fieldName].toLowerCase() === fieldValue.toLowerCase();
    });

    return result || null;
  }

  insert(table, data) {
    if (Array.isArray(this.#database[table])) {
      this.#database[table].push(data);
    } else {
      this.#database[table] = [data];
    }

    this.#persist();

    return data;
  }

  update(table, id, data) {
    const rowIndex = this.#database[table].findIndex((row) => row.id === id);

    if (rowIndex > -1) {
      this.#database[table][rowIndex] = { id, ...data };
      this.#persist();
    }
  }

  delete(table, id) {
    const rowIndex = this.#database[table].findIndex((row) => row.id === id);

    if (rowIndex > -1) {
      this.#database[table].splice(rowIndex, 1);
      this.#persist();
    }
  }
}
