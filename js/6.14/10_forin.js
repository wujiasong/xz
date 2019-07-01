/*var phone={
  color:'黑色',
  brand:'华为',
  no:'P30',
  size:'5.9'
}
for(var key in phone){
  console.log(key);
  console.log(phone[key]);

}
var z=0;
var zz={
  '语文':80,
  '数学':90,
  '英语':30
}
 for(var key in zz){
   console.log(key);
   z+=zz[key];
   }
    
    console.log(z);
	练习 创建对象包含若干个年龄 获取平均年龄 
	把年龄大于20岁的打印出来 
*/
var age={
  a:18,
  b:20,
  c:23,
  d:16,
  e:26
}
  var max=0;
  var sum=0;
  for(var key in age){
	  max+=age[key];
	  sum++;
	  
    if(age[key]>20){
	  console.log(age[key]);
	}
	
	}
  console.log(max/sum);
  