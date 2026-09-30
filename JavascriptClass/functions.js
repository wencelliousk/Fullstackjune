//A function is simply a set of instructions that performs a task.
/*
Real life example:

Imagine a coffee machine.

You press a button → it follows instructions → coffee comes out.

The coffee machine is like a function.
*/
Example

function greet() {
    console.log("Hello");
}


//Nothing happens yet.

//To use it:

greet();

//Output:

Hello

//Think:
//>Creating a function = writing instructions
//>Calling a function = telling it to start working

//>>> Functions as Values<<<<
/*A function is treated like data in JavaScript, 
which means it can be stored in a variable, passed to another function,
or returned from a function.*/

Examples:

let age = 18;
let name = "Ray";


function greet() {
    console.log("Hello");
}

let myFunction = greet;

//Think of it like this:

let age = 18;//stores a number.

let myFunction = greet;//stores a function.

//A function can be moved around just like data.

//This is what it  means by "Functions as Values." 

//>>>Functions as Arguments<<

//Normally we pass data into functions.

//Example:
function welcome(name) {
    console.log(name);
}

welcome("Ray");

Here:
"Ray"//is an argument.

//But JavaScript allows us to pass a function as an argument.

//Example:

function greet() {
    console.log("Hello");
}

function runTask(task) {  
    task();
}

runTask(greet); //`greet` is passed into `runTask`
                  //`task` receives it
                  // `task()` runs it


//Output:

Hello

//>>>>>>Callbacks<<<<<

//A Callback function passed into another function so it can be run later. 

// Example:
function sayHello() {
    console.log("Hello");
}

function runTask(callback) {
    callback();
}

runTask(sayHello);


sayHello//is the callback.

Why? //Because it was passed into another function and later executed.


//Callback Flow

function sayHello() {
    console.log("Hello");
}

function start(callback) {
    console.log("Starting...");
    callback();
}

start(sayHello); ///`start()` begins
                  //Prints "Starting..."
                  //Executes callback
                  //`sayHello()` runs

Output:
Starting...
Hello

// Easy Mental Model

//Imagine your mom says:

 "When dinner is ready, call me."

//The instruction:

"call me"//is the callback.
//She doesn't want it now.

//She wants it later.

//That's exactly how callbacks work.

//>>>Synchronous Callback (Runs Now)<<<<
function greet() {
    console.log("Hello");
}

function run(callback) {
    callback();
}

run(greet);

Output:

Hello


//The callback runs immediately.

//this a called synchronous callback. 


//>>Asynchronous Callback (Runs Later)<<

function greet() {
    console.log("Hello");
}

setTimeout(greet, 3000);

//Output after 3 seconds:

Hello


//The callback doesn't run now.


//this an called asynchronous callback. 













/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Beginner Summary

//Function

//A set of instructions.

function greet() {
    console.log("Hello");
}
// Function as Value

//A function can be stored in a variable.

//let myFunction = greet;

//Function as Argument

///A function can be passed into another function.

runTask(greet);


///Callback

//A function passed into another function and executed later
runTask(greet)

//### Synchronous Callback

//Runs immediately.

//### Asynchronous Callback

////Runs later.
