import { setDescptiption } from 'store/reducers/service';
import { setVacancyDescription } from 'store/reducers/vacancy';

export interface TextareaProps {
  stateValue: string;
  actionCreator: (value: string) => TextareaActionTypes;
}

type TextareaActionTypes =
  | ReturnType<typeof setVacancyDescription>
  | ReturnType<typeof setDescptiption>;
