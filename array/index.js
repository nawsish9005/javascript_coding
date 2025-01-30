var names = ["Nawsish","Iqbal","Riaj","Shoily"];

document.write(names.length);

names.push("Sumon");

document.write(names.length);

names.pop("Sumon");

document.write(names.length);

var car1=["Toyota","Suzuki"];
var car2=["Ferrary","BMW"];

var car= car1.concat(car2);
document.write(car);

//array loop
var num=[10,20,30,40,50];
var sum=0;

for(var i=0; i<5; i++){
    document.write(num[i]);
    sum=sum+num[i];
}

document.write(sum);