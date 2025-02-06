function Student(name, age,cgpa, lang){
    this.name=name;
    this.age=age;
    this.cgpa=cgpa;
    this.lang=lang;
}

var student1= new Student();

var student1={
    name:"Nawsish Ahmed",
    age:27,
    cgpa:3.94,
    lang:["Bengali","Hindi","English"]
}

document.write(student1.age);