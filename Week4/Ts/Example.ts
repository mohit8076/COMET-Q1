
// let x = 10;
// const y = 20;

// let sum;
// const title = "Mohit Chauhan";

// let isBeginner: boolean = true;
// let total : number = 0;
// let name1 : string = 'mohit';

// let sentence : string = `My name is${name1}
// I am beginner`;

// console.log(sentence);

// let n : null = null;
// let u : undefined = undefined;

// let isNew : boolean = null;

// let list1 : number[] = [1,2,3];
// let list2 : Array<number> = [1,2,3];

// let person1 : [string,number] = ['chris',23];

// enum color{Red =5,Green,blue};

// let c : color = color.Green;
// console.log(c);

// let randomValue : any = 10;
// randomValue = true;
// randomValue = "Mohit";

// let myVariable : unknown  =10;



// let a;
// a=10;
// a = true;
// let b = 20;

// let multitype : number | boolean;
// multitype = 20;
// multitype = true;

// let anyType : any;
// anyType = 20;
// anyType = true;


// function add(num1 : number,num2 : number){
//     return num1+num2;
// }

// add(5,10);

// interface person{
//     firstName  :string;
//     lastName : string;
// }
// function fullName(person : person){
//     console.log(`${person.firstName} ${person.lastName}`);
// }
// let p={
//     firstName : "bruce",
//     lastName : "wayne"
// };

// fullName(p);

// class Employee {
//     employeeName : string;

//     constructor(name : string){
//         this.employeeName = name;
//     }

//     greet(){
//         console.log(`Good Morning${this.employeeName}`);
//     }
// }

// let emp1 = new Employee('Mohit');
// console.log(emp1.employeeName);
// emp1.greet();

// class Manager extends Employee{
//     constructor(managerName : string){
//         super(managerName);
//     }
//     delegateWork(){
//         console.log("Manager delegating tasks");
//     }
// }

// let m1 = new Manager("Bruce");
// m1.delegateWork();
// m1.greet();
// console.log(m1.employeeName);