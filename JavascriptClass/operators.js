//# Operators>>

Operators are symbols that perform operations on variables and values. JavaScript has several categories of operators:

//## Arithmetic Operators
//These perform basic mathematical operations:
let a = 10;
let b = 3;

console.log(a + b);      // Output: 13 (Addition)
console.log(a - b);      // Output: 7 (Subtraction)
console.log(a * b);      // Output: 30 (Multiplication)
console.log(a / b);      // Output: 3.333... (Division)
console.log(a % b);      // Output: 1 (Modulus/Remainder)

let x = 5;
x++;
console.log(x);          // Output: 6 (Increment)

x--;
console.log(x);          // Output: 5 (Decrement)

//Relational Operators
//These compare two values and return true or false:

let age = 15;

console.log(age == 15);   // Output: true (Equal to)
console.log(age != 15);   // Output: false (Not equal to)
console.log(age < 18);    // Output: true (Less than)
console.log(age > 18);    // Output: false (Greater than)
console.log(age <= 15);   // Output: true (Less than or equal to)
console.log(age >= 18);   // Output: false (Greater than or equal to)
>>//Logical Operators
//These combine boolean expressions:

let age = 16;
let hasLicense = false;

// AND (&&) - Both conditions must be true
console.log(age >= 18 && hasLicense);     // Output: false

// OR (||) - At least one condition must be true
console.log(age < 18 || hasLicense);      // Output: true

// NOT (!) - Reverses the boolean value
console.log(!hasLicense);                 // Output: true

// Assignment Operators
//These assign values to variables:

let money = 100;

money = 50;               // Simple assignment
console.log(money);       // Output: 50

money += 10;              // Add and assign
console.log(money);       // Output: 60

money -= 5;               // Subtract and assign
console.log(money);       // Output: 55

money *= 2;               // Multiply and assign
console.log(money);       // Output: 110

money /= 2;               // Divide and assign
console.log(money);       // Output: 55


//Ternary Operator
//The conditional (ternary) operator is a shorthand for an if-else statement:

let age = 20;

let result = (age >= 18) ? "Adult" : "Child";
console.log(result);      // Output: Adult

let age2 = 10;
let result2 = (age2 >= 18) ? "Adult" : "Child";
console.log(result2);     // Output: Child


//Operator Precedence
//Operators are evaluated in a specific order. Multiplication and division are performed before addition and subtraction. Parentheses can override this:

console.log(2 + 3 * 4);   // Output: 14 (multiplication first)
console.log((2 + 3) * 4); // Output: 20 (addition first)

/*//## Example

let score = 0;
let lives = 3;

// Player scores
score += 10;
console.log(score);       // Output: 10

// Player loses a life
lives--;
console.log(lives);       // Output: 2

// Check game status
console.log(score > 50 && lives > 0);     // Output: false
console.log(lives == 0);                  // Output: false



//## Arithmetic Operators

let a = 10;
let b = 3;

console.log(a + b);      // Output: 13
console.log(a - b);      // Output: 7
console.log(a * b);      // Output: 30
console.log(a / b);      // Output: 3.333...
console.log(a % b);      // Output: 1

let x = 5;
x++;
console.log(x);          // Output: 6

x--;
console.log(x);          // Output: 5

//## Relational Operators

let age = 15;

console.log(age == 15);   // Output: true
console.log(age != 15);   // Output: false
console.log(age < 18);    // Output: true
console.log(age > 18);    // Output: false
console.log(age <= 15);   // Output: true
console.log(age >= 18);   // Output: false

//## Logical Operators

let age2 = 16;
let hasLicense = false;

console.log(age2 >= 18 && hasLicense);     // Output: false
console.log(age2 < 18 || hasLicense);      // Output: true
console.log(!hasLicense);                  // Output: true

//## Assignment Operators

let money = 100;

money = 50;
console.log(money);       // Output: 50

money += 10;
console.log(money);       // Output: 60

money -= 5;
console.log(money);       // Output: 55

money *= 2;
console.log(money);       // Output: 110

money /= 2;
console.log(money);       // Output: 55

//## Ternary Operator

let age3 = 20;

let result = (age3 >= 18) ? "Adult" : "Child";
console.log(result);      // Output: Adult

let age4 = 10;
let result2 = (age4 >= 18) ? "Adult" : "Child";
console.log(result2);     // Output: Child

//## Operator Precedence

console.log(2 + 3 * 4);   // Output: 14
console.log((2 + 3) * 4); // Output: 20

//## Example

let score = 0;
let lives = 3;

score += 10;
console.log(score);       // Output: 10

lives--;
console.log(lives);       // Output: 2

console.log(score > 50 && lives > 0);     // Output: false
console.log(lives == 0);                  // Output: false
