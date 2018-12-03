class Weather {
  constructor(city, country) {
    this.apiKey = "{apikey}";
    this.city = city;
    this.country = country;
  }

  //fetch weather from api

  async getWeather() {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${this.city},${
        this.country
      }&APPID=${this.apiKey}&units=metric`
    );

    const responseData = await response.json();

    return responseData;
  }

  //   change weather location

  changeLocation(city, country) {
    this.city = city;
    this.country = country;
  }
}
