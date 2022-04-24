import { cities, payMethod } from 'consts';
import { ServiceTypes } from 'store/reducers/types';
import { IAddress, ITicket } from 'store/types';

const initialState = {
  addresses: [] as IAddress[],
  city: cities[0],
  description: '',
  has_photo: true,
  has_review: false,
  call: true,
  price_to: 10000,
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
    case 'SERVICE/CHANGE_ADRESS_CITY': {
      return {
        ...state,
        addresses: state.addresses.map(address =>
          address.id === action.payload.id
            ? { ...address, city: action.payload.value }
            : address,
        ),
      };
    }
    case 'SERVICE/DELETE_ADRESS': {
      return {
        ...state,
        addresses: state.addresses.filter(address => address.id !== action.payload),
      };
    }
    case 'SERVICE/SET_ADDRESS': {
      return {
        ...state,
        addresses: state.addresses.map(address =>
          address.id === action.payload.id
            ? { ...address, address: action.payload.value }
            : address,
        ),
      };
    }
    default:
      return state;
  }
};
