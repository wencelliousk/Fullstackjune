//this are structures that alow us to implement logic to code 
//with control strucutres we make step by step logic on what can be done and what the ;atter is 
/* we have {
    if statements  
    if ... else statements
    nested if ... else statemtns 
    switch statements


} 

    //if statement>>this only executes when a condition is set to truth 

    if its raining carry an umbrella 
    if user is signed up >>log in user 
//it does not have the false value component 

let weather="Sunny"

if(weather=="Rainy"){
    console.log("carry an umbrella");
    
}

//if ... else {
/* this is an improvemnt of the if statemtnt to handle the false part of a statment or give 
a default value to usr once no satisfaction is reached     
} 

if(weather="Rainy"){
    console.log("carry an umbrella");
    
}
else{
    console.log("check out the weather app ");
    
}


let age=

if (age>=19 && age<=80){
    console.log("User is valid for a Driver's License");
    
}
else{
    console.log("User is Not valid for A Driver's License");
    
}

//nested if else >>this type of if statement is used to control logic of more ]than one 
//paramenter >>multiple possiblities
///built a grading system 


let grade="70.67"

if(grade>=90 && grade<=100){
    console.log("Student has First class Honors ,Upper Division");
    
}
else if (grade>=80 && grade<=89){
    console.log("Student has First class Honors ,Lower Division");

}
else if (grade>=70 && grade<=79){
    console.log("Student has Second class Honors ,Upper Division");

}
else if (grade>=60 && grade<=69){
    console.log("Student has Second class Honors ,Lower Division");

}

else if (grade>=50 && grade<=59){
    console.log("Student has a Pass");

}
//defau;t vslue for anythong below 50 >>failure shou;l;d retake 

else{
    console.log("Student Invalid Marks or Failed ,they should visit the department ");
    
}  */

//Switch Statements
//these are used to give various cases in a scenario
//it includes the break statement which alllows you to break out the switch loop whwn a condition has been met
//if no break statement, the execution continues until default value.


let caseDay= "Saturday";
  
switch(caseDay) {
    case "Monday"
    console.log("today is Monday");
     break;
       case "Tuesday"
     console.log("today is Tuesday");
     break;
       case "Wednesday"
     console.log("today is Wednesday");
     break;
       case "Thursday"
     console.log("today is Thursday");
       break;
       case "Friday"
     console.log("today is Friday");
    
      default:  //handles th false part of a switch cas just like the else part in an if or nestedif statement
     console.log("its a Weekend");
     
}

/* other jumping conditional keywords such as continue which allows a function to continue execution
of a foresaid logical loop
continue and break are used for a conditional programmming */


//loops
//>>tthis are mechanism that is used to traverse a data set until a certain condition has been met


/*loops has three things in common {
Loop initialization (point of origin)>>let, const, var
}



*/
//while loop>> it evaluate and executes a function or task when the condition is met

let number=2 //initialization


while(number<30) {
    console.log(number);
    //iteration>> when you misss out the iteration you risk filling the memeory beacuse it executes upto infinity
    number++
}

//do ..while loop >> similar to the whilw loop but
// this always executes a block of code at least once before checking for condition

let numberDo=3;//initialization
do{
    console.log(numberDo);
    numberDo++//iteration
    
}
while(numberDo<20)//logic

//for .. of loop>> this loop is used to loop through arrrays iterating on each other
//its an improvement of the for loop without the cumbersome syntax

let fruits= ["pineapple","melon","banana","white-supporter"]

for(let i=0; i<fruits.length;i++){
   console.log(fruits[i]);
}

for( let fruit of fruits){
    console.log(fruit);
}


/*
JavaScript FOR LOOPS - Study Guide
What is a For Loop?
A for loop is used to repeat a block of code a specific number of times.
Use a for loop when you know how many times the code should run.
Basic Syntax
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
Parts of a For Loop
for (let i = 1; i <= 5; i++)
1. Initialization
let i = 1;
Runs once at the beginning.
Creates the loop variable.
2. Condition
i <= 5
Checked before every loop.
If true, the loop continues.
If false, the loop stops.
3. Increment
i++
Adds 1 to i after each loop.
Example 1: Count from 1 to 5
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
Output
1
2
3
4
5
Example 2: Count from 1 to 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
Output
1
2
3
4
5
6
7
8
9
10
Example 3: Countdown from 10 to 1
for (let i = 10; i >= 1; i--) {
    console.log(i);
}
Output
10
9
8
7
6
5
4
3
2
1
Example 4: Print Even Numbers (1-20)
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
Output
2
4
6
8
10
12
14
16
18
20
Example 5: Print Odd Numbers (1-20)
for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}
Output
1
3
5
7
9
11
13
15
17
19
Example 6: Even Numbers Using Step Size
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}
Output
2
4
6
8
10
12
14
16
18
20
Example 7: Sum of Numbers 1-10
let total = 0;

for (let i = 1; i <= 10; i++) {
    total += i;
}

console.log(total);
Output
55
Example 8: Loop Through an Array
let fruits = ["mango", "banana", "apple"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
Output
mango
banana
apple
Example 9: Loop Through Students
let students = ["Peter", "Neema", "Liz"];

for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
}
Output
Peter
Neema
Liz
Common Mistakes
Wrong
for (let i = 1; i <= 10; 1++)
Correct
for (let i = 1; i <= 10; i++)
Wrong
if (% 2 == 0)
Correct
if (i % 2 === 0)
Practice Questions
Print numbers from 1 to 20.
Print numbers from 20 to 1.
Print even numbers from 1 to 50.
Print odd numbers from 1 to 25.
Find the sum of numbers from 1 to 100.
Create an array of 5 fruits and print each fruit using a for loop.
Print the multiplication table of 5.
Quick Quiz
Q1. What are the three parts of a for loop?
Answer:
Initialization
Condition
Increment/Decrement
Q2. What does i++ do?
Answer: Adds 1 to i.
Q3. What does i-- do?
Answer: Subtracts 1 from i.
Q4. How do you check if a number is even?
i % 2 === 0
Q5. How do you check if a number is odd?
i % 2 !== 0
*/