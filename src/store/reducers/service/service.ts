import { ServiceTypes } from 'store/reducers/types';
import { ITicket } from 'store/types';

const initialState = {} as ITicket;

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
    default:
      return state;
  }
};
