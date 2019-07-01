/*function fn(a){
  a();
}
fn(function(){
  console.log(1);
  console.log(2);
  console.log(3);
  console.log(4);
  console.log(5);
});*/
function add(a,b){
 a();
 b();

};
add(function(){
  console.log(1);
},function(){
  console.log(2);
});