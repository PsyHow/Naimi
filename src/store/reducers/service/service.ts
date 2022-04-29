import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { cities, payMethod } from 'consts';
import { IAddress, ITicket, IUni } from 'store/types';

const slice = createSlice({
  name: 'service',

  initialState: {
    addresses: [] as IAddress[],
    city: cities[0],
    description: '',
    has_photo: true,
    has_review: false,
    call: true,
    price_to: 10000,
    verified_only: false,
    work_unit: payMethod[0],
  } as ITicket,

  reducers: {
    setDescptiption(state, action: PayloadAction<string>) {
      state.description = action.payload;
    },

    selectCityApplication(state, action: PayloadAction<IUni>) {
      state.city = { ...action.payload };
    },

    changeCallMethod(state, action: PayloadAction<boolean>) {
      state.call = action.payload;
    },

    setPrice(state, action: PayloadAction<number>) {
      state.price_to = action.payload;
    },

    changeWorkUnit(state, action: PayloadAction<IUni>) {
      state.work_unit = action.payload;
    },

    hasPhoto(state, action: PayloadAction<boolean>) {
      state.has_photo = action.payload;
    },

    isVerified(state, action: PayloadAction<boolean>) {
      state.verified_only = action.payload;
    },

    addAdress(state, action: PayloadAction<IAddress>) {
      state.addresses.push(action.payload);
    },

    changeAdressCity(state, action: PayloadAction<{ id: number; value: IUni }>) {
      const index = state.addresses.findIndex(f => f.id === action.payload.id);
      if (index > -1) {
        state.addresses[index].city = action.payload.value;
      }
    },

    deleteAdress(state, action: PayloadAction<number>) {
      const index = state.addresses.findIndex(f => f.id === action.payload);
      if (index > -1) {
        state.addresses.splice(index, 1);
      }
    },

    setAddress(state, action: PayloadAction<{ id: number; value: string }>) {
      const index = state.addresses.findIndex(f => f.id === action.payload.id);
      if (index > -1) {
        state.addresses[index].address = action.payload.value;
      }
    },

    hasReview(state, action: PayloadAction<boolean>) {
      state.has_review = action.payload;
    },
  },
});

export const serviceReducer = slice.reducer;

export const {
  setDescptiption,
  selectCityApplication,
  changeCallMethod,
  setPrice,
  addAdress,
  changeAdressCity,
  changeWorkUnit,
  deleteAdress,
  hasPhoto,
  isVerified,
  setAddress,
  hasReview,
} = slice.actions;
