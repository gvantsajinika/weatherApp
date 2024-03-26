const queryString = "latitude=4.6097&longitude=-74.0817&current=temperature_2m,is_day,rain&hourly=temperature_2m,relative_humidity_2m,apparent_temperature,rain&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset&timezone=auto&past_days=1&forecast_days=1"
const queryStringBogota ="latitude=4.6097&longitude=-74.0817&current=temperature_2m,relative_humidity_2m,rain,showers,weather_code,cloud_cover,wind_speed_10m,wind_direction_10m&hourly=temperature_2m,cloud_cover&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,rain_sum,wind_speed_10m_max&timezone=auto&past_days=1"
const baseUrl = "https://api.open-meteo.com/v1/forecast"
const requestURL = baseUrl + "?" + queryStringBogota;

console.log(requestURL)

async function getWeather() {
    try {
        const result = await axios.get(requestURL);
        const weather = result.data;

        const bogotaDiv = document.createElement("div");
        bogotaDiv.classList.add("current-div");

        const timeZoneH2 = document.createElement("h2");
        timeZoneH2.textContent =  weather.timezone;
        timeZoneH2.classList.add("timezone");
        bogotaDiv.appendChild(timeZoneH2);

        const timeH1 = document.createElement("h1");
        timeH1.textContent =  weather.current.time;
        timeH1.classList.add("time-h1");
        bogotaDiv.appendChild(timeH1);

        // Creating a new Intl.DateTimeFormat object and formatting the current date and time
        const formattedTime = new Intl.DateTimeFormat("en-US", {
            day:"2-digit",
            month:"long",
            year:"numeric",
            hour:"numeric",
            minute:"numeric",
            weekday: "long",
            timeZone: "America/Bogota" // Set the time zone to Colombian time
         
        }).format(new Date());

        const latitude = document.createElement("h3");
        latitude.textContent = "Latitude: " + weather.latitude;
        latitude.classList.add("laltitude-h3");
        bogotaDiv.appendChild(latitude);

        const longitude = document.createElement("h3");
        longitude.textContent = "Longitude: " + weather.longitude;
        longitude.classList.add("longitude-h3");
        bogotaDiv.appendChild(longitude);
         
        
        // Now, we're updating the time-h1 element directly here
        timeH1.innerHTML =  formattedTime;

        const weatherH1 = document.createElement("h1");
        weatherH1.textContent = "Temperature: " + weather.current.temperature_2m + weather.hourly_units.temperature_2m;
        weatherH1.classList.add("current-temp");
        bogotaDiv.appendChild(weatherH1);

        const humidity = document.createElement("h1");
        humidity.textContent = "Humidity: " + weather.current.relative_humidity_2m + weather.current_units.relative_humidity_2m;
        humidity.classList.add("humidity");
        bogotaDiv.appendChild(humidity);

        return bogotaDiv;
 
    } catch (error) {
        console.error("Error fetching weather data:", error);
        throw error;
    }
}


getWeather()

document.addEventListener("DOMContentLoaded", async function() {
    try {
        const bogotaDiv = await getWeather();

        const currentWeatherDiv = document.querySelector('.current-weather');
        if (currentWeatherDiv) {
            currentWeatherDiv.parentNode.insertBefore(bogotaDiv, currentWeatherDiv.nextSibling);
        } else {
            console.error("Element with class 'current-weather' not found.");
        }
    } catch (error) {
        console.error("Error:", error);
    }
});


