// isInRange(4, { min: 0, max: 5 }) ➞ true

// isInRange(4, { min: 4, max: 5 }) ➞ true

// isInRange(4, { min: 6, max: 10 }) ➞ false

// isInRange(5, { min: 5, max: 5 }) ➞ true 

function isInRange(num, range) {
    const min = range.min; 
    const max = range.max; 
    var boo;
    if ( min <= num && max >= num){ 
        boo = true;
        
        return boo; 
    } else { 
        boo = false; 
        return boo;
    }
    return boo; 
} 
