import { Database } from "./database.js";
import axios from "axios";
import { randomUUID } from "crypto";
const database = new Database();

async function t() {
  const tokens = await database.selectOne("tokens", "use", "std");

  console.log(tokens);

  if (!tokens) {
    const res = await axios.post("http://localhost:3000/token", {
      username: "integra",
      password: "12345",
    });

    const token = {
      id: randomUUID(),
      use: "std",
      token: res.data.token,
      expireDate: await createExpireDate(),
    };

    database.insert("tokens", token);
  }

  if (new Date() > new Date(tokens.expireDate)) {
    const res = await axios.post("http://localhost:3000/token", {
      username: "integra",
      password: "12345",
    });

    database.update("tokens", tokens.id, {
      use: "std",
      token: res.data.token,
      expireDate: await createExpireDate(),
    });
  }
}
async function createExpireDate() {
  const now = new Date();
  const expiryDate = new Date(now.getTime() + 24 * 60 * 60 * 1000); // Add 24 hours in milliseconds
  return expiryDate.toISOString();
}

t();
