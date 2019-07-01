var arr='abcd';
for(i=0;i>=0;i++){
  var add=prompt('请输入验证码');
  if(arr.toUpperCase()==add.toUpperCase()){
    alert('验证成功')
    break;
  }else{
    alert('验证失败')
  }
}
