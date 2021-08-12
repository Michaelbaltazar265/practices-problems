
// console.log("Hellol")

//Variable hoisting
//  num=15;
// console.log(num);
// var num;

// num=15;
// console.log(num);
// let num;

// num=15;
// console.log(num);
// const num=10;

//Unary Operator (Increment and Decrement)
//Increment
//Pre-Increment

// let num=5,num1=9;
// num=++num1;
// console.log("num="+num);
// console.log("num1="+num1);

//Post-Increment

// let num=5,num1=9;
// num=num1++;
// console.log("num="+ num);
// console.log("num1="+ num1);

// function calculate()
// {
//         let num=5;
//         num+=5; //num=num+5
//         console.log(num);
//         num-=5; //num=num-5
//         console.log(num);
//         num*=5; //num=num*5
//         console.log(num);
//         num/=5; //num=num/5
//         console.log(num);
//         num%=5; //num=num%5
//         console.log(num);
// }
// calculate();

// console.log("10 % 5 " ,20000 % 5); 


///////// ---- > Day 2    < ----------

//Pre-Decrement

// let num= -5, num1= -9;
// console.log(num)
// num=--num1;
// // num = num1 - 1 ;
// console.log(" pre num=" + num);
// console.log(" pre num1=" + num1);

//Post-Decrement

// let num=-5,num1=-9;
// num=num1--;
// console.log("Post num="+num);
// console.log("Post num1="+num1);


//Ternary Operator

// let val=-200,res;
// res=(val>=0)?val:(-val);
// console.log(res);

//Case I
// let x=5,y=2,z=7;
// z=(x>=3)?(y<5)?(x+5):(y-7):(z-8);
// console.log("z="+z);

//Case II
// let x=5,y=2,z=7;
// z=(x>=3)?(y>5)?(x+5):(y-7):(z-8);
// console.log("z="+z);

//Case III
// let x=5,y=2,z=7;
// z=(x==3)?(y>5)?(x+5):(y-7):(z-8);
// console.log("z="+z);

//Relational Operators (Boolean operator)
// Equals to ==
// Not Equal !=
// Greater than >
// Less than <
// Greater than or equals to >=
// Less than or equals to <=

// let num=15,num1=25,res;
// res=(num==num1);
// console.log(res);
// res=(num!=num1);
// console.log(res);
// res=(num>num1);
// console.log(res);
// res=(num<num1);
// console.log(res);
// res=(num>=num1);
// console.log(res);
// res=(num<=num1);
// console.log(res);

//Logical Operators (Boolean Operators)
// AND &&
// OR ||
// NOT !

//AND (&&)
// TRUE && TRUE -->TRUE
// TRUE && FALSE -->FALSE
// FALSE && TRUE -->FALSE
// FALSE && FALSE -->FALSE

//OR (||)
// TRUE && TRUE -->TRUE
// TRUE && FALSE -->TRUE
// FALSE && TRUE -->TRUE
// FALSE && FALSE -->FALSE

//NOT (!)
// ! TRUE --> FALSE
// ! FALSE -->TRUE

// let num=15,num1=25,res;
// res=(num==num1) && (num>5);
// console.log(res);
// res=(num!=num1) || (num1>=num);
// console.log(res);
// res=!(num>num1);
// console.log(res);

//Conditional construct (if...else)

// function display()
// {
//     let num=5;
//     if(num>=2)
//     {
//         console.log("A");
//     }
//     else
//     {
//         console.log("B");
//     }
// }
// display();

// function display()
// {
//     let num=5;
//     if(num>=2)
//     console.log("A");
//     console.log("B");
//     console.log("C");
// }
// display()

// function display()
// {
//     let num=5;
//     if(num==2)
//     console.log("A");
//     console.log("B");
//     console.log("C");
// }
// display()

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

function display()
{
    let n=5;
    if(n > 1)
    console.log("A");
   // console.log("C"); //seems as a unreachable statement and will result in an error
    else
    console.log("B");
    console.log("C")
}
display()

// function display()
// {
//     let num=5;
//     if(num==6)
//     console.log("A");
//    // console.log("C"); //seems as a unreachable statement and will result in an error
//     else
//     console.log("B");
//     console.log("C");
// }
// display()

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

// Conditional construct (switch case)

// function display()
// {
//     let num=3;
//     switch(num)
//     {
//         case 1:
//             console.log("A");   
//             break;
//         case 2:
//             console.log("B");
//             break;
//         case 3:
//             console.log("C");
//             break;
//         default:
//             console.log("Invalid!");
//             break;
//     }
// }
// display()

// function display()
// {
//     let num=3;
//     switch(num)
//     {
//         case 1:
//             console.log("A");   
//         case 2:
//             console.log("B");
//         case 3:
//             console.log("C");
//         default:
//             console.log("Invalid!");
//     }
// }
// display() 

function display (){ 
let name = "James", num= 4;

switch(num)
{ 
    case 1: 
        name.repeat(num);
        break;

        case 2: 
        name.repeat(num);
        break; 

        case 3:
        name.repeat(num);
        break;

}

}
