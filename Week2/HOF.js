//.recduce()
const arrayOfNumbers = [1, 2, 3, 4];
const sum = arrayOfNumbers.reduce((accumulator, currentValue) => {  
  return accumulator + currentValue;
});
console.log(sum);
console.log("___________________________");

//forEach()
const numbers = [28, 77, 45, 99, 27];
numbers.forEach(number => {  
  console.log(number);
});
console.log("___________________________"); 

//.filter()
const randomNumbers = [4, 11, 42, 14, 39];
const filteredArray = randomNumbers.filter(n => {  
  return n > 5;
});
console.log(filteredArray);
console.log("___________________________");


//.map()
const finalParticipants = ['Mohit', 'Kevin', 'JavaScript', 'Go', 'Lang'];
const announcements = finalParticipants.map(member => {
  return member + ' joined the contest.';
})
console.log(announcements);


//Generator
function * generatorFunction() {
    console.log('This will be executed first.');
    yield 'Hello, ';  
    console.log('I will be printed after the pause');  
    yield 'World!';
}
const generatorObject = generatorFunction(); 
console.log(generatorObject.next().value); 
console.log(generatorObject.next().value); 
console.log(generatorObject.next().value); 

function * iterableObj() {
  yield 'This';
  yield 'is';
  yield 'iterable.'
}
for (const val of iterableObj()) {
  console.log(val);
}