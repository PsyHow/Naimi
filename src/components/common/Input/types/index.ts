import {
  setStartPriceValue,
  setVacancyAddress,
  setVacancyTitle,
} from 'store/reducers/vacancy';

export interface InputProps {
  stateValue: string | number;
  pattern?: string;
  id?: number;
  actionCreator: (
    value: { id: number; value: string } | number | string,
  ) => ActionInputTypes;
}

type ActionInputTypes =
  | ReturnType<typeof setVacancyAddress>
  | ReturnType<typeof setVacancyTitle>
  | ReturnType<typeof setStartPriceValue>;
