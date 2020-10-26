// Create a function that takes two numbers num1, num2, 
// and an array arr and returns an array containing all the numbers in arr 
// greater than num1 and less than num2.

function arrBetween(num1, num2, arr) {
	let newArr = [];
	for (var i = 0; i < arr.length; i++) {
		    if ((arr[i] > num1)&&(arr[i] < num2)) {
					  newArr.push(arr[i]);
				}
	}
	return newArr;
} 

console.log(arrBetween(7, 32, [1, 2, 3, 78]));
console.log(arrBetween(0, 9, [1, 2, 3, 78]));
console.log(arrBetween(-5, 3, [-8, 0, 0, 20, -3]));