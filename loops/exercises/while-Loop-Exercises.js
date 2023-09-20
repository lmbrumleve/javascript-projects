//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.

const input = require('readline-sync');
let fuelStartingLevel = input.question('What is the starting fuel level? ')
// let astronautsNumberOf = 0

/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */

fuelStartingLevel = Number(fuelStartingLevel);

while (isNaN(fuelStartingLevel)
  || Number.isInteger(fuelStartingLevel) === false
  || fuelStartingLevel <= 5000
  || fuelStartingLevel >= 30000) {
    fuelStartingLevel = input.question('Enter the starting fuel level: ');
    fuelStartingLevel = Number(fuelStartingLevel);
  }

// while (fuelStartingLevel <= 0) {
//   fuelStartingLevel = input.question('Invalid input. Please enter a positive number: ');
//   fuelStartingLevel = Number(fuelStartingLevel)
// }

// while (Number.isInteger(fuelStartingLevel) === false) {
//   fuelStartingLevel = input.question('Invalid input. Please enter an integer: ');
//   fuelStartingLevel = Number(fuelStartingLevel)
// }

// while (fuelStartingLevel <= 5000) {
//   fuelStartingLevel = input.question("Invalid input. Please enter a number greater than 5,000: ");
//   fuelStartingLevel = Number(fuelStartingLevel)
// }

// while (fuelStartingLevel >= 30000) {
//   fuelStartingLevel = input.question("Invalide input. Please enter a number less than 30,000: ");
//   fuelStartingLevel = Number(fuelStartingLevel)
// }

//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.

let astronautsNumberOf = input.question('Please enter the number of astronauts: ');
astronautsNumberOf = Number(astronautsNumberOf);

while (isNaN(astronautsNumberOf)
  || Number.isInteger(astronautsNumberOf) === false
  || astronautsNumberOf < 0
  || astronautsNumberOf > 7) {
    astronautsNumberOf = input.question('Enter the starting fuel level: ');
    astronautsNumberOf = Number(astronautsNumberOf);
  }

// while (Number.isInteger(astronautsNumberOf) === false) {
//   astronautsNumberOf = input.question('Invalid input. Please enter an integer: ');
//   astronautsNumberOf = Number(astronautsNumberOf);
// }

// while (astronautsNumberOf <= 0) {
//   astronautsNumberOf = input.question('Invalid input. Please enter a positive number: ');
//   astronautsNumberOf = Number(astronautsNumberOf);
// }

// while (astronautsNumberOf > 7) {
//   astronautsNumberOf = input.question("Invalide input. Please enter a number less than 8: ");
//   astronautsNumberOf = Number(astronautsNumberOf);
// }
  
  
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.

let shuttleAltitudeOf = 0

while (fuelStartingLevel-(100*astronautsNumberOf) >= 0) {
  shuttleAltitudeOf = shuttleAltitudeOf + 50;
  fuelStartingLevel = fuelStartingLevel - (100*astronautsNumberOf);
}


/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/

console.log(`The shuttle gained an altitude of ${shuttleAltitudeOf} km.`);

if (shuttleAltitudeOf >= 2000) {
  console.log("Orbit achieved!");
} else {
  console.log("Failed to reach orbit.");
}