import React from 'react';
import { Grid, Typography, Box } from '@material-ui/core';
import '../../_styles/weather.scss';
import * as Constants from '../../_constants';
import { setIconFromLink } from '../../_helpers';

/**
 * @description Displays one day forecast header
 * @param locationCity
 */
export const OneDayForecastHeader = ({locationCity}) => {

    return (
        <Grid container className='one-day-header'>
            <Grid item xs={9}>
                <Typography className='text-primary left' variant='h5'>{Constants.dayForecast}</Typography>
             </Grid>
            <Grid item xs={3} className='right'> 
                <Box className='inline-flex right' mt={1}>                
                    <Box className='text-primary' fontWeight='fontWeightBold'>
                        {Math.round(locationCity.main.temp_max)}
                    </Box>
                    <Box className='text-primary margin-left'>
                        {Math.round(locationCity.main.temp_min)}
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
}

/**
 * @description Displays one day forecast container
 * @param locationCity
 */
export const OneDayForecastContainer = ({locationCity}) => {

    return (
        <div className='text-primary temperature'>    
            <Typography variant='h1'>{Math.round(locationCity.main.temp)}°</Typography>
            <Typography variant='h4'>{locationCity.name}</Typography>
            <div className='condition-container centered'>
                <Typography variant='h6' className='condition-text'>
                    {locationCity.weather[0].main}
                </Typography>
                {setIconFromLink(locationCity.weather[0].icon)}
            </div>
        </div> 
    );
}
