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
  changeAdressCity,
  deleteAdress,
  setAddress,
} from 'store/actions/service';
import {
  setExperience,
  setMaxPriceValue,
  setStartPriceValue,
  setVacancyDescription,
  setVacancyTitle,
  settVacancyCity,
  changeVacancyCiy,
  addVacancyAdress,
  setVacancyAddress,
  deleteVacancyAdress,
} from 'store/actions/vacancy';

export type ServiceTypes =
  | ReturnType<typeof setDescptiption>
  | ReturnType<typeof changeCallMethod>
  | ReturnType<typeof hasPhoto>
  | ReturnType<typeof hasReview>
  | ReturnType<typeof addAdress>
  | ReturnType<typeof changeAdressCity>
  | ReturnType<typeof setAddress>
  | ReturnType<typeof deleteAdress>
  | ReturnType<typeof isVerified>
  | ReturnType<typeof changeWorkUnit>
  | ReturnType<typeof setPrice>
  | ReturnType<typeof selectCityApplication>;

export type VacancyTypes =
  | ReturnType<typeof setExperience>
  | ReturnType<typeof setMaxPriceValue>
  | ReturnType<typeof setStartPriceValue>
  | ReturnType<typeof setVacancyDescription>
  | ReturnType<typeof deleteVacancyAdress>
  | ReturnType<typeof changeVacancyCiy>
  | ReturnType<typeof settVacancyCity>
  | ReturnType<typeof setVacancyTitle>
  | ReturnType<typeof setVacancyAddress>
  | ReturnType<typeof addVacancyAdress>;
