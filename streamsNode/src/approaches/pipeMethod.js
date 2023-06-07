import { Readable, Writable } from "node:stream";

const readableStream = new Readable({
  read(size) {
    // Generate and push data to the stream
    // Push null to signal the end of data
  },
});

const writableStream = new Writable({
  write(chunk, encoding, callback) {
    // Process each chunk of data
    console.log(`Received chunk: ${chunk}`);
    callback();
  },
});

readableStream.pipe(writableStream);

readableStream.on("end", () => {
  // Data consumption is complete
  console.log("No more data");
});
