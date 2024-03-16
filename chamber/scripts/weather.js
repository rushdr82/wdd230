// Weather and forecast data API script
const apiKey = 'f69ba042398b2e408d45471b786011e5';
const lat = '47.76';
const lon = '-116.78';
const part = 'current,minutely,hourly,alerts'; //excluded from API response

// Function to get the real-time weather conditions
function getRealTimeWeather(lat, lon, apiKey) {
    const url2 = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;
    fetch(url2)
        .then(response => response.json())
        .then(data => {
            const temperature = data.main.temp; // Temperature
            const feels_like = data.main.feels_like //windchill + humidity
            const weatherDescription = data.weather[0].description; // Weather description
            const weatherIconCodenow = data.weather[0].icon; // Weather icon code
            const weatherIconUrlnow = `http://openweathermap.org/img/wn/${weatherIconCodenow}.png`; // Weather icon URL

            //console.log(`Temperature: ${temperature}`);
            //console.log(`Weather Description: ${weatherDescription}`);
            //console.log(`Weather Icon URL: ${weatherIconUrlnow}`);
            document.getElementById('temperature').textContent = `${Math.round(temperature)}°F`;
            document.getElementById('feels_like').textContent = `Feels like: ${Math.round(feels_like)}°F`;
            document.getElementById('weather-icon').src = `${weatherIconUrlnow}`;
            document.getElementById('description').textContent = weatherDescription;
        })
        .catch(error => console.error('Error fetching data:', error));
}

// Call the function with your city, country code, and API key
getRealTimeWeather(lat, lon, apiKey);

// Function to get the three-day weather forecast
function getThreeDayForecast(lat, lon, apiKey) {
    const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=${part}&units=imperial&appid=${apiKey}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const threeDayForecast = data.daily.slice(0, 3);
            //console.log(threeDayForecast);
            forecastContainer = document.getElementById('weather-forecast');
            threeDayForecast.forEach(day => {
                const date = new Date(day.dt * 1000);
                const daysOfWeek = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
                const dayOfWeek = daysOfWeek[date.getDay()];
                const temp = day.temp.day;
                const description = day.weather[0].description;
                const weatherIconCodefut = day.weather[0].icon;
                const weatherIconUrlfut = `http://openweathermap.org/img/wn/${weatherIconCodefut}.png`;
                forecastContainer.innerHTML += `
                    <div class="forecast-day">
                        <p>${dayOfWeek}</p>
                        <img src="${weatherIconUrlfut}" alt="Weather icon">
                        <p>${Math.round(temp)}°F</p>
                    </div>
                `;
            });
        })
        .catch(error => console.error('Error fetching data:', error));
}

// Call the function with your coordinates and API key
getThreeDayForecast(lat, lon, apiKey);