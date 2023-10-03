// Code your orbitCircumference function here:
function orbitCircumference(radius) {
  return Math.round(2*Math.PI*radius);
} 

console.log(orbitCircumference(2000));

// Code your missionDuration function here:
function missionDuration(numOrbits, radius = 2000, orbitalSpeed = 28000) {
return Math.round(100*numOrbits*orbitCircumference(radius)/orbitalSpeed)/100;
};

console.log(missionDuration(3));

console.log(`The mission will travel ${orbitCircumference(2000)} km around the planet, and it will take ${missionDuration(5)} hours to complete.`);

// Copy/paste your selectRandomEntry function here:
function selectRandomEntry (arr) {
  let index = Math.floor(Math.random()*arr.length);
  return index;
};


// Code your oxygenExpended function here:


// Candidate data & crew array.
let candidateA = {
   'name':'Gordon Shumway',
   'species':'alf',
   'mass':90,
   'o2Used':function(hrs){return 0.035*hrs},
   'astronautID':414
 };
 let candidateB = {
   'name':'Lassie',
   'species':'dog',
   'mass':19.1,
   'o2Used':function(hrs){return 0.030*hrs},
   'astronautID':503
 };
 let candidateC = {
   'name':'Jonsey',
   'species':'cat',
   'mass':3.6,
   'o2Used':function(hrs){return 0.022*hrs},
   'astronautID':796
 };
 let candidateD = {
   'name':'Paddington',
   'species':'bear',
   'mass':31.8,
   'o2Used':function(hrs){return 0.047*hrs},
   'astronautID':291
 };
 let candidateE = {
   'name':'Pete',
   'species':'tortoise',
   'mass':417,
   'o2Used':function(hrs){return 0.010*hrs},
   'astronautID':599
 };
 let candidateF = {
   'name':'Hugs',
   'species':'ball python',
   'mass':2.3,
   'o2Used':function(hrs){return 0.018*hrs},
   'astronautID':890
 };
 
 let crew = [candidateA,candidateC,candidateE];

 function oxygenExpended(candidate, numOrbits = 3, radius = 2000, orbitalSpeed = 28000) {
  let oxygen = Math.round(1000*candidate.o2Used(missionDuration(numOrbits, radius, orbitalSpeed)))/1000;
  return   console.log(`${candidate.name} will perform the spacewalk, which will last ${missionDuration(numOrbits, radius, orbitalSpeed)} hours and require ${oxygen} kg of oxygen.`);

 }
 
 oxygenExpended(candidateA, 3, 5000, 20000);

