const defaultCitys = () => {
    return `
        <div class="container__top d-flex justify-content-between">
            <p class="top__name">CityName</p>
            <p class="top__time">time</p>
        </div>
        <div class="container__middle text-center ">
            <img class="middle__forecastImage" src="/public/images/sunny.svg" alt="">
            <p class="middle__weatherCondition">WeatherCondition</p>
        </div>
        <div class="container__bottom d-flex justify-content-between">
            <p class="bottom__temperature">temperature</p>
            <p class="bottom__country">country</p>
        </div>
    </div>
    `;
}

export default defaultCitys; 