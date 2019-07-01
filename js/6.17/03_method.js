/*var person={
  ename:'杨燕',
  sex:'女',
  say:function(){//成员方法
    console.log('hello,我叫'+this.ename);
  }
}
person.say();*/
var yuan={
  r:4,
  pi:3.14,
  P:function(){
	  
    return this.r*this.pi*2;
	},
  S:function(){
    return this.pi*this.r*this.r;
  }
}
console.log(yuan.S(),yuan.P());