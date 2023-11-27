const defaultCityImage = (weatherCode, cityTime) => {
    let imageSrc = '';
    const isDaytime = cityTime >= 8 && cityTime < 20;
    
    switch (weatherCode) {
        case 'clear':
            imageSrc = isDaytime ? '/public/images/sunny.svg' : '/public/images/moon.svg';
            break;
        case 'partly-cloudy':
        case 'cloudy-with-sunny-intervals':
            imageSrc = '/public/images/partlyCloudy.svg';
            break;
        case 'cloudy':
            imageSrc = '/public/images/cloud.svg';
            break;
        case 'thunder':
        case 'isolated-thunderstorms':
        case 'thunderstorms':
        case 'heavy-rain-with-thunderstorms':
            imageSrc = '/public/images/lightning.svg';
            break;
        case 'light-rain':
        case 'rain':
        case 'heavy-rain':
        case 'freezing-rain':
        case 'hail':
            imageSrc = '/public/images/wet.svg';
            break;
        case 'fog':
        case 'light-sleet':
        case 'sleet':
            imageSrc = '/public/images/fog.svg';
            break;
        case 'light-snow':
        case 'snow':
        case 'heavy-snow':
            imageSrc = '/public/images/snow.svg';
            break;
    }
    return imageSrc
}

export default defaultCityImage