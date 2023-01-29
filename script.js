/* 1.How do we assign a value to a variable?
We use the = symbol known as the assignment operator.

Which line(s) is/are valid?
const b = 1;
b = b + 5; 8 */

//section2

 const a = 42.78
const b = 1.1
const c = -2
const d = .5
const e = 16

Math.floor(a)
//42
Math.ceil(b)
//2
Math.abs(b-a)
//console.log(Math.abs(b, a));
//1.1
Math.max(a, b, c, d, e)
//console.log(Math.max(a,b,c,d,e))
//42.78
Math.min(a,b,c,d,e)
//console.log(Math.min(a,b,c,d,e))
//-2
Math.sqrt(e)
//console.log(Math.sqrt(e))
//4

//console.log(Math.floor(Math.random(1) * 6))
//3

//Section3

let firstVariable = "Hello World"
firstVariable = 123
let secondVariable 
secondVariable = firstVariable
secondVariable = "It is ok"
//console.log(firstVariable)
//123

let yourName = "Maria"
let hello = "Hello, my name is "
hello += yourName
//console.log(hello)

//section6
let age = 15
if (age >= 16) {
    console.log("Here are the keys")
}
else if (age < 16) {
    console.log("Sorry, you're too young.");
} 

//section7

for (let i = 0; i <= 10; i++ ) {
    console.log(i);
} 

//or 
let i = 0;
while(i <= 10) {
    console.log(i);
    i++
}

for ( i = 0; i <=500; i+=50) {
    console.log(i)
}


//section8
for (i = 0; i<=100; i+=3 ){
    if(i  % 3 == 0)
    console.log(`${i} is an odd number`)
}

//



