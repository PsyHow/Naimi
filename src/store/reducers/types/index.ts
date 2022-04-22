import {
  setDescptiption,
  selectCityApplication,
  changeCallMethod,
  changeWorkUnit,
  setPrice,
} from 'store/actions/service';

export type ServiceTypes =
  | ReturnType<typeof setDescptiption>
  | ReturnType<typeof changeCallMethod>
  | ReturnType<typeof changeWorkUnit>
  | ReturnType<typeof setPrice>
  | ReturnType<typeof selectCityApplication>;
