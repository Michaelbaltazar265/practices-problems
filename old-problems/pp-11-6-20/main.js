 // Sort the Unsortable 

 // Create a function that, given an array similar to the above,
 // sorts the array according to the "content of the elements".

 // Example 
//  sortIt([4, 1, 3]) ➞               [1, 3, 4]

// sortIt([[4], [1], [3]]) ➞          [[1], [3], [4]]

// sortIt([4, [1], 3]) ➞              [[1], 3, 4]

// sortIt([[4], 1, [3]]) ➞            [1, [3], [4]]

// sortIt([[3], 4, [2], [5], 1, 6]) ➞ [1, [2], [3], 4, [5], 6]

function sortIt(arr) {
    const arrSort = arr.sort(function (a, b){return a-b}); 
    return arrSort;	
}
sortIt([[3], 4, [2], [5], 1, 6])
sortIt([[4], [1], [3]])
