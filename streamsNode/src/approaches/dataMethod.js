import { Readable } from "node:stream";
//'data' event is suitable for real-time scenarios, good to process asynchronous data.
const readableStream = new Readable({
  read(size) {
    for (let i = 0; i < 5; i++) {
      const chunk = i.toString();
      this.push(chunk);
    }

    this.push(null);
  },
});

readableStream.on("data", (chunk) => {
  console.log(`Received chunk: ${chunk}`);
});

readableStream.on("end", () => {
  console.log("No more data");
});
