let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautID: 1,
   move: function () {
     return Math.round(Math.random()*10);
   }
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautID: 2,
   move: function () {
      return Math.round(Math.random()*10);
   }
};

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   astronautID: 3,
   move: function () {
      return Math.round(Math.random()*10);
   }
};

let dog = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   astronautID: 4,
   move: function () {
      return Math.round(Math.random()*10);
   }
};

let waterBear = {
   name: "Almina",
   species: "Axolotl Salamander",
   mass: 0.0000000001,
   age: 1,
   astronautID: 5,
   move: function () {
    return Math.round(Math.random()*10);
   }
};

let crew = [superChimpOne, salamander, superChimpTwo, dog, waterBear];



// After you have created the other object literals, add the astronautID property to each one.

// Create an array to hold the animal objects.

// Print out the relevant information about each animal.

// Start an animal race!

function crewReports(object) {
   console.log(`${object.name} is a ${object.species}. They are ${object.age} years old and ${object.mass} kilograms. Their ID is ${object.astronautID}.`);
};

// crewReports(superChimpOne);

function fitnessTest(arr) {
   numTurns = [];
   for(j=0; j<arr.length; j++){
      i=0
      let value = 0;
      while(value < 20) {
         value += arr[j].move();
         // console.log(value);
         i++
      }
      // console.log(i);
      numTurns.push(`${crew[j].name} took ${i} turns to take 20 steps.`);
   }
   return console.log(numTurns);
}

fitnessTest(crew);

