
//         export const requestURL = baseUrl + "?" + queryStringBogota;
//         import { requestURL } from './getWeather.js';

// async function getWeeklyInfo() {
//     const result = await fetch(requestURL);
//     const weather = await result.json();
//     console.log(weather);

//     // Your code for handling weather data...
// }

// getWeeklyInfo();


//     weather.daily.time.forEach((day, i) => {
//         const tempMax = weather.daily.temperature_2m_max[i];
//         const tempMin = weather.daily.temperature_2m_min[i];
//         const sunrise = weather.daily.sunrise[i];
//         const sunset = weather.daily.sunset[i];
//         const rainSum = weather.daily.rain_sum[i];
//         const windSum = weather.daily.wind_speed_10m_max[i];

//         const dayContainer = document.createElement("div");
//         dayContainer.classList.add("day-container");

//         // Create max-min-temp div
//         const maxMinTemDiv = document.createElement("div");
//         maxMinTemDiv.classList.add("max-min-temp");

//         // Create tempMax paragraph
//         const tempMaxP = document.createElement("p");
//         tempMaxP.textContent = `${tempMax} °/`;
//         tempMaxP.classList.add("tempmax");

//         // Create tempMin paragraph
//         const tempMinP = document.createElement("p");
//         tempMinP.textContent = `${tempMin} °`;
//         tempMinP.classList.add("tempmin");

//         // Append tempMaxP and tempMinP to maxMinTemDiv
//         maxMinTemDiv.appendChild(tempMaxP);
//         maxMinTemDiv.appendChild(tempMinP);

//         // Append maxMinTemDiv to the dayContainer
//         dayContainer.appendChild(maxMinTemDiv);


//         // Call getweatherTitleIcon function to add weather icons and descriptions

//         getweatherTitleIcon(weather, dayContainer, i);

//         // Create rain icon div
//         const rainIconDiv = document.createElement("div");
//         rainIconDiv.style.width = "20px";
//         rainIconDiv.style.height = "20px";

//         // Create rain icon
//         const rainIcon = document.createElement("img");
//         rainIcon.src = "./rain-icon.png";
//         rainIcon.alt = "Rain Icon";

//         // Rain info
//         const rainInfoP = document.createElement("p");
//         rainInfoP.textContent = `${rainSum} mm`;
//         rainInfoP.classList.add("rain-info");

//         const rainDiv = document.createElement("div");
//         rainDiv.classList.add("div-for-rain");

//         // Append rain icon to rain icon div
//         rainIconDiv.appendChild(rainIcon);

//         // Append rain icon div and rain info to the rain div
//         rainDiv.appendChild(rainIconDiv);
//         rainDiv.appendChild(rainInfoP);

//         // Append the rain div to the dayContainer
//         dayContainer.appendChild(rainDiv);

//         // Sunrise
//         const sunriseP = document.createElement("p");
//         const arrSunrise = sunrise.split("T");
//         const sunriseTime = arrSunrise[1];
//         sunriseP.textContent = `${sunriseTime} am`;
//         sunriseP.classList.add("sunrise");

//         // Create parent div for sunrise icon and sunrise time
//         const sunriseDiv = document.createElement("div");
//         sunriseDiv.classList.add("div-for-sunrise");

//         // Create sunrise icon div
//         const sunriseIconDiv = document.createElement("div");
//         sunriseIconDiv.classList.add("icon-wrapper");
//         sunriseIconDiv.style.width = "20px";
//         sunriseIconDiv.style.height = "20px";

//         // Create sunrise icon
//         const sunriseIcon = document.createElement("img");
//         sunriseIcon.src = "./icon-sunrise.png";
//         sunriseIcon.alt = "Sunrise Icon";

//         // Append sunrise icon to sunrise icon div
//         sunriseIconDiv.appendChild(sunriseIcon);

//         // Append sunrise icon div and sunrise time paragraph to the sunrise div
//         sunriseDiv.appendChild(sunriseIconDiv);
//         sunriseDiv.appendChild(sunriseP);

//         // Append the sunrise div to the dayContainer
//         dayContainer.appendChild(sunriseDiv);

//         // Sunset
//         const sunsetP = document.createElement("p");
//         const arrSunset = sunset.split("T");
//         const sunsetTime = arrSunset[1];
//         sunsetP.textContent = `${sunsetTime} pm`;
//         sunsetP.classList.add("sunset");

//         // Create parent div for sunset icon and sunset time
//         const sunsetDiv = document.createElement("div");
//         sunsetDiv.classList.add("div-for-sunset");

//         // Create sunset icon div
//         const sunsetIconDiv = document.createElement("div");
//         sunsetIconDiv.classList.add("icon-wrapper");
//         sunsetIconDiv.style.width = "20px";
//         sunsetIconDiv.style.height = "20px";

//         // Create sunset icon
//         const sunsetIcon = document.createElement("img");
//         sunsetIcon.src = "./icon-sunset.png";
//         sunsetIcon.alt = "Sunset Icon";

//         // Append sunset icon to sunset icon div
//         sunsetIconDiv.appendChild(sunsetIcon);

//         // Append sunset icon div and sunset time paragraph to the sunset div
//         sunsetDiv.appendChild(sunsetIconDiv);
//         sunsetDiv.appendChild(sunsetP);

//         // Append the sunset div to the dayContainer
//         dayContainer.appendChild(sunsetDiv);

//         // Append elements to the dayContainer
//         document.querySelector('.main-container').appendChild(dayContainer);
//     });


// getWeeklyInfo(requestURL);

