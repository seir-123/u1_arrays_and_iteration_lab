//Section 2:
const a = 42.78
const b = 1.1
const c = -2
const d = .5
const e = 16

Math.floor(a) //round a down
Math.ceil(b) //round b up
Math.abs(b-a) //absolute value of b-a
Math.max(a, b, c, d, e) //find largest number in array of variables
Math.min(a, b, c, d, e) //find minimum number in array of variables
Math.sqrt(e) //find the square root of e 
Math.pow(e,d) //find e to the power of d
Math.floor(Math.random()*6) + 1 //random number generator between 1-6

//Section 3:
let firstVariable
firstVariable = "Hello World"
firstVariable = 5
let secondVariable = firstVariable
secondVariable = secondVariable.toString()
//Answer firstVariable will equal 5 not "5"

let yourName = 'Michael'
console.log(`Hello, my name is ${yourName}`)

//Section 6:
let yourAge = 19
(yourAge>=16) ? console.log("Here are the keys"): console.log("Sorry, you're too young")

//Section 7:
for(i = 0; i < 11; i++){
  console.log(i)
}

for(i = 500; i >= 50; i--){
  console.log(i)
}

//Section 8:
for(i = 1; 1 < 101; i++){
  if(i%2==1){
    console.log(`${i} is an odd number.`)
  }
}

//Section 9:
for(i = 0; 1 < 101; i++){
  if(i%5==0){
    console.log(`I found a ${i}. High five!`)
  }else if(i%3==0){
    console.log(`I found a ${i}. Three is a crowd.`)
  }
}

//Section 10:
let bankAccount = 0
for(i = 1; i < 11; i++){
  bankAccount+=i
}
console.log(bankAccount) //answer = 55



let savingsAccount = 0
for(i = 1; i < 101; i++){
  savingsAccount+=i
}
savingsAccount = savingsAccount * 2
console.log(savingsAccount)

//Section 11:

for(i = 1; i < 101; i++){
  if(i%3==0){
    console.log("Fizz")
  }else if(i%5==0){
    console.log("Buzz")
  }else if(i%3==0 && i%5==0){
    console.log("FizzBuzz")
  }else{
    console.log(i)
  }
}


