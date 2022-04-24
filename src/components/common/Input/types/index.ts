import { AnyAction } from 'redux';

export interface InputProps {
  stateValue: number | string;
  actionCreator: (value: string | number) => AnyAction;
  pattern?: string;
}
