let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.

foodArray = food.split(',').sort();
equipmentArray = equipment.split(',').sort();
petsArray = pets.split(',').sort();
sleepAidsArray = sleepAids.split(',').sort();

//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.

cargoHold = [foodArray, equipmentArray, petsArray, sleepAidsArray];

console.log(cargoHold);


//3) Query the user to select a cabinet (0 - 3) in the cargoHold.
const input = require('readline-sync');
let userAnswer = input.question("Select a cabinet (0-3) in the cargoHold.");

//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.

/*
if ((userAnswer < 0) || (userAnswer > 3) || (userAnswer.includes('.') === true) === true) {
    console.log("ERROR: INVALID NUMBER");
} else {
    console.log(cargoHold[Number(userAnswer)]);
}
*/

//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”

// let particularItem = input.question("Enter a particular item from the cargo hold:")

// if (((userAnswer < 0) || (userAnswer > 3) || (userAnswer.includes('.') === true) === false) 
// && (cargoHold[Number(userAnswer)].includes(particularItem) === true)) {
//     console.log(`Cabinet ${userAnswer} does include ${particularItem}`);
// } else {
//     console.log("ERROR: INVALID NUMBER");
// }

let item = ""

if ((userAnswer < 0) || (userAnswer > 3) || (userAnswer.includes('.') === true) === true) {
    console.log("ERROR: INVALID NUMBER");

} else if ((userAnswer < 0) || (userAnswer > 3) || (userAnswer.includes('.') === true) === false) {
    console.log(cargoHold[Number(userAnswer)]);
    item = input.question("Enter a particular item from the cargo hold:");


        if (cargoHold[Number(userAnswer)].includes(item) === true) {
            console.log(`Cabinet ${userAnswer} does include ${item}.`);
        } else {
             console.log("ERROR");
        }
    }