import { ICity, IWorkUnit } from 'store/types';

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
