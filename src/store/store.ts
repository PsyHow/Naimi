import { combineReducers, createStore } from 'redux';

import { serviceReducer } from 'store/reducers/service';
import { vacancyReducer } from 'store/reducers/vacancy';

const reducers = combineReducers({
  serviceReducer,
  vacancyReducer,
});

export const store = createStore(reducers);

export type AppRootState = ReturnType<typeof reducers>;
