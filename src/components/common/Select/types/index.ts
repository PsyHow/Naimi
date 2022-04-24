import { AnyAction } from 'redux';

import { IUni } from 'store/types';

export interface SelectProps {
  options: { id: number; text: string }[];
  stateValue: IUni | boolean;
  actionCreator: (value: any) => AnyAction;
}
