//Array functions

//map() and forEach()
// function display()
// {
//     const emp_det=[
//         {
//             empid:'E001',
//             name:'James',
//             salary:4500
//         },
//         {
//             empid:'E002',
//             name:'John',
//             salary:4700
//         },
//         {
//             empid:'E003',
//             name:'Alex',
//             salary:4900
//         },
//         {
//             empid:'E004',
//             name:'Peter',
//             salary:5100
//         },
//     ]

//     emp_det.map(function(val){
//         console.log(`Emp Id=${val.empid}, Salary=${val.salary}`);
//     })

//     emp_det.forEach(function(val){
//         console.log(`Name=${val.name}, Salary=${val.salary}`);
//     })

//     display();
    

    //Arrow function

    //emp_det.map(val=>console.log(`Emp Id=${val.empid}, Salary=${val.salary}`))

    //emp_det.forEach(val=>console.log(`Name=${val.name}, Salary=${val.salary}`))

    //Difference between map and forEach

    // emp=emp_det.map(function(val){
    //     return `Emp Id=${val.empid}, Salary=${val.salary}`;
    // })

    // emp.map(function(val){
    //     console.log(val)
    // })


    //Will return an error (Cannot read property 'forEach' of undefined)
    // emp=emp_det.forEach(function(val){
    //     return `Emp Id=${val.empid}, Salary=${val.salary}`;
    // })

    // emp.forEach(function(val){
    //     console.log(val)
    // })

    // emp=emp_det.map(function(val){
    //     return `Emp Id=${val.empid}, Salary=${val.salary+(val.salary*5)/100}`;
    // })

    // emp.forEach(function(val){
    //     console.log(val)
    // })

// }
// display();

//reduce()

// function display()
// {
//     let num=[10,20,30,40,50],sum=0;

    // for(i=0;i<num.length;i++)
    // {
    //     sum=sum+num[i];
    // }

    // console.log("Sum="+sum);

    // sum=num.reduce(function(res,val){
    //     return res+val;
    // },0)

    // console.log("Sum="+sum);

//     sum=num.reduce((res,val)=>res+val,0)

//     console.log("Sum="+sum);
// }
// display();

//filter()

// function display()
// {
//     let num=[10,20,30,40,50];

//     new_num=num.filter(function(val){return val>=30})

//     //console.log(new_num);

//     //for of loop
//     for(x of new_num)
//     {
//         console.log(x)
//     }
    
// }
// display();

// function display()
// {
//     while('Fernando')
//     console.log('Hi everyone!');
// }
// display();

//push(), pop(), shift(), unshift()

// function display()
// {
//     let num=[10,20,30,40,50];

//     num.push(500)

//     for(x of num)
//     {
//         console.log(x)
//     }

//     num.pop()

//     for(x of num)
//     {
//         console.log(x)
//     }

//     num.shift()

//     for(x of num)
//     {
//         console.log(x)
//     }

//     num.unshift(800)

//     for(x of num)
//     {
//         console.log(x)
//     }
// }
// display()

//slice() and splice()

// function display()
// {
//     let num=[10,20,30,40,50];

//     new_num=num.slice(2,4)

//     // for(x of num)
//     // console.log(x)

//     for(x of new_num)
//     console.log(x)
// }
// display();

// function display()
// {
//     let num=[10,20,30,40,50];

//     //num.splice(2,3);

//     num.splice(2,2);

//     for(x of num)
//     console.log(x)
// }
// display();

//sort

// function display()
// {
//     let num=[85,20,30,10,50];

//     // sorted_num=num.sort(function(a,b){
//     //     if(a<b)
//     //     {
//     //         return 1;
//     //     }
//     //     else{
//     //         return -1;
//     //     }
//     // })


//     sorted_num=num.sort(function(a,b){
//         if(a>b)
//         {
//             return 1;
//         }
//         else{
//             return -1;
//         }
//     })

//     for(x of sorted_num)
//     console.log(x);
// }
// display();

// function display()
// {
//     let num=[85,20,30,10,50],temp;

//     for(i=0;i<num.length;i++)
//     {
//         for(j=i+1;j<num.length;j++)
//         {
//             if(num[i]>num[j])
//             {
//                 temp=num[i];
//                 num[i]=num[j];
//                 num[j]=temp;
//             }
//         }
//     }

//     for(x of num)
//     console.log(x)
// }
// display();

// function display()
// {
//     // let x=-2,y=-9,z=-4,p=-6;
//     // console.log(p-x)
//     // p=(x<y)?(y>x)?(x>p)?(x-y):(y-p):(z-x):(p-x);
//     // console.log(p);

