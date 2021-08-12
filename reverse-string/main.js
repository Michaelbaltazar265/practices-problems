
// 1st way to reverse a string 

const reverseString = (str) => { 
    let splitString = str.split("");
    let reverseArr = splitString.reverse();
    let joinArr = reverseArr.join("");

    return joinArr;

}

console.log(reverseString("Hello"))


/// 2nd reverse a string

const reverseTwo = (str) => { 
    let newStr = ""; 
    for(let i = str.length -1; i >= 0; i--){ 
        newStr += str[i];
    } 

    return newStr
}

console.log(reverseTwo("hello Michael"))