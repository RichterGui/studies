let a = "2023-07-28T13:07:54.505Z";

const dateFromServer = new Date(a);
const currentDate = new Date();

console.log(currentDate > dateFromServer);
