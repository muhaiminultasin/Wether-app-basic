const ApiKey = "904641008e48bba96227082935cb6b98";
const ApiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

const weatherIcon = document.querySelector(".weather-icon");

async function cheakWeather(city){
    const response = await fetch(ApiUrl + city + `&appid=${ApiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display= "block";
        document.querySelector(".weather").style.display = "none";
    }
    else{
        var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp+ "°C";
    document.querySelector(".wind").innerHTML = data.wind.speed + "KM/H";
    document.querySelector(".humidity").innerHTML = data.main.humidity +"%";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "IMG/clouds.png";
    } 
    else if(data.weather[0].main =="Clear"){
        weatherIcon.src = "IMG/clear.png";
    } 
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "IMG/rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "IMG/drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "IMG/mist.png";
    }
    document.querySelector(".error").style.display= "none";
    document.querySelector(".weather").style.display = "block";
}
    }

searchBtn.addEventListener("click", ()=>{
    cheakWeather(searchBox.value);
})