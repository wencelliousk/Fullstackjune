//asynchrmous funciton 

//defined by the word async ...function name the await the resource to be targetted 
//api calls 

//high order function >>a function that accepts a callback function or returns a value 

//a callback function ,>>a function that acceppst another function as an argument 

function greet(callback){
   callback()
}

function callback(){
let numOne=23
let numTwo=33   

console.log( numOne * numTwo);
}

greet(callback)

//async await >>for this the asyn part always ensures that the part is a promise based operation 
//await >>a promise is either resolved or rejects based on the resource it will fetch 
//res.json>>json >>javascript object notattion >>a way of defining js objcts in a cross sharing syntax 

let user={
    id:1,
    name:"me me",
    course:"english"
}


let useJson={
    "id":1,
    "name":"me me",
    "course":"english"
}

//json methods {
/* stringify

}
 */

async function getPokemon(){ //get pokemnon from the fetched url >>>this function will be promise based 
try {
        let response=await fetch('https://pokeapi.co/api/v2/pokemon/ditto')//has been gotten as raw object 
        let data=await response.json()//converting my response to json 
        console.log(data);

} catch (error) {

    console.log(error);
    
    
}



}
getPokemon()

//