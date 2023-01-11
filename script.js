
window.addEventListener("load", function() {
   let randomize = Math.round(Math.random()*5);
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
      response.json().then( function(json) {
         let targetPlanet = document.getElementById("missionTarget")
   
         targetPlanet.innerHTML = `
         <h2>Mission Destination</h2>
         <ul>
            <li>Name: ${json[randomize].name}</li>
            <li>Diameter: ${json[randomize].diameter}</li>
            <li>Star: ${json[randomize].star}</li>
            <li>Distance from Earth: ${json[randomize].distance}</li>
            <li>Number of Moons: ${json[randomize].moons}</li>
         </ul>
         <img src="${json[randomize].image}">`;
      })
   })


   let listedPlanets;
   let form = document.getElementById("launchForm")
   form.addEventListener("submit", function(event) {

    let pilotNameInp = document.getElementById("pilotName")
    let copilotNameInp = document.getElementById("copilotName")
    let fuelLevelInp = document.getElementById("fuelLevel")
    let cargoMassInp = document.getElementById("cargoMass")
    let pilotStat = document.getElementById("pilotStatus")
    let itemStat = document.getElementById("itemStatus")
    let copilotStat = document.getElementById("copilotStatus")
    let fuelStat = document.getElementById("fuelStatus")
    let cargoStat = document.getElementById("cargoStatus")
    let launchStat = document.getElementById("launchStatus")  


    if (pilotNameInp.value.length < 1 || copilotNameInp.value.length < 1 || fuelLevelInp.value.length < 1 || cargoMassInp.value.length < 1) {
        alert("All fields required!")
        launchStat.innerHTML = "Awaiting Information Before Launch"
        event.preventDefault() 
    }
    else if (!isNaN(pilotNameInp.value) || !isNaN(copilotNameInp.value)) {
        alert("Numbers are not authorized for names.")

        event.preventDefault()
    }
    else if (isNaN(fuelLevelInp.value) || isNaN(cargoMassInp.value)) {
      alert("Only numbers are authorized for cargo mass and fuel level fields.")
      event.preventDefault()
    }
   else {
      pilotStat.innerHTML = `Pilot ${pilotNameInp.value} is ready for launch.`
      copilotStat.innerHTML = `Copilot ${copilotNameInp.value} is ready for launch.`
      itemStat.style.visibility = "visible"
         if (fuelLevelInp.value < 10000) {
            fuelStat.innerHTML = `Fuel level is too low for launch!`
            launchStat.innerHTML = "Shuttle NOT Ready for Launch"
            launchStat.style.color = "red"
         }
         if (cargoMassInp.value > 10000) {
            cargoStat.innerHTML = `Cargo mass is too high for launch!`
            launchStat.innerHTML = "Shuttle NOT Ready for Launch"
            launchStat.style.color = "red"
         }
         if (fuelLevelInp.value >= 10000 && cargoMassInp.value <= 10000){
            fuelStat.innerHTML = `Fuel level is high enough for launch.`;
            cargoStat.innerHTML = `Cargo mass is low enough for launch.`
            launchStat.innerHTML = "Shuttle Ready for Launch"
            launchStat.style.color = "green"
         }
         if (cargoMassInp.value < 10000) {
            cargoStat.innerHTML = `Cargo mass is low enough for launch`
         }
         event.preventDefault()
   }
   })

});