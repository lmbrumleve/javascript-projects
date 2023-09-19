const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.

let str1 = str.slice(3);
let str2 = str.slice(0,3);

// console.log(str1);
// console.log(str2);

let strPigLatin3 = str1.concat(str2);

console.log(strPigLatin3);

//Use a template literal to print the original and modified string in a descriptive phrase.

console.log(`Pig Latin for '${str}' is '${strPigLatin3}'.`);

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.

let userAnswer = input.question("How many letters will be relocated?");

let strUserAnswer1 = str.slice(Number(userAnswer));
let strUserAnswer2 = str.slice(0, Number(userAnswer));

let strPigLatinUserAnswer = strUserAnswer1.concat(strUserAnswer2);
// console.log(strPigLatinUserAnswer);


//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.

if (Number(userAnswer) > 10) {
    console.log(`Error. LaunchCode only has 10 characters. Pig Latin for '${str}' is '${strPigLatin3}'.`);
} else {
    console.log(`Pig Latin for '${str}' with ${userAnswer} relocated letters is '${strPigLatinUserAnswer}'.`);
}