import { cities, experience } from 'consts';
import { VacancyTypes } from 'store/reducers/types';
import { IAddress, IUni, IVacancy } from 'store/types';

const initialState = {
  title: '',
  addresses: [] as IAddress[],
  city: cities[0],
  description: '',
  price_form: 100000,
  price_to: 150000,
  experience: experience[0] as IUni,
} as IVacancy;

export const vacancyReducer = (state = initialState, action: VacancyTypes): IVacancy => {
  switch (action.type) {
    case 'VACANCY/SET_VACANCY_TITLE': {
      return {
        ...state,
        title: action.payload,
      };
    }
    case 'VACANCY/SET_VACANCY_DESCRIPTION': {
      return {
        ...state,
        description: action.payload,
      };
    }
    case 'VACANCY/SET_START_PRICE_VALUE': {
      return {
        ...state,
        price_form: action.payload,
      };
    }
    case 'VACANCY/SET_MAX_PRICE_VALUE': {
      return {
        ...state,
        price_to: action.payload,
      };
    }
    case 'VACANCY/SET_EXPERIENCE': {
      return {
        ...state,
        experience: action.payload,
      };
    }
    case 'VACANCY/SET_VACANCY_CITY': {
      return {
        ...state,
        city: action.payload,
      };
    }
    case 'VACANCY/ADD_ADRESS': {
      return {
        ...state,
        addresses: [...state.addresses, action.payload],
      };
    }
    case 'VACANCY/SET_ADDRESS': {
      return {
        ...state,
        addresses: state.addresses.map(address =>
          address.id === action.payload.id
            ? { ...address, address: action.payload.value }
            : address,
        ),
      };
    }
    case 'VACANCY/DELETE_ADRESS': {
      return {
        ...state,
        addresses: state.addresses.filter(address => address.id !== action.payload),
      };
    }
    case 'VACANCY/CHANGE_ADRESS_CITY': {
      return {
        ...state,
        addresses: state.addresses.map(address =>
          address.id === action.payload.id
            ? { ...address, city: action.payload.value }
            : address,
        ),
      };
    }
    default:
      return state;
  }
};
