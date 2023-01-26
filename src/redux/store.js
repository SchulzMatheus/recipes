import { configureStore } from '@reduxjs/toolkit';
import headerSearchSlice from './reducers/headerSearch';

const store = configureStore({
  reducer: {
    headerSearch: headerSearchSlice,
  },
});

export default store;
