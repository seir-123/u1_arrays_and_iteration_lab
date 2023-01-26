//Section 2-- Let's get Mathy!

// const a = 42.78
// const b = 1.1
// const c = -2
// const d = .5
// const e = 16

// console.log(Math.floor(a))

// console.log(Math.ceil(b))

// console.log(Math.abs(b-a))

// console.log(Math.max(a, b, c, d, e))

// console.log(Math.min(a, b, c, d, e))

// console.log(Math.sqrt(e))

// console.log(Math.pow(e,d))

// console.log(Math.floor(Math.random() * 6))

console.log("____________________________________________________________________________")
//Section 3 -- Strings

let firstVariable = "Hello World"
firstVariable = 10
let secondVariable = firstVariable
secondVariable = "stringy"
console.log(firstVariable)

let yourName = "Ernest Williams"
console.log(`Hello, my name is ${yourName}`)


console.log("____________________________________________________________________________")
//Section 6 -- Driver's Ed

let age = 17
if(age >= 16){
    console.log('Here are the keys')
}else {
    console.log("Sorry, you're too young.")
}




console.log("____________________________________________________________________________")
//Section 7 -- Just Loop It
for(let i = 0; i <= 10; i++){
    console.log(i)
}

for(let i = 500; i >= 50; i--){
    console.log(i)
}

console.log("____________________________________________________________________________")
//Section 8 -- Let's get odd


for(let i = 1; i <= 100; i++){
    if(i % 2 == 1){
        console.log(`${i} is an odd number`)
    }
}

console.log("____________________________________________________________________________")

// The following is extra work
// Section 4. Booleans
//please uncomment and comment out conflicting variable assignments above to see results
// const a = 6;
// const b = 100;
// const c = -5;
// const d = 3000;
// const e = 'Jelly Bean';

// console.log(a < b)
// console.log(c < d)
// console.log('Peanut' === 'Peanut')
// console.log(a < b && b > c)
// console.log(a === a && a < d)
// console.log(e === 'Jelly Bean')
// console.log(48 == '48')
// console.log('e' !== 'Eh')


console.log("____________________________________________________________________________")

//Section 5 -- The Farm
// let animal = "chicken"
// if(animal == "cow"){
//     console.log('moooooo')
// }else {
//     console.log("Hey! You're not a cow.")
// }

console.log("____________________________________________________________________________")

//Section 9 Give me Five
for(let i = 1; i <=100; i++){
    if(i % 5 == 0){
        console.log(`${i} I found a ${i}. High five!`)
    }if (i % 3 == 0){
        console.log(`${i} I found a ${i}. Three is a crowd`)
    }else{
        console.log(i)
    }
}
console.log("____________________________________________________________________________")
//Section 10 Savings account
let bankTotal = 0
for(let bankAccount = 1; bankAccount <= 100; bankAccount++){
    
    bankTotal += bankAccount
    
}
console.log(bankTotal * 2)


console.log("____________________________________________________________________________")
//FissBuzz
for(let i = 1; i <=100; i++){
    if(i % 5 == 0 && i % 3 == 0){
        console.log("FizzBuzz")
    }else if(i % 5 == 0){
        console.log("Buzz")
    }else if (i % 3 == 0){
        console.log("Fizz")
    }else{
        console.log(i)
    }
}


console.log("____________________________________________________________________________")

//Fibonacci

let fibA = 1
let fibB = 2
let fibC = 0
let i = 0
let total = 0
console.log(fibA)
while (fibC <= 4000000) {
    fibC = fibA + fibB
    console.log(`${fibB} is fibB`)
    console.log(`${fibC} is fibC`)
    
if (fibB % 2 === 0){
    total += fibB
}if (fibC % 2 === 0){
    total += fibC
    
}
fibA = fibC
    fibC = fibA + fibB
    fibB = fibC
    i++
}

console.log(`${total} is the total`)