/*console.log(1);
var num='1aa';
if(isNaN(num)){
  throw '请提供一个数字';
}
处理错误

var num=1;

//尝试执行
try{
	if(num>10){
      throw '太大了';
  }else if(num<5){
    throw '太小了'
  }
}catch(err){
  console.log(err);
}
console.log(2)*/
//计算2019,6,21日距离国庆节还有多少天.....
var d=new Date('2019/6/21').getTime();
var b=new Date('2019/10/1 5:30:45').getTime();
var c=b-d;
var hm=Math.floor(c%1000);
var miao=Math.floor((c/1000)%60);
var fen=Math.floor((c/1000/60)%60);
var shi=Math.floor((c/1000/60/60)%24);
var tian=Math.floor((c/1000/60/60/24));
console.log('距离国庆节还有：'+tian+'天'+shi+'时'+fen+'分'+miao+'秒'+hm+'毫秒');

