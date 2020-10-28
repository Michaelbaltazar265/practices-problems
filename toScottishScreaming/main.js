

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
   const vowels = ['a', 'i', 'o', 'u'];
   return vowels.includes(char);
}
  
  console.log(toScottishScreaming('michael'));