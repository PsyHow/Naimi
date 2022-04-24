import { AnyAction } from 'redux';

export interface TextareaProps {
  stateValue: string;
  actionCreator: (value: string) => AnyAction;
}
