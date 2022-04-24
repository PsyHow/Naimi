import { IAddress, IUni } from 'store/types';

export const setDescptiption = (payload: string) =>
  ({
    type: 'SERVICE/SET_DESCRIPTION',
    payload,
  } as const);

export const selectCityApplication = (payload: IUni) =>
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

export const changeWorkUnit = (payload: IUni) =>
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

export const changeAdressCity = (id: number, value: IUni) =>
  ({
    type: 'SERVICE/CHANGE_ADRESS_CITY',
    payload: {
      id,
      value,
    },
  } as const);

export const deleteAdress = (payload: number) =>
  ({
    type: 'SERVICE/DELETE_ADRESS',
    payload,
  } as const);

export const setAddress = (id: number, value: string) =>
  ({
    type: 'SERVICE/SET_ADDRESS',
    payload: {
      id,
      value,
    },
  } as const);
