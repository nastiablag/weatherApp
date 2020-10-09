import React from 'react';
import { render } from '@testing-library/react';
import ReactDOM from "react-dom";
import App from './App';
import { MemoryRouter } from 'react-router-dom';
import { HeaderComponent }  from './_components';
import { weatherService } from './_services';
import { act } from 'react-dom/test-utils';

/**
 * @description Checks if App component renders
 */
it('renders without crashing', () => {

  const div = document.createElement('div');
  
  ReactDOM.render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

/**
 * @description Checks if there is weather forecast in header
 */
it('renders header text', () => {

  const { getByText } = render(
    <MemoryRouter>
      <HeaderComponent />
    </MemoryRouter>
  );
  expect(getByText('Weather Forecast')).toBeInTheDocument();
})

/**
 * @description Checks if localhost API is working
 */
it('checks if api is working', async () => {

  let city = [];

  await act(async () => {
    city = await weatherService.getCityBySymbol('Vilnius');
  });
  
  expect(city).toEqual([
    {
      'name': 'Vilnius',
      'lon': 25.2798,
      'lat': 54.689159
    }
  ]);
});