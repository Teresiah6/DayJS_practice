//15f - Had issues with this
export function isWeekend(date){
  const dayOftWeek = date.format('dddd')

  if(dayOftWeek === 'Saturday' || dayOftWeek === 'Sunday'){
    return dayOftWeek;
  }

}
export default isWeekend;