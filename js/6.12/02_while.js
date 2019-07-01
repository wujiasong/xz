/*
while(false){
  console.log('hello')
}
var i=50;
while(i>=1){
  console.log(i);
  i--;
}
var a=50;
while(a<=70){
  console.log(a);
  a+=5;
}
var a=0;
while(a<=100){
	
  if(a%2!==0){
		console.log(a);
	}
	a++;
}
var a=1;
var b=0;
while(a<=100){
  b+=a;
  a++;
}
console.log(b);*/
var a=1;
var b=0;
while(a<=100){
  if(a%2==0){
    b+=a;
  }
  a++;
}
console.log(b);