import {
  setDescptiption,
  selectCityApplication,
  changeCallMethod,
  changeWorkUnit,
  setPrice,
  hasPhoto,
  hasReview,
  isVerified,
  addAdress,
} from 'store/actions/service';

export type ServiceTypes =
  | ReturnType<typeof setDescptiption>
  | ReturnType<typeof changeCallMethod>
  | ReturnType<typeof hasPhoto>
  | ReturnType<typeof hasReview>
  | ReturnType<typeof addAdress>
  | ReturnType<typeof isVerified>
  | ReturnType<typeof changeWorkUnit>
  | ReturnType<typeof setPrice>
  | ReturnType<typeof selectCityApplication>;
