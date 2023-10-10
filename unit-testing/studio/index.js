
let launchcode = {
    organization: 'nonprofit',
    executiveDirector: 'Jeff',
    percentageCoolEmployees: '100',
    programsOffered: ["Web Development", "Data Analysis", "Liftoff"],
    launchOutput: function launchOutput(input) {
        if ((input%2 === 0) && (input%3 === 0)) {
            return ('LaunchCode!');
        }

        if ((input%2 === 0) && (input%5 === 0)) {
            return ('Launch Rocks! (CRASH!!!!)');
        }

        if (input%2 === 0) {
            return ('Launch!');
        }

        if (input%3 === 0) {
            return ('Code!');
        }

        if (input%5 === 0) {
            return ('Rocks!');
        }
        
    }
  
}

module.exports = launchcode;

