import errorInput from "./errorInput";

const autocompleteAjax = () => {
    return fetch('https://api.meteo.lt/v1/places')
        .then((response) => response.json())
        .then((data) => {
            return data;
        })
        .catch((error) => {
            console.log(error);
            errorInput();
        });
};

export default autocompleteAjax;
