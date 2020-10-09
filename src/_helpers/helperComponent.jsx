import React from 'react';

/**
 * @description Returns icon image from API
 * @param icon 
 */
export const setIconFromLink = icon => {
    return (
        <img 
            src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
             width='50' 
             height='auto' 
            alt='weather'>
        </img> 
    );
}
