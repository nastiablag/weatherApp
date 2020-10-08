import React, {Fragment, useEffect, useState} from 'react';
import {CircularProgress} from '@material-ui/core';
import './weather.scss';
import {weatherService} from '../_services';
import {
    OneDayForecastHeader,
    OneDayForecastContainer,
    HeaderComponent,
    OneWeekWeatherComponent,
    CitiesListComponent
} from '.';

export const MainWeatherComponent = (props) => {

    const [city, setCity] = useState([]);
    const [open, setOpen] = useState(false);
    const [lat, setLat] = useState(props.lat);
    const [lon, setLon] = useState(props.lon);
    const [selected, setSelected] = useState(null);

    useEffect(() => {
        fetchCountryByCoordinates();
    }, [selected]);

    const fetchCountryByCoordinates = async () => {
        await weatherService.getCityDataByCoordinates(lat, lon)
        .then(response => setCity(response));    
    };

    const handleOpen = (open) => {
        setOpen(open);
    }
    
    const handleSelect = (selected) => {
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
                        open={open}/>
                    {!open ?
                        <>
                            <OneDayForecastHeader locationCity={city}/>
                            <div className='daily-container'>
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

