/*for(var i=1,sum=0;i<=100;i++){
  if(i%3==0 || i%4==0){
    continue;
  }
console.log(i);
}
*/
/*for(var j=1;j<=5;j++){
	for(var i=1,str='';i<=5;i++){
	  str+='*';
	  }
  console.log(str);
}

作业
打印本世纪前十个闰年
计算1-100所有整数的和 当和大于4000的时候 提前结束循环 
并打印当前的和
打印九九乘法表

*/

for(var a=2000,b=0;a<=2100;a++){
  if(a%4==0 && a%100!==0 || a%400==0){
    console.log(a); 
	b++;
  }
  if(b==10){
    break;
  }
}
for(var n1=1,n2=0;n1<=100;n1++){
  n2+=n1;
  if(n2>4000){
	  console.log(n2-n1)
	  break;
	  };
}

for(var a1=1;a1<=9;a1++){
  for(var a2=1,str='';a2<=a1;a2++){
    str+=a2+'*'+a1+'='+(a1*a2)+' ';
  }
	console.log(str);
}
