import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { carsApi } from './operations';

const reducers = combineReducers({
  [carsApi.reducerPath]: carsApi.reducer,
});

export const store = configureStore({
  reducer: reducers,
});
