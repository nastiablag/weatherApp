import React, { Fragment } from 'react';
import { Grid, Typography, IconButton, Button } from '@material-ui/core';
import '../../_styles/weather.scss';
import { CloudQueue, Settings } from '@material-ui/icons';
import * as Constants from '../../_constants';

/**
 * @description Displays system header
 * @param locationCity
 * @param handleOpen
 * @param open
 */
export const HeaderComponent = ({locationCity, handleOpen, open}) => {

    return (
        <Fragment>
            <Grid container className='header'>
                <Grid item xs={3} className='left'>
                    {!open ? <IconButton><CloudQueue className='icon'/></IconButton>
                    : <Button onClick={() => handleOpen(false)}>
                        <Typography className='icon'>{Constants.buttonDone}</Typography>
                    </Button>}
                </Grid>
                 <Grid item xs={6}>
                    <Typography className='text-primary centered' variant='h6'>
                        {Constants.systemName}
                    </Typography>
                    <Typography className='text-city centered'>{locationCity}</Typography>
                 </Grid>
                 {!open ? <Grid item xs={3} className='right'> 
                    <IconButton onClick={() => handleOpen(true)}>
                        <Settings className='icon'/>
                    </IconButton>
                </Grid>: null}
            </Grid>
        </Fragment>
    );
}
