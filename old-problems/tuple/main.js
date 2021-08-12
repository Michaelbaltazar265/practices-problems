


const tuple = (v) => { 
    const newArr = []; 
    const one = v[0];
    const two = v[2];
    const three = v[v.length - 2]; 
    newArr.push(one, two, three);
    return newArr;
}; 

// console.log(tuple([1, 2, 3, 4, 5, 6, 7, 9]))



function sumNumbers(test){
    // your code here
    const str = test.split(''); 
    
    for (let i = 0; i < str.length; i++) { 
        parseFloat(str[i])
        str[i]
          if (typeof Number(str[i]) === 'number' && Number(str[i]) > 0){ 
            str[i] += str[i];
            console.log(true);
            console.log( str[i])
            return str[i] += str[i]
          }
     
    
    
    }
    return str;
}

console.log('Example:');
// console.log(sumNumbers('hi'));
console.log(sumNumbers('my numbers is 2'))

// These "asserts" are used for self-checking
// assert.equal(sumNumbers('hi'), 0);
// assert.equal(sumNumbers('who is 1st here'), 0);
// assert.equal(sumNumbers('my numbers is 2'), 2);
// assert.equal(sumNumbers('This picture is an oil on canvas '
//  + 'painting by Danish artist Anna '
//  + 'Petersen between 1845 and 1910 year'), 3755);
// assert.equal(sumNumbers('5 plus 6 is'), 11);
// assert.equal(sumNumbers(''), 0);


function sumDigitsFromString(str) {
    let nums = [];
    let sum = 0;
  
    for (let i = 0; i < str.length; i++) {
      if (!isNaN(Number(str[i]))) {
        nums.push(Number(str[i]));
      }
    }
    console.log(nums);
    for (let i = 0; i < nums.length; i++) {
      sum += nums[i];
    }
    return sum;
  }
  
  // Test it
  // console.log(sumDigitsFromString("foo5bar6cat1"));


  function threeWords(text) {
    const word = text; 
    const arr = word.split(" ");
    let count = 0; 
    let answer;
    for (let i = 0; i < arr.length; i++){ 
        if (typeof arr[i] === "string"){ 
            count++
            if ( count >= 3){ 
                answer = true;
            } else { 
                answer = false;
            }
        }
    }
    return answer;
}

console.log('Example:')
console.log(threeWords("Hello World hello"))

// const str = 'The quick brown fox jumps over the lazy dog.';

// // const words = str.split(' ');
// // console.log(words[3]);
// // // expected output: "fox"

// // const chars = str.split('');
// // console.log(chars[8]);
// // expected output: "k"

// const strCopy = str.split();
// console.log(strCopy);