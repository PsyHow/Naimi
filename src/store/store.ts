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

export type AppDispatchType = typeof store.dispatch;
export type AppRootState = ReturnType<RootReducerType>;
export type RootReducerType = typeof rootReducer;
