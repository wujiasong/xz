/*使用内置构造函数
var laptop=new Array('ThinkPad','小米','戴尔');
var course=new Array(3);
console.log(laptop);
console.log(course);
var a=['啦','啦啦','啦啦啦','啦啦啦啦','母猪的产后护理'];
var b=new Array(5);
b[0]='大前锋';
b[1]='小前锋';
b[2]='中锋';
b[3]='控球后卫';
b[4]='得分后卫';
b[b.length]='狗';
b[b.length]='啊啊啊';
b[b.length]='啊啊啊';
b[b.length]='狗ss';
console.log(a,b)
//查看数组的长度
console.log(b.length);
var a=new Array();
a[a.length]='中国';
a[a.length]='日本';
a[a.length]='韩国';
a[a.length]='朝鲜';
a[a.length]='俄罗斯';
a[a.length]='缅甸';
console.log(a);
var emp=[];
emp['ename']='小然';
emp['sex']='男';
emp['pwd']='root';
for(var key in emp){
  console.log(emp[key])
}
var emp1=[20,80,90,10,15,85]
for(var i=0,sum=0;i<emp1.length;i++){
	sum+=emp1[i];
  console.log(emp1[i]);
}
console.log(sum);
console.log(sum/emp1.length)
var country=['中国','日本','中国','中国','aaa','啊啊啊','啦啦啦'];
for(i=0,u=0;i<country.length;i++){
  if(country[i]=='中国'){
	  u++;
	  country[i]='china';
  }
}
console.log(u);
var num=[7,5,3,9,5,1,555,5,6,564,56,46,4654,56,46,456,4564,896,4894564];
for(var i=0,o=0;i<num.length;i++){
  if(num[i]>o){15038061741
    o=num[i];
  }
}
console.log(o)*/
var b;
function get(arr){
	for(var i=0,sum=0;i<arr.length;i++){
	  sum+=arr[i];
	  
	  }
	  return sum/i;
	  
  
}

console.log(get([9,8,4,6,2,8,5,5,6,7,91,11]));



























