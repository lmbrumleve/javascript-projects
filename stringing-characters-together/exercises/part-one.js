/*let num = 1001;

//Returns 'undefined'.
console.log(num.length);

//Use type conversion to print the length (number of digits) of an integer.
num = String(num);
console.log(num.length);
*/

//Follow up: Print the number of digits in a DECIMAL value (e.g. num = 123.45 has 5 digits but a length of 6).
num = 12345
num = String(num);

numDecimalLength = (num.length - 1);
numDecimalLength = String(numDecimalLength);

console.log(num.length);
console.log(numDecimalLength);


//Experiment! What if num could be EITHER an integer or a decimal?  Add an if/else statement so your code can handle both cases.
if (num.indexOf(".") === -1) {
    console.log(num.length);
} else {
    console.log(numDecimalLength);
}

/* Textbook Solution:
if (String(num).includes('.')){
    console.log(String(num).length-1);
    } else {
    console.log(String(num).length);
    }

    */