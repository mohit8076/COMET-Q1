// By object literal
let person = {
    first_name : 'Mohit',
    last_name : 'Chauhan',

    getFunction : function(){
        return(`The name of a person is ${person.first_name} ${person.last_name}`)
    },
    phone_number : {
        mobile : '1234567890',
        landline : '12345678'
    }
}
console.log(person.getFunction());
console.log(person.phone_number.mobile);



// By Object Constructor
function persons(first_name,last_name){
    this.first_name = first_name;
    this.last_name = last_name;
}
let person1 = new persons('Mohit','Chauhan');
let person2 = new persons('Steve','jobs');

console.log(person1.first_name);
console.log(`${person1.first_name} ${person2.last_name}`);



// By Object.create()
const coder = {
    isStudying : false,
    printIntroduction : function(){
        console.log(`My name is ${this.name}. Am I studying? : ${this.isStudying}.`)
    }
}

const me = Object.create(coder);
me.name = 'Mohit';
me.isStudying = true;
me.printIntroduction();



// Classes
class Vehicle{
    constructor(name, maker, engine){
        this.name = name;
        this.maker = maker;
        this.engine = engine;
    }
    getDetails(){
        return (`The name of the bike is ${this.name}`)
    }
}
let bike1 = new Vehicle('Hayabusa', 'Suzuki', '1200cc');
let bike2 = new Vehicle('Ninja', 'Kawasaki' ,'998cc');

console.log(bike1.name);
console.log(bike2.maker);
console.log(bike1.getDetails());




// Encapsulation
class Boy{
    constructor(name,id){
        this.name = name;
        this.id = id;
    }
    add_Address(add){
        this.add = add;
    }
    getDetails(){
        console.log(`Name is ${this.name},Address is: ${this.add}`);
    }
}
 
let Boy1 = new Boy('Mohit',21);
Boy1.add_Address('Delhi');
Boy1.getDetails();
console.log('___________________________________________')



//Inheritance
class people{
    constructor(name){
        this.name = name;
    }
    toString(){
        return (`Name of person: ${this.name}`);
    }
}
class student extends people{
    constructor(name,id){
        super(name);
        this.id = id;
    }
    toString(){
        return (`${super.toString()},Student ID: ${this.id}`);
    }
}
let student1 = new student('Mohit',22);
console.log(student1.toString());



// Object properties
const personDetail = {
    firstName: "Mohit",
    lastName: "Chauhan",
    age: 21,
    eyeColor: "blue"
};
  console.log(personDetail.age);
  delete personDetail.age;
  console.log(personDetail.age);
  personDetail.age = 21;
  console.log(person.age);



//Accessing Object
// By name
const boy = {
      firstname : 'Mohit',
      lastname : 'Chauhan',
      age : 21,
      city : 'New Delhi'
}
console.log(boy.firstname + ' ' + boy.lastname + ', '+ boy.age);

// By Loop
const boyDetail = {
    firstname : 'Mohit',
    lastname : 'Chauhan',
    age : 21,
    city : 'New Delhi'
};
let detail = '';
for(let x in boyDetail){
    detail += boyDetail[x] + " ";
};
console.log(detail);

//By Object.values
//By JSON.stringify()