import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { cities, experience } from 'consts';
import { IVacancy, IAddress, IUni } from 'store/types';

const slice = createSlice({
  name: 'service',

  initialState: {
    title: '',
    addresses: [] as IAddress[],
    city: cities[0],
    description: '',
    price_form: 100000,
    price_to: 150000,
    experience: experience[0] as IUni,
  } as IVacancy,

  reducers: {
    setVacancyTitle(state, action: PayloadAction<string>) {
      state.title = action.payload;
    },

    setVacancyDescription(state, action: PayloadAction<string>) {
      state.description = action.payload;
    },

    setStartPriceValue(state, action: PayloadAction<number>) {
      state.price_form = action.payload;
    },

    setMaxPriceValue(state, action: PayloadAction<number>) {
      state.price_to = action.payload;
    },

    setExperience(state, action: PayloadAction<IUni>) {
      state.experience = action.payload;
    },

    settVacancyCity(state, action: PayloadAction<IUni>) {
      state.city = action.payload;
    },

    changeVacancyCiy(state, action: PayloadAction<{ id: number; value: IUni }>) {
      const index = state.addresses.findIndex(f => f.id === action.payload.id);
      if (index > -1) {
        state.addresses[index].city = action.payload.value;
      }
    },

    addVacancyAdress(state, action: PayloadAction<IAddress>) {
      state.addresses.push(action.payload);
    },

    setVacancyAddress(state, action: PayloadAction<{ id: number; value: string }>) {
      const index = state.addresses.findIndex(f => f.id === action.payload.id);
      if (index > -1) {
        state.addresses[index].address = action.payload.value;
      }
    },

    deleteVacancyAdress(state, action: PayloadAction<number>) {
      const index = state.addresses.findIndex(f => f.id === action.payload);

      if (index > -1) {
        state.addresses.splice(index, 1);
      }
    },
  },
});

export const vacancyReducer = slice.reducer;

export const {
  addVacancyAdress,
  changeVacancyCiy,
  deleteVacancyAdress,
  setExperience,
  setMaxPriceValue,
  setStartPriceValue,
  setVacancyAddress,
  setVacancyDescription,
  setVacancyTitle,
  settVacancyCity,
} = slice.actions;
