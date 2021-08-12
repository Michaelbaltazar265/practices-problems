// Create a function that accepts a measurement value in inches 
// and returns the equivalent of the measurement value in feet.

// Examples 
// inchesToFeet(324) ➞ 27

// inchesToFeet(12) ➞ 1

// inchesToFeet(36) ➞ 3

function inchesToFeet(inches) {
	if (inches < 12){ 
	return 0
	}else { return inches/12 }
} 

console.log(inchesToFeet(11)); 
console.log(inchesToFeet(24))