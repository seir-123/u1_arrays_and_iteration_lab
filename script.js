// ## Section 1. Conceptual Questions
// 
// 1. How do we assign a value to a variable? Using const, let or var = value
//   - Which line(s) is/are valid?
//     let a = 0;  <--- valid
//     const b = 1; <--- valid
//     9 = a; <--- invalid
//     b = b + 5; <--- invalid
// 
// 2. How do we change the value of a variable?
// let a = 9 
// a = a + 5
// console.log(a)
// 
// 3. How do we assign an existing variable to a new variable?
// const a = 9
// myVar = a
// console.log(myVar)



// ## Section 2. Let's get Mathy!
// 
// const a = 42.78
// const b = 1.1
// const c = -2
// const d = .5
// const e = 16
// 
// // - Round `a` down
// console.log(Math.floor(a))
// // - Round `b` up
// console.log(Math.ceil(b))
// // - Find the absolute value of `b - a`
// console.log(Math.abs(b-a))
// // - Find the largest number of `a, b, c, d, e`
// console.log(Math.max(a,b,c,d,e))
// // - Find the smallest number of `a, b, c, d, e`
// console.log(Math.min(a,b,c,d,e))
// - Find the square root of `e`
// console.log(Math.sqrt(e))
// - Raise `e` to the power of `d`
// console.log(Math.pow(e,d))
// - Make a digital die 0 generate a random number between 1 - 6 
// console.log(Math.floor((Math.random() * 6) + 1))
 

// Section 3. Strings
// 
// Switcharoo
// let firstVariable = "Hello World";
// firstVariable = 3;
// let secondVariable = firstVariable;
// secondVariable = parseInt(firstVariable);
// console.log(firstVariable);
// 
// Combine it
// yourName = "Ryan Halpert"
// console.log("Hello, my name is " + yourName)



// Section 6. Driver's Ed
// 
// //1.
// let age = 10
// 
// // 2.
// let age = 17
// if (age >= 16) {
//     console.log("Here are the keys")
// } 
// 3.
// let age = 15
// if (age >= 16) {
//     console.log("Here are the keys")
// } else if (age < 16) {
//     console.log("Sorry, you're too young.")
// }


// Section 7. 
// 
// for (let i = 0; i <=10; i++) {
//     console.log(i)
// }
// 
// for (let i = 500; i >= 50; --i) {
//     console.log(i)
// }


// Section 8.
// 
// for (let i = 1; i <= 100; i++) {
//     if (i % 2) {
//         console.log(`${i} is an odd number`)
// }
// }
