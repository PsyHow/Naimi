import { ChangeEvent } from 'react';

export interface ChecboxProps {
  checked: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  label: string;
}
