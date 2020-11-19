 

//  secondLargest([10, 40, 30, 20, 50]) ➞ 40

//  secondLargest([25, 143, 89, 13, 105]) ➞ 105
 
//  secondLargest([54, 23, 11, 17, 10]) ➞ 23

function secondLargest(arr) {
    arr.sort((a,b) => b - a)
    const second = arr[1]
    return second;
} 
secondLargest([10, 40, 30, 20, 50])