import * as Constants from '../constants';

export const weatherService = {
    getCityDataByCoordinates,
    getCityDailyData,
    getCityBySymbol
}

async function getCityDataByCoordinates(lat, lon) {

    const requestOptions = {
        method: 'GET'
    };

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${Constants.key}`, requestOptions);    

    return await response.json();
}

async function getCityDailyData(lat, lon) {

    const requestOptions = {
        method: 'GET'
    };

    const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=current,minutely,hourly,alerts&appid=${Constants.key}`, requestOptions);    

    return await response.json();
}

async function getCityBySymbol(symbol) {

    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'aplication/json'
        }
    };

    const response = await fetch(`http://localhost:8045/city?name=${symbol}`, requestOptions);   

    return await response.json();
}


