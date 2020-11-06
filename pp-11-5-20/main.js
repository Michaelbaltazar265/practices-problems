
// Limit a Number's Value 

// Create a function that takes three number 
// arguments — one number as an input and two additional 
// numbers representing the endpoints of a closed range — 
// and return the number limited to this range.

// If the number falls within the range, the number should be returned.
// If the number is less than the lower limit of the range, the lower limit should be returned.
// If the number is greater than the upper limit of the range, the upper limit should be returned.

// Example 

// limitNumber(5, 1, 10) ➞ 5

// limitNumber(-3, 1, 10) ➞ 1

// limitNumber(14, 1, 10) ➞ 10

// limitNumber(4.6, 1, 10) ➞ 4.6 

function limitNumber(num, rangeLow, rangeHigh) { 
   const arr = []; 
   arr.push(num, rangeLow, rangeHigh); 
   arr.sort( (a,b) =>{ 
       return a - b
   });
   return arr[1]
	
}
// limitNumber(5, 1, 10)
limitNumber(14, 1, 10)
limitNumber(4.6, 1, 10) 

//////////////////////////////////////////////////////////////////// 

// The pH Scale 

// Given a pH value, return whether that value is 
// "alkaline" (greater than 7), "acidic" (less than 7), 
// or "neutral" (7). Return "invalid" if the value given is 
// less than 0 or greater than 14.

// pHName(5) ➞ "acidic"

// pHName(8.7) ➞ "alkaline"

// pHName(7) ➞ "neutral"

function pHName(pH) {
    var color; 
    if (0 <= pH && 6 >= pH ){ 
        color = "acidic"
        return color;
    } else if (pH === 7){ 
        color = "neutral"
        return color;
    } else if (7.25 <= pH && 14 > pH){ 
        color = "alkaline"
        return color;
    } else { 
        color = "invalid"
        return color;
    }
    return color;
} 
pHName(7.26)
pHName(15)
pHName(5)
pHName(7)

//////////////////////////////////////////////////////////////////// 

// the study of wumbology 

// Create a function that flips M's to W's 

// Example 
// wumbo("I LOVE MAKING CHALLENGES") ➞ "I LOVE WAKING CHALLENGES"

// wumbo("MEET ME IN WARSAW") ➞ "WEET WE IN WARSAW"

// wumbo("WUMBOLOGY") ➞ "WUWBOLOGY" 

function wumbo(words) {
	return words.replace(/M/gi, "W")
}
wumbo("I LOVE MAKING CHALLENGES")


//////////////////////////////////////////////////////////////////// 

// How Much is True? 

// Create a function which returns the number of true values there are in an array.

// Example 

// countTrue([true, false, false, true, false]) ➞ 2

// countTrue([false, false, false, false]) ➞ 0

// countTrue([]) ➞ 0 

function countTrue(arr) {
    const newArr = []; 
    for (let i = 0; i < arr.length; i++){ 
        if ( arr[i] === true ){ 
            newArr.push(arr[i])
        }
    } 
	return newArr.length; 
} 
countTrue([true, false, false, true, false])


////////////////////////////////////////////////////////////////////

// Find the total number of digits the given number has 

// Create a function that takes a number as an argument 
// and returns the amount of digits it has. 

// Example 
// findDigitAmount(123) ➞ 3

// findDigitAmount(56) ➞ 2

// findDigitAmount(7154) ➞ 4

// findDigitAmount(61217311514) ➞ 11

// findDigitAmount(0) ➞ 1 

function findDigitAmount(num) {
    const str = num.toString(); 
    const arr = str.split('')
    return arr.length;
    
} 
findDigitAmount(123)


//////////////////////////////////////////////////////////
// Filter Strings from Array 

// Create a function that takes an array of strings and numbers,
// and filters out the array so that it returns an array of integers only.

// Example 
// filterArray([1, 2, 3, "a", "b", 4]) ➞ [1, 2, 3, 4]

// filterArray(["A", 0, "Edabit", 1729, "Python", "1729"]) ➞ [0, 1729]

// filterArray(["Nothing", "here"]) ➞ [] 

function filterArray(arr) {
    const newArr = [];    
    for (let i = 0; i < arr.length; i++){ 
        if ( Number.isInteger(arr[i])){ 
            newArr.push(arr[i]); 
        }
    }
    return newArr;
}
filterArray([1, 2, 3, "a", "b", 4])
console.log(filterArray([1, 2, 3, "a", "b", 4]))