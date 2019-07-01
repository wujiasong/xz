var code=4;
switch(code){
  case 1 : console.log('党员');
  break;
  case 2 : console.log('团员');
  break;
  case 3 : console.log('群众');
  break;
  default : console.log('啥都不是');
}
var day=0;
switch(day){
  case 1 : console.log('星期一');
  break;
  case 2 : console.log('星期二');
  break;
  case 3 : console.log('星期三');
  break;
  case 4 : console.log('星期四');
  break;
  case 5 : console.log('星期五');
  break;
  case 6 : console.log('星期六');
  break;
  case 0 : console.log('星期日');
  break;
  default : console.log('啥都不是');
}


var a=90;
var b=parseInt(a/10);

switch(b){
  case 10 : console.log('优秀');
  break;
  case 9 : console.log('优秀');
  break;
  case 8 : console.log('良好');
  break;
  case 7 : console.log('中等');
  break;
  case 6 : console.log('及格');
  break;
  default : console.log('不及格');
}

function add(a){
  for(i=1;i<a;i++){
    console.log(i);
  }
}
add(50);