//How do we assign a value to a variable?
//single equal sign value is on the right and variable is on the left
//let a = 0; valid
//const b = 1; valid
//9 = a;  not valid
//b = b + 5; valid b= 1+5 6
//How do we change the value of a variable?
//name of the variable = value
//How do we assign an existing variable to a new variable?
//new variable = existing variable

const a = 42.78
const b = 1.1
const c = -2
const d = .5
const e = 16

Math.floor(a)
Math.ceil(b)
Math.abs(b, a)
Math.max(a, b, c, d, e)
Math.min(a, b, c, d, e)
Math.sqrt(e)
Math.pow(e, d)
Math.floor(Math.random()*6)+1

let firstVariable
firstVariable = "Hello World"
firstVariable = 6
let secondVariable = firstVariable
secondVariable = "Hi"
//the number that I assigned which is 6

let yourName = "Alpagu"
console.log("Hello, my name is " + yourName)

// const a = 6;
// const b = 100;
// const c = -5;
// const d = 3000;
// const e = 'Jelly Bean';

// a < b
// c < d
// 'Peanut' == 'Peanut';
// a < b != c;
// a == a != d;
// e == 'Jelly Bean';
// 'e' != 'Eh'
//5
let animal = "cow"
if(animal=="cow"){
    console.log("mooooo")
}
else{
    console.log("Hey! You're not a cow.")
}

//6
let prsnAge = 13
if(prsnAge >= 16){
    console.log("Here are the keys")
}
else{
    console.log("Sorry, you're too young.")
}

//7
for(let i =0; i<11; i++){
    console.log(i)
}
for(let i=500; i>=50; i--){
    console.log(i)
}

//8
for(let i=1; i<=100; i++){
    if(i%2 != 0){
        console.log(`${i} is an odd number`)
    }
}

//9
for(let i=0; i<=100; i++){
    if(i % 5 == 0){
        console.log(`I found a ${i}. High five!`) // Included 0 too
    }
    if(i % 3 == 0){
        console.log(`I found a ${i}. Three is a crowd`)
    }
}

//10
let bank1 = 0
let bank2 = 0
for(let i =1; i<=10; i++){
    bank1 += i
}
console.log(bank1)
for(let i =1; i<=100; i++){
    bank2 += i*2
}
console.log(bank2)

//11
for(i=1; i<=100; i++){
    if(i % 3 == 0 && i % 5 == 0){
        console.log("FizzBuzz")
    }
    else if(i % 3 == 0){
        console.log("Fizz")
    }
    else if(i % 5 == 0){
        console.log("Buzz")
    }
    else{
        console.log(i)
    }
}

//12
let num1 = 0
let num2 = 1
let hold
for (i=0; i<=10; i++){
    console.log(num1, num2)
    hold = num2
    num2 = num1 + num2
    num1 = hold
}

//13
const boardSize = 20

width = Math.floor(boardSize/2)
for(i=0; i<=boardSize; i++){
    let pattern = "# "
    if(i % 2 != 0){
        console.log(pattern.repeat(width))
    }
    else{
        console.log(" "+pattern.repeat(width))
    }
}
console.log(width)