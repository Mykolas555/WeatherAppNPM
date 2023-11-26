import errorCatchHTMLCitys from "./defaultCityError";

const errorInputCitys = () => {
    let putError = document.querySelector('.defaultCitys');
    let errorMessage = document.createElement('div');
    errorMessage.id = 'errorCatchCity';
    errorMessage.innerHTML = errorCatchHTMLCitys();
    putError.appendChild(errorMessage);
};

export default errorInputCitys;