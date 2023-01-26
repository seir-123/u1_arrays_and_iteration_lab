// Section 1. Conceptual Questions

// Question 1: How do we assign a value to a variable?
// Answer: let a = 0; and const b = 1;

// Question 2: How do we change the value of a variable
// Answer:
// let a = 0
// changeValue();
// function changeValue(){
//     a = 10
//     console.log(`The new value of the a variable is ${a}`)
// }

// Question 3: How do we assign an existing variable to a new variable?
//  Answer:

// let c = 0
// let d = 10
// d = c
// console.log(`d's value is equal to c, which is ${d}`)


// Section 2. Let's get Mathy!

const a = 42.78
const b = 1.1
const c = -2
const d = .5
const e = 16

// Round a down
console.log(`a rounded down is ${Math.floor(a)}`)

// Round b up
console.log(`b rounded up is ${Math.ceil(b)}`)

// Find the absolute value of b - a
console.log(`The absolute value of b - a = ${Math.abs(b - a)}`)

// Find the largest number of a, b, c, d, e
console.log(`The largest number of a, b, c, d, e is ${Math.max(a, b, c, d, e)}`)

// Find the smallest number of a, b, c, d, e
console.log(`The smallest number of a, b, c, d, e is ${Math.min(a, b, c, d, e)}`)

// Find the square root of e
console.log(`The square root of e = ${Math.sqrt(e)}`)

// Raise e to the power of d
console.log(`e to the power of d = ${Math.pow(e, d)}`)

// Make a digital die 0 generate a random number between 1 - 6
console.log(`roll the dice... ${Math.floor(Math.random() * 7)}`)


// Section 3. Strings

// Strings - Switcharoo

// 1. Create a variable called firstVariable.
// 2. assign it the value of a string: "Hello World"
// 3. On the next line, change the value of this variable to a number.
// 4. store the value of firstVariable into a new variable called secondVariable
// 5. On the next line, change the value of secondVariable to a string.
// 6. What is the value of firstVariable?

let firstVariable = "Hello World"
firstVariable = 3
let secondVariable
secondVariable = firstVariable
secondVariable = "Hello Galaxy"
console.log(`The value of firstVariable = ${firstVariable}`)

// Strings - Combine it

// 1. Create a variable called yourName and set it equal to your name as a string.
// • Write an expression that takes the string "Hello, my name is " and the variable yourName so that it prints a new string with them concatenated
// ex: Hello, my name is Jean Valjean

let yourName = "Fernando"
introduceYourself = "Hello, my name is "
console.log(introduceYourself + yourName)

// Section 6. Driver's Ed
// 1. Write a variable that will hold a person's age.
// 2. Write code that will print out "Here are the keys", if the age is 16 years or older.
// 3. Change your code so that if the age is younger than 16, a message will print "Sorry, you're too young."

let personsAge = 34
if (personsAge >= 16) {
    console.log(`Here are the keys`)
} else {
    console.log(`Sorry, you're too young.`)
}


// Section 7. Just Loop It
// 1. Write code that will print out all the numbers in the range 0 - 10.
// 2. Write code that will print out all the numbers in the range 500 - 50.
for (i = 0 ; i <= 10 ; i++) {
    console.log([i])
}

for (i = 500 ; i >= 50 ; i--) {
    console.log([i])
}


// Section 8. Let's get odd
// 1. Print out the odd numbers that are within the range of 1 - 100.
// 2. Adjust your code to add a message next to the odd number that says: "is an odd number".

// Example Output:
    // 3 is an odd number
    // 5 is an odd number
    // 7 is an odd number

for (i = 1 ; i <= 100 ; i++) {
    if (i % 2 !== 0) {
        console.log(`${[i]} is an odd number`)
    }   
}


