import { IAddress, IUni } from 'store/types';

export interface ServiceProps {
  description: string;
  city: IUni;
  call: boolean;
  price: number;
  pay: IUni;
  verified: boolean;
  photo: boolean;
  review: boolean;
  adressesValue: IAddress[];
  onAddressAddClick: () => void;
  onAdressDeleteClick: (id: number) => void;
}
