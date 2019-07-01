/*/获取圆周率
console.log(Math.PI);
//取绝对值
console.log(Math.abs(-5));
//向上取整
console.log(Math.ceil(5.5555));
//向下取整
console.log(Math.floor(4.999999999));
//四舍五入取整
console.log(Math.round(4.5));
console.log(Math.max(1,2,3,44,55,55.5,55.5,55.6));
console.log(Math.min(0.1,2,22,2,1,5,41,3213,0,-5));
console.log(Math.pow(2,9));
//取随机

//for(i=0;i>=0;i++){
	var a=Math.random();
	console.log(a)
  if(a==0){
    console.log(a);
	break;
  }

}
将一句英文 每个单词 首字母大写 其余小写
hoW arE yOu
随机产生0-9之间的一个数字*/
/*var arr='hoW arE yOu';
var arr1=arr.toLowerCase();
var a=arr1.substring(0,1).toUpperCase();
var b=arr1.substring(1,4);
var c=arr1.substring(4,5).toUpperCase();
var d=arr1.substring(5,8);
var e=arr1.substring(8,9).toUpperCase();
var f=arr1.substring(9);
var add=a+b+c+d+e+f;
console.log(add);*/

var arr=['a','b','c','d','e','f','g','h','i','0','1','2','3','4','5','6','7','8','9','j','k','l','m','n','o','p','q'];
var add=[];
for(a=0;a<4;a++){
	var i=Math.random()*arr.length;
var j=Math.floor(i);
  add.push(arr[j]);
}

console.log(add);






