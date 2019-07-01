/*function add(n1,n2){
  return(n1+n2);
  
  
  //返回n1+n2的结果
}
add(5,9);
/*var a=add(87,93);
console.log(a);
function add(a1,a2){
  if(a1>a2){
    return a1;
  }else{
    return a2;
  };
};

function add(a,b){
  if(a>b){
	return a;
  }else{
    return b;
  }
}

var res=add(5,9);
console.log(res);
function add(a,b,c){
	var max;
 max=a>b ? a : b;
 return c>max ? c : max;
}
var app=add(9,81,7);
console.log(app);
function add(a){
  if(a==1){
    return '待付款';
  }else if(a==2){
    return '待发货';
  }else if(a==3){
    return '运输中';
  }else if(a==4){
    return '已签收';
  }else if(a==5){
    return '已取消';
  }else{
    return '无法追踪';
  }
}
var app=add(9);
console.log(app);

function add(a){
  if(a%4==0 && a%100!==0 || a%400==0){
    return true;
  }else{
    return false;
  }
}
function c(a){
	return add(a) ? 366 : 365;
}
console.log(c(2020));*/
function add(a){
  for(var i=1,q=1;i<=a;i++){
    q*=i;
	}
	return q;
}
/*function app(a){
  for(var i=1,sum=0;i<=a;i++){
    sum+=add(i);
  }
  return sum;
}
console.log(app(4));*/
function app(a){
for(var i=1,sum=0;i<=a;i++){
  sum+=add(i);
}
 return sum;
}
console.log(app(5));