// //     let x=5, y=4, z=8, p=12;
// //     p = (x > y) ? (y> x) ?(x > p) ? (x-y) : (y-p) : (z-x) : (p-x);
// //    console.log(p)

//    let x=10, y=8, z=11, p=3;
//     p = (x > y) ? (y> x) ?(x > p) ? (x-y) : (y-p) : (z-x) : (p-x);
//    console.log(p)
    
    
//  }
// display()
// console.log("hello");

/////////////////////////////////////////   /////////////////////////////////////////



/// forEach method - changes the original Array 


// const array1 = ['a', 'b', 'c'];

// // array1.forEach(element => console.log(element));

// const array2 = [1, 5, 7, 9 ,10];

// // array2.forEach(e => console.log(e));

// const emp_det=[
//             {
//                 empid:'E001',
//                 name:'James',
//                 salary:4500
//             },
//             {
//                 empid:'E002',
//                 name:'John',
//                 salary:4700
//             },
//             {
//                 empid:'E003',
//                 name:'Alex',
//                 salary:4900
//             },
//             {
//                 empid:'E004',
//                 name:'Peter',
//                 salary:5100
//             },
//         ];

//         emp_det.forEach(function(val){
//                     //console.log(`Name=${val.name}, Salary=${val.salary}`);
//                 });

////////////////////////////////////////////////////////////////////////////////////////////////////

/// Map Method returning a entirely new array


    // emp_det.map(function(val){
    //     console.log(`Emp Id=${val.empid}, Salary=${val.salary * 2}`);
    // })

    // function display(){ 
    //     let x = 0;
    //     while (x <= 10){ 
    //         x++
            
    //         if (x < 5)
    //         // console.log(x);
    //         continue;
    //         console.log("after the continue",x);
    //     }
        
    // }

    // display() 

//     function display()
// {
//     let x=2,y=9,z=4,p=6;
//     p-=(x>y)?(y>x)?(x>p)?(x-y):(y-p):(z-x):(p-x);
//     console.log(p);
// }
// display(); 


/////////////////////////////////////////////////////////////////////////////////////////////////////////

//Other Higher order functions
//setTimeout

// const emp_det=[
//     {empid:'E001',name:'John',dept:'IT',sal:4000},
//     {empid:'E002',name:'Sam',dept:'SALES',sal:4500},
//     {empid:'E003',name:'Mac',dept:'MKTG',sal:5200},
//     {empid:'E004',name:'James',dept:'ADMIN',sal:5800}
// ];

// function demo()
// {
//     setTimeout(function(){
//         emp_det.forEach(function(val){
//             console.log(`Emp Id=${val.empid},Salary=${val.sal}`)
//         })
//     },5000)
// }
// demo();

// const emp_det=[
//     {empid:'E001',name:'John',dept:'IT',sal:4000},
//     {empid:'E002',name:'Sam',dept:'SALES',sal:4500},
//     {empid:'E003',name:'Mac',dept:'MKTG',sal:5200},
//     {empid:'E004',name:'James',dept:'ADMIN',sal:5800}
// ];

// //  function demo()
// {
//     setTimeout(function(){
//         let values='';
//         emp_det.forEach(function(val){
//             values+=`EmpId=${val.empid}, Name=${val.name}, Dept=${val.dept}, Salary=${val.sal}`
//             values+="<br>";
//         })
//         document.getElementById('p1').innerHTML+=values;
//     },5000)
// }

// const emp_det=[
//     {empid:'E001',name:'John',dept:'IT',sal:4000},
//     {empid:'E002',name:'Sam',dept:'SALES',sal:4500},
//     {empid:'E003',name:'Mac',dept:'MKTG',sal:5200},
//     {empid:'E004',name:'James',dept:'ADMIN',sal:5800}
// ];

// function demo()
// {
//     setTimeout(()=>{
//         let values='';
//         emp_det.forEach((val)=>{
//             values+=`EmpId=${val.empid}, Name=${val.name}, Dept=${val.dept}, Salary=${val.sal}`
//             values+="<br>";
//         })
//         document.getElementById('p1').innerHTML+=values;
//     },5000)
// }

// function add_det(det)
// {
//     setTimeout(()=>
//         emp_det.push(det),3000
//     )
// }

// add_det({empid:'E005',name:'Peter',dept:'IT',sal:6200})

// const emp_det=[
//     {empid:'E001',name:'John',dept:'IT',sal:4000},
//     {empid:'E002',name:'Sam',dept:'SALES',sal:4500},
//     {empid:'E003',name:'Mac',dept:'MKTG',sal:5200},
//     {empid:'E004',name:'James',dept:'ADMIN',sal:5800}
// ];

