
const URL1 = "https://api.openweathermap.org/data/2.5/weather?q="
//ENTER THE CITY NAME
const URL2 = "&appid=c51d8b0702f979537ebb1ac75c564909&units=metric"

const weather = document.querySelector(".weather")
weather.style.display="none"
const weather_cond=document.querySelector(".weather-icon img")

function extract_text() {
    var text = document.querySelector("input").value
    console.log(text)
    const apiUrl = URL1 + text + URL2;

    // Make a GET request
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                alert("Invalid Input !")
                document.querySelector("h3").innerHTML=data.name;
            }
            return response.json();
        })
        .then(data => {
            weather.style.display="inline-block"
            document.querySelector("h3").innerHTML=data.name;
            document.querySelector("span").innerHTML=Math.round(data.main.temp)
            document.querySelector(".humid").innerHTML=data.main.humidity +" %"
            document.querySelector(".windspeed").innerHTML=data.wind.speed +" Km/h"

            // console.log(data.weather[0].main)
            var cond = data.weather[0].main
            if(cond == "Clear"){
                weather_cond.src="./images/clear.png"
            }
            if(cond == "Clouds"){
                weather_cond.src="./images/clouds.png"
            }
            if(cond == "Rain"){
                weather_cond.src="./images/rain.png"
            }
            if(cond == "Mist"){
                weather_cond.src="./images/mist.png"
            }
            if(cond == "Snow"){
                weather_cond.src="./images/snow.png"
            }
            

        })
        .catch(error => {
            console.error('Error:', error);
        });
}
