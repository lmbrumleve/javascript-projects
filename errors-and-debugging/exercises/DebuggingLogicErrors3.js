// Let’s break the code down into smaller chunks.
// Now consider the second if/else block. 
// Add another console.log(launchReady) after this block and run the program.

// Given the values for crewStatus and computerStatus, should launchReady be true or false after the check?  
// Is the program behaving as expected?
// Since launchReady is dependent on crewStatus and computerStatus AS WELL AS fuelLevel, this program is not following correct logic. 
// The way the program is written right now only requires crewStatus and computerStatus to be good enough for launch in order for launchReady to print true.

let launchReady = false;
// let fuelLevel = 17000;
let crewStatus = true;
let computerStatus = 'green';

// if (fuelLevel >= 20000) {
//    console.log('Fuel level cleared.');
//    launchReady = true;
// } else {
//    console.log('WARNING: Insufficient fuel!');
//    launchReady = false;
// }

if (crewStatus && computerStatus === 'green'){
   console.log('Crew & computer cleared.');
   launchReady = true;
   console.log(launchReady);
} else {
   console.log('WARNING: Crew or computer not ready!');
   launchReady = false;
   console.log(launchReady);
}

// if (launchReady) {
//    console.log('10, 9, 8, 7, 6, 5, 4, 3, 2, 1...');
//    console.log('Liftoff!');
// } else {
//    console.log('Launch scrubbed.');
// }