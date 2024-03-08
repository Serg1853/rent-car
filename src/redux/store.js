import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { carsApi } from './operations';

const reducers = combineReducers({
 cars:
});

export const store = configureStore({
  reducer: reducers,
});
