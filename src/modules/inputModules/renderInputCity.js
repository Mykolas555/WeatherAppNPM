import autocompleteAjax from "./autocompleteAjax";
import cityInput from "./cityInput";
import searchCityRender from "../searchCityModules/searchCityRender";
//import errorInput from "./errorInput";

const renderInputCity = async () => {
    const data = await autocompleteAjax();
    let inputOfCity = document.querySelector('.enterCity');
    let inputContainer = document.createElement('div');
    inputContainer.className = 'inputCity';
    inputContainer.innerHTML = cityInput();
    let autocompleteContainer = document.createElement('datalist');
    autocompleteContainer.id = 'cities';
    for (let i = 0; i < data.length; i++) {
        let autocomplete = document.createElement('option');
        autocomplete.innerHTML = data[i].name;
        autocompleteContainer.appendChild(autocomplete);
    }
    inputContainer.appendChild(autocompleteContainer);
    inputOfCity.appendChild(inputContainer);
    const cityInputElement = inputContainer.querySelector('.openCityForm');
    let isInputComplete = false;
    cityInputElement.addEventListener('input', () => {
        isInputComplete = data.some(city => city.name === cityInputElement.value);
        updateDefaultCitysVisibility(isInputComplete);
    });
    cityInputElement.addEventListener('change', () => {
        if (isInputComplete) {
            searchCityRender(cityInputElement.value);
        }
    });
    const updateDefaultCitysVisibility = (isInputComplete) => {
        let defaultCitysContainer = document.querySelector('.defaultCitys');
        if (isInputComplete) {
            defaultCitysContainer.style.display = 'none';
        }//else{
            //errorInput
        //}
    };
};

export default renderInputCity;