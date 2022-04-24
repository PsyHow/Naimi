import { AppRootState } from 'store';
import { IAddress, IUni } from 'store/types';

export const selectVacancyTitle = (state: AppRootState): string =>
  state.vacancyReducer.title;

export const selectVacancyDescription = (state: AppRootState): string =>
  state.vacancyReducer.description;

export const selectStartPrice = (state: AppRootState): number =>
  state.vacancyReducer.price_form;

export const selectMaxPrice = (state: AppRootState): number =>
  state.vacancyReducer.price_to;

export const selectExperience = (state: AppRootState): IUni =>
  state.vacancyReducer.experience;

export const selectVacancyCity = (state: AppRootState): IUni => state.vacancyReducer.city;

export const selectVacancyAddresses = (state: AppRootState): IAddress[] =>
  state.vacancyReducer.addresses;
