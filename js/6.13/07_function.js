function fn1(){
  console.log(1);
}

function fn2(){
  function fn3(){
    console.log(3);
  }
  fn3();
}
fn2();
