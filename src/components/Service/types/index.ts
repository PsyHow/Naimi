import { ReactElement } from 'react';

import { IUni } from 'store/types';

export interface ServiceProps {
  description: string;
  city: IUni;
  call: boolean;
  price: number;
  pay: IUni;
  verified: boolean;
  photo: boolean;
  review: boolean;
  changeButtonTitle: ReactElement;
  mappedAdresses: ReactElement[];
}
