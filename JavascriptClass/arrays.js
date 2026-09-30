/*//ARRAYS>>are used to store multiple values in one variable.Javascript arrays are ordered collectios accessed using indexes

//>>creating arranys

let fruits = ["apple","banana","orange"];
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

//>>Changing an array item


let fruits=["apple","banana","orange"];
fruits[1]="mango";
console.log(fruits);
//results
//apple mango orange

//length
let fruits=["apple","banana","orange"];

console.log(fruits.length);
//3


//>>Adding Items
//push()adds to end

let fruits=["apple","banana"];

fruits.push(orange);
console.log(fruits);

//apple , banana , orange
//unshift>>adding at the beginning:
let fruits=["apple","banana"];

fruits.unshift(mango);
console.log(fruits);

//>>Removing items
//pop() remove an elements at the last on an array

let fruits= ["mango","ovacado","orange","banana"]
fruits.pop();
console.log(fruits);
///mango,ovacado,banana
//shift()>>>remove the first
let fruits= ["mango","ovacado","orange","banana"]
fruits.shift();
console.log(fruits);


//MDN identifies push(),pop(), lenght(),shift() and split() among the fundamental arrays in operations.

//>>THE MOST IMPORTANT ARRAYS METHODS
//>>forEach()

//Runs code for every Item:
let fruits=["apple","banana","orange"];
fruits.forEach(function(fruits) {
    console.log(fruits);
    
});


//map()


//>>>creates a new arrays by transforming each item:

let numbers=[1,2,3]
let doubled= numbers.map(function(number) 
{
    return number * 2;

});
console.log(doubled);

*/
/*

//push()
let fruits =["apple","banana"]

fruits.push("mango");
console.log(fruits);
//add the item at the end


//pop()
//remove the last item
let fruits=["apple","banana","mango"]
fruits.pop();
console.log(fruits);


//unshift()
//add the item at the beginning
let fruits=["banana","mango","orange"]
fruits.unshift("whitesupporter");
//so shift() will be used to remove the first item in this case banana

//includes()
//check weather the item exists in an array
let fruits=["banana","mango","orange"]
console.log(fruits.includes("orange"));


//join()
//convert arrays into a string
let fruits=["banana","mango","orange"]
let results= fruits.join("");
console.log(results);

*/
/*
JavaScript Arrays — Beginner Notes

An array stores multiple values in one variable.

let fruits = ["apple", "banana", "orange"];

console.log(fruits);

Result:

["apple", "banana", "orange"]


---

1. Creating an Array

let names = ["Peter", "John", "Mary"];

console.log(names);

Result:

["Peter", "John", "Mary"]


---

2. Array Index

Array positions start at 0.

let fruits = ["apple", "banana", "orange"];

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

Result:

apple
banana
orange


---

3. Changing an Item

let fruits = ["apple", "banana", "orange"];

fruits[1] = "mango";

console.log(fruits);

Result:

["apple", "mango", "orange"]

*/

//>>4. length

//length tells you how many items are in an array.

let fruits = ["apple", "banana", "orange"];

console.log(fruits.length);

//Result:

//3


//>>5. push()

//Adds an item to the end.

let fruits = ["apple", "banana"];

fruits.push("orange");

console.log(fruits);

Result:

["apple", "banana", "orange"]



//6. pop()

Removes the last item.

let fruits = ["apple", "banana", "orange"];

fruits.pop();

console.log(fruits);

Result:

["apple", "banana"]


7. unshift()

Adds an item to the beginning.

let fruits = ["banana", "orange"];

fruits.unshift("apple");

console.log(fruits);

Result:

["apple", "banana", "orange"]


---

8. shift()

Removes the first item.

let fruits = ["apple", "banana", "orange"];

fruits.shift();

console.log(fruits);

Result:

["banana", "orange"]


---

9. includes()

Checks whether an item exists.

let fruits = ["apple", "banana", "orange"];

console.log(fruits.includes("banana"));
console.log(fruits.includes("mango"));

Result:

true
false


---

10. indexOf()

Finds the position of an item.

let fruits = ["apple", "banana", "orange"];

console.log(fruits.indexOf("orange"));

