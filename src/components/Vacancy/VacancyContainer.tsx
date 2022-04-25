import { ChangeEvent, FC, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import styles from './styles/vacancy.module.scss';
import { Vacancy } from './Vacancy';

import deleteIcon from 'assets/delete.png';
import vector from 'assets/Vector.png';
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
} from 'store/actions/vacancy';
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

  const [adressesValue, setAdressesValue] = useState<IAddress[]>(addresses);

  const mappedAdresses = addresses.map((adress, index) => {
    const { id } = addresses[index];

    const handleAdressCityChange = (event: ChangeEvent<HTMLSelectElement>): void => {
      const option = +event.currentTarget.value;

      const currentCity = cities.filter(citiesItem => citiesItem.id === option)[0];

      const changeCurrentCity = adressesValue.map(value =>
        value.id === id ? { ...value, city: currentCity } : value,
      );

      setAdressesValue(changeCurrentCity);

      dispatch(changeVacancyCiy(id, currentCity));
    };

    const handleAdressDeleteClick = (): void => {
      const deleteAdressesItem = adressesValue.filter(current => current.id !== index);

      setAdressesValue(deleteAdressesItem);
      dispatch(deleteVacancyAdress(id));
    };

    const handleAddressChange = (event: ChangeEvent<HTMLInputElement>): void => {
      const addressValue = adressesValue.map(address =>
        address.id === id ? { ...address, address: event.currentTarget.value } : address,
      );

      setAdressesValue(addressValue);
    };

    const handleAddressSaveBlur = (): void => {
      const currentAddress = adressesValue.filter(value => value.id === id)[0].address;

      dispatch(setVacancyAddress(id, currentAddress));
    };

    return (
      <div key={adress.id}>
        <div className={styles.adressItem}>
          <img alt="vector" src={vector} />

          <select value={adressesValue[index].city.id} onChange={handleAdressCityChange}>
            {cities.map(item => (
              <option value={item.id} key={item.id}>
                {item.text}
              </option>
            ))}
          </select>

          <input
            value={adressesValue[index].address}
            onChange={handleAddressChange}
            onBlur={handleAddressSaveBlur}
          />

          <img
            role="presentation"
            alt="deleteIcon"
            onKeyDown={handleAdressDeleteClick}
            onClick={handleAdressDeleteClick}
            src={deleteIcon}
          />
        </div>
        <hr />
      </div>
    );
  });

  const handleAddAdressClick = (): void => {
    const id = Math.random() * 1000;
    const fixedId = +id.toFixed();

    const nextState = [...adressesValue, { id: fixedId, address: '', city: { ...city } }];

    setAdressesValue(nextState);
    dispatch(addVacancyAdress({ city: { ...city }, address: '', id: fixedId }));
  };

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
      experienceValue={experienceValue}
      changeButtonTitle={changeButtonTitle}
      mappedAdresses={mappedAdresses}
    />
  );
};
