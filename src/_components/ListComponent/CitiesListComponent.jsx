import React, { useState } from 'react';
import { Autocomplete } from '@material-ui/lab';
import { TextField, Box } from '@material-ui/core';
import { weatherService } from '../../_services';
import '../../_styles/weather.scss';
import * as Constants from '../../_constants';

/**
 * @description Displays cities list component with autocomplete
 * @param handleSelect
 */
export const CitiesListComponent = ({handleSelect}) => {

  const [list, setList] = useState([]);

  /**
   * @description Fetch cities list by letter on input change
   * @param event 
   */
  const handleChange = event => {
    weatherService.getCityBySymbol(event.target.value).then(response => setList(response));
  }

  return (
    <>
      <div className='autocomplete-header'>  
        <Autocomplete
          id='cities-autocomplete'
          options={list}
          onInputChange={event => handleChange(event)}
          onChange={(event, value) => handleSelect(value)}
          getOptionLabel={(option) => option.name}
          renderInput={(params) => <TextField {...params} placeholder={Constants.citySearch} variant='outlined'/>}
        />
      </div>
      <Box className='list-container'/>
    </> 
  );
}
