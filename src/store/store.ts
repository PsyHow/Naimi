import { combineReducers, createStore } from 'redux';

import { serviceReducer } from 'store/reducers/service';

const reducers = combineReducers({
  serviceReducer,
});

export const store = createStore(reducers);

export type AppRootState = ReturnType<typeof reducers>;
