import * as Constants from '../_constants';

export const weatherService = {
    getCityDataByCoordinates,
    getCityDailyData,
    getCityBySymbol
}

/**
 * @description Returns city data by given coordinates
 * @param lat 
 * @param lon 
 */
async function getCityDataByCoordinates(lat, lon) {

    const requestOptions = {
        method: 'GET'
    };

    const response = await fetch(`${Constants.weatherAPI}weather?lat=${lat}&lon=${lon}&units=metric&appid=${Constants.key}`, requestOptions);    

    return await response.json();
}

/**
 * @description Returns one week forecast by given coordinates
 * @param lat 
 * @param lon 
 */
async function getCityDailyData(lat, lon) {

    const requestOptions = {
        method: 'GET'
    };

    const response = await fetch(`${Constants.weatherAPI}onecall?lat=${lat}&lon=${lon}&units=metric&exclude=current,minutely,hourly,alerts&appid=${Constants.key}`, requestOptions);    

    return await response.json();
}

/**
 * @description Returns cities list by given letters
 * @param symbol 
 */
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
