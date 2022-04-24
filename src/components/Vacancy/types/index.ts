import { ReactElement } from 'react';

import { IUni } from 'store/types';

export interface VacancyProps {
  title: string;
  description: string;
  city: IUni;
  startPrice: number;
  maxPrice: number;
  experienceValue: IUni;
  changeButtonTitle: ReactElement;
  mappedAdresses: ReactElement[];
}
