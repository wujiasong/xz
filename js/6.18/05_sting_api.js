/*var a='54545454545456465465456464';
for(var i=0;i<a.length;i++){
  console.log(a.charAt(i));
}
var str='Javascript';
console.log(str.lastIndexOf('s'))
var arr='416293228@qq.com';
if(arr.indexOf('@')>=0){
  console.log('合法的邮箱')
}else{
    console.log('非法的邮箱')
  }
var  str='Javascript';
console.log(str.slice(5,8))
var arr='tom123@163.com'
console.log(arr.slice(0,arr.indexOf('@')),arr.slice(arr.indexOf('@')+1))
var arr='410423199610130034';
var n=arr.substr(6,4);
var y=arr.substr(10,2);
var r=arr.substr(12,2);
var sex=arr.substr(-2,1);
var gender;
if(sex%2==0){
 gender='女';
}else{
   gender='男';
  }
  console.log('小然的生日为：'+n+'年'+y+'月'+r+'日'+'性别为：'+gender);
  var arr='welCome';
  var a=arr.substring(0,1).toUpperCase();
  var b=arr.substring(1).toLowerCase();
  console.log(a+b);
  console.log(arr.split('-'));
  var str='a+b+c';
  console.log(str.split('+'))
  var arr='416293228@qq.com';
var add=arr.split('@');
console.log(add[0],add[1])*/
var str='xiaoran产于上世界七八十年代,Xiaoran至今性能依然强劲,xiaoran一顿饭能吃十盘羊肉,XIAORAN是一个美男子';
//console.log(str.match(/XIAORAN/ig));
console.log(str.replace(/xiaoran/ig,'gougou'))

  