Result:

If it doesn't exist:

console.log(fruits.indexOf("mango"));

Result:

-1


---

11. join()

Converts an array into a string.

let fruits = ["apple", "banana", "orange"];

let result = fruits.join(", ");

console.log(result);

Result:

apple, banana, orange


---

12. slice()

Copies part of an array without changing the original.

let fruits = ["apple", "banana", "orange", "mango"];

let result = fruits.slice(1, 3);

console.log(result);

Result:

["banana", "orange"]


---

13. splice()

Can remove, add, or replace items.

let fruits = ["apple", "banana", "orange"];

fruits.splice(1, 1);

console.log(fruits);

Result:

["apple", "orange"]

splice(1, 1) means:

Start at index 1

Remove 1 item



---

14. forEach()

Runs a function for each item.

let fruits = ["apple", "banana", "orange"];

fruits.forEach(fruit => {
console.log(fruit);
});

Result:

apple
banana
orange


---

15. map()

map() creates a new array by transforming every item.

let numbers = [1, 2, 3];

let result = numbers.map(number => number * 2);

console.log(result);

Result:

[2, 4, 6]

map() with objects

let persons = [
{ name: "Peter", score: 99 },
{ name: "John", score: 85 },
{ name: "Mary", score: 92 }
];

let result = persons.map(person => person.name);

console.log(result);

Result:

["Peter", "John", "Mary"]

Then combine them with join():

let result = persons
.map(person => person.name)
.join(", ");

console.log(result);

Result:

Peter, John, Mary

Remember

map() → transforms each item
join() → combines the items


---

16. filter()

Creates a new array containing items that meet a condition.

let numbers = [10, 20, 30, 40, 50];

let result = numbers.filter(number => number > 25);

console.log(result);

Result:

[30, 40, 50]


---

17. find()

Returns the first item that matches a condition.

let numbers = [5, 10, 15, 20];

let result = numbers.find(number => number > 10);

console.log(result);

Result:

15


---

18. findIndex()

Returns the index of the first matching item.

let numbers = [5, 10, 15, 20];

let result = numbers.findIndex(number => number > 10);

console.log(result);

Result:

2


---

19. some()

Checks whether at least one item meets a condition.

let numbers = [1, 3, 5, 8];

Jeremy:
let result = numbers.some(number => number % 2 === 0);

console.log(result);

Result:

true

Because 8 is even.


---

20. every()

Checks whether all items meet a condition.

let numbers = [2, 4, 6, 8];

let result = numbers.every(number => number % 2 === 0);

console.log(result);

Result:

true


---

21. sort()

Sorts an array.

let fruits = ["orange", "apple", "banana"];

fruits.sort();

console.log(fruits);

Result:

["apple", "banana", "orange"]

For numbers:

let numbers = [10, 2, 30, 5];

numbers.sort((a, b) => a - b);

console.log(numbers);

Result:

[2, 5, 10, 30]


---

22. reverse()

Reverses the array.

let fruits = ["apple", "banana", "orange"];

fruits.reverse();

console.log(fruits);

Result:

["orange", "banana", "apple"]


---

23. split() + join()

split() changes a string into an array.

let text = "apple,banana,orange";

let fruits = text.split(",");

console.log(fruits);

Result:

["apple", "banana", "orange"]

join() changes the array back into a string.

let result = fruits.join(", ");

console.log(result);

Result:

apple, banana, orange


---

The important methods to master

Method What it does

length Counts items
push() Adds to end
pop() Removes from end
unshift() Adds to beginning
shift() Removes from beginning
includes() Checks if item exists
indexOf() Finds item's position
join() Array → String
slice() Copies part of array
splice() Adds/removes items
forEach() Runs code for each item
map() Transforms every item
filter() Selects matching items
find() Finds first matching item
findIndex() Finds first matching index
some() Checks if at least one matches
every() Checks if all match
sort() Sorts items
reverse() Reverses items


The pattern to remember

array.map(item => item)

map() → creates/transforms an array

array.filter(item => condition)

filter() → selects items

array.join(", ")

join() → turns the array into a string

string.split(",")

split() → turns the string into an array.