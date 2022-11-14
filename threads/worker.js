import { parentPort, workerData } from "worker_threads";

parentPort.postMessage(message(workerData.message));

function message(message) {
  console.log(message[0] + message[1]);

  message["data"][0]["messageKeys"]["url"];

  let token = jsonFromWebHook.instance_key.split("-", 1);
  const response = downloadMediaMessage.post(`/${instance_key}`, messageBody, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  messageContentBodyMidia = response.data.data;

  console.log(messageContentBodyMidia);
}
