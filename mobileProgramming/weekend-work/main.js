

/*
// 1. Write a JavaScript program to display the 
//    second largest number in an Array.

function secondNum(arr) {
    let arrLargeToSmall = [];
    let secLargest;
    for (let i = 0; i < arr.length; i++) {
        for (let u = i; u < arr.length; u++) {
            if (arr[i] < arr[u]) {
                let temp = arr[i];
                arr[i] = arr[u];
                arr[u] = temp;
            }
        }
        arrLargeToSmall.push(arr[i]);
    }
    secLargest = arrLargeToSmall[1];
    console.log(secLargest)
    return secLargest;

}
secondNum([1, 4, 17, 9,]);
secondNum([100, 8, 3, 6, 50, 4, 7000, 2]);
secondNum([8, 3, 6, 50, 4, 7, 2]);
secondNum([200, 8, 39999, 6, 5840, 4, 7000, 2]);
secondNum([100, 8, 3, 6000, 50, 4, 7000, 2]);


//////////////////////////////////////////////////

//2. Write a JavaScript program to check 
//   whether a number is a prime number or not.

function isPrime(num) {
    for (var i = 2; i < num; i++)
        if (num % i === 0) return false;
    return num > 1;
}

console.log(isPrime(2));
console.log(isPrime(3));
console.log(isPrime(7));
console.log(isPrime(332));

//////////////////////////////////////////////////

// 3. How will you remove duplicate elements 
//    from an array? Write a program to demonstrate it 

function removeDoubles(arr) {
    let duplicate = arr.filter((c, index) => {
        return arr.indexOf(c) === index;
    });

    console.log(duplicate)
    return duplicate;
}
removeDoubles(['A', 'B', 'A', 'C', 'B'])
removeDoubles([1, 2, 6, 7, 3, 7, 1, 5, 6])
removeDoubles(['A', 'B', 'A', 'C', 'B'])
removeDoubles(['A', 'B', 'C'])


//////////////////////////////////////////////////
// 4. Given an array of integers and a target sum,
// find if there exist two numbers in the array 
// whose sum is equal to the given target sum. 

// I need an example 

function getTotal(arr) {
    let sum = 0;
    let result;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        result = sum === arr[i] ? "Equals" : "Not Equals";
    }
    console.log(result);
}

getTotal([1, 2, 3, 4, 5])




// 5. In array take alternative numbers and reverse them. 
//    Put it again in the place of array again
//           e.g., arr = [1,2,3,4,5,6,7,8]
//              newarr = [1,8,3,6,5,4,7,2]

/// make a function with a par
// 


// 6. From an array, find out the elements, and their repetition and print as element=count.
// eg.
// input Array: [2,1,3,4,6,5,4,7,5,6,8,2,3,6,2,6,4,4,7,3,4,5,6]
// 2=3

// 1=1

// 3=3

// 4=5

// 6=5

// 5=5

// 7=2

// 8=1 

*/

function countDuplicates (arr) { 

    const valueCounts = arr.reduce((counts, value) => {
  
        const valueCount = (counts[ value ] === undefined ? 0 : counts[ value ])
        return { ...counts, ...{ [value] : valueCount + 1 } }
        
      }, {})
      for(const value in valueCounts) {
        if(valueCounts[value] < 2) {
          delete valueCounts[value]
        }
      }
      for(const value in valueCounts) {
        console.log(`${ value } occours ${ valueCounts[value] } time(s)` )
      } 

}

countDuplicates ([5, 3, 7, 4, 7, 5, 3, 2, 7, 3, 2])