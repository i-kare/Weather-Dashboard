//When a city is searched I want weather data from api to be pulled. 
//I want the weather data to be displayed in each card according to date.
//I want todays date and the next 5 days to be displayed in each card 
//I also want an icon to be displayed on each card acording to weather on said date.
//Last I want to be able to be able to select a city from cities i've already searched.  

$(function () {
  
  var todaysWeather = $('#todays-forecast-info');
  var searchButton = $('#fetch-button');
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
  var todaysDate = dayjs()//.format("dddd, MMMM D");

  //console.log(forecast,todaysWeather,searchButton)
  todaysWeather.text(`
    Day: ${todaysDate.format('M/D/YYYY')}
  `)

  for(let i =1; i<6; i++){
    const daily= todaysDate.add(i, "day")
    $(`#day-${i}`).text(`Day:${daily.format("M/D/YYYY")}`)
  }

  searchButton.click(async (event)=>{
    event.preventDefault();
    let userInput = $(`#search-input`).val()

    if(userInput.length !== 0){
      await getWeatherInfo(userInput);
      if(temp && wind && humidity){
      
          
        $('#today-weather-icon').attr('src', `http://openweathermap.org/img/wn/${icon}.png`);
          (todaysWeather.text(
            `
            ${todaysDate.format('M/D/YYYY')}
            Temp: ${temp}
              Wind: ${wind}
              Humidity: ${humidity}
            `
          ))
          $('#day-1-weather-icon').attr('src', `http://openweathermap.org/img/wn/${icon1}.png`);
          ($("#day-1").text(
            `
            ${todaysDate.add(1,"day").format('M/D/YYYY')}
            Temp: ${temp1}
              Wind: ${wind1}
              Humidity: ${humidity1}
            `
          ))
          $('#day-2-weather-icon').attr('src', `http://openweathermap.org/img/wn/${icon2}.png`);
          ($("#day-2").text(
            `
             ${todaysDate.add(2,"day").format('M/D/YYYY')}
            Temp: ${temp2}
              Wind: ${wind2}
              Humidity: ${humidity2}
            `
          ))
          $('#day-3-weather-icon').attr('src', `http://openweathermap.org/img/wn/${icon3}.png`);
          ($("#day-3").text(
            `
            ${todaysDate.add(3,"day").format('M/D/YYYY')}
            Temp: ${temp3}
              Wind: ${wind3}
              Humidity: ${humidity3}
            `
          ))
          $('#day-4-weather-icon').attr('src', `http://openweathermap.org/img/wn/${icon4}.png`);
          ($("#day-4").text(
            `
           ${todaysDate.add(4,"day").format('M/D/YYYY')}
            Temp: ${temp4}
              Wind: ${wind4}
              Humidity: ${humidity4}
            `
          ))
          $('#day-5-weather-icon').attr('src', `http://openweathermap.org/img/wn/${icon5}.png`);
          ($("#day-5").text(
            `
            ${todaysDate.add(5,"day").format('M/D/YYYY')}
            Temp: ${temp5}
              Wind: ${wind5}
              Humidity: ${humidity5}
            `
          ))
      }
    }
  })

  const getWeatherInfo = (city) => {
    console.log(city)
    var weatherForecastAPIKey = "c9961134407de338be62f6576521eff1";
    var queryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + weatherForecastAPIKey;

    return fetch(queryURL).then(response => response.json()).then(res => {
      console.log(res)
      // console.log(dayjs.unix(res.list[0].dt).format("dddd, MMMM, D"))
      
      
      temp = res.list[0].main.temp
      humidity = res.list[0].main.humidity
      wind = res.list[0].wind.speed
      icon = res.list[0].weather[0].icon

      temp1 = res.list[1].main.temp
      humidity1 = res.list[1].main.humidity
      wind1 = res.list[1].wind.speed
      icon1 = res.list[1].weather[0].icon

      temp2 = res.list[2].main.temp
      humidity2 = res.list[2].main.humidity
      wind2 = res.list[2].wind.speed
      icon2 = res.list[2].weather[0].icon

      temp3 = res.list[3].main.temp
      humidity3 = res.list[3].main.humidity
      wind3 = res.list[3].wind.speed
      icon3 = res.list[3].weather[0].icon

      temp4 = res.list[4].main.temp
      humidity4 = res.list[4].main.humidity
      wind4 = res.list[4].wind.speed
      icon4 = res.list[4].weather[0].icon

      temp5 = res.list[5].main.temp
      humidity5 = res.list[5].main.humidity
      wind5 = res.list[5].wind.speed
      icon5 = res.list[5].weather[0].icon
    })
  }
})
$(function () {
  var searchHistory = $('#search-history1');
  var userInput =$(`#search-input`).val()
if (console.log()!== 0){
localStorage.setItem('','');
 localStorage.getItem('','');
 (searchHistory.text(
 `
  ${$userInput}
  `
))
}})

//var pastSearches = [];

//if(localStorage["pastSearches"]) {
     //pastSearches = JSON.parse(localStorage["pastSearches"]);
//}
//if(pastSearches.indexOf(search) == -1) {
  //pastSearches.unshift(search);
  //if(pastSearches.length > 1) { 
     //pastSearches.pop();
  //}
  //localStorage["pastSearches"] = JSON.stringify(pastSearches);
//}
//function drawPastSearches() {
  //if(pastSearches.length) {
      //var html = pastSearchesTemplate({search:pastSearches});
      //$("#pastSearches").html(html);
  //}
//}

//$(document).on("click", ".pastSearchLink", function(e) {
  //e.preventDefault();
  //var search = $(this).text();
  //doSearch(search);
//});





//$(function () {
  //var searchButton = $('#fetch-button');
//searchButton.click(async (event)=>{
  //event.preventDefault();
  //let userInput = $(`#search-input`).val()
  //localStorage.setItem('userInput', 'userInput.val');
 // localStorage.getItem('userInput', 'userInput.val');

  //console.log(localStorage.getItem(''));
//}
//)
//}

//)
;