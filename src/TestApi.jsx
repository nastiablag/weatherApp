import React, {useState, useEffect} from 'react';
import {Grid, responsiveFontSizes, Typography} from '@material-ui/core';
import './weather.scss';
import {CloudQueue, Settings} from '@material-ui/icons';
import {weatherService} from '../services/weather.service';

export const TestPvz = () => {

    const [test, setTest] = useState({});

    useEffect(() => {
        getTestData();
    }, []);

    const getTestData = async () => {
       weatherService.getCountry().then(response => setTest(response));
    };

    console.log('test2');
    console.log(test);


    return (
        <div className='container'>
            <Grid container  className='header'>
                <Grid item xs={3} className='left'>
                    <CloudQueue className='icon'/>
                </Grid>
                <Grid item xs={6}>
                 <Typography className='name-text centered'>Weather Forecast</Typography>
                    <Typography className='city-text centered'>Vilnius</Typography>
                </Grid>
                <Grid item xs={3} className='right'>                 
                    <Settings className='icon'/>
                </Grid>
            </Grid>
            <Grid container className='daily-header'>
                <Grid item xs={9}>
                    <Typography className='name-text left'>Day Forecast</Typography>
                </Grid>
                <Grid item xs={3} className='right'>                 
                    <Typography className='name-text'>8 2</Typography>
                </Grid>
            </Grid>
            <div className='daily-container'>
                <div className='name-text temperature centered'>
                    <Typography variant='h1'>6°</Typography>
                    <Typography variant='h4'>Utrecht</Typography>
                    <div className='weather-condition centered'>
                        <Typography variant='h6' className='cloudy'>Cloudy</Typography>
                        <img src="http://openweathermap.org/img/wn/10d@2x.png"
                            width="50" height="auto"></img>
                    </div>
                </div> 

            </div>
        </div>
    );
}