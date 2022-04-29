import { ChangeEvent, ReactElement } from 'react';

import { IAddress, IUni } from 'store/types';

export interface VacancyProps {
  city: IUni;
  description: string;
  maxPrice: number;
  startPrice: number;
  title: string;
  experienceValue: IUni;
  changeButtonTitle: ReactElement;
  addressesValue: IAddress[];
  handleAdressCityChange: (event: ChangeEvent<HTMLSelectElement>, id: number) => void;
  handleAdressDeleteClick: (id: number, index: number) => void;
  handleAddressChange: (event: ChangeEvent<HTMLInputElement>, id: number) => void;
  handleAddressSaveBlur: (id: number) => void;
}
