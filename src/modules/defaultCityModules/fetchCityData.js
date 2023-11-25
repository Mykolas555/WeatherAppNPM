import renderDefaultCitys from "./renderDefaultCitys";
import errorInputCitys from "./defaultCityErrorAppend";

const fetchCityData = async () => {
    const cities = ["vilnius", "kaunas", "klaipeda", "rokiskis"]; // Add the names of the cities you want
    const cityDataArray = [];
    for (const city of cities) {
        try {
            const response = await fetch(`https://api.meteo.lt/v1/places/${city}/forecasts/long-term`);
            if (!response.ok) {
                throw new Error(`Error fetching data for ${city}`);
            }
            const data = await response.json();
            const cityName = data.place.name;
            const currentTime = new Date();
            const hours = currentTime.getHours();
            const minutes = currentTime.getMinutes();
            const cityTime = `${hours}:${minutes}`;
            const cityWeather = data.forecastTimestamps[0].conditionCode;
            const cityTemperature = data.forecastTimestamps[0].airTemperature;
            const cityCountry = data.place.country;
            const cityData = {
                cityName,
                cityTime,
                cityWeather,
                cityTemperature,
                cityCountry
            };
            cityDataArray.push(cityData);
        } catch (error) {
            console.error(error);
            errorInputCitys();
        }
    }
    renderDefaultCitys(cityDataArray);
};

export default fetchCityData;