function makeLine(size, character = "#") {
    let line = '';
    for(i = 0; i < size; i++) {
    line += String(character);
   }
   return line;
}

console.log(makeLine(5, "o"));


function makeRectangle(width, height, character = "#") {
 
 let rectangle = '';
 let line = makeLine(width, character);

 for (i = 0; i < height; i++) {
 rectangle += line + "\n";
 
 }
   
 return rectangle;

}

console.log(makeRectangle(5, 3, "o"));


function makeSquare(size, character = "#") {
    
    let square = makeRectangle(size, size, character);    

    return square;

}

console.log(makeSquare(5, "o"));


function makeDownwardStairs(height, character = "#") {
   let downwardStairs = '';
   for (i = 0; i <= height; i++) {
   downwardStairs += makeLine(i, character).replaceAll(i, character) + "\n";

   }

    return downwardStairs;
}

console.log(makeDownwardStairs(5, "o"));


function makeSpaceLine(numSpaces, numChars, character = "#") {
let spaces = makeLine(numSpaces).replaceAll("#", " ");
let chars = makeLine(numChars, character);
let spaceLine = spaces.concat(chars, spaces);
    return spaceLine;
}

console.log(makeSpaceLine(3, 5, "o"));

function makeIsoscelesTriangle(height, character = "#") {
   let isoscelesTriangle = '';
    for(let i = 0; i < height; i++) {
     isoscelesTriangle += (makeSpaceLine((height - i - 1), (2 * i + 1)).replaceAll("#", character) + "\n");
    }

    return isoscelesTriangle;
}

console.log(makeIsoscelesTriangle(5, "o"));

function makeDiamond(height, character = "#") {  
    let diamond = '';
    let invertedIsoscelesTriangle = "";
for (let i = height -2; i >= 0; i--) {
        invertedIsoscelesTriangle += (makeSpaceLine((height - i - 1), (2 * i + 1)).replaceAll("#", character) + "\n");

    diamond = makeIsoscelesTriangle(height, character).concat(invertedIsoscelesTriangle);
}

return diamond;

}

console.log(makeDiamond(5, "o"));