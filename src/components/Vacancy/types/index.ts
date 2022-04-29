import { IAddress, IUni } from 'store/types';

export interface VacancyProps {
  city: IUni;
  description: string;
  maxPrice: number;
  startPrice: number;
  title: string;
  experienceValue: IUni;
  addressesValue: IAddress[];
  onAdressDeleteClick: (id: number, index: number) => void;
  onAddAdressClick: () => void;
}
