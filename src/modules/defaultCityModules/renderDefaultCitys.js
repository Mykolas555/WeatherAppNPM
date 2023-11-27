import defaultCitys from "./defaultCitys";

const renderDefaultCitys = (cityDataArray) => {
    let containerElement = document.querySelector('.defaultCitys');
    let bootstrapRow = document.createElement('div');
    bootstrapRow.className = 'row gap-2';
    containerElement.appendChild(bootstrapRow);
    for (const cityData of cityDataArray) {
        let bootstrapRowToAdd = document.querySelector('.row.gap-2');
        let defaultCitysContainer = document.createElement('div');
        defaultCitysContainer.className = 'defaultCity__container col-lg-3 col-md-8';
        defaultCitysContainer.innerHTML = defaultCitys(cityData);
        bootstrapRowToAdd.appendChild(defaultCitysContainer);
    }
};

export default renderDefaultCitys;