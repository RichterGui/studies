const d = "10:21:43 10/09/2022";

function formatHour(param: string) {
  let formatedHour = d.substring(0, 8);
  return formatedHour;
}
function formatData(param: string) {
  let receivedData: string = d.substring(9, 19);
  let day: string = receivedData.substring(0, 2);
  let month: string = receivedData.substring(3, 5);
  let year: string = receivedData.substring(6, 10);
  let formatedData: string = year + "-" + month + "-" + day;
  return formatedData;
}

function dateTime(param: string) {
  var reg = /[0-9]{2}[:][0-9]{2}[:][0-9]{2}[ ][0-9]{2}[/][0-9]{2}[/][0-9]{4}/;

  if (reg.test(param) === true) {
    let H = formatHour(param);
    let D = formatData(param);
    let fullDate = D + " " + H;
    return fullDate;
  } else {
    throw Error(
      "Erro no formato da data informada, certifique-se que o formato seja HH:mm:ss dd/mm/yyyy, se atentando no space entre cada bloco"
    );
  }
}

function unix(param: string) {
  var reg = /[0-9]{2}[:][0-9]{2}[:][0-9]{2}[ ][0-9]{2}[/][0-9]{2}[/][0-9]{4}/;

  if (reg.test(param) === true) {
    let stringDate = formatData(param);
    let date = new Date(stringDate);
    let unixDate = Math.floor(date.getTime() / 1000);
    return unixDate;
  } else {
    throw Error(
      "Erro no formato da data informada, certifique-se que o formato seja HH:mm:ss dd/mm/yyyy, se atentando no space entre cada bloco"
    );
  }
}

class convertDate {
  static getUnix(param: string) {
    let unixToReturn = unix(param);
    console.log(unixToReturn);
  }

  static getDateTime(param: string) {
    let dateToReturn = dateTime(param);
    console.log(dateToReturn);
  }
}

convertDate.getUnix(d);
convertDate.getDateTime(d);
