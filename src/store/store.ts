import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import { serviceReducer } from 'store/reducers/service';
import { vacancyReducer } from 'store/reducers/vacancy';

const rootReducer = combineReducers({
  serviceReducer,
  vacancyReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootReducerType = typeof rootReducer;
export type AppRootState = ReturnType<RootReducerType>;
