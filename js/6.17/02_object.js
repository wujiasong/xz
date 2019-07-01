var person={
  ename:'杨燕',
  sex:'女',
  age:28
}
//console.log(person.eid)
//属性值和undefined比较
//console.log(person.ename===undefined)
//console.log(person.hasOwnProperty('sex'))
//console.log('sex' in person)
if('salary' in person==true){
  console.log('属性存在')

}else{
  person.salary=8000;
}
console.log(person.salary)