//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.

class CrewCandidate {
    constructor(name, mass, scores) {
        this.name = name,
        this.mass = mass,
        this.scores = scores
    }

    addScore(newScore) {
        this.scores.push(newScore);
    }

    average() {
      let sum = 0;
        for (let i=0; i<this.scores.length; i++) {
        sum += this.scores[i];
        }
        return Math.round(10*sum/this.scores.length)/10;
    }

    status(averageScore = this.average()) {

        if (averageScore >= 90.0) {
            return "Accepted";
        }
        if (averageScore >= 80.0) {
            return "Reserve";
        }
        if (averageScore >= 70.0) {
            return "Probationary"
        } else {
            return "Rejected"
        }
    }

}

let bubbaBear = new CrewCandidate("Bubba Bear", 135, [88, 85,90]);
let merryMaltese = new CrewCandidate("Merry Maltese", 1.5, [93, 88, 97]);
let gladGator = new CrewCandidate("Glad Gator", 225, [75, 78, 62]);

// console.log(bubbaBear);
// console.log(merryMaltese);
// console.log(gladGator);

// bubbaBear.addScore(83);

// console.log(merryMaltese.average());
crewCandidateArr = [bubbaBear, merryMaltese, gladGator];
for (let i=0; i<crewCandidateArr.length; i++) {
console.log(`${crewCandidateArr[i].name} earned an average test score of ${crewCandidateArr[i].average()}% and has a status of ${crewCandidateArr[i].status()}.`)
}
//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.



//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. 
//How many tests will it take to reach Reserve status? How many to reach Accepted? 
//Remember, scores cannot exceed 100%.

let reserveScore = 0;
while (gladGator.average() < 80.0) {
    gladGator.addScore(100);
    // console.log(gladGator.average());
    // console.log(reserveScore);
    reserveScore++;
}

console.log(`It takes ${reserveScore} tests to reach Reserve Status.`);

let acceptedScore = 0;
while (gladGator.average() < 90.0) {
    gladGator.addScore(100);
    // console.log(gladGator.average());
    // console.log(reserveScore);
    acceptedScore++;
}

console.log(`It takes ${acceptedScore} tests to reach Accepted Status.`);