import React, {useState} from 'react';
import {Autocomplete} from '@material-ui/lab';
import {TextField} from '@material-ui/core';
import {weatherService} from '../services';
import './weather.scss';

export const CitiesListComponent = ({handleSelect}) => {

  const [list, setList] = useState([]);

  const handleChange = e => {
    weatherService.getCityBySymbol(e.target.value).then(response => setList(response));
  }

  return (
    <>
    <div style={{height: 800, backgroundColor: '#3a424c'}}>

      <div style={{padding: 15}}>
      
        <Autocomplete
        underlineStyle={{display: 'none'}}
          id='cities-autocomplete'
          options={list}
          onInputChange={e => handleChange(e)}
          onChange={(e, value) => handleSelect(value)}
          getOptionLabel={(option) => option.name}
          popoverProps={{
            style: {
              bottom: 0,
              overflowY: 'auto'
            }
          }}
          style={{ width: '100%'}}
          ListboxProps={{ style: { maxHeight: 640, backgroundColor: '#3a424c', color: 'white', boxShadow: 'none', zIndex: 1000 } }}
          renderInput={(params) => <TextField {...params} label='Search for a city' variant='outlined'/>}
        />
      </div>
      </div>
    </>
   
  );
}


