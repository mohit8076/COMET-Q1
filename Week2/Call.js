// //Call
// const person = {
//     fullName: function() {
//       return this.firstName + " " + this.lastName;
//     }
// }
// const person1 = {
//   firstName:"Mohit",
//   lastName: "Chauhan"
// }
// const person2 = {
//   firstName:"Steve",
//   lastName: "Rogers"
// }
// // person.fullName.call(person1);
// console.log(person.fullName.call(person1));


// const persons = {
//     fullName: function(city, country) {
//       return this.firstName + " " + this.lastName + ", " + city + ", " + country;
//     }
// }
// const persons1 = {
//     firstName:"Mohit",
//     lastName: "Chauhan"
// }  
// // persons.fullName.call(person1, "Delhi", "India");
// console.log(persons.fullName.call(persons1,['new Delhi' , 'India']));



// //Apply()
// const personS = {
//     fullName: function() {
//       return this.firstName + " " + this.lastName;
//     }
// }
// const person3 = {
//     firstName: "Steve",
//     lastName: "Rogers"
// }
// console.log(personS.fullName.apply(person3));


// //Bind
// const detail = {
//     firstName:"Mohit",
//     lastName: "Chauhan",
//     fullName: function () {
//       return this.firstName + " " + this.lastName;
//     }
// }
  
// const member = {
//     firstName:"Alan",
//     lastName: "walker",
// }
  
// let fullname = detail.fullName.bind(member);   
// console.log(fullname); 

// const info = {
//     firstName:"John",
//     lastName: "Doe",
//     display: function () {
//       return this.firstName + " " + this.lastName;
//     }
// }
// let y = setTimeout(info.display, 3000);
// console.log(y);

// _____________________________________________________________________

let person = {
  firstname : 'Mohit',
  lastname : 'chauhan',
  printfullName : function (hometwon) {
    console.log(this.firstname + " " + this.lastname + " from " + hometwon);
  }
}
person.printfullName("Delhi");

let person2 = {
  firstname:'Sachin',
  lastname : 'Tendulkar',
}

//function borrowing
person.printfullName.call(person2,"Mumbai");

person.printfullName.apply(person2 , ["Mumbai"]);

let printMyName = person.printfullName.bind(person2,"Mumbai");
console.log(printMyName);
// printMyName();