import { ChangeEvent, FC, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import styles from './styles/service.module.scss';

import deleteIcon from 'assets/delete.png';
import vector from 'assets/Vector.png';
import { Service } from 'components/Service';
import { cities } from 'consts';
import {
  selectAddresses,
  selectCallMethod,
  selectCity,
  selectDescription,
  selectHasPhoto,
  selectHasReview,
  selectIsVerified,
  selectPrice,
  selectWorkUnit,
} from 'selectors/serviceSelectors';
import {
  addAdress,
  changeAdressCity,
  deleteAdress,
  setAddress,
} from 'store/actions/service';
import { IAddress } from 'store/types';

export const ServiceContainer: FC = () => {
  const dispatch = useDispatch();

  const city = useSelector(selectCity);
  const pay = useSelector(selectWorkUnit);
  const call = useSelector(selectCallMethod);
  const photo = useSelector(selectHasPhoto);
  const review = useSelector(selectHasReview);
  const verified = useSelector(selectIsVerified);
  const adresses = useSelector(selectAddresses);
  const description = useSelector(selectDescription);
  const price = useSelector(selectPrice);

  console.log(adresses);

  const [adressesValue, setAdressesValue] = useState<IAddress[]>(adresses);

  const mappedAdresses = adresses.map((adress, index) => {
    const { id } = adresses[index];

    const handleAdressCityChange = (event: ChangeEvent<HTMLSelectElement>): void => {
      const option = +event.currentTarget.value;

      const currentCity = cities.filter(citiesItem => citiesItem.id === option)[0];

      const changeCurrentCity = adressesValue.map(value =>
        value.id === id ? { ...value, city: currentCity } : value,
      );

      setAdressesValue(changeCurrentCity);

      dispatch(changeAdressCity(id, currentCity));
    };

    const handleAdressDeleteClick = (): void => {
      const deleteAdressesItem = adressesValue.filter(current => current.id !== id);

      setAdressesValue(deleteAdressesItem);
      dispatch(deleteAdress(id));
    };

    const handleAddressChange = (event: ChangeEvent<HTMLInputElement>): void => {
      const addressValue = adressesValue.map(address =>
        address.id === id ? { ...address, address: event.currentTarget.value } : address,
      );

      setAdressesValue(addressValue);
    };

    const handleAddressSaveBlur = (): void => {
      const currentAddress = adressesValue.filter(value => value.id === id)[0].address;

      dispatch(setAddress(id, currentAddress));
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
    dispatch(addAdress({ city: { ...city }, address: '', id: fixedId }));
  };

  const changeButtonTitle =
    adresses.length === 0 ? (
      <button type="button" onClick={handleAddAdressClick}>
        Добавить адрес
      </button>
    ) : (
      <button type="button" onClick={handleAddAdressClick}>
        Добавить еще адрес
      </button>
    );

  return (
    <Service
      description={description}
      city={city}
      call={call}
      price={price}
      pay={pay}
      verified={verified}
      photo={photo}
      review={review}
      changeButtonTitle={changeButtonTitle}
      mappedAdresses={mappedAdresses}
    />
  );
};
