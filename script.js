document.getElementById('search-btn').addEventListener('click', function() {
    const city = document.getElementById('city-input').value;
    const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key

    if (city) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('City not found');
                }
                return response.json();
            })
            .then(data => {
                document.getElementById('city-name').innerText = data.name;
                document.getElementById('temperature').innerText = `Temperature: ${data.main.temp}°C`;
                document.getElementById('description').innerText = `Description: ${data.weather[0].description}`;
                document.getElementById('humidity').innerText = `Humidity: ${data.main.humidity}%`;
            })
            .catch(error => {
                alert('City not found. Please try again.');
                console.error(error);
            });
    } else {
        alert('Please enter a city name.');
    }
});
