import { pipeline } from "node:stream/promises";
import { createReadStream, createWriteStream } from "node:fs";
//A lowercase file with data is required in the root.
await pipeline(
  createReadStream("lowecase.txt"),
  async function* (source, { signal }) {
    source.setEncoding("utf8");
    for await (const chunk of source) {
      async function processChunk(chunk, { signal }) {
        const processedChunk = chunk.toUpperCase();
        await new Promise((resolve) => setTimeout(resolve, 100));
        return processedChunk;
      }
      yield await processChunk(chunk, { signal });
    }
  },
  createWriteStream("uppercase.txt")
);
console.log(`pipeline suceeded`);
