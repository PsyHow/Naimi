import { IAddress, ICity, IWorkUnit } from 'store/types';

export const setDescptiption = (payload: string) =>
  ({
    type: 'SERVICE/SET_DESCRIPTION',
    payload,
  } as const);

export const selectCityApplication = (payload: ICity) =>
  ({
    type: 'SERVICE/SELECT_CITY_APPLICATION',
    payload,
  } as const);

export const changeCallMethod = (payload: boolean) =>
  ({
    type: 'SERVICE/CHANGE_CALL_METHOD',
    payload,
  } as const);

export const setPrice = (payload: number) =>
  ({
    type: 'SERVICE/SET_PRICE',
    payload,
  } as const);

export const changeWorkUnit = (payload: IWorkUnit) =>
  ({
    type: 'SERVICE/CHANGE_WORK_UNIT',
    payload,
  } as const);

export const hasPhoto = (payload: boolean) =>
  ({
    type: 'SERVICE/HAS_PHOTO',
    payload,
  } as const);

export const hasReview = (payload: boolean) =>
  ({
    type: 'SERVICE/HAS_REVIEW',
    payload,
  } as const);

export const isVerified = (payload: boolean) =>
  ({
    type: 'SERVICE/IS_VERIFIED',
    payload,
  } as const);

export const addAdress = (payload: IAddress) =>
  ({
    type: 'SERVICE/ADD_ADRESS',
    payload,
  } as const);
