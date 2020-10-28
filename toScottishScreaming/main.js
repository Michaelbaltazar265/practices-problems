

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
   return 'aeiou'.includes(char);
}
  
  console.log(toScottishScreaming('michael'));