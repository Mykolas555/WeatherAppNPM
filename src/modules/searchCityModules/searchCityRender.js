import searchCityHtml from "./searchCityHtml";
import searchCityImage from "./searchCityImages";
import searchCityErrorDiv from "./searchCityErrorDiv";

const searchCityRender = async (cityInput) => {
    let containerElement = document.querySelector('.forecastCity');
    containerElement.style.display = 'none';
    let elementDiv = document.createElement('div');
    elementDiv.className = 'forecastItems';
    containerElement.innerHTML = '';
    let cityNameInput = document.createElement('h4');
    cityNameInput.innerHTML = cityInput;
    elementDiv.appendChild(cityNameInput);
    containerElement.appendChild(elementDiv);
    const forecastFetchData = [];
    const uniqueDates = new Set();
    try {
        const response = await fetch(`https://api.meteo.lt/v1/places/${cityInput}/forecasts/long-term`);
        if (!response.ok) {
            throw new Error(`Error`);
        }
        containerElement.style.display = 'flex';
        const data = await response.json();
        for (let i = 0; i < data.forecastTimestamps.length; i++) {
            const forecastDateTime = data.forecastTimestamps[i].forecastTimeUtc;
            const forecastDay = forecastDateTime.slice(0, 10);
            if (uniqueDates.has(forecastDay)) {
                continue;
            }
            uniqueDates.add(forecastDay);
            const forecastImage = data.forecastTimestamps[i].conditionCode;
            const forecastTemperature = data.forecastTimestamps[i].airTemperature;
            const forecastData = {
                forecastDay,
                forecastImage,
                forecastTemperature
            };
            forecastFetchData.push(forecastData);
            let searchDiv = document.createElement('div');
            searchDiv.className = 'forecastSearch d-flex';
            elementDiv.appendChild(searchDiv);
            searchDiv.innerHTML = searchCityHtml(forecastDay, searchCityImage(forecastImage), forecastTemperature);
        }
    } catch (error) {
        console.error(error);
        searchCityErrorDiv();
    }
    return forecastFetchData;
};

export default searchCityRender;
