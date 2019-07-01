/*var d1=new Date('2019/6/19 10:36:50');
var d2=new Date(2019,5,19,10,36,50);
var d3=new Date();
var d4=new Date(24*60*60*1000)
console.log(d4);
var d=new Date('2019/6/19 10:56:30');
//获取年份
year=d.getFullYear();
month=d.getMonth()+1;
date=d.getDate();
day=d.getDay();
time=d.getTime();
console.log(year,month,date,day,time)
var date=new Date('2019/6/19 11:30:00');
var a=date.getFullYear();
var b=date.getMonth()+1;
var c=date.getDate();
var d=date.getDay();
var e=date.getHours();
var f=date.getMinutes();
if(b<10){
  b='0'+b;
}
var add=['星期日','星期一','星期二','星期三','星期四','星期五','星期六'];
console.log('今天是'+a+'年'+b+'月'+c+'日'+' '+add[d]+' '+e+':'+f);
var d=new Date();
console.log(d.toLocaleString());
console.log(d.toLocaleDateString());
console.log(d.toLocaleTimeString())*/

var d=new Date().getTime();
var b=new Date('2019/12/25').getTime();
var c=b-d;
var hm=Math.floor(c%1000);
var miao=Math.floor((c/1000)%60);
var fen=Math.floor((c/1000/60)%60);
var shi=Math.floor((c/1000/60/60)%24);
var tian=Math.floor((c/1000/60/60/24));
console.log('距离圣诞节还有：'+tian+'天'+shi+'时'+fen+'分'+miao+'秒'+hm+'毫秒');
