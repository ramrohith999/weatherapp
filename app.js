const apiKey="bf60e66faa94a656915b3cfb1cc8a4c0";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox= document.querySelector("#search input");
const searchBtn=document.querySelector("#search button");

const weatherIcon=document.querySelector(".weather_icon")

async function checkWeather(city) {
    const response = await fetch(apiUrl+city+`&appid=${apiKey}`);

    if(response.status== 404){
        document.querySelector(".error").style.display="block";
        document.getElementsByClassName(".advice").style.display="none";
    }else{
        var data= await response.json();

        console.log(data);
    
    document.querySelector(".city").innerHTML= data.name;
    document.querySelector(".temp").innerHTML= Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML= data.main.humidity+ "%";
    document.querySelector(".wind").innerHTML= data.wind.speed + " km/h";
    
    
    if(data.weather[0].main=="Clouds"){
    weatherIcon.src= "images/clouds.png";
    }else if(data.weather[0].main=="Clear"){
        weatherIcon.src= "images/clear.png";
    
    }
    else if(data.weather[0].main=="Rain"){
        weatherIcon.src= "images/rain.png";
    
    }else if(data.weather[0].main=="Mist"){
        weatherIcon.src= "images/mist.png";
    
    }else if(data.weather[0].main=="Drizzle"){
        weatherIcon.src= "images/drizzle.png";
    
    }else if(data.weather[0].main=="Snow"){
        weatherIcon.src= "images/snow.png";
    
    }

//
if(data.main.temp<=5){
    document.querySelector(".advice").innerHTML="It is so chilly, wear a sweater &#x2744";
    }else if(data.main.temp>5 && data.main.temp<=15 ){
        document.querySelector(".advice").innerHTML="Nice time to get a coffee &#9749";

    }
    else if(data.main.temp>15 && data.main.temp<=25){
        document.querySelector(".advice").innerHTML="Best time to go for a walk &#128522 ";
    }else if(data.main.temp>25 && data.main.temp<=35){
        document.querySelector(".advice").innerHTML="It is warm out there &#127774 ";

    }else if(data.main.temp>35){
        document.querySelector(".advice").innerHTML="Stay Indoors!! &#129297  ";
    
    }

//new code


    document.querySelector(".error").style.display="none";
    document.querySelector(".advice").style.display="block";


    }

    
}


searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})


