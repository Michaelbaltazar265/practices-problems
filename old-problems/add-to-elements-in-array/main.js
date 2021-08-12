// add-to-elements-in-array

function incrementItems(arr) {
	var array = [];
	for (let i = 0; i < arr.length; i++){ 
	 array.push(arr[i] + 1)
	}
	return array;
} 

console.log("1",incrementItems([0, 1, 2, 3]));
console.log("2", incrementItems([2, 4, 6, 8]));
console.log("3", incrementItems([21, 14, 86, 18]));