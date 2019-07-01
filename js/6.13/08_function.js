/*fn();

function fn(){

    console.log(1);
}
课后练习：
斐波那契数列 
1 1 2 3 5 8 13 21 34 55；
使用循环结合函数 计算斐波那契-+数列的第n项


function add(n){
  if(n==1 || n==2){
    return 1;
  }else if(n==0){
    return 0;
  }
  var a = 0, b = 1, num = 0;
  for(var i=1;i<n;i++){
    num = a + b;
    a = b;
    b = num; 
  }
  return num;
}
console.log(add(0));
function add(n){
  for(var i=1,sum=1;i<=n;i++){
    sum*=i;
}
	return sum;
}
function app(n){
  for(var i=1,num=0;i<=n;i++){
     num+=add(i);
}
	 return num;
}
console.log(add(10));*/
function add(n){
  var a=0,b=1,c=1;
  for(var i=1;i<n;i++){

    c=a+b;
	a=b;
	b=c;
  }
  return c;
}
console.log(add(3));
