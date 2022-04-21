export const setDescptiption = (payload: string) =>
  ({
    type: 'SERVICE/SET_DESCRIPTION',
    payload,
  } as const);

export const selectCityApplication = (id: number, text: string) =>
  ({
    type: 'SERVICE/SELECT_CITY_APPLICATION',
    payload: {
      id,
      text,
    },
  } as const);

export const changeCallMethod = (payload: boolean) =>
  ({
    type: 'SERVICE/CHANGE_CALL_METHOD',
    payload,
  } as const);
