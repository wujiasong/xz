//var arr=['tom','king','smith'];
//var add=[5,5,5,6]
//把数组转成字符串
//console.log(arr.toString());
//console.log(arr.join('-'));
//console.log(arr.concat(add));
//var arr=['html','css','js','nodejs','ajax','vue','react'];
//console.log(arr.slice(0,3))
//var arr=['a','b','c','d','e','f','g'];
//var add=arr.slice(2,4).concat(arr.slice(5,6),arr.slice(1,2));
//console.log(add);
/*var arr=['a','b','c','d','e','f','g','h']
arr.splice(3,3,'m');
arr.splice(1,0,'z');
console.log(arr.reverse());*/
//1使用遍历数组 实现翻转数组中的元素
//2使用冒号排序将数组中的元素从小到大排序
/*var a=[9,8,7,6,5,4,3,2,1];
var b=[];
for(i=0;i<=a.length-1;i++){
  b.splice(0,0,a[i]);
}
console.log(b);

var arr=[7,4,1,8,5,2,9,6,3];
function add(arr){
    for(var i=0;i<arr.length;i++){
        for(j=0;j<arr.length-i;j++){
            if(arr[j]>arr[j-1]){
                var arr1=arr[j];
                arr[j]=arr[j-1];
                arr[j-1]=arr1;
            }
        }
    }
    return arr;
}
add(arr);
console.log(arr);*/
var arr=[23,9,45,78,6];
for(var i=0;i<arr.length-1;i++){
  for(var j=0;j<arr.length-i;j++){
    if(arr[j]>arr[j+1]){
	  var arr1=arr[j];
	  arr[j]=arr[j+1];
	  arr[j+1]=arr1;

	}
  }

}
console.log(arr);