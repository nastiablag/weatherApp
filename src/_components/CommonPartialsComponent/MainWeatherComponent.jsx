import React, { Fragment, useEffect, useState } from 'react';
import { CircularProgress } from '@material-ui/core';
import '../../_styles/weather.scss';
import { weatherService } from '../../_services';
import {
    OneDayForecastHeader,
    OneDayForecastContainer,
    HeaderComponent,
    OneWeekWeatherComponent,
    CitiesListComponent
} from '..';

/**
 * @description Displays main system container which renders all components 
 * @param props 
 */
export const MainWeatherComponent = props => {

    const [city, setCity] = useState([]);
    const [open, setOpen] = useState(false);
    const [lat, setLat] = useState(props.lat);
    const [lon, setLon] = useState(props.lon);
    const [selected, setSelected] = useState(null);

    /**
     * @description Fetches city data
     */
    useEffect(() => {
        fetchCityByCoordinates();
    }, [selected]);

    /**
     * @description Fetches city data by coordinates
     */
    const fetchCityByCoordinates = async () => {
        await weatherService.getCityDataByCoordinates(lat, lon)
        .then(response => setCity(response));    
    };

    /**
     * @description Sets open state on button click
     * @param open 
     */
    const handleOpen = open => {
        setOpen(open);
    }
    
    /**
     * @description Sets selected, lat and lon on city select
     * @param selected 
     */
    const handleSelect = selected => {
        setSelected(selected);
        setLat(selected.lat);
        setLon(selected.lon);
    }

    return (
        <Fragment>
            {city.main !== undefined ? 
                <>
                    <HeaderComponent 
                        locationCity={city.name} 
                        handleOpen={(open) => handleOpen(open)} 
                        open={open}
                    />
                    {!open ?
                        <>
                            <OneDayForecastHeader locationCity={city}/>
                            <div className='img-container'>
                                <OneDayForecastContainer locationCity={city}/>
                                <OneWeekWeatherComponent lat={lat} lon={lon}/>
                            </div>
                        </>
                    : <CitiesListComponent handleSelect={(response) => handleSelect(response)}/>}
                 </>
            : <CircularProgress/>}
        </Fragment>
    );
}
