//原始类型存储
var a=1;
var b=a;
//改变a的值
//a=2;
//console.log(b)
//引用类型的存储
var person1={
  ename:'小然',
  age:18
}
  //把person1对象赋给了person2
var person2=person1;
person2.ename='小燕儿';
//console.log(person1);
person1.age=48;
//console.log(person2);
//console.log(person1);
//引用类型数据 一旦没有被地址所引用 就会销毁
//手动销毁 释放 引用类型
person1=null;
console.log(person1);



