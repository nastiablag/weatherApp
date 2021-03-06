import React, { useEffect, useState } from 'react';
import { Grid, Typography, Box } from '@material-ui/core';
import '../../_styles/weather.scss';
import { fromUnixTime, isToday } from 'date-fns';
import { weatherService } from '../../_services';
import * as Constants from '../../_constants';
import { setIconFromLink } from '../../_helpers';
import OneWeekChartComponent from './OneWeekChartComponent';

/**
 * @description Displays week forecast grid
 * @param lat 
 * @param lon 
 */
export const OneWeekWeatherComponent = ({lat, lon}) => {

    const [weekData, setWeekData] = useState([]);

    /**
     * @description Converts data from UNIX
     * @param day 
     */
    const convertFromUnix = day => {
        return fromUnixTime(day).toString().slice(0, 3).toUpperCase();
    }

    /**
     * @description Fetches city data by coordinates
     */
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
                    <Typography className='text-primary left' variant='h5'>
                        {Constants.weekForecast}
                    </Typography>
                </Grid>
            </Grid>
            <div className='inline-flex margin-top'>
                {weekData.map(day => (
                    !isToday(fromUnixTime(day.dt)) ?
                        <div className='one-day' key={day.dt}>
                            <Typography className='text-primary'>
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
            <OneWeekChartComponent lat={lat} lon={lon}/> 
        </>  
    );
}
