 

//  secondLargest([10, 40, 30, 20, 50]) ➞ 40

//  secondLargest([25, 143, 89, 13, 105]) ➞ 105
 
//  secondLargest([54, 23, 11, 17, 10]) ➞ 23

function secondLargest(arr) {
    arr.sort((a,b) => b - a)
    const second = arr[1]
    console.log(second)
    return second;
} 
secondLargest([10, 40, 30, 20, 50]) 


//////////////////////////////////////////////////////////

// Add up the Numbers from a Single Number 

// Create a function that takes a number as an argument. 
// Add up all the numbers from 1 to the number you passed to the function. 
// For example, if the input is 4 then your 
// function should return 10 because 1 + 2 + 3 + 4 = 10. 

// Examples 

// addUp(4) ➞ 10

// addUp(13) ➞ 91

// addUp(600) ➞ 180300 

function addUp(num) {
   let sum = 0; 
   for (let i = 1; i <= num; i++){ 
       sum += i;
   }
   console.log("sum total",sum)
   return sum;
}

addUp(4) 
addUp(13) 



function addition(a) {
	
	return `something ${a}`
} 

console.log(addition("something")) 

function centuryFromYear(year) {
    if (year >= 1901 && year <= 2000){
        return 20
    } else if  (year >= 1700 && year <= 1799){
        return 17
    }else if  (year >= 2001 && year <= 2100){
        return 21
    }
    
    
    else if  (year >= 1700 && year <= 1799){
        return 17
    }

} 

function shapeArea (statues) { 

    statues.sort((a,b) => { 
        return a-b;
    })
    const min = statues[0];
    const max = statues[statues.length - 1];
    let count = 0; 

    for(var i = min; i < max; i++){ 
        if(statues.indexOf(i) === -1){
            count++
        }
    }
    
    return count;
}