async function getWeeklyInfo() {
    const result = await fetch(requestURL);
    const weather = await result.json();
    console.log(weather);

    weather.daily.time.forEach((day, i) => {
        const date = weather.daily.time[i]
        const tempMax = weather.daily.temperature_2m_max[i];
        const tempMin = weather.daily.temperature_2m_min[i];
        const sunrise = weather.daily.sunrise[i];
        const sunset = weather.daily.sunset[i];
        const rainSum = weather.daily.rain_sum[i];
        const windSum = weather.daily.wind_speed_10m_max[i];

        const dayContainer = document.createElement("div");
        dayContainer.classList.add("day-container");
        
// console.log(day)

const dateDiv = document.createElement("div");
dateDiv.classList.add("date-for-main-cont")

const dateDivP = document.createElement("p");
dateDivP.textContent = `${date}`
dateDivP.classList.add("date-weekly");

// dateDiv.appendChild(dateDivP)
// dayContainer.appendChild(dateDiv)

const dateP = document.createElement("P");
dateP.textContent =  weather.current.time;
dateP.classList.add("dateP");
dayContainer.appendChild(dateP);

// Creating a new Intl.DateTimeFormat object and formatting the current date and time
const formattedTime = new Intl.DateTimeFormat("en-US", {
    day:"2-digit",
    weekday: "short",
    month:"short",
    timeZone: "America/Bogota" // Set the time zone to Colombian time
 
}).format(new Date());

dateP.innerHTML =  formattedTime;


const tempIcon = document.createElement("img");
tempIcon.src = "./temp-icon.png";
tempIcon.alt = "temp Icon";

const tempIconDiv = document.createElement("div");
tempIconDiv.style.width = "25px";
tempIconDiv.style.height = "25px";

// // Append tempIcon to tempIconDiv
// tempIconDiv.appendChild(tempIcon);

const tempDiv = document.createElement("div");
tempDiv.classList.add("div-for-temp");

tempIconDiv.appendChild(tempIcon);


const maxMinTemDiv = document.createElement("div");
maxMinTemDiv.classList.add("max-min-temp");

// Append tempIcon to maxMinTemDiv before temperature paragraphs
maxMinTemDiv.appendChild(tempIcon);

const tempMaxP = document.createElement("p");
tempMaxP.textContent = `${tempMax} °/`;
tempMaxP.classList.add("tempmax");

        // Create tempMin paragraph
        const tempMinP = document.createElement("p");
        tempMinP.textContent = `${tempMin} °`;
        tempMinP.classList.add("tempmin");

        // Append tempMaxP and tempMinP to maxMinTemDiv
        tempDiv.appendChild(tempIconDiv);
        
        maxMinTemDiv.appendChild(tempMaxP);
        maxMinTemDiv.appendChild(tempMinP);
        dayContainer.appendChild(maxMinTemDiv);
        
        // Append maxMinTemDiv to the dayContainer
        maxMinTemDiv.append(tempIconDiv)


        // Call getweatherTitleIcon function to add weather icons and descriptions

        getweatherTitleIcon(weather, dayContainer, i);

        // Create rain icon div
        const rainIconDiv = document.createElement("div");
        rainIconDiv.style.width = "20px";
        rainIconDiv.style.height = "20px";

        // Create rain icon
        const rainIcon = document.createElement("img");
        rainIcon.src = "./rain-icon.png";
        rainIcon.alt = "Rain Icon";

        // Rain info
        const rainInfoP = document.createElement("p");
        rainInfoP.textContent = `${rainSum} mm`;
        rainInfoP.classList.add("rain-info");

        const rainDiv = document.createElement("div");
        rainDiv.classList.add("div-for-rain");

        // Append rain icon to rain icon div
        rainIconDiv.appendChild(rainIcon);

        // Append rain icon div and rain info to the rain div
        rainDiv.appendChild(rainIconDiv);
        rainDiv.appendChild(rainInfoP);

        // Append the rain div to the dayContainer
        dayContainer.appendChild(rainDiv);

        //wind info
        const windIconDiv = document.createElement("div");
        windIconDiv.style.width = "20px";
        windIconDiv.style.height = "20px";

        // Create rain icon
        const windIcon = document.createElement("img");
        windIcon.src = "./wind-icon.png";
        windIcon.alt = "Rain Icon";

        const windInfoP =document.createElement("p");
        windInfoP.textContent = `${windSum} km/h`
        windInfoP.classList.add("wind-info")

        const windDiv = document.createElement("div");
        windDiv.classList.add("div-for-wind");

        windIconDiv.appendChild(windIcon)

        // Append rain icon div and rain info to the rain div
        windDiv.appendChild(windIconDiv);
        windDiv.appendChild(windInfoP);

        // Append the rain div to the dayContainer
        dayContainer.appendChild(windDiv);

        // Sunrise
        const sunriseP = document.createElement("p");
        const arrSunrise = sunrise.split("T");
        const sunriseTime = arrSunrise[1];
        sunriseP.textContent = `${sunriseTime} am`;
        sunriseP.classList.add("sunrise");

        // Create parent div for sunrise icon and sunrise time
        const sunriseDiv = document.createElement("div");
        sunriseDiv.classList.add("div-for-sunrise");

        // Create sunrise icon div
        const sunriseIconDiv = document.createElement("div");
        sunriseIconDiv.classList.add("icon-wrapper");
        sunriseIconDiv.style.width = "20px";
        sunriseIconDiv.style.height = "20px";

        // Create sunrise icon
        const sunriseIcon = document.createElement("img");
        sunriseIcon.src = "./icon-sunrise.png";
        sunriseIcon.alt = "Sunrise Icon";

        // Append sunrise icon to sunrise icon div
        sunriseIconDiv.appendChild(sunriseIcon);

        // Append sunrise icon div and sunrise time paragraph to the sunrise div
        sunriseDiv.appendChild(sunriseIconDiv);
        sunriseDiv.appendChild(sunriseP);

        // Append the sunrise div to the dayContainer
        dayContainer.appendChild(sunriseDiv);

        // Sunset
        const sunsetP = document.createElement("p");
        const arrSunset = sunset.split("T");
        const sunsetTime = arrSunset[1];
        sunsetP.textContent = `${sunsetTime} pm`;
        sunsetP.classList.add("sunset");

        // Create parent div for sunset icon and sunset time
        const sunsetDiv = document.createElement("div");
        sunsetDiv.classList.add("div-for-sunset");

        // Create sunset icon div
        const sunsetIconDiv = document.createElement("div");
        sunsetIconDiv.classList.add("icon-wrapper");
        sunsetIconDiv.style.width = "20px";
        sunsetIconDiv.style.height = "20px";

        // Create sunset icon
        const sunsetIcon = document.createElement("img");
        sunsetIcon.src = "./icon-sunset.png";
        sunsetIcon.alt = "Sunset Icon";

        // Append sunset icon to sunset icon div
        sunsetIconDiv.appendChild(sunsetIcon);

        // Append sunset icon div and sunset time paragraph to the sunset div
        sunsetDiv.appendChild(sunsetIconDiv);
        sunsetDiv.appendChild(sunsetP);

        // Append the sunset div to the dayContainer
        dayContainer.appendChild(sunsetDiv);

        // Append elements to the dayContainer
        document.querySelector('.main-container').appendChild(dayContainer);
    });
}

