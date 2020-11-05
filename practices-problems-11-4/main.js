

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

////////////////////////////////////////////////////////

// Modifying the Last Character
// modifyLast("Hello", 3) ➞ "Hellooo"

// modifyLast("hey", 6) ➞ "heyyyyyy"

// modifyLast("excuse me what?", 5) ➞ "excuse me what?????" 

function modifyLast(str, n) {
    var lastChar = str.charAt(str.length -1);
    var repeat = lastChar.repeat(n -1)
    return str + repeat;	
} 

modifyLast("Hello", 3)

///////////////////////////////////////////////////////// 

// Coding Website Score Calculator 

// Imagine you run a website that presents users with different coding
// challenges in levels Easy, Medium, and Hard, where users get points 
// for completing challenges. An Easy challenge is worth 5 points,
// a Medium challenge is worth 10 points, and a Hard challenge is worth 20 points.

// Create a function that takes in the number of each challenge 
// level a user has played and calculates the user's total 
// number of points. Keep in mind that a user cannot 
// complete negative challenges, so the function should 
// return the string "invalid" if any of the passed parameters are negative.

// Example 

// scoreCalculator(1, 2, 3) ➞ 85

// scoreCalculator(1, 0, 10) ➞ 205

// scoreCalculator(5, 2, -6) ➞ "invalid" 

function scoreCalculator(easy, med, hard) {
    var easy1 = easy * 5; 
    var med1 = med * 10; 
    var hard1 = hard * 20; 
    var add = easy1 + med1 + hard1; 
    var neg = "invalid"; 
    if ( hard < 0 || med < 0 || easy < 0 ){ 
        return neg; 
    }else { 
        return add
    }
	return add || neg;
} 




///////////////////////////////////////////////////

// Calculating Damage 

// Create a function that takes damage and speed (attacks per second) 
// and returns the amount of damage after a given time. 

// damage(40, 5, "second")  == to get that 40 * 5 = 200

// damage(100, 1, "minute") == to get that (100 * 1) * 60 = 6000 

// damage(2, 100, "hour") == to get that (2 * 100) * 3600 = 720000 

function damage(damage, speed, time) { 
    var answer; 
    if (damage < 0 || speed < 0 || time < 0 ){ 
        answer = "invalid";
        return answer
    } else if (time === "second"){ 
        answer = damage * speed;
        return answer;
    } else if (time === "minute"){ 
        answer = (damage * speed) * 60;
        return answer;
    } else if ( time === "hour"){ 
        answer = (damage * speed) * 3600;
        return answer;
    }
return answer
} 

damage(4, 9 , "hour")
