/*function fn(){}
var fn2=function (a,b){
  console.log(a+b);
};
fn2(5,6);*/
var add=function (a,b){
  for(var i=a,sum=0;i<=b;i++){
    sum+=i;
  }
  return sum;
}
console.log(add(3,10));