// function demo()
// {
//     setTimeout(()=>{
//         let values='';
//         emp_det.forEach((val)=>{
//             values+=`EmpId=${val.empid}, Name=${val.name}, Dept=${val.dept}, Salary=${val.sal}`
//             values+="<br>";
//         })
//         document.getElementById('p1').innerHTML+=values;
//     },2000)
// }

// function add_det(det)
// {
//     setTimeout(()=>
//         emp_det.push(det),8000
//     )
// }

// add_det({empid:'E005',name:'Peter',dept:'IT',sal:6200})

//Callback
// const emp_det=[
//     {empid:'E001',name:'John',dept:'IT',sal:4000},
//     {empid:'E002',name:'Sam',dept:'SALES',sal:4500},
//     {empid:'E003',name:'Mac',dept:'MKTG',sal:5200},
//     {empid:'E004',name:'James',dept:'ADMIN',sal:5800}
// ];

// function demo()
// {
//     setTimeout(()=>{
//         let values='';
//         emp_det.forEach((val)=>{
//             values+=`EmpId=${val.empid}, Name=${val.name}, Dept=${val.dept}, Salary=${val.sal}`
//             values+="<br>";
//         })
//         document.getElementById('p1').innerHTML+=values;
//     },2000)
// }

// function add_det(det,callback)
// {
//     setTimeout(()=>{
//         emp_det.push(det);
//         callback();
//     },3000)
// }

// add_det({empid:'E005',name:'Peter',dept:'IT',sal:6200},demo);

//Promise
// const emp_det=[
//     {empid:'E001',name:'John',dept:'IT',sal:4000},
//     {empid:'E002',name:'James',dept:'SALES',sal:4200},
//     {empid:'E003',name:'Sam',dept:'ADMIN',sal:4400},
//     {empid:'E004',name:'Mac',dept:'MKTG',sal:4800}
// ];

// function demo()
// {
//     setTimeout(()=>{
//         let values='';
//         emp_det.forEach((val)=>{
//             values+=`EmpId=${val.empid},Name=${val.name}, Dept=${val.dept}, Salary=${val.sal}<br>`
//         })
//         document.getElementById('p1').innerHTML+=values;
//     },2000)    
// }


// function add_det(det)
// {
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             emp_det.push(det);
//             const error=false;
//             if(!error)
//             {
//                 resolve();
//             }           
//             else
//             {
//                 reject('Erroneous situation');
//             }
//         },3000)       
//     })
// }

// add_det({empid:'E005',name:'Peter',dept:'IT',sal:5200})
// .then(demo)
// .catch(err=>console.log(err))

//Miscellaneous

// function display()
// {
//     let x=-5,y=-4,p=-2;
//     console.log(x++,++x,y++,++x,++y,p++,--p,++p,--x);
// }
// display();

//-5,-3,-4,-2,-2,-2,-2,-1,-3

// x=-2
// y=-2
// p=-1

// function display()
// {
//     let x=0;
//     while(x<=10)
//     {
//     console.log(x)
//     if(x<5)
//         continue;
//     }
//     x++;
// }
// display();

// sum=0;
// for(x=1;x<=5;x++)
// {
//     if(x<4)
//     {
//         continue;
//     }
//     sum=sum+x;
// }
// console.log(sum);

// function display()
// {
//     let x=0;
//     while(x<=10)
//     {
//     x++;
//     if(x<5)
    
//         continue;
//      console.log(x)
//     }
// }
// display();



// function display()
// {
//     let x=-2,y=-9,z=-4,p=-6;
//     p-=(x>y)?(y>x)?(x>p)?(x-y):(y-p):(z-x):(p-x);
//     console.log(p);
// }
// display();


// function display() { 
//     let x = 2, y = 10, z = 4;
//     let p = (z > x) ? (y < x) ? (y > z) : (x + z) : (y + z);
//     console.log(`P is ${p}`);
// }
// ////// 6
// display()

//Increment
//Pre-Increment

// let num=5,num1=9;
// num=++num1;
// console.log("num="+num);
// console.log("num1="+num1);

// //Post-Increment

// let num2=5,num3=9;
// // num2= ++num3
// num2=num3++;
// console.log("num2="+ num2);
// console.log("num3="+ num3);


///////////////////////////////////////////////////////////////////////////////////////////////////


// gettting ready for the test on friday 

// 1) Given an unsorted array a = [3,1,5,2,7], 
//    find alternate elements "3,5,7", reverse them "7,5,3" and 
//    place them in the original array
//    Expected result [7,1,5,2,3]

