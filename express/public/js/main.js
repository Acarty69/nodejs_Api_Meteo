//fichier js pour front
// callback(
//     undefined,
//     `La temperature est de ${data.current.temperature} a ${location} du au faite que le temps est ${data.current.weather_descriptions} `
//   );

const formulaire = document.querySelector(".formulaire");
const ville = document.querySelector(".meteoville");
const affichemeteo = document.getElementById("affichemeteo");

formulaire.addEventListener("submit", (e) => {
  e.preventDefault();

  fetch(`http://localhost:3000/weather?location=${ville.value}`)
    .then((res) => res.json())
    .then((data) => {
      const { weather_description, temperature, location, city } = data;
      affichemeteo.innerHTML = `La meteo a ${city} est ${weather_description} la temperature est ${temperature} et cette ville est situer en ${location}`;
    });
});
