$(function () {
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

  const convertToFahrenheit = (temp) => {
    return ((temp * 9) / 5 - 459.67).toFixed(2);
  };

  searchButton.click(async (event) => {
    event.preventDefault();
    let userInput = $(`#search-input`).val();

    if (userInput.length !== 0) {
      await getWeatherInfo(userInput);
      setWeatherInfo(userInput);
    }
  });

  const setWeatherText = async (day, temp, wind, humidity, icon) => {
    $(`#day-${day}-weather-icon`).attr(
      "src",
      `http://openweathermap.org/img/wn/${icon}.png`
    );
    $(`#day-${day}-temp`).text(`Temp: ${temp} °F`);
    $(`#day-${day}-wind`).text(`Wind: ${wind} MPH`);
    $(`#day-${day}-humidity`).text(`Humidity: ${humidity} %`);
  };

  const setWeatherInfo = async (userInput) => {
    if (temp && wind && humidity) {
      todayTitle.text(`
        ${userInput} (${todaysDate.format("M/D/YYYY")})
      `);
      setWeatherText(0, temp, wind, humidity, icon);
      setWeatherText(1, temp1, wind1, humidity1, icon1);
      setWeatherText(2, temp2, wind2, humidity2, icon2);
      setWeatherText(3, temp3, wind3, humidity3, icon3);
      setWeatherText(4, temp4, wind4, humidity4, icon4);
      setWeatherText(5, temp5, wind5, humidity5, icon5);
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

        temp = convertToFahrenheit(res.list[0].main.temp);
        humidity = res.list[0].main.humidity;
        wind = res.list[0].wind.speed;
        icon = res.list[0].weather[0].icon;

        temp1 = convertToFahrenheit(res.list[1].main.temp);
        humidity1 = res.list[1].main.humidity;
        wind1 = res.list[1].wind.speed;
        icon1 = res.list[1].weather[0].icon;

        temp2 = convertToFahrenheit(res.list[2].main.temp);
        humidity2 = res.list[2].main.humidity;
        wind2 = res.list[2].wind.speed;
        icon2 = res.list[2].weather[0].icon;

        temp3 = convertToFahrenheit(res.list[3].main.temp);
        humidity3 = res.list[3].main.humidity;
        wind3 = res.list[3].wind.speed;
        icon3 = res.list[3].weather[0].icon;

        temp4 = convertToFahrenheit(res.list[4].main.temp);
        humidity4 = res.list[4].main.humidity;
        wind4 = res.list[4].wind.speed;
        icon4 = res.list[4].weather[0].icon;

        temp5 = convertToFahrenheit(res.list[5].main.temp);
        humidity5 = res.list[5].main.humidity;
        wind5 = res.list[5].wind.speed;
        icon5 = res.list[5].weather[0].icon;
      });
  };

  const saveSearchHistory = (city) => {};

  // set the day of the week
  todayTitle.text(`
    ${defaultCity} (${todaysDate.format("M/D/YYYY")})
  `);

  // get 5 days from today and set the text
  for (let i = 1; i < 6; i++) {
    const daily = todaysDate.add(i, "day");
    $(`#day-${i}-title`).text(`
    ${daily.format("M/D/YYYY")}
    `);
  }

  const setDefault = async () => {
    await getWeatherInfo(defaultCity);
    setWeatherInfo(defaultCity);
  };

  setDefault();
});