// function arrUnsort (arr){ 
//     let lastEl = arr.pop(); 
//     let firstEl = arr.shift(); 
//     arr.push(firstEl);
//      arr.unshift(lastEl);
//      console.log(arr);
//      return arr;
// }
// arrUnsort([3,1,5,2,7]) 

// (3) Given a sorted array with the duplicates, move all the distinct elements to the front.

// arr[] = [1, 2, 2, 3, 4, 4, 4, 4, 5, 6, 6]


// output:

// arr[] = [1, 2, 3, 4, 5, 6, ..........] 

// function removeDuplicates(array) {
//     const newArr = array.filter((a, b) => array.indexOf(a) === b);
//     console.log(newArr.length);
//     return newArr;
//   };
//   console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 4, 4, 5, 6, 6]))
//   console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 4, 4, 5, 6, 6, 7,8,4,7,9]))

// var arr = [  [1,2,6], [3,4,9], [5,6,8]];for (var i=0; i < arr.length; i++) {
//     console.log(arr[i]);}

// const array = ['🐑', 1, 2, '🐑', '🐑', 3, 7, 12, 2, 3 ,0];

// const ex = array.filter((item, index) => {
//   console.log(
//     // a. Item
//     item,
//     // b. Index
//     index,
//     // c. indexOf
//     array.indexOf(item),
//     // d. Condition
//     array.indexOf(item) === index,
//   );
//   return array.indexOf(item) === index;
// });

// console.log(ex); 




// (4)  Given a sorted array and a key, find the two numbers whose sum is equal to the given key.

// arr = [1, 3, 4, 5, 7, 8]

// key = 10 

// function twoSum(arr, target_num) {
//     var map = [];
//     var indexnum = [];
    
//     for (var i = 0; i < arr.length; i++)
//     {
//     if (map[arr[i]] != null)
//     {
//     var index = map[arr[i]];
//     indexnum[0] = index;
//     indexnum[1] = i;
//     break;
//     }
//     else
//     {
//     map[target_num - arr[i]] = i;
//     }
//     }
//     return indexnum;
//     }
//   console.log(twoSum([10,20,10,40,50,60,70],50));
//   console.log(twoSum([1, 3, 4, 5, 7, 8],10)); 


  ////////////////////////////////////////////////////////////////////////

// (2) Out of the given 3 arrays with n number of elements, 
// find out the common element(s) for all 3 arrays.
// var arrays  = [
//     [1,4,6,78,8,9,124,44],
//     [44,6,9,1],
//     [124,44,1,16,9]
// ]

// var findCommonElements= function(arrs) {
//     var resArr = [];
//     for (var i = arrs[0].length - 1; i > 0; i--) {


//         for (var j = arrs.length - 1; j > 0; j--) {
//             if (arrs[j].indexOf(arrs[0][i]) == -1) {
//                 break;
//             }
//         }

//         if (j === 0) {
//             resArr.push(arrs[0][i]);
//         }


//     }
//     return resArr;
// } 


// console.log(findCommonElements(arrays))


// Done
// 5
// 54
// 543
// 5432
// 54321

// fiveAndDown works 
// function fiveAndDown (){  
//     let output = '';
//     for (var i = 5; i >= 1; i--) {
//         for (var j = 5; j >= i; j--) {
//             output += j + '';
//         }
//         console.log(output);
//         output = '';
//     } 
//   }
//   fiveAndDown()
// -----------------
// 12345
// 1234
// 123
// 12
// 1



// --------------------
// 54321
// 5432
// 543
// 54
// 5

function reverseOrder (){ 
    let output = '';
    var i, j;
    for(i=5; i>=1; i--)
    {
     for(j=i; j>=1; j--)
    //   document.write(j);
    //  document.write("<br>");
     output += j + ' ';
     console.log(output)
    }
    console.log("\n")
}
reverseOrder()
// --------------------

// Done
// 1
// 2
// 4
// 3
// 5
// count worksß
// function count (){ 
//     for (let i = 1; i < 6; i++){ 
//         console.log(i)
//     }
// }
// count()


// ---------
// 1234567
// 12345
// 123
// 1
// ------------------

// Done
// 1
// 123
// 12345
// 1234567
// count7 works ß
// function count7 (){ 
  
    
//     let output = '';
//     for (var i = 1; i <= 7; i++) {
//         for (var j = 1; j <= i; j++) {
//             output += j + '';
//         }
//         console.log(output);
//         output = '';
//     }
      
//   }
//   count7()


let str2 = "";

            for(let i = 1; i < 8; i++ ){
                for(let j = 1; j < 8; j++){
                    if(i <= j ){
                        str2 = str2.concat(j);
                    }else{
                        str2 = str2.concat(" ")
                    }
                }
                str2 = str2.concat("\n")
            }

            console.log(str2)

