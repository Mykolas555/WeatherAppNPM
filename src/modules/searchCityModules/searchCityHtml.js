const searchCityHtml = (forecastDay, forecastImage, forecastTemperature) => {
    return `
        <p class="forecastDay">${forecastDay}</p>
        <img src="${forecastImage}" alt="" class="forecastImage">
        <p class="forecastTemperature">${forecastTemperature}°C</p>
    `;
};

export default searchCityHtml;