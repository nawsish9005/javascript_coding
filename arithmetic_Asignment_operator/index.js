//var x=3;
//x+=6;
//document.write(x);
/*var num1=30;
var num2=20;

sub=num1-num2;
sum=num1+num2;
document.write(sub +" and "+ sum);*/

var num1= prompt("Enter first number: ");
var num2=prompt("Enter second number: ");

num1=parseInt(num1,10);
num2=parseInt(num2,10);
var sum, sub;
sum=num1+num2;
document.write("the sum of "+num1 +" and "+num2 +"="+sum +"<br/>");
sub=num1-num2;
document.write("the sub of "+num1 +" and "+num2 +"="+sub+"<br/>");

mul=num1*num2;
document.write("the mul of "+num1 +" and "+num2 +"="+mul+"<br/>");

divid=num1/num2;
document.write("the divid of "+num1 +" and "+num2 +"="+divid+"<br/>");

mod=num1%num2;
document.write("the mod of "+num1 +" and "+num2 +"="+mod+"<br/>");