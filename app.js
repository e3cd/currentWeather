//init storage
const storage = new Storage();

//get stored location data
const weatherLocation = storage.getLocationData();

//init weather object
const weather = new Weather(weatherLocation.city, weatherLocation.country);

//init UI
const ui = new UI();

//get weather on DOM load
document.addEventListener("DOMContentLoaded", getWeather);

//change location event
document.getElementById("change-btn").addEventListener("click", event => {
  const city = document.getElementById("city").value;
  const country = document.getElementById("country").value;
  // change location
  weather.changeLocation(city, country);

  //set location in localstorage
  storage.setLocationData(city, country);

  //get weather again and fetch with new location and render the ui

  getWeather();

  //close modal using jquery
  $("#locModal").modal("hide");
});

//call getWeather when the dom loads
function getWeather() {
  weather
    .getWeather()
    .then(results => {
      console.log(results);
      ui.render(results);
    })
    .catch(err => console.log(err));
}
