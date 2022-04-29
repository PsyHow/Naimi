import { ChangeEvent } from 'react';

import { IUni } from 'store/types';

export interface UseSelectValueReturn {
  valueSelect: { booleanValue: boolean; city: IUni };
  handleCityChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}
