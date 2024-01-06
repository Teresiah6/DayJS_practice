//import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
//import {isWeekend} from "./isWeekend";

console.log(dayjs().format('MMMM-DD'));
//15a using DayJS get the date 5days after today and display it in the format <Month> <Day of Month>
let day5 = dayjs();
day5 = day5.add(5, 'days').format('MMMM-DD');
console.log(day5);
//15b
//1 month after today
let plus1Month = dayjs().add(1, 'month').format('MMMM-DD');
console.log(plus1Month);
//15c - 1 month before today
let less1Month = dayjs().subtract(1, 'month').format('MMMM-DD');
console.log(less1Month);
//15d - get a date from dayJS and display it in format <day of the week>
let dayOfWeek = dayjs().format('dddd');
console.log(dayOfWeek);
//15e function is Weekend(date) that takes dayJS object and returns whether date is saturday or sunday

function isWeekend(date){
  const dayOftWeek = date.format('dddd')

  if(dayOftWeek === 'Saturday' || dayOftWeek === 'Sunday'){
    return dayOftWeek;
  }

}

let date = dayjs();
console.log(date.format('dddd, MMMM D'));
console.log(isWeekend(date));

date = dayjs().add(5, 'days');
console.log(date.format('dddd, MMMM D'));
console.log(isWeekend(date));

date = dayjs().add(1,'days');
console.log(date.format('dddd, MMMM D'));
console.log(isWeekend(date));

date = dayjs().subtract(7, 'days');
console.log(date.format('dddd, MMMM D'));
console.log(isWeekend(date));

date = dayjs().subtract(15, 'days');
console.log(date.format('dddd, MMMM D'));
console.log(isWeekend(date));

