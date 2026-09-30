//strings methods >>these are methods that are used to manipulate and work on sentences and nay string data type 
//this are examples of string methods 

//case change 

/* tolowerCase>>used to transform a string to a lower case 
toUppercase >>used to transform a string to toUppercase
use case >>when collecting user input in fomrs ,or data entries where you need consistency of data 
search inputs,firstnames ,emails 
*/

let userInput="heLLo i am LeanriNG jAVASCript"

let lowerUserInput=userInput.toLowerCase();

console.log(lowerUserInput);


let upperUserInput=userInput.toUpperCase();

console.log(upperUserInput);

//length of a string 
//to check the lenght we use the .lenght method and in this case we chain it with the varibale name ofthe string 
//the lenght method also counts the whitespaces in the string >>and it counts for 1 

let stringLength=userInput.length
console.log(stringLength);

//split >>this is used to split a string into an array with delimeters (seprator)
//why should i split a stirng intpo an array >>when you want to capitalixe a letter of every word ayt index 0 
//and not all the words 
/* if i want to split them into letters i have a single seperator ,if i want words i have a wrote space or a 
character  */

let splitSentence=userInput.split('')
console.log(splitSentence);

let output=splitSentence[0].toUpperCase()

console.log(output);


//chartAt>>character at a specified index >>its a number (1..n-1)
let name='peter Njuguna'

let indexOfName=name.charAt("1")
console.log(indexOfName);

//indexOff(retunrs the index of a word,character in a stirng )

//booloean ops >>they loop through the string to check for this elements 
/* includes>>lopps through a stirng to search if a stirng has the sad words ,then returns 
a boolean if T/F
//startsWith>>used to check if a string starts with the specified characters/character 
// and retuns a boolean 
//endsWith


slice
substring 
replace
replaceAll
trim(plus two)
repeat


 */

//reverse
//join

let courseStatement ="I am studying Fullstack software development"

let startWith=courseStatement.toLowerCase().startsWith('i')//method chaining 
console.log(startWith)


let endswith=courseStatement.endsWith('development')

console.log(endswith);


//includes >>IMPORTANT

letSearch=courseStatement.includes('dev')
console.log(letSearch);
    

//CHANGE STRINGSBY MAPPING A NEW STRING AND MAKING ALTERATION IN LENGTH AND DYNMICITY
/* THEY DO SO BY SPECIFYING TH EINDEX {
    START INDEX >>where truncation will begin 
     THE END INDEX >>WHERE truncation will end 

     the slice method also offers reverse slicing form the right to left (-index)
     the substirng which does not accept negative slices >>incase of 
     negative indexex it returns nothing

} */

     let SlicedString=courseStatement.slice(2,8)
     console.log(SlicedString);
     
//strings 

//Its a text made up of characters

//creating strings

let name= "John"
let city = "Nairobi"
let message = `Hello ${name}`;

 
//String length
let word = "Javascript"
console.log(word.length);

//acccessing Characters
let word= "Hello"

console.log(word[0]);
console.log(word[1]);
console.log(word[4]);

//toupperCase()
let name = "john"
console.log(name.toUpperCase());


let jina= "Jessica"
let answer= jina.toUpperCase();
console.log(answer);


//to toloweCase()
let name ="JOHN"
console.log(name.toLowerCase());

//Includes
let sentence= "I love Javascript";
console.log(sentence.includes("love"));
//true




//>>indexOf()

//Finds position of text
let word = "Javascript";
console.log(word.indexof("Script"));


//>>Slice
//Extract part of string

let word= "Javascript";
console.log(word.slice(0,4));

//>>trim()
//remove whitespace from beginning to the end
let name = "  John  "
console.log(name.trim());
//output John

//>>replace()
let text= "i like cats";
console.log(text.replace("cats","dogs"));


//>>split()
//this is important because it connects strings and arrays
let fruits="apple,banana,orange";
let results=fruits.split(",");
console.log();


