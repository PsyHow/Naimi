import { changeCallMethod } from 'store/reducers/service';
import { changeVacancyCiy, setExperience } from 'store/reducers/vacancy';
import { IUni } from 'store/types';

export interface SelectProps {
  options: IUni[];
  stateValue: IUni | boolean;
  actionCreator: (
    value: { id: number; value: IUni } | boolean | IUni,
  ) => SelectActionTypes;
  id?: number;
}

type SelectActionTypes =
  | ReturnType<typeof changeVacancyCiy>
  | ReturnType<typeof changeCallMethod>
  | ReturnType<typeof setExperience>;
