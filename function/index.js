//creating function

function square(){
  var num=5;
  var result=num*num;
  document.write("Result is: " + result);
}

//calling function

square();


/*function square2(num1, num2){
  var result=num1*num2;
  document.write("Result is: " + result);
}*/

function square2(num1, num2){
  var result=num1*num2;
  return result;
}

var x= square2(10,10);
document.write(" Result is: " + x);


//IIFEs function
//1 code

(function square(){
  var num=5;
  var result2=num*num;
  document.write("Result is " +result2);
})()

//2 code

(function(a, b) {
  document.write("Sum:", a + b);
})(5, 3);
