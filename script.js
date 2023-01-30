// SECTION 2

const a = 42.78
const b = 1.1
const c = -2
const d = .5
const e = 16


console.log(Math.floor(a))

console.log(Math.ceil(b))

console.log(Math.abs(b - a))

console.log(Math.max(a, b, c, d, e))

console.log(Math.min(a, b, c, d, e))

console.log(Math.sqrt(e))

console.log(Math.pow(e, d))

console.log(Math.floor(Math.random() * 6) + 1)


////////////////////////////////////////////////////////////////////////////////////////

// SECTION 3
//  SWITCHAROO

    let firstVariable = (`Hello World`)
    firstVariable = 5
    let secondVariable = firstVariable
    secondVariable = ("Goodbye World")
    // What is the value of `firstVariable`?

    console.log(firstVariable);


//  COMBINE IT

    let yourName = ("Steph Pez")

    console.log(`Hello, my name is ${yourName}`);


////////////////////////////////////////////////////////////////////////////////////////

// SECTION 6
// 1) 
let age = 12


// 2)
if (age > 16) {
    console.log("Here are the keys")
}

// 3)
else if (age < 16) {
    console.log("Sorry, you're too young")
}


////////////////////////////////////////////////////////////////////////////////////////

// SECTION 7
// 1)
for (let i = 0; i < 10; i++) {
    console.log(i);
}

// 2)
for (let i = 50; i <= 500; i++) {
    console.log(i);
}


////////////////////////////////////////////////////////////////////////////////////////

// SECTION 8
// 1)
let x = 1
let y = 2

for (let i = x ; i < 100 ; i += 2 ) {
    console.log(i);
}

for (let i = y ; i < 100 ; i += 2 ) {
    console.log(i);
}

// sourced code from stackoverflow & edited... does this work? it seemed excessive to list all numbers from 1-100...
// https://stackoverflow.com/questions/66837818/how-to-print-odd-and-even-numbers-in-javascript#:~:text=const%20isOdd%20%3D%20(n)%20%3D,Even%20numbers%20are%20%24%7B%20num.


// 2) 