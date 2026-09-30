/*let counties=['Nairobi','Mombasa','Kwale','Uasin Gishu','Nandi','Baringo','Nakuru']
  
  let counties = [
  {
    County: 'Nairobi',
    CountyId: 47,
    population: 3900000,
    Loanpaid: false,
    RevenueSource: 'Local Businesses',
    Governor: 'Sakaja'
  },





  {
    County: 'Mombasa',
    CountyId: 1,
    population: 1200000,
    Loanpaid: true,
    RevenueSource: 'Tourism',
    Governor: 'Ali Hassan Joho'
  },




  {
    County: 'Kwale',
    CountyId: 2,
    population: 800000,
    Loanpaid: false,
    RevenueSource: 'Agriculture',
    Governor: 'Fatuma Achani'
  },




  {
    County: 'Uasin Gishu',
    CountyId: 27,
    population: 1000000,
    Loanpaid: false,
    RevenueSource: 'Agriculture',
    Governor: 'Jonathan Bii'
  },





  {
    County: 'Nandi',
    CountyId: 29,
    population: 8000000,
    Loanpaid: false,
    RevenueSource: 'Agriculture',
    Governor: 'Stephen Sang'
  },




  {
    County: 'Baringo',
    CountyId: 30,
    population: 300000,
    Loanpaid: false,
    RevenueSource: 'Dairy Farming',
    Governor: 'Benjamin Cheboi'
  },
  
  
  
  {
    County: 'Nakuru',
    CountyId: 32,
    population: 20000000,
    Loanpaid: false,
    RevenueSource: 'Potato Farming',
    Governor: 'Susan Kihika'
  }
];*/



/*




let num = function multiplicationTable() {
  for( let q=1; q<=10; 1++){
    console.log(5 + "*" + q + "=" + (5*q));
  }
}
num();

  let products = [100 ,200,300,400];
  let total= 0;
  let prices = function totalCost (){

    for( let z=0; z<products.length; z++){
      total += products[z];
    }
    console.log("Total cost = " + total);
  }
  prices();
  */
/*

  ///slice is used to copy part of an array without changing the original


  let fruits=["banana","mango","orange","pineappple","whitesupporter"];
  let results=fruits.slice(2);
  console.log(results);
  













  let students=["Mathew","John","Caroline","Jessica","Mary","Thomas","Florence"];
  let names=students.slice(0,7);
   console.log(names);
   
  
  //splice is use to remove add or replace an item
  let fruits=["mango","apple","banana","whitesuppporter"];
  fruits.splice(0,4,);
  console.log(fruits);
*/





/*

//splice()>>>>is use to add, replace and remove an array
let students=["Florence","jessica","Mathew","Thomas","Irine","Ivy"];
students.splice(0,0,"Derrick")
console.log(students);
*/

/*
//reduce takes many arrsy item an d reduce to final one value

let numbers=[10,20,30,40];
let total=numbers.reduce((sum,number)=>
{
  return sum+number;
},0);
console.log(total);

*/











//splice is use add replace and remove an array
let students=["Mathew","Jesica","Ivy","Florence","James"]
students.splice(1,1,"Peter")
console.log(students);

let student=students.slice(0,2);

console.log(student);
