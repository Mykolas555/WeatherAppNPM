import searchCityHtml from "./searchCityHtml";
import searchCityImage from "./searchCityImages";
import searchCityErrorDiv from "./searchCityErrorDiv";

const searchCityRender = async (cityInput) => {
    let containerElement = document.querySelector('.forecastCity');
    let elementDiv = document.createElement('div');
    elementDiv.className = 'forecastItems';
    containerElement.innerHTML = ''; 
    containerElement.appendChild(elementDiv);
    const forecastFetchData = [];
    try {
        const response = await fetch(`https://api.meteo.lt/v1/places/${cityInput}/forecasts/long-term`);
        if (!response.ok) {
            throw new Error(`Error`);
        }
        const data = await response.json();
        for (let i = 0; i < 7; i++) {
            const forecastDay = data.forecastTimestamps[i].forecastTimeUtc;
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
};

export default searchCityRender;