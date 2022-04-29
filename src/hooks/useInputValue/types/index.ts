import { ChangeEvent } from 'react';

export interface UseInputValueReturn {
  valueInput: string | number;
  handleValueChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
