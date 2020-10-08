import React from 'react';
import './_components/weather.scss';
import { Switch, Route } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import {Routes} from './_components/RoutingComponent';

function App() {

  const theme = 
 
      createMuiTheme({
        palette: {
          type: 'dark',
          main: 'red'
        }
    })
  ;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <div className='container'>
        <Switch>
          {Routes.map((route, i) => 
            <Route key={i} path={route.path} component={route.component}/>
          )}
        </Switch>
      </div>
    </ThemeProvider>
  );
}

export default App;
