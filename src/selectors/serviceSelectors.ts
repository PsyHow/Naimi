import { AppRootState } from 'store';
import { IAddress, IUni } from 'store/types';

export const selectCity = (state: AppRootState): IUni => state.serviceReducer.city;

export const selectWorkUnit = (state: AppRootState): IUni =>
  state.serviceReducer.work_unit;

export const selectCallMethod = (state: AppRootState): boolean =>
  state.serviceReducer.call;

export const selectHasPhoto = (state: AppRootState): boolean =>
  state.serviceReducer.has_photo;

export const selectHasReview = (state: AppRootState): boolean =>
  state.serviceReducer.has_review;

export const selectIsVerified = (state: AppRootState): boolean =>
  state.serviceReducer.verified_only;

export const selectAddresses = (state: AppRootState): IAddress[] =>
  state.serviceReducer.addresses;

export const selectDescription = (state: AppRootState): string =>
  state.serviceReducer.description;

export const selectPrice = (state: AppRootState): number => state.serviceReducer.price_to;
