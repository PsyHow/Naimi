import { ICallMethod, ICity, IWorkUnit } from 'store/types';

export const cities: ICity[] = [
  { id: 1, text: 'Алма-Ата' },
  { id: 2, text: 'Шымкент' },
  { id: 3, text: 'Нур-Султан' },
  { id: 4, text: 'Актобе' },
  { id: 5, text: 'Тараз' },
  { id: 6, text: 'Павлодар' },
  { id: 7, text: 'Усть-Каменогорск' },
  { id: 8, text: 'Семей' },
  { id: 9, text: 'Караганда' },
  { id: 10, text: 'Кызылорда' },
];

export const payMethod: IWorkUnit[] = [
  { id: 1, text: 'За всю работу' },
  { id: 2, text: 'За кв. метр' },
  { id: 3, text: 'За час' },
];

export const callMethod: ICallMethod[] = [
  { id: 0, text: 'Написать в чате' },
  { id: 1, text: 'Позвонить' },
];
