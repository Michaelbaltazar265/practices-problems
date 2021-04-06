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


const array1 = ['a', 'b', 'c'];

// array1.forEach(element => console.log(element));

const array2 = [1, 5, 7, 9 ,10];

// array2.forEach(e => console.log(e));

const emp_det=[
            {
                empid:'E001',
                name:'James',
                salary:4500
            },
            {
                empid:'E002',
                name:'John',
                salary:4700
            },
            {
                empid:'E003',
                name:'Alex',
                salary:4900
            },
            {
                empid:'E004',
                name:'Peter',
                salary:5100
            },
        ];

        emp_det.forEach(function(val){
                    //console.log(`Name=${val.name}, Salary=${val.salary}`);
                });

////////////////////////////////////////////////////////////////////////////////////////////////////

/// Map Method returning a entirely new array


    // emp_det.map(function(val){
    //     console.log(`Emp Id=${val.empid}, Salary=${val.salary * 2}`);
    // })