async function calculateWindChill() {
    // Get the current temperature and wind speed data from the NWS API
    // Replace the coordinates with your desired location
    const locationUrl = 'https://api.weather.gov/points/47.757112,-116.788877';
    try {
        const response = await fetch(locationUrl);
        const locationData = await response.json();
        const forecastUrl = locationData.properties.forecast;

        const forecastResponse = await fetch(forecastUrl);
        const forecastData = await forecastResponse.json();

        // Extract relevant weather information
        const temperature = forecastData.properties.periods[0].temperature;
        const windSpeed = forecastData.properties.periods[0].windSpeed;

        // Check if input values meet the specification limits
        if (temperature <= 50 && windSpeed > 3.0) {
            // Formula for English units
            const windChill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
            // Round the result to the nearest integer
            const roundedWindChill = Math.round(windChill);
            // Display the result on the webpage
            document.getElementById("result").textContent = `Wind Chill: ${roundedWindChill}°F`;
        } else {
            // Input values do not meet requirements, display "N/A"
            document.getElementById("result").textContent = "Wind Chill: N/A";
        }

    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

// Call the function to calculate wind chill
calculateWindChill();