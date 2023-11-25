import errorCatchHTML from "./errorInputData";

const errorInput = () => {
    let putError = document.querySelector('.enterCity');
    let errorMessage = document.createElement('div');
    errorMessage.id = 'errorCatch';
    errorMessage.innerHTML = errorCatchHTML();
    putError.appendChild(errorMessage);
};

export default errorInput;
