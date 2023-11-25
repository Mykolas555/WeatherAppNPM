import autocompleteAjax from "./autocompleteAjax";
import cityInput from "./cityInput";

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
    
};

export default renderInputCity;
