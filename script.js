//Homework is sections 2, 3, 6, 7 & 8

//Section 2
  const a = 42.78
  const b = 1.1
  const c = -2
  const d = .5
  const e = 16

  console.log(Math.floor(a))
  console.log(Math.ceil(b))
  console.log(Math.abs(b-a))
  console.log(Math.max(a,b,c,d,e))
  console.log(Math.min(a,b,c,d,e))
  console.log(Math.sqrt(e))
  console.log(Math.pow(e,d))
  console.log(Math.floor(Math.random()*7))

//section 3

  //Strings - Switcharoo
    let firstVariable = "Hello World"
    firstVariable = 42
    let secondVariable = firstVariable
    secondVariable + ""
    console.log(firstVariable)
    //firstVariable's value is 42

  //Strings - Combine it
    let yourName = "Austin Holland"
    console.log(`Hello, my name is ${yourName}`)

//section 6
  let age = 31

  if (age >= 16) {
      console.log("Here are the Keys")
  } else if (age>0) {
      console.log("Sorry, you're too young.")
  } else {
      console.log("Please enter a valid number")
  }

//section 7
  //1.  
    for (let i=0; i<11; i++) {
      console.log(i)
    }
  
  //2.
    for (let i=500; i>49; i--) {
      console.log(i)
    }

//section 8
  //1.
    for (let i=1; i<100; i+= 2) {
      console.log(i)
    }
  
  //2.
    for (let i=1; i<100; i+= 2) {
      console.log(`${i} is an odd number`)
    }

