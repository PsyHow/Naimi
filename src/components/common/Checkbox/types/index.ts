import { AnyAction } from 'redux';

export interface ChecboxProps {
  stateValue: boolean;
  actionCreator: (value: boolean) => AnyAction;
  label: string;
}
