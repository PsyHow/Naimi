import { cities, payMethod } from 'consts';
import { ServiceTypes } from 'store/reducers/types';
import { ITicket } from 'store/types';

const initialState = {
  addresses: [],
  city: cities[0],
  description: '',
  has_photo: true,
  has_review: false,
  call: true,
  price_to: null as number | null,
  verified_only: false,
  work_unit: payMethod[0],
} as ITicket;

export const serviceReducer = (state = initialState, action: ServiceTypes): ITicket => {
  switch (action.type) {
    case 'SERVICE/SET_DESCRIPTION': {
      return {
        ...state,
        description: action.payload,
      };
    }
    case 'SERVICE/SELECT_CITY_APPLICATION': {
      return {
        ...state,
        city: { ...action.payload },
      };
    }
    case 'SERVICE/CHANGE_CALL_METHOD': {
      return {
        ...state,
        call: action.payload,
      };
    }
    case 'SERVICE/SET_PRICE': {
      return {
        ...state,
        price_to: action.payload,
      };
    }
    case 'SERVICE/CHANGE_WORK_UNIT': {
      return {
        ...state,
        work_unit: action.payload,
      };
    }
    case 'SERVICE/HAS_PHOTO': {
      return {
        ...state,
        has_photo: action.payload,
      };
    }
    case 'SERVICE/HAS_REVIEW': {
      return {
        ...state,
        has_review: action.payload,
      };
    }
    case 'SERVICE/IS_VERIFIED': {
      return {
        ...state,
        verified_only: action.payload,
      };
    }
    case 'SERVICE/ADD_ADRESS': {
      return {
        ...state,
        addresses: [...state.addresses, action.payload],
      };
    }
    default:
      return state;
  }
};
