const defaultCitys = ({ cityName, cityTime, cityWeather, cityTemperature, cityCountry }) => {
    return `
        <div class="container__top d-flex justify-content-between">
            <p class="top__name">${cityName}</p>
            <p class="top__time">${cityTime}</p>
        </div>
        <div class="container__middle text-center">
            <img class="middle__forecastImage" src="/public/images/sunny.svg" alt="">
            <p class="middle__weatherCondition">${cityWeather}</p>
        </div>
        <div class="container__bottom d-flex justify-content-between">
            <p class="bottom__temperature">${cityTemperature}°C</p>
            <p class="bottom__country">${cityCountry}</p>
        </div>
    </div>
    `;
}

export default defaultCitys;
