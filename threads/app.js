import { Worker } from "worker_threads";

let msg = "mensagem de parametro";

//Create new worker
const worker = new Worker("./worker.js", { workerData: { message: msg } });

//Listen for a message from worker
worker.once("message", (result) => {
  console.log(`message send: ${result}`);
});

worker.on("error", (error) => {
  console.log(error);
});

worker.on("exit", (exitCode) => {
  console.log(exitCode);
});

console.log("Executed in the parent thread");
