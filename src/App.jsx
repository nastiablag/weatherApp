import React from 'react';
import './_styles/weather.scss';
import { Switch, Route } from 'react-router-dom';
import { createMuiTheme, ThemeProvider, CssBaseline } from '@material-ui/core';
import { Routes } from './_components';

function App() {

  const theme = createMuiTheme({palette: { type: 'dark'}});

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
