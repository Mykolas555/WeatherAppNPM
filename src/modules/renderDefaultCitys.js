import defaultCitys from "./defaultCitys";

const renderDefaultCitys = () => {
    let containerElement = document.querySelector('.defaultCitys');
    let bootstrapRow = document.createElement('div');
    bootstrapRow.className = 'row gap-2';
    containerElement.appendChild(bootstrapRow);
    for (let i =0; i<4; i++){
        let bootstrapRowToAdd = document.querySelector('.row.gap-2');
        let defaultCitysContainer = document.createElement('div');
        defaultCitysContainer.className = 'defaultCity__container col-lg-3 col-md-12';
        defaultCitysContainer.innerHTML = defaultCitys();
        bootstrapRowToAdd.appendChild(defaultCitysContainer);
    }
}

export default renderDefaultCitys; 
