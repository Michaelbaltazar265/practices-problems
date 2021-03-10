
function squaed(b) {
	return b * b
}

// console.log(squaed(10))



const is21 = (num) => { 
	
	if (num > 21 ){ 
		return "is over 21"
	} else return "not old enough"
} 
// vkfdvmsv 

const repeatString = function(string, num) {
	const str = string;
	return str.repeat(num);
		
	} 

	repeatString('hey', 3) 

// 	console.log(repeatString('hey', 3))
// 	console.log(repeatString('Mike', 3))
// 	console.log(repeatString('yes', 8))
// 	console.log(repeatString('lilly', 15)) 

// 	console.log("michael" || "wrld")
// console.log("foo" && "bar")

for (var i = 0; i <= 20; i++) {
	//console.log(i)
//	setTimeout(() => console.log(i), 1000)
  }


  for(var i = 1; i < 6; i++) {
	setTimeout(function() {
	   console.log(i);
	},1000);
  }
  console.log('The loop is done!');


  for (var i=1; i < 101; i++){
    if (i % 15 == 0) console.log("FizzBuzz");
    else if (i % 3 == 0) console.log("Fizz");
    else if (i % 5 == 0) console.log("Buzz");
    else console.log(i);
}