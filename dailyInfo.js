
// async function getDailyInfo(){
//     const result = await axios.get(requestURL);
   
//     const weatherDaily = await result.json();
//     console.log(weatherDaily);
    
//     // Format the current time
//     const formattedTime = new Intl.DateTimeFormat("en-US", {
//         day: "2-digit",
//         month: "long",
//         year: "numeric",
//         hour: "numeric",
//         minute: "numeric",
//         weekday: "long",
//         timeZone: "America/Bogota" // Set the time zone to Colombian time
//     }).format(new Date());

//     // Create an h1 element for the formatted time
//     const timeH2 = document.createElement("h2");
//     timeH2.textContent = formattedTime;

//     // Append the timeH1 to the currentWeatherIconDiv
//     currentWeatherIconDiv.appendChild(timeH2);
    

//     dailyWeather.daily.time.forEach((timestamp, i) => {
//         // You can handle each timestamp as needed here
//     });
// }
