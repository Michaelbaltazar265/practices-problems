// Here is all the questions that they gave us to prepare for the assessment

// 1. Write a JavaScript program to display the 
//    second largest number in an Array. 

function secondNum (arr) {
    let arrLargeToSmall = [];
    let secLargest;
    for (let i = 0; i < arr.length; i++){
       for (let u = i; u < arr.length; u++){
           if (arr[i] < arr[u]){
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
//  secondNum([1,4,17,9,]);
//  secondNum( [100,8,3,6,50,4,7000,2]);
//  secondNum( [8,3,6,50,4,7,2]);
//  secondNum( [200,8,39999,6,5840,4,7000,2]);
//  secondNum( [100,8,3,6000,50,4,7000,2]); 


 //////////////////////////////////////////////////
 
//2. Write a JavaScript program to check
//   whether a number is a prime number or not.
 
function isPrime(num) {
    for(var i = 2; i < num; i++)
      if(num % i === 0) return false;
    return num > 1;
  }
 
//   console.log(isPrime(2));
//   console.log(isPrime(3));
//   console.log(isPrime(7));
//   console.log(isPrime(332)); 

 //////////////////////////////////////////////////
 
 // 3. How will you remove duplicate elements
 //    from an array? Write a program to demonstrate it
 
 function removeDoubles (arr) {
    let duplicate = arr.filter((c, index) => {
      return arr.indexOf(c) === index;
  });

    console.log(duplicate)
    return duplicate;
}
// removeDoubles(['A', 'B', 'A', 'C', 'B'])
// removeDoubles([1,2,6,7,3,7,1,5,6])
// removeDoubles(['A', 'B', 'A', 'C', 'B'])
// removeDoubles(['A', 'B', 'C'])
 

//////////////////////////////////////////////////
 // 4. Given an array of integers and a target sum,
 // find if there exist two numbers in the array
 // whose sum is equal to the given target sum.
 
 // Given a sorted array and a key, find the two numbers whose sum is equal to the given key.

 arr = [1, 3, 4, 5, 7, 8]
 
 key = 10 
 
 function twoSum(arr, target_num) {
     var map = [];
     var indexnum = [];
     
     for (var i = 0; i < arr.length; i++)
     {
     if (map[arr[i]] != null)
     {
     var index = map[arr[i]];
     indexnum[0] = index;
     indexnum[1] = i;
     break;
     }
     else
     {
     map[target_num - arr[i]] = i;
     }
     }
     return indexnum;
     }
//    console.log(twoSum([10,20,10,40,50,60,70],50));
//    console.log(twoSum([1, 3, 4, 5, 7, 8],10)); 

 
 
 
 
 // 5. In array take alternative numbers and reverse them.
 //    Put it again in the place of array again
//           e.g., arr = [1,2,3,4,5,6,7,8]
//              newarr = [1,8,3,6,5,4,7,2]
 
/// make a function with a par
//


//////////////////////////////////////////////////////////////////////////////

// 6) Given an unsorted array a = [3,1,5,2,7], 
//    find alternate elements "3,5,7", reverse them "7,5,3" and 
//    place them in the original array
//    Expected result [7,1,5,2,3]

function arrUnsort (arr){ 
    let lastEl = arr.pop(); 
    let firstEl = arr.shift(); 
    arr.push(firstEl);
     arr.unshift(lastEl);
    //  console.log(arr);
     return arr;
}
arrUnsort([3,1,5,2,7]) 
arrUnsort([1,2,3,4,5,6,7,8])

///////////////////////////////////////////////////////////////////////////

// (7) Given a sorted array with the duplicates, move all the distinct elements to the front.

// arr[] = [1, 2, 2, 3, 4, 4, 4, 4, 5, 6, 6]


// output:

// arr[] = [1, 2, 3, 4, 5, 6, ..........] 

function removeDuplicates(array) {
    const newArr = array.filter((a, b) => array.indexOf(a) === b);
    // console.log(newArr.length);
    return newArr;
  };
//   console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 4, 4, 5, 6, 6]))
//   console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 4, 4, 5, 6, 6, 7,8,4,7,9]))

////////////////////////////////////////////////////////////////////////////////


// (8)  Given a sorted array and a key, find the two numbers whose sum is equal to the given key.

// arr = [1, 3, 4, 5, 7, 8]

// key = 10 

function twoSum(arr, target_num) {
    var map = [];
    var indexnum = [];
    
    for (var i = 0; i < arr.length; i++)
    {
    if (map[arr[i]] != null)
    {
    var index = map[arr[i]];
    indexnum[0] = index;
    indexnum[1] = i;
    break;
    }
    else
    {
    map[target_num - arr[i]] = i;
    }
    }
    return indexnum;
    }
//   console.log(twoSum([10,20,10,40,50,60,70],50));
//   console.log(twoSum([1, 3, 4, 5, 7, 8],10)); 
//   console.log(twoSum([1,4, 6, 7, 3,10], 14))

//////////////////////////////////////////////////////////////

// 9  Out of the given 3 arrays with n number of elements, 
// find out the common element(s) for all 3 arrays.
var arrays  = [
    [1,4,6,78,8,9,124,44],
    [44,6,9,1],
    [124,44,1,16,9]
]

var findCommonElements= function(arrs) {
    var resArr = [];
    for (var i = arrs[0].length - 1; i > 0; i--) {


        for (var j = arrs.length - 1; j > 0; j--) {
            if (arrs[j].indexOf(arrs[0][i]) == -1) {
                break;
            }
        }

        if (j === 0) {
            resArr.push(arrs[0][i]);
        }


    }
    return resArr;
} 


// console.log(findCommonElements(arrays)) 

////////////////////////////////////////////////////////////////////////////////

// 5
// 54
// 543
// 5432
// 54321

// fiveAndDown works 
function fiveAndDown (){  
    let output = '';
    for (var i = 5; i >= 1; i--) {
        for (var j = 5; j >= i; j--) {
            output += j + '';
        }
        // console.log(output);
        output = '';
    } 
  }
  fiveAndDown()

  ////////////////////////////////////////////////////////////////////////////////

  // Done
// 1
// 2
// 4
// 3
// 5
// count worksß
function count (){ 
    for (let i = 1; i < 6; i++){ 
        //console.log(i)
    }
}
count()


  ////////////////////////////////////////////////////////////////////////////////

  // Done
// 1
// 123
// 12345
// 1234567
// 
function count7 (){ 
  
    
    let output = '';
    for (var i = 1; i <= 7; i++) {
        for (var j = 1; j <= i; j++) {
            output += j + '';
        }
        // console.log(output);
        output = '';
    }
      
  }
  count7()

  ////////////////////////////////////////////////////////////////////////////////

//   6. From an array, find out the elements, and their repetition and print as element=count.
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


/////////////////////////////////////////////////////////////////////////////////

// (5) Print the right diagonal of the matrix

// Input:

// 1	2	3	4

// 5	6	7	8

// 9   10	11  12

// 13  14	15  16 
let oneToSixteen = [ 
    [1, 2, 3, 4], 
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];

function matrix (arr){ 
    for (let i = 0; i < arr.length; i++){ 
        for(let j = i; j <= i; j++){ 
            // console.log(arr[j]);
        }
    }
}

matrix(oneToSixteen);


/////////////////////////////////

// function display()
// {
//     let num=5;
//     if(num>=2)
//     console.log("A");
//     console.log("B");
//     console.log("C");
// }
// display()
// // abc

// function display()
// {
//     let num=5;
//     if(num==2)
//     console.log("A");
//     console.log("B");
//     console.log("C");
// }
// display()
// B  C

// function display()
// {
//     let num=5;
//     if(num>=2)
//     console.log("A");
//     else
//     console.log("B");
//     console.log("C");
// }
// display()
// A C

// function display()
// {
//     let num=5;
//     if(num>=2)
//     console.log("A");
//     //console.log("C"); //seems as a unreachable statement and will result in an error
//     else
//     console.log("B");
// }
// display()
/// gives an error 

// function display()
// {
//     let num=5;
//     if(num>=8)
//         if(num==5)
//             console.log("A");
//     else
//         console.log("B");
        
// }
// display()

// gives you nothing

// function display()
// {
//     let num=5;
//     if(num>=8)
//         if(num==5)
//             console.log("A");
//     else
//         console.log("B");
//         console.log("C");

// }
// display() 

// C


/////////////////////////////////////////////////////////////////////////////////

// let x = -5, y=-4, z=-9, m=-6;

// m-= (x>y)?(y>z)?(m>x)?(m-x):(x-y):(y-x):(z-m);
// console.log(m)
//1. I answer = -3 

// function display(){ 
//     let x=5;
//     if(x>8)
//         if(x>5)
//             if(x==5)
//             console.log("a")
//       else 
//       console.log("b")      
// }
// display()

/// 1.II No console.log 


// const display=()=>{
//     let x=0;
//     while(x<=10)
//     for(;;)
//     if(++x%10==0)
//     break;
//     console.log(x)
//     }
//     display()

    // answer iii = 20

    // const display=()=>{
    //     let x=5;
    //     if(x>=5)
    //     console.log("A");
    //     else;
    //     console.log("B");
    //     console.log("C");
    //     }
    //     display()
        // (v) 
        // const display=()=>{
        //     let i=10;
        //     for(;i;)
        //     {
        //     console.log(i);
        //     i--;
        //     }
        // }
        // display()

        // // 2. 
        // function reverseOrder (arr){ 
        //     return arr.reverse();
        // }

        // console.log([1,2,3,4,5,6,7,8])


        // 3.
        
        // function arrUnsort (arr){ 
        //     let lastEl = arr.pop(); 
        //     let firstEl = arr.shift(); 
        //     arr.push(firstEl);
        //      arr.unshift(lastEl);
        //     //   console.log(arr);
        //      return arr;
        // }
        // arrUnsort([3,1,5,2,7]) 
///////////////////////////////

//4 
// Given below is an array of objects: (5 marks)
// const emp_det=[
// {empid:'E001',name:'John',dept:'IT',sal:4000},
// {empid:'E002',name:'James',dept:'SALES',sal:4200},
// {empid:'E003',name:'Mac',dept:'MKTG',sal:4800},
// {empid:'E004',name:'Sam',dept:'ADMIN',sal:5200}
// ];
// Calculate the total sum of the salaries by using reduce() function. 

//  function sumSal (){ 
//      let calculateSal = emp_det.reduce(( sum,  {sal }) => sum + sal, 0)
// return calculateSal;

//  }
//  console.log(sumSal()) 

function myDisplayer(display) {
   // console.log(display)
  }

let myPromise = new Promise(function(res, rej) {
    let x = 0;
    if (x == 0) {
      res("It Works ");
    } else {
      rej("Error");
    }
  });
  
  myPromise.then(
    function(value) {myDisplayer(value);},
    function(err) {myDisplayer(err);}
  );


//   8. From an array, find out the elements, and their repetition and print as
// element=count. (5 marks)
// eg.
// Input Array: [2,1,3,4,6,5,4,7,5,6,8,2,3,6,2,6,4,4,7,3,4,5,6]
// Output:

// 2=3

// 1=1

// 3=3

// 4=5

// 6=5

// 5=5

// 7=2

// 8=1

function countDuplicates (arr) { 

    const valueCounts = arr.reduce((counts, value) => {
  
        const valueCount = (counts[ value ] === undefined ? 0 : counts[ value ])
        return { ...counts, ...{ [value] : valueCount + 1 } }
        
      }, {})
      for(const value in valueCounts) {
        if(valueCounts[value] < 0) {
          delete valueCounts[value]
        }
      }
      for(const value in valueCounts) {
         // console.log(`${ value } occours ${valueCounts[value]} time(s)` )
      } 

}

countDuplicates ([ 2,1,3,4,6,5,4,7,5,6,8,2,3,6,2,6,4,4,7,3,4,5,6]);


// 6.  

const emp_det=[
    {empid:'E001',name:'John',dept:'IT',sal:4000},
    {empid:'E002',name:'James',dept:'SALES',sal:4200},
    {empid:'E003',name:'Mac',dept:'MKTG',sal:4800},
    {empid:'E004',name:'Sam',dept:'ADMIN',sal:5200}
    ];

  emp=emp_det.map(function(arr){
        return `Emp Id=${arr.name}, Salary=${arr.sal}`;
    })

    emp.map(function(arr){
        // console.log(arr)
    })


    // // Will return an error (Cannot read property 'forEach' of undefined)
    // emp=emp_det.forEach(function(val){
    //     return `Emp Id=${val.empid}, Salary=${val.salary}`;
    // })

    // emp.forEach(function(val){
    //     //console.log(val)
    // })

    // emp=emp_det.map(function(val){
    //     return `Emp Id=${val.empid}, Salary=${val.salary+(val.salary*5)/100}`;
    // })

    // emp.forEach(function(val){
    //    // console.log(val)
    // })


// display();


// 7 


const movies = [
    { title: `A New Hope`, body:`Star wars movie 2`},
    { title: `The Empire Strikes Back`, body: `Star Wars movie 1` }
 ]
 

function getMovies(){
setTimeout(() => {
    movies.forEach((movie, index) => {
       // console.log(movie.title, movie.body)
    })
}, 1000);
}

function createMovies(movie){
return new Promise((resolve, reject) => {
    setTimeout(() => {
        movies.push(movie);

        const error = false;

        if(!error){
            resolve();
        }
        else{
            reject('Error: Something went wrong!')
        }
    }, 2000);
})
}

async function init(){
await createMovies({ title: `Return of the Jedi`, body:`Star wars movie 2`});

getMovies();
}

init();

// 10. 
// const message = function() {  
//     console.log("This message is shown after 3 seconds");
// };
//  const message = function () { 
//     // console.log(("This message is shown after 3 seconds"))
//  }
// setTimeout(message, 3000);

// const firstApi = fetch('https://jsonplaceholder.typicode.com/users')
// .then(res => res.json())
// .then(res => console.log(res))

// const secondApi = fetch('https://pokeapi.co/api/v2/pokemon/1')
// .then(res => res.json())
// .then(res => console.log(res));

 
// function greeting(name) {
//     console.log('Hello ' + name);
//   }
//    function processName(callback) {
//     const name = "Michael";
//     callback(name);
//   }
//    processName(greeting);


  // 6.  
// const listOfEmpolyee =[
//    {empid:'E001',name:'John',dept:'IT',sal:4000},
//    {empid:'E002',name:'James',dept:'SALES',sal:4200},
//    {empid:'E003',name:'Mac',dept:'MKTG',sal:4800},
//    {empid:'E004',name:'Sam',dept:'ADMIN',sal:5200}
//    ];
 
//  emp=listOfEmpolyee.map(function(arr){
//        return `Here is the ${arr.name},his ID is ${arr.empid} and salary ${arr.sal}`;
//    })
 
//    emp.map(function(arr){
//        console.log(arr)
//    })
//    // map method always returns a new array
 
// //    // Will return an error (Cannot read property 'forEach' of undefined)
//    emp=listOfEmpolyee.forEach(function(arr){
//        return `Emp Id=${arr.empid}, Salary=${arr.sal}`;
//    })
//    emp.forEach(function(arr){
//     console.log(arr)
// })

// emp=listOfEmpolyee.map(function(arr){
//     return `Emp Id=${arr.empid}, Salary=${arr.sal+(arr.sal*200)/100}`;
// })

// emp.forEach(function(arr){
//     console.log(arr)
// })


// (1) From a given array, make n elements rotate.
// e.g. given Array:[21,54,11,35,4,18],  output Array: [4,18,21,54,11,35]

function rotateElements (){ 
    const arr = [21,54,11,35,4,18];
    let lastEl = arr.pop(); 
    let secondEl = arr.pop();
     arr.unshift(secondEl, lastEl)
    console.log(arr)
    return arr;
}
rotateElements ()

// (2) Write a program to display a Fibonacci series till 500.

//      e.g. 0
//             1
//             1
//             2
//             3
//             5
//             8
//            13
//            21
//              .
//              . and so on....  

function fibonacci (num) { 
    let arr = [];
    arr[0] = 0;
    arr[1] = 1;

    for(i=2;i<num;i++){
        arr[i]=arr[i-1]+arr[i-2];
    }
    return arr;

}

console.log(fibonacci(16))


// (3) Write a program to calculate the sum of digits of an integer.
//     e.g., Sum of digits of 357= 15

function sumOfDigits (num){ 
   let str = String(num).split("").map((num) =>{
       return Number(num)
   });
   let sum = 0;
   console.log(str);
   for(let i = 0; i < str.length; i++){ 
        sum += str[i];
        
   }

   return sum;
}
console.log(sumOfDigits(2568))