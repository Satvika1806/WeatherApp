
let weather = {
    fetchWeather: function(cityName){
        fetch("https://api.weatherapi.com/v1/current.json?key=4d7db9fb320a4c1abaa170651222707&q=" + cityName + "&aqi=no")
        .then((response) => response.json())
        // .then((data) => console.log(data));
        .then((data) => this.displayWeather(data));
        
    }, 
    

    displayWeather: function(data){

        const { name, country } = data.location;
        const { icon,text } = data.current.condition; 
        const { temp_c, humidity, cloud, feelslike_c, wind_kph  } = data.current;
    
        console.log(name,icon,text,temp_c, wind_kph,cloud ,humidity, feelslike_c);      
        
        document.querySelector(".location").innerText = name;
        document.querySelector(".Country").innerText = country;


        
        const iconresult = icon.substr("//cdn.weatherapi.com/weather/64x64/".length);
    
        document.querySelector(".icon").src = "./icons/" + iconresult;

       

        document.querySelector(".description").innerText = text;
        document.querySelector(".temp").innerText = temp_c + "°";
        document.querySelector(".tempf").innerText = feelslike_c + "°";
        document.querySelector(".clouds").innerText = cloud + "%";
        document.querySelector(".humid").innerText = humidity + "%";
        document.querySelector(".wind").innerText = wind_kph + " km/h";

       
        const timeOut = document.querySelector('.time');

        const time = data.location.localtime;   //"localtime": "2022-07-28 13:10"   ==> YYYY-MM-DD_HH:MM
        const t = time.substr(11);
        const y = parseInt(time.substr(0,4));   
        const m = parseInt(time.substr(5,2));   
        const d = parseInt(time.substr(8,2));

        const weekDay = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        
        const dt = new Date();
        let day = weekDay[dt.getDay()];
        if(m<10){
            document.querySelector('.date').innerHTML = day + ", " + d + ".0" + m + "." + y;
        }
        else{
            document.querySelector('.date').innerHTML = day + ", " + d + "." + m + "." + y;
        }

        timeOut.innerHTML = t;
        
        //unique id for each condition
        const code = data.current.condition.code;

        const app = document.querySelector('.weatherApp');

        //day => is_day = 1

        if(!data.current.is_day) {
            if(code == 1000){
                app.style.backgroundImage = 'url("./images/night/clear.jpg")'
            }
    
            else if (code == 1003 || code == 1006 || code == 1009 || code == 1069 || code == 1087) {
                app.style.backgroundImage = 'url("./images/night/cloudy.jpg")'
            }
    
            else if( code == 1063 ||code ==  1180 || code == 1183 ||code ==  1186 || code == 1189 || code == 1192 || code == 1195 || code == 1198 ||code ==  1201 || code == 1240 ||code ==  1243 || code == 1246 ||code ==  1273 ||code ==  1276) {
                app.style.backgroundImage = 'url("./images/night/rain.jpg")' 
            }
    
            else if (code == 1066 || code ==  1114 ||code ==  1210 || code == 1213 || code == 1216 || code == 1219 || code == 1222 || code == 1225 || code == 1255 || code == 1258 || code == 1279 || code ==  1282) {
                app.style.backgroundImage = 'url("./images/night/snow.jpg")' 
            }
    
            else if(code == 1030 || code == 1117 || code == 1135 || code == 1147) {
                app.style.backgroundImage = 'url("./images/night/mist.jpg")' 
            }
    
            else if(code == 1171 || code == 1168 || code == 1153 || code == 1150 || code == 1072) {
                app.style.backgroundImage = 'url("./images/night/drizzle.jpg")' 
            }
    
            else if(code == 1069 || code == 1204 || code == 1207 || code == 1234 || code == 1249 || code == 1252 || code == 1261 || code == 1264){
                app.style.backgroundImage = 'url("./images/night/ice.jpg")'
            }
        }

        else {
            if(code == 1000){
                app.style.backgroundImage = 'url("./images/day/clear.jpg")'
            }
    
            else if (code == 1003 || code == 1006 || code == 1009 || code == 1069 || code == 1087) {
                app.style.backgroundImage = 'url("./images/day/cloudy.jpg")'
            }
    
            else if( code == 1063 ||code ==  1180 || code == 1183 ||code ==  1186 || code == 1189 || code == 1192 || code == 1195 || code == 1198 ||code ==  1201 || code == 1240 ||code ==  1243 || code == 1246 ||code ==  1273 ||code ==  1276) {
                app.style.backgroundImage = 'url("./images/day/rain.jpg")' 
            }
    
            else if (code == 1066 || code ==  1114 ||code ==  1210 || code == 1213 || code == 1216 || code == 1219 || code == 1222 || code == 1225 || code == 1255 || code == 1258 || code == 1279 || code ==  1282) {
                app.style.backgroundImage = 'url("./images/day/snow.jpg")' 
            }
    
            else if(code == 1030 || code == 1117 || code == 1135 || code == 1147) {
                app.style.backgroundImage = 'url("./images/day/mist.jpg")' 
            }
    
            else if(code == 1171 || code == 1168 || code == 1153 || code == 1150 || code == 1072) {
                app.style.backgroundImage = 'url("./images/day/drizzle.jpg")' 
            }
    
            else if(code == 1069 || code == 1204 || code == 1207 || code == 1234 || code == 1249 || code == 1252 || code == 1261 || code == 1264){
                app.style.backgroundImage = 'url("./images/day/ice.jpg")'
            }
        }

    },
    
} 

var c1 = document.getElementById("city1");
var c2 = document.getElementById("city2");
var c3 = document.getElementById("city3");
var c4 = document.getElementById("city4");

let cin = "Tirupati"
weather.fetchWeather(cin);

c1.addEventListener('click', (eve) => {
    c1 = eve.target.innerHTML;
    weather.fetchWeather(c1);
}) 


c2.addEventListener('click', (eve) => {
    c2 = eve.target.innerHTML;
    weather.fetchWeather(c2);
}) 


c3.addEventListener('click', (eve) => {
    c3 = eve.target.innerHTML;
    weather.fetchWeather(c3);
}) 


c4.addEventListener('click', (eve) => {
    c4 = eve.target.innerHTML;
    weather.fetchWeather(c4);
}) 


function clickevent(){

    if(search.value.length == 0){
        alert('Please type in a city name');
    }
    else {

        cin = search.value;
        weather.fetchWeather(cin);
        search.value = "";

    }
    
}

document.querySelector(".search").addEventListener("keyup",function(event){
    if(event.key == "Enter"){
        weather.fetchWeather(search.value);
        search.value = "";
    }
});











