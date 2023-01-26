const a = 42.78
const b = 1.1
const c = -2
const d = .5
const e = 16 
const rounded = Math.floor(a)
console.log(rounded)

 
 const rounded1 = Math.ceil(b)
 console.log(rounded1)

 function difference(b, a) {
return Math.abs(a-b)
  }

 console.log(difference(1.1, 42.78));

if (a > b && a > c && a > d && a > e) {
    console.log(a)
} else if (b > a && b > c && b > d && b > e) {
    console.log(b)
} else if (c > a && c > b && c > d && c > e) {
    console.log(c)
} else if (d > a && d > b && d > c && d > e) {
    console.log(d)
} else {
    console.log(f)
}

if (a < b && a < c && a < d && a < e) {
    console.log(a)
} else if (b < a && b < c && b < d && b < e) {
    console.log(b)
} else if (c < a && c < b && c < d && c < e) {
    console.log(c)
} else if (d < a && d < b && d < c && d < e) {
    console.log(d)
} else {
    console.log(f)
}

let result = Math.sqrt(e)
console.log(result)

let result1 =  (e ** d)
console.log(result1)

let result2 = Math.random()
console.log(result2)
// Section 3
let  firstVariable = 'Hello World'
firstVariable = 35
let secondvariable = firstVariable
secondVariable = "My value has changed"
console.log(firstVariable)

let yourName = "Stoyan Koprinarov"
console.log(`Hello, my name is ${yourName}`)

//Section 6

let age 

if( age >= 16) {
    console.log(`Here are the keys`)
} else {
    console.log(`Sorry you're too young`)
}

//Section 7

for ( let i = 0; i < 11; i++) {
    console.log(i)
}

for (let i = 500; i > 49; i--) {
    console.log(i)
}
//Section 8
for (let i = 1; i < 100; i += 2 ) {
    console.log(i) 
  }

  for (let i = 1; i < 100; i += 2 ) {
    console.log(`${i} is an odd number`) 
  }