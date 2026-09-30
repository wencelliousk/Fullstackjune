let numbers=[2,7,11,15];
let target= 9;

for( i=0; i < numbers.length; i++){
    for( let j =i+1; j < numbers.length; j++){
        if(numbers[i]+numbers[j]===target){
            console.log([i,j]);
            
        }
    }
}