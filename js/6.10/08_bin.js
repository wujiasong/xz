//console.log(5|7);

//console.log(10|19);
console.log(5^7);
console.log(8<<4);
/*作业：
       1.复习今天的内容整理思维导图
	   2.声明变量保存一个年份 判断这个年份是否为闰年
	     结合逻辑短路 如果是闰年打印闰年*/

var year=1900;
(year%4==0 && year%100!=0 || year%400==0) && console.log('闰年',year);
console.log(year%4==0 && year%100!==0 ||
 year%400==0);
if(year%4==0 && year%100!==0 ||
 year%400==0){
   console.log('闰年')
 }else{
     console.log('非闰年')
   }
year%4==0 && year%100!=0 || year%400==0  ? console.log('闰年',year) : console.log('非闰年');
