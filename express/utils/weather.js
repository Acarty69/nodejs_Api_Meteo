const weather = (location, unit, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=b8854f954a92d4f9d61ed14b42817991&query=${encodeURIComponent(
    location
  )}&units=${unit}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      if (data.success === false) {
        // console.log(
        //   `il y a une erreur dont le code est : ${data.error.code} la raison est ${data.error.info}`
        // );
        callback(
          `il y a une erreur dont le code est : ${data.error.code} la raison est ${data.error.info}`,
          undefined
        );
      } else {
        callback(undefined, {
          temperature: data.current.temperature,
          weather_description: data.current.weather_descriptions,
          location: data.location.country,
        });
      }
    });
};

module.exports = { weather };
