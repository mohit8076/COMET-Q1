// //Callback
// function printString(){
//     console.log("First"); 
//     setTimeout(function()  { console.log("Second"); }, 500); 
//    console.log("Third")
// }
// printString();


// //Promise
// const myFirstPromise = new Promise((resolve, reject) => { 
//     const condition = false;   
//     if(condition) {
//          setTimeout(function(){
//              resolve("Promise is resolved!");
//         }, 3000);
//     } else {    
//         reject('Promise is rejected!');  
//     }
// });
// // myFirstPromise.then((successMsg) => {
// //     console.log(successMsg);
// // })
// // .catch((errorMsg) => { 
// //     console.log(errorMsg);
// // });

// const demoPromise= function() {
//     myFirstPromise
//     .then((successMsg) => {
//         console.log("Success:" + successMsg);
//     })
//     .catch((errorMsg) => { 
//         console.log("Error:" + errorMsg);
//     })
// }
// demoPromise();

// async function hello() { return "Hello" };
// hello().then((value) => console.log(value))

// async function hi() {
//     return await Promise.resolve("Hello");
// };
  
// hi().then((value) => console.log(value));

let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(10);
    }, 3000);
});

p.then((result) => {
    console.log(result); 
    return result * 2;
}).then((result) => {
    console.log(result); 
    return result * 3;
}).then((result) => {
    console.log(result);
    return result * 4;
}).then((result) => {
    console.log(result);
});

