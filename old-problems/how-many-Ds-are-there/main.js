
// Create a function that counts how many D's are in a sentence.


function countDs(sentence) {
    let lowerCase = sentence.toLowerCase();
    let d = lowerCase.match(/d/g); 
    console.log('matching', d)
	return d.length;
} 

countDs("My friend Dylan got distracted in school.")
console.log(countDs("My friend Dylan got distracted in school."))
