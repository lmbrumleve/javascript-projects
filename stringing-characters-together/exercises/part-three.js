//Part Three section one

let language = 'JavaScript';

//1. Use string concatenation and two slice() methods to print 'JS' from 'JavaScript'

console.log(language.slice(0,1) + language.slice(4,5));

//2. Without using slice(), use method chaining to accomplish the same thing.

let initials = language.charAt(0).concat("", language.charAt(4));
console.log(initials);

//3. Use bracket notation and a template literal to print, "The abbreviation for 'JavaScript' is 'JS'."

// console.log(`The abbreviation for '${language}' is '${language[0]}${language[4]}'.`);
console.log(`The abbreviation for '${language}' is '${initials}'.`);

//4. Just for fun, try chaining 3 or more methods together, and then print the result.

console.log(language.slice(4).charAt(2).toUpperCase());

//Part Three section Two

//1. Use the string methods you know to print 'Title Case' from the string 'title case'.

let notTitleCase = 'title case';
//let Title = notTitleCase.charAt(0).toUpperCase().concat("", notTitleCase.slice(1, 6));
// console.log(Title);
//let Case = notTitleCase.charAt(6).toUpperCase().concat("", notTitleCase.slice(7));
// console.log(Case);

//console.log(Title.concat("", Case));

//console.log(`${notTitleCase.charAt(0).toUpperCase()}${notTitleCase.slice(1, 6)}${notTitleCase.charAt(6).toUpperCase()}${notTitleCase.slice(7)}`);

console.log(notTitleCase.replace("t", "T").replace("c", "C"));
