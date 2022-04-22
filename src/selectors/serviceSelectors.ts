import { AppRootState } from 'store';
import { ICity, IWorkUnit } from 'store/types';

export const selectCity = (state: AppRootState): ICity => state.serviceReducer.city;

export const selectWorkUnit = (state: AppRootState): IWorkUnit =>
  state.serviceReducer.work_unit;

export const selectCallMethod = (state: AppRootState): boolean =>
  state.serviceReducer.call;
