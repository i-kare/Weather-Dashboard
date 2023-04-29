//When a city is searched I want weather data from api to be pulled. 
//I want the weather data to be displayed in each card according to date.
//I want todays date and the next 5 days to be displayed in each card 
//I also want an icon to be displayed on each card acording to weather on said date.
//Last I want to be able to be able to select a city from cities i've already searched.  

$(function () {
  var forecast = $('.five-day-forecast-children');
  var todaysWeather = $('#todays-forecast-info');
  var searchButton = $('#fetch-button');
  var temp = null;
  var humidity = null;
  var wind = null;
  var todaysDate = dayjs().format("dddd, MMMM D");
  console.log(todaysDate)
  var todaysWeatherData = null

  //console.log(forecast,todaysWeather,searchButton)

  for(let i =0; i<5; i++){
    console.log(todaysDate+1)
  }

  searchButton.click(async (event)=>{
    event.preventDefault();
    let userInput = $(`#search-input`).val()

    if(userInput.length !== 0){
      await getWeatherInfo(userInput);
      if(temp && wind && humidity){
        todaysWeather.text(
          `Temp: ${temp}
            Wind: ${wind}
            Humidity: ${humidity}
          `
        )
      }
    }
  })

  const getWeatherInfo = (city) => {
    console.log(city)
    var weatherForecastAPIKey = "c9961134407de338be62f6576521eff1";
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + weatherForecastAPIKey;

    return fetch(queryURL).then(response => response.json()).then(res => {
      temp = res.main.temp
      humidity = res.main.humidity
      wind = res.wind.speed
    })
  }
});
  // var date = todays date

  // 
  // var city;

  //if search button is clicked then 
  // document.getElementById("fetch-button").addEventListener("click", function ());
  // function displayDate() {
  //   document.getElementById("demo").innerHTML = Date();
  // }


  //function getApi() {
    //API call 
    //
    //The queryURL will store the OpenWeather Current Weather Data URL and the necessary variables, 
    //



    // fetch request gets a list of all the repos for the node.js organization
    //fetch(requestUrl)
    // fetch(queryURL)
    //   .then(function (response) {
    //     return response.json();
    //   })
    //   .then(function (data) {
    //     console.log(data)
    //   })
    //Loop over the data to generate a table, each table row will have a link to the repo url
    // for (var i = 0; i < data.length; i++) {
    //   // Creating elements, tablerow, tabledata, and anchor
    //   var datarows = document.createElement('tr');
    //   var tabledata = document.createElement('td');
    //   var anchor = document.createElement('a');

      // Setting the text of link and the href of the link
      //link.textContent = data[i].html_url;
      //link.href = data[i].html_url;

      // Appending the link to the tabledata and then appending the tabledata to the tablerow
      // The tablerow then gets appended to the tablebody
      //temp.appendChild(link);
      // wind.appendChild(tableData);
      //humidity.appendChild(createTableRow);
      //}
      //});
    //}

    //fetchButton.addEventListener('click', getApi);

    //saves information inputted by user into local storage for each time block
    // $(".searchBtn").click(function (event) {
    //event.preventDefault();
    //var id = event.currentTarget.id;
    //var hour = parseInt(id.split("-")[1]);
    //var textHour = `#text-${hour}`;
    //var textAreaVal = $(textHour).val();

    //localStorage.setItem(city, textAreaVal);
    //});

  //}