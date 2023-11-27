import searchCityError from "./searchCityError";

const searchCityErrorDiv = ()=>{
    const toPutError = document.querySelector('.forecastItems');
    const errorDiv = document.createElement('div');
    errorDiv.className = ('forecastCityError');
    errorDiv.innerHTML = searchCityError();
    toPutError.appendChild(errorDiv);
}

export default searchCityErrorDiv