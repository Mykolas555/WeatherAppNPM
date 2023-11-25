import renderDefaultCitys from "./renderDefaultCitys";

const fetchCityData = () => {
    fetch('https://api.meteo.lt/v1/places/vilnius/forecasts/long-term')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const cityName = data.place.name;
            const cityTime = data.forecastCreationTimeUtc.split(' ')[1];
            const cityWeather = data.forecastTimestamps[0].conditionCode;
            const cityTemperature = data.forecastTimestamps[0].airTemperature;
            const cityCountry = data.place.country;
            const cityData = { cityName, cityTime, cityWeather, cityTemperature, cityCountry };
            renderDefaultCitys(cityData);
        })
        .catch(error => {
            console.error('Error fetching city data:', error);
        });
};

export default fetchCityData;
