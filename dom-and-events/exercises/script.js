function init () {
    const missionAbort = document.getElementById("abortMission");
    const button = document.getElementById("liftoffButton");
    const paragraph = document.getElementById("statusReport");

    // Put your code for the exercises here.
    function takeOff() {
        document.getElementById("statusReport").innerHTML = "Houston, we have liftoff!";
    };
    button.addEventListener("click", takeOff);

    // function mouseOver() {
        // abortMission.style.backgroundColor = "red";
    // };

    // abortMission.addEventListener("onmouseover", mouseOver())

    // function mouseOut() {
    //     abortMission.style.backgroundColor = "";
    // };

    // missionAbort.addEventListener("onmouseout", mouseOut())
    
}

window.addEventListener("load", init);
