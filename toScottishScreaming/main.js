function toScottishScreaming(str) {
  var withoutVowels = "";
  const replacement = "e";
  for (var i = 0; i < str.length; i++) {
    if (!isVowel(str[i])) {
      withoutVowels += str[i];
    } else {
      withoutVowels += replacement;
    }
  }
  return withoutVowels.toUpperCase();
}

function isVowel(char) {
  return "aeiou".includes(char);
}

console.log(toScottishScreaming("michael"));

function fizzbuzz(n) {
  let result;

  if (n % 3 === 0) {
    result = "Fizz";
    return result;
  } else if (n % 5 === 0) {
    result = "Buzz";
    return result;
  } else if ((n % 3 === 0) & (n % 5 === 0)) {
    result = "FizzBuzz";
    return result;
  }

  return result;
  //
}

function firstNonRepeatingLetter(s) {
  // Add your code here
  const splitWord = s.split("");
  // console.log(splitWord);
}

firstNonRepeatingLetter("michi");

/// Roman Numerals Encoder

function solution(number) {
  // convert the number to a roman numeral
  const threeList = ["I", "II", "III"];

  for (let i = 0; i < threeList.length; i++) {
    const one = threeList.length - 2;
    const two = threeList.length - 1;
    const three = threeList.length;
    if (one === number) {
      console.log("one");
    }
  }

}

  // solution(1)

  function solutionTwo(num) {
    const roman = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    };

    let str = "";
    for (var i of Object.keys(roman)) {
      var q = Math.floor(num / roman[i]);
      num -= q * roman[i];
      str += i.repeat(q);
    }
    return str;
  }


solutionTwo(88);