getWeeklyInfo();

function getweatherTitleIcon(weatherDailyCode) {

    const weatherCode = weatherDailyCode.daily.weather_code[0]; // Assuming you're using the first weather code

    // Debugging: Log weather code
    console.log("Weather Code:", weatherCode);

    // Weather icon for day
    const firstIconWeatherDay = document.createElement("img");
    firstIconWeatherDay.src = weatherCodeInfo[weatherCode].day.image;
    firstIconWeatherDay.alt = "daily-icon";

    // Paragraph for day description
    const firstIconWeatherDayDesc = document.createElement("p");
    firstIconWeatherDayDesc.textContent = weatherCodeInfo[weatherCode].day.description;

    // Weather icon for night
    const firstIconWeatherNight = document.createElement("img");
    firstIconWeatherNight.src = weatherCodeInfo[weatherCode].night.image;
    firstIconWeatherNight.alt = "nightly-icon";

    // Paragraph for night description
    const firstIconWeatherNightDesc = document.createElement("p");
    firstIconWeatherNightDesc.textContent = weatherCodeInfo[weatherCode].night.description;

    // Create parent div for weather icons and descriptions
    const weatherIconDiv = document.createElement("div");
    weatherIconDiv.classList.add("current-weather-icon");

    // Append day and night weather elements to the weather icon div
    weatherIconDiv.appendChild(firstIconWeatherDay);
    weatherIconDiv.appendChild(firstIconWeatherDayDesc);
    weatherIconDiv.appendChild(firstIconWeatherNight);
    weatherIconDiv.appendChild(firstIconWeatherNightDesc);

    // Append the weather icon div to the appropriate container
    const currentWeatherIconDiv = document.querySelector('.current-weather-icon');
    currentWeatherIconDiv.appendChild(weatherIconDiv);

          
}

