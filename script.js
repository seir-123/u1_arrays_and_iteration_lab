// Section 1. Conceptual Questions
    // Understanding: 5
    // 1) How do we assign a value to a variable?
        // we use let or const.
        // Which line(s) is/are valid?
            // let a = 0;      yes
            // const b = 1;    yes
            // 9 = a;          no
            // b = b + 5;      yes
    // 2) How do we change the value of a variable?
        // if i is the variable, we use i = variable.
    // 3) How do we assign an existing variable to a new variable?
        // if i is the existing variable and o is the new variable, we would use o = i.


// Section 2. Let's get Mathy!
    // const a = 42.78
    // const b = 1.1
    // const c = -2
    // const d = .5
    // const e = 16
    // Round a down
        Math.floor(a);
    // Round b up
        Math.ceil(b);
    // Find the absolute value of b - a
        Math.abs(b - a);
    // Find the largest number of a, b, c, d, e
        Math.max(a,b,c,d,e);
    // Find the smallest number of a, b, c, d, e
        Math.min(a,b,c,d,e);
    // Find the square root of e
        Math.sqrt(e);
    // Raise e to the power of d
        Math.pow(e,d);
    // Make a digital die 0 generate a random number between 1 - 6
        console.log(Math.round(Math.random()*6));
       

// Section 3. Strings
    // Strings - Switcharoo
        // 1) Create a variable called firstVariable.
        // 2) Assign it the value of a string: "Hello World"
        // 3) On the next line, change the value of this variable to a number.
        // 4) Store the value of firstVariable into a new variable called secondVariable
        // 5) On the next line, change the value of secondVariable to a string.
        // 6) What is the value of firstVariable?
            const firstVariable = "Hello World";
            let secondVariable = parseInt(firstVariable);
            secondVariable = secondVariable.toString();
            //firstVariable is still the same: "Hello World"
    // Strings - Combine it
        // 1) Create a variable called yourName and set it equal to your name as a string.
            const yourName = "Meixing Chueng";
            console.log(`Hello, my name is ${yourName}.`);
        // 9) Write an expression that takes the string "Hello, my name is " and the variable yourName so that it prints a new string with them concatenated


// Section 4. Booleans
    // Using the provided variable definitions, replace the blanks with a mathematical or boolean operator that evaluates the expression to true.
        // const a = 6;
        // const b = 100;
        // const c = -5;
        // const d = 3000;
        // const e = 'Jelly Bean';
        a < b;
        c < d;
        'Peanut' == 'Peanut';
        a < b > c;
        a == a < d;
        e == 'Jelly Bean';
        48 == '48';
        'e' !== 'Eh';


// Section 5. The Farm
    // 1) Write code that will print out "mooooo" if the variable animal is equal to cow.
    // 2) Change your code so that if the variable animal is anything other than a cow, your should print out "Hey! You're not a cow."
        const animal = "cow";
        switch (animal){
            case "cow":
                console.log("mooooo");
                break;
            default:
                console.log("Hey! You're not a cow.");
        }


// Section 6. Driver's Ed
    // 1) Write a variable that will hold a person's age.
    // 2) Write code that will print out "Here are the keys", if the age is 16 years or older.
    // 3) Change your code so that if the age is younger than 16, a message will print "Sorry, you're too young."
        const age = 15;
        if (age >= 16){
            console.log("Here are the keys.");
        }
        else{
            console.log("Sorry, you're too young");
        }


// Section 7. Just Loop It
    // 1) Write code that will print out all the numbers in the range 0 - 10.
        for (i = 0; i <= 10; i++){
            console.log(i);
        }
    // 2) Write code that will print out all the numbers in the range 500 - 50.   
        for (i = 50; i <= 500; i++){
            console.log(i);
        }


// Section 8. Let's get odd
    // 1) Print out the odd numbers that are within the range of 1 - 100.
    // 2) Adjust your code to add a message next to the odd number that says: "is an odd number".
    // Example Output:
    // 3 is an odd number
    // 5 is an odd number
    // 7 is an odd number
        for (i = 1; i <= 100; i++){
            if (i % 2)
            console.log(`${i} is an odd number`);
        }
