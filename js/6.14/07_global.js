var str='http://www.jd.com/search?kw=电脑';
//对网址中的中文编码
var str1=encodeURI(str);
console.log(str1);
//对已经编码的网址进行解码
var str2=decodeURI(str1);
console.log(str2);
console.log(isFinite(1/0));
console.log(eval('typeof 3'));