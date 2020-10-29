

//Create a function that takes an array and returns the sum of all numbers in the array. 

function getSumOfItems(arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++){ 
	sum += arr[i];
	} 
	return sum;
}