import {
  setDescptiption,
  selectCityApplication,
  changeCallMethod,
} from 'store/actions/service';

export type ServiceTypes =
  | ReturnType<typeof setDescptiption>
  | ReturnType<typeof changeCallMethod>
  | ReturnType<typeof selectCityApplication>;
