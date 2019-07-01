//递归：在函数内部调用自身
/*var i=0;
function say(){
	i++;
  alert('我要自杀让你成为孤儿');
   if(i==3){
	  return;
   };
   say();
	
  
}
say();
function say(n){
	if(n==1){
  return 1;
  }
   return n+say(n-1);
   }
say(5);
console.log(say(5));*/
function add(n){
	if(n==1 || n==2){
	  return 1;
	}
  return add(n-1)+add(n-2);
}
add(5);
console.log(add(45));