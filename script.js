// Section 1. Conceptual Questions
// Rate your understanding of the following questions on a scale of 1 - 5. If your understanding is less than or equal to 3, research the answer or ask for help:

// How do we assign a value to a variable?
// Which line(s) is/are valid?

// let a = 0; this is valid
// const b = 1; this is valid
// 9 = a;
// b = b + 5;

// How do we change the value of a variable?

// let a = 0;
// a = 3;

// console.log(a)

// How do we assign an existing variable to a new variable?

// let b = 3;
// let a = 4;

// a = b

// console.log(a)

// Section 2. Let's get Mathy!
// const a = 42.78
// const b = 1.1
// const c = -2
// const d = .5
// const e = 16

// Round a down

// console.log(Math.floor(a))


// Round b up

// console.log(Math.ceil(b))

// Find the absolute value of b - a

// console.log(Math.abs(b - a))

// Find the largest number of a, b, c, d, e

// console.log(Math.max(a, b, c, d, e))

// Find the smallest number of a, b, c, d, e

// console.log(Math.min(a, b, c, d, e, ))

// Find the square root of e

// console.log(Math.sqrt(e))

// Raise e to the power of d

// console.log(Math.pow(e, d))

// Make a digital die 0 generate a random number between 1 - 6

// console.log(Math.random(1)*6)


// Section 3. Strings
// Strings - Switcharoo
// Create a variable called firstVariable.

// let firstVariable

// assign it the value of a string: "Hello World"

// let firstVariable = "Hello World"

// On the next line, change the value of this variable to a number.

// firstVariable = 8

// console.log(firstVariable)

// store the value of firstVariable into a new variable called secondVariable

// let secondVariable = firstVariable

// console.log(secondVariable)

// On the next line, change the value of secondVariable to a string.


// secondVariable = secondVariable.toString();

// console.log(typeof secondVariable)

// console.log(typeof secondVariable);

// What is the value of firstVariable?

// "8"

// Strings - Combine it
// Create a variable called yourName and set it equal to your name as a string.

// let yourName = "Ben"

// Write an expression that takes the string "Hello, my name is " and the variable yourName so that it prints a new string with them concatenated
// ex: Hello, my name is Jean Valjean

// console.log(`hello, my name is ${yourName}`)



// Section 6. Driver's Ed
// Write a variable that will hold a person's age.

// let age = 14

// Write code that will print out "Here are the keys", if the age is 16 years or older.

// if (age >= 16) {
//     console.log("Here are the keys")
// }

// Change your code so that if the age is younger than 16, a message will print "Sorry, you're too young."

// if (age >= 16) {
//     console.log("Here are the keys")
// }else {
//     console.log("Sorry, you're too young.")
// }



// Section 7. Just Loop It
// Write code that will print out all the numbers in the range 0 - 10.

// for (let i = 0; i <= 10; i++) {
//     console.log(i)
// }

// Write code that will print out all the numbers in the range 500 - 50.

// for (let i = 500; i >= 50; i--) {
//     console.log(i)
// }


// Section 8. Let's get odd
// Print out the odd numbers that are within the range of 1 - 100.

// for (let i = 0; i <= 100; i++) {
//     if (i % 2 != 0) {
//         console.log(i)
//     }
// }

//found the if (i % 2 != 0) on google

// Adjust your code to add a message next to the odd number that says: "is an odd number".
// Example Output:
// 3 is an odd number
// 5 is an odd number
// 7 is an odd number

// for (let i = 0; i <= 100; i++) {
//     if (i % 2 != 0) {
//         console.log(` ${i} is an odd number`)
//     }
// }


