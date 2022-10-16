"use strict";
// https://www.toptal.com/software/definitive-guide-to-datetime-manipulation
// const myDate = new Date("Jul 21, 2013");
// const dayOfMonth = myDate.getDate();
// const month = myDate.getMonth();
// const year = myDate.getFullYear();
// function pad(n) {
//     return n<10 ? '0'+n : n
// }
// const ddmmyyyy = pad(dayOfMonth) + "-" + pad(month + 1) + "-" + year;
// const today = new Date().toLocaleDateString(undefined, {
//     day:   '2-digit',
//     month: '2-digit',
//     year:  'numeric',
// });
// const myDate = new Date("July 20, 2016 15:00:00");
// const nextDayOfMonth = myDate.getDate() + 20;
// myDate.setDate(nextDayOfMonth);
// const newDate = myDate.toLocaleString()
// const date1 = new Date("July 19, 2014");
// const date2 = new Date("July 28, 2014");
// if(date1 > date2) {
//     console.log("First date is more recent");
// } else {
//     console.log("Second date is more recent");
// }
// const userEnteredDate = "12/20/1989";
// const parts = userEnteredDate.split("/");
// const userEnteredDateISO = parts[2] + "-" + parts[0] + "-" + parts[1];
// const userEnteredDateObj = new Date(userEnteredDateISO + "T00:00:00Z");
// const dateFromAPI = new Date("1989-12-20T00:00:00Z");
// const result = userEnteredDateObj.getTime() == dateFromAPI.getTime(); // true
// const dateFromPicker = "2012-10-12";
// const timeFromPicker = "12:30";
// const dateParts = dateFromPicker.split("-");
// const timeParts = timeFromPicker.split(":");
// const localDate = new Date(dateParts[0], dateParts[1]-1, dateParts[2], timeParts[0], timeParts[1]);
// const dateFromPicker = "12/20/2012";
// const dateParts = dateFromPicker.split("/");
// const ISODate = dateParts[2] + "-" + dateParts[0] + "-" + dateParts[1];
// const birthDate = new Date(ISODate).toISOString();
// const dateFromUI = "12-13-2012";
// const timeFromUI = "10:20";
// const dateParts = dateFromUI.split("-");
// const timeParts = timeFromUI.split(":");
// const date = new Date(dateParts[2], dateParts[0]-1, dateParts[1], timeParts[0], timeParts[1]);
// const dateISO = date.toISOString();
// $.post("http://example.com/", {date: dateISO}, ...)
// const dateFromAPI = "2016-01-02T12:30:00Z";
// const localDate = new Date(dateFromAPI);
// const localDateString = localDate.toLocaleDateString(undefined, {  
//     day:   'numeric',
//     month: 'short',
//     year:  'numeric',
// });
// const localTimeString = localDate.toLocaleTimeString(undefined, {
//     hour:   '2-digit',
//     minute: '2-digit',
//     second: '2-digit',
// });
//# sourceMappingURL=dateTimeUtils.js.map