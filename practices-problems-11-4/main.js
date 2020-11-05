

// Add the Index 
// Given an array of numbers, create a function which returns the same array 
// but with each element's index in the array added to itself. 
// This means you add 0 to the number at index 0, add 1 to the number at index 1, etc...
//   This is all examples 
// addIndexes([0, 0, 0, 0, 0]) ➞ [0, 1, 2, 3, 4]
// addIndexes([1, 2, 3, 4, 5]) ➞ [1, 3, 5, 7, 9]
// addIndexes([5, 4, 3, 2, 1]) ➞ [5, 5, 5, 5, 5] 

function addIndexes(arr) {
    var newArr = []; 
    var num = 0;
    for (let i = 0; i < arr.length; i++){ 
        newArr.push(arr[i] + num++)
    }
    return newArr;
} 

///////////////////////////////////////////////////////////

// Circle or Square 

// Given the radius of a circle and the area of a square, 
// return true if the circumference of the circle is greater 
// than the square's perimeter and false if the square's perimeter
// is greater than the circumference of the circle.

function circle_or_square(rad, area){
    const half = (rad * 2 * 3.14) > area**(1/2)*4;
    return half
} 

// console.log ( circle_or_square(16, 625))
////////////////////////////////////////////////////////

// Modifying the Last Character
// modifyLast("Hello", 3) ➞ "Hellooo"

// modifyLast("hey", 6) ➞ "heyyyyyy"

// modifyLast("excuse me what?", 5) ➞ "excuse me what?????" 

function modifyLast(str, n) {
    var lastChar = str.charAt(str.length -1);
    var repeat = lastChar.repeat(n -1)
    console.log(repeat)
    return str + repeat;	
} 

modifyLast("Hello", 3)