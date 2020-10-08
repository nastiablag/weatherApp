import React from 'react';
import './components/weather.scss';
import WeatherApp from './components/WeatherApp';
import { Switch, Route } from 'react-router-dom';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import LocationDetectorComponent from './components/LocationDetectorComponent';

function App() {

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: 'dark',
          main: 'red'
        },
      }),
    [prefersDarkMode],
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <div className='container'>
        <Switch>
          <Route path='/list'>
            {/* <CityList/> */}
          </Route>
          <Route path='/'>
            {/* <WeatherApp/>  */}
            <LocationDetectorComponent/> 
          </Route>
        </Switch>
      </div>
    </ThemeProvider>
  );
}

export default App;
