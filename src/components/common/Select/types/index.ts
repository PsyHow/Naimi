import { ChangeEvent } from 'react';

export interface SelectProps {
  value: number;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  options: { id: number; text: string }[];
}
