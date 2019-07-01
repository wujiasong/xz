/*var d1=new Date('2019/6/19 15:20:30');
//修改年份
d1.setFullYear(2017);
d1.setMonth(8);
d1.setDate(d1.getDate()+3);
d1.setTime(5436456464654);
console.log(d1);*/
var d1=new Date('2019/6/22');
var d2=new Date(d1);
d2.setFullYear(d1.getFullYear()+3);
var d3=new Date(d2);
d3.setMonth(d2.getMonth()-1);
var date=d3.getDate();
if(d3.getDay()==0){
  d3.setDate(date-2);
}else if(d3.getDay()==6){
  d3.setDate(date-1);
}
console.log('入职时间：'+d1.toLocaleString()+'  '+'到期时间：'+d2.toLocaleString()+' '+'续签时间：'+d3.toLocaleString());




