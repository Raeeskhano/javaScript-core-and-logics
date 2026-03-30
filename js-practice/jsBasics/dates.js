let myDate = new Date();
console.log(myDate);
console.log(myDate.toString()); //date and time in string formate
console.log(myDate.toDateString()); //date in string without time
console.log(myDate.toTimeString()); //time in string formate without date
console.log(myDate.toLocaleString()); //date and time in local time zone
console.log(myDate.getDate()); //return the day of the month (1-31)
console.log(myDate.getDay()); //return the day of the week (0-6)
console.log(myDate.getMonth()); //return the month (0-11)
console.log(myDate.getFullYear()); //return the year
console.log(myDate.getHours()); //return the hour (0-23)
console.log(myDate.getMinutes()); //return the minutes (0-59)
console.log(myDate.getSeconds()); //return the seconds (0-59)
console.log(myDate.getMilliseconds()); //return the milliseconds (0-999)

//convert current date to milliseconds

const milliSeconds = Math.floor(Date.now() / 1000);
console.log(milliSeconds);
