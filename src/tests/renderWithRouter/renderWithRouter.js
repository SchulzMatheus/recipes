import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import headerSearchSlice from '../../redux/reducers/headerSearch';

const renderWithRouterAndRedux = (
  component,
  { route = '/', history = createMemoryHistory({ initialEntries: [route] }) } = {},
) => {
  const store = configureStore({
    reducer: {
      headerSearch: headerSearchSlice,
    },
  });

  return {
    ...render(
      <Provider store={ store }>
        <Router history={ history }>
          {component}
        </Router>
      </Provider>,
    ),
    history,
  };
};

export default renderWithRouterAndRedux;
