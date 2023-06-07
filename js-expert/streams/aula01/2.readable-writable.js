import { Readable, Writable } from "stream";

//fonte de dados
const readable = Readable({
  read() {
    this.push("hello world 1");
    this.push("hello world 2");
    this.push("hello world 3");

    //informa que os dados acabaram
    this.push(null);
  },
});

//saida de dados

const writable = Writable({
  write(chunk, encoding, cb) {
    console.log("msg", chunk.toString());

    cb();
  },
});

readable
  //writable sempre e a saida, imprimir, salvar ou ignorar
  .pipe(writable);
