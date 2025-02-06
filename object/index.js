//constructor
//adding function inside constructor

function Student(name, age,cgpa, lang){
    this.name=name;
    this.age=age;
    this.cgpa=cgpa;
    this.lang=lang;

    this.display=function(){
        document.write(this.name);
        document.write(this.age);
        document.write(this.cgpa);
        document.write(this.lang);
    }
}

var student1= new Student("Nawsish Ahmed",27,3.94,["Bengali","Hindi","English"]);

//var student1={
   // name:"Nawsish Ahmed",
    //age:27,
    //cgpa:3.94,
    //lang:["Bengali","Hindi","English"]
//}

//document.write(student1.name + " and " + student1.age);
student1.display();
