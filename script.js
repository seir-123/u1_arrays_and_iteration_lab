//SECTION 1
    //1. with an = sign (let a = 0, const b=1, b = b+5 are all valid)
    //2. reassign it using an = sign / must be a 'let' variable; b = b+1
    //3. if a exists already, we can create a new variable and set it equal to be. b=a;

// //SECTION 2
// const a = 42.78
// const b = 1.1
// const c = -2
// const d = .5
// const e = 16
    // let aDown = Math.floor(a);
    // let bUp = Math.ceil(b);
    // let cAbsVal = Math.abs(b-a);
    // let max= Math.max(a,b,c,d,e);
    // let min =Math.min(a,b,c,d,e);
    // let sqrRt= Math.sqrt(e);
    // let power = Math.pow(e,d);
    // let die = Math.floor(Math.random()*6);
// console.log (aDown, bUp, cAbsVal, max, min, sqrRt, power, die);

// //SECTION 3
// let firstVariable;
// firstVariable = "Hello World";
// firstVariable = 10;
// let secondVariable = firstVariable;
// secondVariable = secondVariable.toString();
// console.log(firstVariable);
//firstVariable is 10

// //COMBINE IT
let yourName = "Yael";
console.log (`Hello, my name is ${yourName}`);


//SECTION 6
let age = 14;
(age >=16) ? console.log("Here are the keys.") : console.log("Sorry you're too young.")


//SECTION 7
for (let i =0; i <11; i++){
    console.log(i);
}

for (let i=500; i >= 50; i--){
    console.log(i)
}

//SECTION 8
for (let i=1; i < 101 ; i++){
    if (i%2 === 1){
        console.log(`${i} is an odd number`);
    }
}