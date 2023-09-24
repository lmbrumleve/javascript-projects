function makeLine(size) {
    let line = '';
    for(i = 0; i < size; i++) {
    line += '#';
   }
   return line;
}
console.log(makeLine(5));

function makeSquare(size) {
    
    let square = '';
    let line = makeLine(size);
    
    for (i = 0; i < size; i++) {
      square += line + "\n";
    }
   
    return square;

}

console.log(makeSquare(5));

function makeRectangle(width, height) {
 
 let rectangle = '';
 let line = makeLine(width);

 for (i = 0; i < height; i++) {
 rectangle += line + "\n";
 
 }
   
 return rectangle;

}

console.log(makeRectangle(5, 3));


function makeSquare(size) {
    
    let square = makeRectangle(size, size);    

    return square;

}

console.log(makeSquare(5));


function makeDownwardStairs(height) {
   let downwardStairs = '';
   for (i = 0; i <= height; i++) {
   downwardStairs += makeLine(i) + "\n";

   }

    return downwardStairs;
}

console.log(makeDownwardStairs(5));


function makeSpaceLine(numSpaces, numChars) {
let spaces = makeLine(numSpaces).replaceAll("#", " ");
let chars = makeLine(numChars);
let spaceLine = spaces.concat(chars, spaces);
    return spaceLine;
}

console.log(makeSpaceLine(3, 5));

function makeIsoscelesTriangle(height) {
   let isoscelesTriangle = '';
    for(let i = 0; i < height; i++) {
     isoscelesTriangle += (makeSpaceLine((height - i - 1), (2 * i + 1)) + "\n");
    
    }

    return isoscelesTriangle;
}

console.log(makeIsoscelesTriangle(5));

function makeDiamond(height) {
    let diamond = '';
let invertedIsoscelesTriangle = "";
for (let i = height -2; i >= 0; i--) {
    invertedIsoscelesTriangle += (makeSpaceLine((height - i - 1), (2 * i + 1)) + "\n");
    diamond = makeIsoscelesTriangle(height).concat(invertedIsoscelesTriangle);
}

return diamond;

}

console.log(makeDiamond(5));