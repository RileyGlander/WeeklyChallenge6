var APIKey = 'ef7f6401d726e1e2f3e10831c7e2a484';
var city;


var weatherEl = document.querySelector('.weather');
console.log(weatherEl)
var tempEl = document.getElementById('temp');
var locationEl = document.getElementById('location');
var conditionEl = document.getElementById('condition');

console.log('addEventListener')

function handleButtonSubmit(){
  console.log("button submitted")
  //get the city I typed in
  //
  var cityInputEl = document.querySelector("#cityInput")
  console.log(cityInputEl)
  console.log(cityInputEl.value)
  fetchWeather(cityInputEl.value)
}

function fetchWeather(cityToSearch) {
console.log('This is where I will fetch weather')
console.log(cityToSearch)
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityToSearch + "&appid=" + APIKey;
fetch(queryURL)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        console.log(data);
      })
      .catch(function(error) {
        console.log(error);
      });
}


var submitButtonEl = document.querySelector('#submitButton');
submitButtonEl.addEventListener('click', handleButtonSubmit);

//fetchWeather('austin')
//var headerEl = document.querySelector("h1");
//var subHeaderEl = document.querySelector("h2");
//var posterEl = document.querySelector("#poster");


        //headerEl.textContent = date.Title;
        //subHeaderEl.textContent = data.Actors;
        //posterEl.setAttribute("src", data.Poster)
    

