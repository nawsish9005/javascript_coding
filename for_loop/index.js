/*for(var x=1; x<=10;x++)
{
    document.write("Bangladesh <br/>");
}
*/
var m=parseInt(prompt("Enter the starting number: "));
var n=parseInt(prompt("Enter the last number: "));
var sum=0;
for(var x=m; x<=n; x=x+1)
{
    sum=sum+x;
}
document.write(sum);