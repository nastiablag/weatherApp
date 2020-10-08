import React, {useEffect, useState} from 'react';
import {Grid, Typography, Box} from '@material-ui/core';
import './weather.scss';
import { fromUnixTime, isToday} from 'date-fns';
import WeeklyWeather from './OneWeekChartComponent';
import {weatherService} from '../services';
import * as Constants from '../constants';
import {setIconFromLink} from '../helpers';

export default function WeekForecastComponent ({lat, lon}) {

    const [weekData, setWeekData] = useState([]);

    const convertFromUnix = day => {
        return fromUnixTime(day).toString().slice(0, 3).toUpperCase();
    }

    const fetchWeekData = () => {
        weatherService.getCityDailyData(lat, lon)
        .then(response => setWeekData(response.daily.slice(1)));
    }

    useEffect(() => {
        fetchWeekData();
    }, []);

    return (
        <>
            <Grid container className='weekly-header'>
                <Grid item xs={9}>
                    <Typography className='name-text left' variant='h5'>{Constants.weekForecast}</Typography>
                </Grid>
            </Grid>
            <div className='inline-flex margin-top'>
                {weekData.map(day => (
                    !isToday(fromUnixTime(day.dt)) ?
                        <div className='one-day'>
                            <Typography className='name-text'>
                                {convertFromUnix(day.dt)}
                            </Typography>
                            {setIconFromLink(day.weather[0].icon)}
                            <div className='inline-flex'>
                                <Box className='temp' fontWeight='fontWeightBold'>
                                    {Math.round(day.temp.day)}
                                </Box>
                                <Box className='temp'>
                                    {Math.round(day.temp.night)}
                                </Box>
                            </div>
                        </div>
                    : null
                ))}
            </div>
            <WeeklyWeather lat={lat} lon={lon}/> 
        </>  
    );
}
