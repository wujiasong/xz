//警示框
var d=prompt('商品单价');
var s=prompt('商品数量');
var z=Number(d)*Number(s);
var y=900;
if(z>=1000){
  z*=0.9;
}else{
	z=z;
}if(y>=z){
 alert('支付成功卡内余额:'+(y-z))
}else{
   alert('支付失败，余额不足')
 }



