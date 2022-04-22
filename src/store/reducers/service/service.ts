import { cities, payMethod } from 'consts';
import { ServiceTypes } from 'store/reducers/types';
import { IAddress, ITicket } from 'store/types';

const initialState = {
  addresses: [] as IAddress[],
  city: cities[0],
  description: '',
  has_photo: false,
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
    default:
      return state;
  }
};
