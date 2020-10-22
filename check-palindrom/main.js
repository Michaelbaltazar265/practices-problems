
function checkPalindrome(str){ 
    const half = Math.floor(str.length / 2); 
    for (let i = 0; i < half; i++){ 
        if (str[i] !== str[str.length - i - 1]){ 
            
            return false 
        }else{ 
            return true
        }
    }
} 

console.log("What is eye",checkPalindrome("eye")); 
console.log("what is civic", checkPalindrome('civic'));
console.log('what is racecar', checkPalindrome('racecar'));
console.log('what is michael', checkPalindrome('michael'));
console.log('what is rar', checkPalindrome('rar'))