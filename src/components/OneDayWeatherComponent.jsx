import React from 'react';
import {Grid, Typography, Box} from '@material-ui/core';
import './weather.scss';
import * as Constants from '../constants';
import {setIconFromLink} from '../helpers';

export const OneDayForecastHeader = ({locationCity}) => {

    return (
        <Grid container className='daily-header'>
            <Grid item xs={9}>
                <Typography className='name-text left' variant='h5'>{Constants.dayForecast}</Typography>
             </Grid>
            <Grid item xs={3} className='right'> 
                <Box className='inline-flex2 right' mt={1}>                
                    <Box className='name-text' fontWeight='fontWeightBold'>
                        {Math.round(locationCity.main.temp_max)}
                    </Box>
                    <Box className='name-text margin-left'>
                        {Math.round(locationCity.main.temp_min)}
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
}

export const OneDayForecastContainer = ({locationCity}) => {

    return (
        <div className='name-text temperature'>    
            <Typography variant='h1'>{Math.round(locationCity.main.temp)}°</Typography>
            <Typography variant='h4'>{locationCity.name}</Typography>
            <div className='weather-condition centered'>
                <Typography variant='h6' className='cloudy'>
                    {locationCity.weather[0].main}
                </Typography>
                {setIconFromLink(locationCity.weather[0].icon)}
            </div>
        </div> 
    );
}