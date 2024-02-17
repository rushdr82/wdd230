// Example function to fetch weather data
async function getWeatherData() {
    const locationUrl = 'https://api.weather.gov/points/47.757112,-116.788877';
    try {
        const response = await fetch(locationUrl);
        const locationData = await response.json();
        const forecastUrl = locationData.properties.forecast;
        const forecastResponse = await fetch(forecastUrl);
        const forecastData = await forecastResponse.json();

        // Extract relevant weather information
        const shortForecast = forecastData.properties.periods[0].shortForecast;
        const currentTemperature = forecastData.properties.periods[0].temperature;
        const windSpeed = forecastData.properties.periods[0].windSpeed;
        const windDirection = forecastData.properties.periods[0].windDirection;

        // Check if the short forecast contains "Sunny"
        if (shortForecast.includes("Sunny")) {
            // Display a sunny thumbnail on your webpage
            document.getElementById("thumbnail").src = "https://upload.wikimedia.org/wikipedia/commons/9/92/Draw_sunny.png";
            document.getElementById("thumbnail").alt = "Sunny";
        } else {
            // Do nothing or display a different thumbnail
        }

        // Check if the short forecast contains "Mostly Cloudy"
        if (shortForecast.includes("Mostly Cloudy")) {
            // Display a sunny thumbnail on your webpage
            document.getElementById("thumbnail").src = "https://upload.wikimedia.org/wikipedia/commons/f/f6/Weather-overcast.svg";
            document.getElementById("thumbnail").alt = "Mostly Cloudy";
        } else {
            // Do nothing or display a different thumbnail
        }

        // Check if the short forecast contains "Partly Cloudy"
        if (shortForecast.includes("Partly Cloudy")) {
            // Display a sunny thumbnail on your webpage
            document.getElementById("thumbnail").src = "https://upload.wikimedia.org/wikipedia/commons/9/91/Weather-more-clouds.svg";
            document.getElementById("thumbnail").alt = "Partly Cloudy";
        } else {
            // Do nothing or display a different thumbnail
        }

        // Check if the short forecast contains "Partly Sunny"
        if (shortForecast.includes("Partly Sunny")) {
            // Display a sunny thumbnail on your webpage
            document.getElementById("thumbnail").src = "https://upload.wikimedia.org/wikipedia/commons/5/52/Weather-few-clouds.svg";
            document.getElementById("thumbnail").alt = "Partly Sunny";
        } else {
            // Do nothing or display a different thumbnail
        }

        // Check if the short forecast contains "Clear"
        if (shortForecast.includes("Clear")) {
            // Display a sunny thumbnail on your webpage
            document.getElementById("thumbnail").src = "https://upload.wikimedia.org/wikipedia/commons/f/f9/Weather-clear-night.svg";
            document.getElementById("thumbnail").alt = "Clear";
        } else {
            // Do nothing or display a different thumbnail
        }

        // Check if the short forecast contains "Snow"
        if (shortForecast.includes("Snow")) {
            // Display a sunny thumbnail on your webpage
            document.getElementById("thumbnail").src = "https://upload.wikimedia.org/wikipedia/commons/8/84/Weather-snow.svg";
            document.getElementById("thumbnail").alt = "Snow";
        } else {
            // Do nothing or display a different thumbnail
        }

        // Check if the short forecast contains "Rain"
        if (shortForecast.includes("Rain")) {
            // Display a sunny thumbnail on your webpage
            document.getElementById("thumbnail").src = "https://upload.wikimedia.org/wikipedia/commons/4/45/Weather-overcast-rare-showers.svg";
            document.getElementById("thumbnail").alt = "Rain";
        } else {
            // Do nothing or display a different thumbnail
        }

        // Display the data on your webpage
        document.getElementById('shortForecast').textContent = `${shortForecast}`;
        document.getElementById('temperature').textContent = `${currentTemperature}°F`;
        document.getElementById('windSpeed').textContent = `${windSpeed}`;
        document.getElementById('windDirection').textContent = `Wind: ${windDirection}`;

    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

// Call the function to get weather data
getWeatherData();

// Call the function to get weather data
getWeatherData();
