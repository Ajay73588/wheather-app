document.getElementById('get-weather-btn').addEventListener('click', function () {
    const city = document.getElementById('city-input').value;
    if (city) {
        getWeather(city);
    } else {
        alert('Please enter a city name.');
    }
});

async function getWeather(city) {
    const apiKey = '07a185f7f12a29c8c653ee47352b25f8'; // Replace with your OpenWeatherMap API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        if (data.cod === 200) {
            const weather = data.weather[0].description;
            const temp = data.main.temp;
            document.getElementById('weather-result').innerHTML = `
                <p><strong>City:</strong> ${city}</p>
                <p><strong>Weather:</strong> ${weather}</p>
                <p><strong>Temperature:</strong> ${temp}°C</p>
            `;
        } else {
            document.getElementById('weather-result').innerHTML = `<p>City not found. Please try again.</p>`;
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}