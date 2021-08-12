
        //account-number-protector 
        // define a function with one argument creditcardnum
        // create a variable with the string "**"
        // create a variable that substring from the arguement with using the substring method
        

        function accountNumberProtector (creditcardnum){ 
            let twoStars = "**"; 
            let creditnumberSplit = creditcardnum.substring(creditcardnum.length - 4);
            return twoStars + creditnumberSplit;
            

        }
        console.log (accountNumberProtector("5543223485638832")) 
        console.log ( accountNumberProtector("8934235477210943")) 
        console.log ( accountNumberProtector("7513635499320192"))
