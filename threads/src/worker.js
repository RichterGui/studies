const { parentPort, workerData } = require("worker_threads");
const axios = require("axios");

parentPort.postMessage(getFib());

function getFib() {
  var body = `{
    "messageKeys": {
      "mediaKey": "VyQrtVu+nOE+XxgoRyMc7LcnkIA6cm/P4sbh++tFQCM=",
      "directPath": "/v/t62.7118-24/41222536_3219723921572700_82787485085977457_n.enc?ccb=11-4&oh=01_AdStVJpIPCAy-XweV1MZ_CKt_cSWJrPQZ0eH5U6_4ws7NA&oe=638096FE",
      "url": "https://mmg.whatsapp.net/d/f/AvLhSKDhPqqkmKaEmJlSo-I6d6q4g0HiOVX_Icx9dv88.enc",
      "mimetype": "image/jpeg",
      "messageType": "image"
    }
  }`;

  const response = axios
    .post(
      `https://api2.megaapi.com.br/rest/instance/downloadMediaMessage/megaapi-M4zvePSln0iz3FToPY9PXKL83V`,
      body,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer M4zvePSln0iz3FToPY9PXKL83V",
        },
      }
    )
    .then((response) => {
      // console.log("response", response.data);
      return response.data.toString();
    })
    .catch((error) => {
      throw new Error(error);
    });
}
