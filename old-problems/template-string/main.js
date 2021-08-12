// Write a template string according to the following example:
// const a = "John";
// const b = "Joe";
// const c = "Jack";
// const template = "your template string" ➞ "Their names were: 

// modify the template variable to be a template string 
function format(a, b, c) {
    // the result string must give: "Their names were: a, b and c."
        const template = `Their names were: ${a}, ${b} and ${c}.`
        return template
    } 

    console.log(format("John", "Michael", "Mary"))