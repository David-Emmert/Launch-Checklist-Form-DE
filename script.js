// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ul>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ul>
<img src="${}">
*/
window.addEventListener("load", function() {

   let listedPlanets;
   let form = document.getElementById("launchForm")
   form.addEventListener("submit", function(event) {
    let pilotNameInp = document.getElementById("pilotName")
    let copilotNameInp = document.getElementById("copilotName")
    let fuelLevelInp = document.getElementById("fuelLevel")
    let cargoMassInp = document.getElementById("cargoMass")
    if (pilotNameInp.value.length < 1 || copilotNameInp.value.length < 1 || fuelLevelInp.value.length < 1 || cargoMassInp.value.length < 1) {
        alert("All fields required!")
        event.preventDefault()
    }
    else if (!isNaN(pilotNameInp.value) || !isNaN(copilotNameInp.value)) {
        alert("Numbers are not authorized for names.")
        event.preventDefault()
    }
    else if (isNaN(fuelLevelInp) || isNaN(cargoMassInp)) {
      alert("Only numbers are authorized for cargo mass and fuel level fields.")
      event.preventDefault()
    }
   })
      // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse;
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   })

});