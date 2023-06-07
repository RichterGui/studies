import { Readable } from "node:stream";
//the read() method provides control over data retrieval
const readableStream = new Readable({
  read(size) {
    for (let i = 0; i < 5; i++) {
      const chunk = i.toString();
      this.push(chunk);
    }

    this.push(null);
  },
});

let chunk;
while ((chunk = readableStream.read()) !== null) {
  // Process each chunk of data
  console.log(`Received chunk: ${chunk}`);
}

readableStream.on("end", () => {
  // Data consumption is complete
  console.log("No more data");
});
