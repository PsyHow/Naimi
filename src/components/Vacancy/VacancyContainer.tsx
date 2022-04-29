import { ChangeEvent, FC, useCallback, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Vacancy } from './Vacancy';

import { cities } from 'consts';
import {
  selectExperience,
  selectMaxPrice,
  selectStartPrice,
  selectVacancyAddresses,
  selectVacancyCity,
  selectVacancyDescription,
  selectVacancyTitle,
} from 'selectors/vacancySelectors';
import {
  addVacancyAdress,
  changeVacancyCiy,
  deleteVacancyAdress,
  setVacancyAddress,
} from 'store/reducers/vacancy';
import { IAddress } from 'store/types';

export const VacancyContainer: FC = () => {
  const dispatch = useDispatch();

  const title = useSelector(selectVacancyTitle);
  const description = useSelector(selectVacancyDescription);
  const startPrice = useSelector(selectStartPrice);
  const maxPrice = useSelector(selectMaxPrice);
  const experienceValue = useSelector(selectExperience);
  const city = useSelector(selectVacancyCity);
  const addresses = useSelector(selectVacancyAddresses);

  const [addressesValue, setAdressesValue] = useState<IAddress[]>(addresses);

  const handleAdressCityChange = useCallback(
    (event: ChangeEvent<HTMLSelectElement>, id: number): void => {
      const option = +event.currentTarget.value;

      const currentCity = cities.filter(citiesItem => citiesItem.id === option)[0];

      const changeCurrentCity = addressesValue.map(value =>
        value.id === id ? { ...value, city: currentCity } : value,
      );

      setAdressesValue(changeCurrentCity);

      dispatch(changeVacancyCiy({ id, value: currentCity }));
    },
    [addressesValue],
  );

  const handleAdressDeleteClick = useCallback(
    (id: number): void => {
      const deleteAdressesItem = addressesValue.filter(current => current.id !== id);

      setAdressesValue(deleteAdressesItem);
      dispatch(deleteVacancyAdress(id));
    },
    [addressesValue],
  );

  const handleAddressChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>, id: number): void => {
      const addressValue = addressesValue.map(address =>
        address.id === id ? { ...address, address: event.currentTarget.value } : address,
      );

      setAdressesValue(addressValue);
    },
    [addressesValue],
  );

  const handleAddressSaveBlur = useCallback(
    (id: number): void => {
      const currentAddress = addressesValue.filter(value => value.id === id)[0].address;

      dispatch(setVacancyAddress({ id, value: currentAddress }));
    },
    [addressesValue],
  );

  const handleAddAdressClick = useCallback((): void => {
    const id = Math.random() * 1000;
    const fixedId = +id.toFixed();

    const nextState = [
      ...addressesValue,
      { id: fixedId, address: '', city: { ...city } },
    ];

    setAdressesValue(nextState);
    dispatch(addVacancyAdress({ city: { ...city }, address: '', id: fixedId }));
  }, [addressesValue]);

  const changeButtonTitle =
    addresses.length === 0 ? (
      <button type="button" onClick={handleAddAdressClick}>
        Добавить адрес
      </button>
    ) : (
      <button type="button" onClick={handleAddAdressClick}>
        Добавить еще адрес
      </button>
    );

  return (
    <Vacancy
      city={city}
      description={description}
      maxPrice={maxPrice}
      startPrice={startPrice}
      title={title}
      addressesValue={addressesValue}
      experienceValue={experienceValue}
      changeButtonTitle={changeButtonTitle}
      handleAdressCityChange={handleAdressCityChange}
      handleAdressDeleteClick={handleAdressDeleteClick}
      handleAddressChange={handleAddressChange}
      handleAddressSaveBlur={handleAddressSaveBlur}
    />
  );
};
