//满18岁打印成年人 否则 未成年人
var age=19;
if(age>=18){
  console.log('成年人');
}else{
  console.log('未成年人')
}
//三目
age>=18 ? console.log('成年人') : console.log('未成年人');
var uname='root';
var upwd='123456';
if(uname=='root' && upwd=='123456'){
  console.log('登录成功');
}else{
  console.log('登录失败');
}
var sex=1;
sex==0 ? console.log('女') : console.log('男');
if(sex==0){
  console.log('女');
}else{
  console.log('男');
}
