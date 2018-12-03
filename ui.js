class UI {
  constructor() {
    this.location = document.getElementById("location");
    this.description = document.getElementById("description");
    this.string = document.getElementById("string");
    this.details = document.getElementById("details");
    this.icon = document.getElementById("icon");
    this.pressure = document.getElementById("pressure");
    this.humidity = document.getElementById("humidity");
    this.wind = document.getElementById("wind");
    this.clouds = document.getElementById("clouds");
  }

  render(weather) {
    this.location.textContent = `${weather.name} ${weather.sys.country}`;
    this.description.textContent = weather.weather[0].description;
    this.string.textContent = `${weather.main.temp} C`;
    this.icon.setAttribute(
      "src",
      `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`
    );
    this.humidity.textContent = `Humidity: ${weather.main.humidity}%`;
    this.wind.textContent = `Wind: ${weather.wind.speed}m/s`;
    this.pressure.textContent = `Pressure: ${weather.main.pressure} hPa`;
    this.clouds.textContent = `Cloud Percentage : ${weather.clouds.all} %`;
  }
}
