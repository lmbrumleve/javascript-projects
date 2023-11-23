// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function() {

const takeoffButton = document.getElementById("takeoff");
const flightStatus = document.getElementById("flightStatus");
const shuttleBackground = document.getElementById("shuttleBackground");
const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
const landButton = document.getElementById("landing");
const abortMissionButton = document.getElementById("missionAbort");
const upButton = document.getElementById("up");
const downButton = document.getElementById("down");
const rightButton = document.getElementById("right");
const leftButton = document.getElementById("left");

let verticalPosition = 0;
let horizontalPosition = 212.5;

takeoffButton.addEventListener("click", function() {

    if(confirm("Confirm that the shuttle is ready for takeoff.")) {
        flightStatus.innerHTML = "Shuttle in flight.";
        shuttleBackground.style.backgroundColor = "blue"; 
        spaceShuttleHeight.innerHTML = 10000;
        rocket.style.bottom = "10px";
        verticalPosition = 10;
    }
})

landButton.addEventListener("click", function() {

    alert("The shuttle is landing. Landing gear engaged.");
    flightStatus.innerHTML = "The shuttle has landed.";
    shuttleBackground.style.backgroundColor = "green";
    spaceShuttleHeight.innerHTML = 0;
    rocket.style.bottom = "0px"
    rocket.style.left = "212.5px"
    verticalPosition = 0;
    horizontalPosition = 212.5;

})

abortMissionButton.addEventListener("click", function () {
    if(confirm("Confirm that you want to abort the mission.")) {
        flightStatus.innerHTML = "Mission aborted.";
        shuttleBackground.style.backgroundColor = "green";
        spaceShuttleHeight.innerHTML = 0;
        rocket.style.bottom = "0px"
        rocket.style.left = "212.5px"
        verticalPosition = 0;
        horizontalPosition = 212.5;
    }
})

upButton.addEventListener("click", function() {
    if (verticalPosition < 250) {
    spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) + 10000;
    verticalPosition += 10;
    rocket.style.bottom = verticalPosition + "px";
    }

})

downButton.addEventListener("click", function() {
    if (verticalPosition > 0) {
    spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) - 10000;
    verticalPosition -= 10;
    rocket.style.bottom = verticalPosition + "px";
    } 
})

leftButton.addEventListener("click", function() {
    if(horizontalPosition >= -10) {
    horizontalPosition -= 10;
    rocket.style.left = horizontalPosition + "px";
    }
})

rightButton.addEventListener("click", function() {
    if(horizontalPosition < 435) {
    horizontalPosition += 10;
    rocket.style.left = horizontalPosition + "px";
    }
})

});
