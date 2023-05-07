$(function () {
  var todaysWeather = $("#todays-forecast-info");
  var todayTitle = $(".today-title");
  var searchButton = $("#fetch-button");
  var defaultCity = "Davis";
  var temp = null;
  var humidity = null;
  var wind = null;
  var icon = null;
  var temp1 = null;
  var humidity1 = null;
  var wind1 = null;
  var icon1 = null;
  var temp2 = null;
  var humidity2 = null;
  var wind2 = null;
  var icon2 = null;
  var temp3 = null;
  var humidity3 = null;
  var wind3 = null;
  var icon3 = null;
  var temp4 = null;
  var humidity4 = null;
  var wind4 = null;
  var icon4 = null;
  var temp5 = null;
  var humidity5 = null;
  var wind5 = null;
  var icon5 = null;
  var todaysDate = dayjs();

  // set the day of the week
  todayTitle.text(`
    ${defaultCity} (${todaysDate.format("M/D/YYYY")})
  `);

  // get 5 days from today and set the text
  for (let i = 1; i < 6; i++) {
    const daily = todaysDate.add(i, "day");
    $(`#day-${i}`).text(`
    ${daily.format("M/D/YYYY")}
    `);
  }

  searchButton.click(async (event) => {
    event.preventDefault();
    let userInput = $(`#search-input`).val();

    if (userInput.length !== 0) {
      getAndSetWeatherInfo();
    }
  });

  const getAndSetWeatherInfo = async () => {
    if (temp && wind && humidity) {
      $("#today-weather-icon").attr(
        "src",
        `http://openweathermap.org/img/wn/${icon}.png`
      );
      todaysWeather.text(
        `
          ${todaysDate.format("M/D/YYYY")}
          Temp: ${temp}
            Wind: ${wind}
            Humidity: ${humidity}
          `
      );
      $("#day-1-weather-icon").attr(
        "src",
        `http://openweathermap.org/img/wn/${icon1}.png`
      );
      $("#day-1").text(
        `
          ${todaysDate.add(1, "day").format("M/D/YYYY")}
          Temp: ${temp1}
            Wind: ${wind1}
            Humidity: ${humidity1}
          `
      );
      $("#day-2-weather-icon").attr(
        "src",
        `http://openweathermap.org/img/wn/${icon2}.png`
      );
      $("#day-2").text(
        `
           ${todaysDate.add(2, "day").format("M/D/YYYY")}
          Temp: ${temp2}
            Wind: ${wind2}
            Humidity: ${humidity2}
          `
      );
      $("#day-3-weather-icon").attr(
        "src",
        `http://openweathermap.org/img/wn/${icon3}.png`
      );
      $("#day-3").text(
        `
          ${todaysDate.add(3, "day").format("M/D/YYYY")}
          Temp: ${temp3}
            Wind: ${wind3}
            Humidity: ${humidity3}
          `
      );
      $("#day-4-weather-icon").attr(
        "src",
        `http://openweathermap.org/img/wn/${icon4}.png`
      );
      $("#day-4").text(
        `
         ${todaysDate.add(4, "day").format("M/D/YYYY")}
          Temp: ${temp4}
            Wind: ${wind4}
            Humidity: ${humidity4}
          `
      );
      $("#day-5-weather-icon").attr(
        "src",
        `http://openweathermap.org/img/wn/${icon5}.png`
      );
      $("#day-5").text(
        `
          ${todaysDate.add(5, "day").format("M/D/YYYY")}
          Temp: ${temp5}
            Wind: ${wind5}
            Humidity: ${humidity5}
          `
      );
    }
  };

  const getWeatherInfo = (city) => {
    console.log(city);
    var weatherForecastAPIKey = "c9961134407de338be62f6576521eff1";
    var queryURL =
      "http://api.openweathermap.org/data/2.5/forecast?q=" +
      city +
      "&appid=" +
      weatherForecastAPIKey;

    return fetch(queryURL)
      .then((response) => response.json())
      .then((res) => {
        console.log(res);

        temp = res.list[0].main.temp;
        humidity = res.list[0].main.humidity;
        wind = res.list[0].wind.speed;
        icon = res.list[0].weather[0].icon;

        temp1 = res.list[1].main.temp;
        humidity1 = res.list[1].main.humidity;
        wind1 = res.list[1].wind.speed;
        icon1 = res.list[1].weather[0].icon;

        temp2 = res.list[2].main.temp;
        humidity2 = res.list[2].main.humidity;
        wind2 = res.list[2].wind.speed;
        icon2 = res.list[2].weather[0].icon;

        temp3 = res.list[3].main.temp;
        humidity3 = res.list[3].main.humidity;
        wind3 = res.list[3].wind.speed;
        icon3 = res.list[3].weather[0].icon;

        temp4 = res.list[4].main.temp;
        humidity4 = res.list[4].main.humidity;
        wind4 = res.list[4].wind.speed;
        icon4 = res.list[4].weather[0].icon;

        temp5 = res.list[5].main.temp;
        humidity5 = res.list[5].main.humidity;
        wind5 = res.list[5].wind.speed;
        icon5 = res.list[5].weather[0].icon;
      });
  };

  const saveSearchHistory = (city) => {};
});
