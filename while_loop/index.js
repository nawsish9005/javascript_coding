var i=2;
var sum=0;

while(i<=100){
    if(i%3==0 && i%5==0){
        sum=sum+i;
    }
    i=i+1;
}
document.write(sum);