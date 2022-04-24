import { IAddress, IUni } from 'store/types';

export const setVacancyTitle = (payload: string) =>
  ({
    type: 'VACANCY/SET_VACANCY_TITLE',
    payload,
  } as const);

export const setVacancyDescription = (payload: string) =>
  ({
    type: 'VACANCY/SET_VACANCY_DESCRIPTION',
    payload,
  } as const);

export const setStartPriceValue = (payload: number | null) =>
  ({
    type: 'VACANCY/SET_START_PRICE_VALUE',
    payload,
  } as const);

export const setMaxPriceValue = (payload: number | null) =>
  ({
    type: 'VACANCY/SET_MAX_PRICE_VALUE',
    payload,
  } as const);

export const setExperience = (payload: IUni) =>
  ({
    type: 'VACANCY/SET_EXPERIENCE',
    payload,
  } as const);

export const settVacancyCity = (payload: IUni) =>
  ({
    type: 'VACANCY/SET_VACANCY_CITY',
    payload,
  } as const);

export const changeVacancyCiy = (id: number, value: IUni) =>
  ({
    type: 'VACANCY/CHANGE_ADRESS_CITY',
    payload: {
      id,
      value,
    },
  } as const);

export const addVacancyAdress = (payload: IAddress) =>
  ({
    type: 'VACANCY/ADD_ADRESS',
    payload,
  } as const);

export const setVacancyAddress = (id: number, value: string) =>
  ({
    type: 'VACANCY/SET_ADDRESS',
    payload: {
      id,
      value,
    },
  } as const);

export const deleteVacancyAdress = (payload: number) =>
  ({
    type: 'VACANCY/DELETE_ADRESS',
    payload,
  } as const);
