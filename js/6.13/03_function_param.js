/*function add(a,b){
  console.log(a+b);
}

function app(a){
  for(var i=1,num=0;i<=a;i++){
    num+=i;
  }
  console.log(num);
}*/
function qaq(a,b){
  for(var num=0,a;a<=b;a++){
    if(a%4==0 && a%100!==0 || a%400==0){
	  num++;
	};
  };
  console.log(num);
};
qaq(1949,2019);

