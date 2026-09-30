/*data types>> are used to store and define the type of data in a system

In Js we have 2 types of data{

    primitive
}*/



let sentenceone="I am a software developer"
console.log(sentenceone)
let sentenceTwo="I enjoy being alone"
console.log(sentenceTwo)
let sentenceThree="Let there be light"
console.log(sentenceThree)*/



/*
/* what are data types >>data types are used to store and define the type of data
in a system 
in javascript we have two types of data {
    primitive (immutable)>>they cannot change >>it containes elements of similar format only
    non-primitive data types (mutable)>>contains elements of mixed racials 
     can be changed to have various data types in them 

}
PRIMITIVE DATA TYPES 
they include {
    strings
    number 
    booleans
    undefined
    NaN

}
NON PRIMITIVE DATA TYPES {
    ARRAYS
    FUNCTIONS
    OBJECTS
    
} */

    //STRING>>A STRING IS A SERIES OF CHARACTERS THAT FORM A WORD OR A SENTENCE 
   /*  THEY are enclosed and defined in three ways {
        using single quotes 
        using double quotes
        using backticks
    }

        let sentenceOne="today is Tuesday"

        console.log(sentenceOne);
        
        let sentenceTwo='tomorrow is Wednesday'
        console.log(sentenceTwo);
        
        let sentenceThree=`Friday is a holiday`

        console.log(sentenceThree);

        //number

        let age=45//number(int)

        let average=10.5

        let agetwo="45" //string
        
      if(age===agetwo){
        console.log('hurray');
        
      }
      else{
        console.log("nope");
        
      }

      //boolean>>this referes to either a truth or a false (0,1)
      //use cases >>user authetication 
      let success=true;

      if(success){
        console.log("Log in successful proceed to dashboard");
        
      }
      else{
        console.log('invalid credentials');
        
      }

     undefined>>this is a critical data type that is left without a value  
      either to be filled later or to handle errors 
      their is no assignment of a varible value in the undefined data type
      

      let fullname;

      console.log(fullname);
      
      //null>>it is used to handle null values such as the ones on pos systems 

      let paymentId=null;

    NaN>>used to handle context that 
      is not a number in parameters that requires numbers
      in forms that take in ID,SSN,HUDUMA NUMBER 

      IF INCASE A USER INPUTS A CHARACTER THAT IS NaN AN error is thrown to use only numbers 

    
    let idNumber=NaN;

     if(idNumber){
        console.log('this is correct');
        
     } 
    //to check the type of data tyoe we use typeof method and 
    // the name of the data type in bracktets
    console.log(typeof(paymentId));
      console.log(typeof(success));

        DAY2


       //arrays >>this refers to agroup or related Data ,
     /// arrays are instantiated form index zero 
/*     arraysare defined in two ways {
    >>>>>>>>>>using square bracket method

        let fruits=['mangoes','bananas','pineapple','strawberry',12,true]


>>>>>>>>>>using the array constructor(new Array())

        let fruitTwo=new Array('mangoes','bananas','pineapple','strawberry')

       >>>>>>>>>> //multi-dimensinal arrya

        //we nest an array inside an array 

      } */
            // let vehicle=['Subaru',['Hilux','Mark X',"premio",'Vitz'],'Tesla','Honda','Isuzu','Audi']


             //console.log(vehicle[1][1]);
             

             //objects>>these are a storage data types that offers key value pair methond when it comes to storing data and it 
             //allows one to retrive these data via the dot notation for generic use and the square brackets when you want to change the values 
             //we can have nexted objects and also have object inside arrays  whic helps in looping as a form of storage 
             //objects are defined by the curly brackets 
             //the key -value pairs ae seperated via a full colon 

 //single object with key and value pairs seperated via commas and only the last key value pair does not have a comma 
 //if you want to return object data chained by string sentences we use backticks as a method of string concatenation and interpolation 
 //we use the dollar sign to embed the object with in and the curly brackets 
             /*let student={
              name:'Peter Njuguna',
              course:'ML,DATA ENGINEERING',
              year:2026,
              isPaid:true,
              duration:'12 months'
                          }
             
             console.log( `The student named ${student.name} enrolled in a course called ${student.course} 
              in the year ${student.year} set for a duration 
              of ${student.duration}
              `);
             
             //array of objects 
             let eldohubStudent=[
              {
              name:'Peter Njuguna',
              course:'ML,DATA ENGINEERING',
              year:2026,
              isPaid:true,
              duration:'12 months'
             },
             {
              name:'Trizzah',
              course:'ML,DATA ENGINEERING',
              year:2026,
              isPaid:true,
              duration:'12 months'
             },
             {
              name:'Neema',
              course:'ML,DATA ENGINEERING',
              year:2026,
              isPaid:true,
              duration:'12 months'
             },
             {
              name:'Velter',
              course:'ML,DATA ENGINEERING',
              year:2026,
              isPaid:true,
              duration:'12 months'
             },
             {
              name:'Liz',
              course:'ML,DATA ENGINEERING',
              year:2026,
              isPaid:true,
              duration:'12 months'
             },
             {
              name:'  Wencellious',
              course:'ML,DATA ENGINEERING',
              year:2026,
              isPaid:true,
              duration:'12 months'
             },
             {
              name:' Radion',
              course:'ML,DATA ENGINEERING',
              year:2026,
              isPaid:true,
              duration:'12 months'
             }
             ] 



               
             functions>>these referes to reusabel code blocks that compute a particuar task based on the logic implemented 
             //the logic is given by control strucutres ,loops ,and other paramenters 

             //we define functionin htre ways {
             //functions carry what we refere to ass paramenters in brackets and this parameters are the ones that hold real user values 
             //paramenters are just place holders for dynamic user data
             //parameters depends on the number of arguments that exist to tell us how many parameters we need 
             //a function neds to be called inorder to execute >>without calling a function you wont be using it 
           // function declaration>>we give the function a name and before the name we instantitiate the function by the keyword 'function'
           // to make a function giv e you a real production feedback we use the return keyword which return data to user 
           //the return keyword is the final code line  in a function any word that comes after this is not executed 
            function getSum(x,y){
              //logi goes here
                //console.log(x+y);
                return x+y
                
            }
            getSum(4,5) //arguments

           // function expression>>this are functions declared but assigned a variable to be stored in 

            let area=function getArea(num1,num2){
                     console.log(0.5 * num1 *num2);
                     
            }
            area(3,4)

           // arrow function >>this is the modern way t define function >>is clean ,efficient and one line 
          // it removes the word funcion and function name  and replaces it with an arrow and a greater than sign and assignnd to a variable for storage

          let arrow=()=>{

          }
//define a function to calcualte the area of a trapezium
//define a function to output your fullname
//define a function to output the even number from 1-20


*/


let area = function getArea(a, b, h) {
  return 0.5 * (a + b) * h;
};

let myResult = area(5, 4, 3); 
console.log(myResult);




let name=function getName(firstname,lastname){
  return `My name is ${firstname} ${lastname}`;
};


let myName= name('WENCELLIOUS', 'KIPROP');
console.log(myName);





let even = 0;
for(let i=1; I<=20;1++)
{
  if (% 2==0)

    {return i;
}
}
