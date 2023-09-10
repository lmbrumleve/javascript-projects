// Declare and assign the variables below

let nameShuttle = "Determination"
let speedShuttleMph = 17500
let distanceMarsKm = 225000000
let distanceMoonKm = 384400
let milesPerKm = 0.621

// Use console.log to print the 'typeof' each variable. Print one item per line.

console.log(typeof nameShuttle)
console.log(typeof speedShuttleMph)
console.log(typeof distanceMarsKm)
console.log(typeof distanceMoonKm)
console.log(typeof milesPerKm)

// Calculate a space mission below

let distanceMarsMiles = distanceMarsKm * milesPerKm
console.log(distanceMarsMiles)
console.log(typeof distanceMarsMiles)
let timeMarsHours = distanceMarsMiles / speedShuttleMph
console.log(timeMarsHours)
console.log(typeof timeMarsHours)
let timeMarsDays = timeMarsHours/24
console.log(timeMarsDays)
console.log(typeof timeMarsDays)

// Print the results of the space mission calculations below

console.log(nameShuttle + " will take " + timeMarsDays + " days to reach Mars.")

// Calculate a trip to the moon below

let distanceMoonMiles = distanceMoonKm * milesPerKm
console.log(distanceMoonMiles)
console.log(typeof distanceMoonMiles)
let timeMoonHours = distanceMoonMiles / speedShuttleMph
console.log(timeMoonHours)
console.log(typeof timeMoonHours)
let timeMoonDays = timeMoonHours/24
console.log(timeMoonDays)
console.log(typeof timeMoonDays)

// Print the results of the trip to the moon below

console.log(nameShuttle + " will take " + timeMoonDays + " days to reach the Moon.")
