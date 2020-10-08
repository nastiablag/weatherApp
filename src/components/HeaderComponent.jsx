import React, {Fragment, useState} from 'react';
import {Grid, Typography, IconButton, Button} from '@material-ui/core';
import './weather.scss';
import {CloudQueue, Settings} from '@material-ui/icons';
import * as Constants from '../constants';

export default function HeaderComponent({locationCity, handleOpen, open}) {


    return (
        <Fragment>
            <Grid container  className='header'>
                <Grid item xs={3} className='left'>
                    {!open ? <IconButton><CloudQueue className='icon'/></IconButton>
                    : <Button onClick={() => handleOpen(false)} style={{marginTop: 8, color: '#50b0de'}}>{Constants.buttonDone}</Button>}
                </Grid>
                 <Grid item xs={6}>
                    <Typography className='name-text centered' variant='h6'>{Constants.systemName}</Typography>
                    <Typography className='city-text centered'>{locationCity}</Typography>
                 </Grid>
                 {!open ?<Grid item xs={3} className='right'> 
                    <IconButton onClick={() => handleOpen(true)}>
                        <Settings className='icon'/>
                    </IconButton>
                </Grid>: null}
            </Grid>
        </Fragment>
    );
}