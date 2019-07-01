/*for(var i=1;i<=10;i++){
  console.log(i);
}
for(var i=80;i>=60;i-=5){
 console.log(i);
};
for(var a=0,b=0;a<=100;a++){
  if(a%2!==0){
    b+=a;
  };
};
  console.log(b);
  for(var i=1,sum=1;i<=20;i++){
  if(i%3==0){
    sum*=i;
  }
  }
  console.log(sum);
  for(var i=2000;i<=2100;i++){
    if(i%4==0 && i%100!==0 || i%400==0){
	  console.log(i);
	}
  }
*/

for(var a=1;a<=9;a++){
  for(var b=1,str='';b<=a;b++){
    str+=b+'*'+a+'='+(b*a)+' ';
	 };
   console.log(str);
};

