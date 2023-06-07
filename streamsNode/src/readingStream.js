import { Readable } from "node:stream";

// Create a custom Readable stream
const customReadable = new Readable({
  async read(size) {
    // Generate and push data to the stream
    for (let i = 0; i < 5; i++) {
      const chunk = i.toString();
      this.push(chunk);
    }
    // Push null to signal the end of data
    this.push(null);
  },
});

// Listen to the 'data' event to consume the data
customReadable.on("data", (chunk) => {
  console.log(`Received chunk: ${chunk}`);
});

// Listen to the 'end' event to know when there's no more data
customReadable.on("end", () => {
  console.log("No more data");
});
