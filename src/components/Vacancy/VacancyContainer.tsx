import { FC, useCallback, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Vacancy } from './Vacancy';

import {
  selectExperience,
  selectMaxPrice,
  selectStartPrice,
  selectVacancyAddresses,
  selectVacancyCity,
  selectVacancyDescription,
  selectVacancyTitle,
} from 'selectors/vacancySelectors';
import { addVacancyAdress, deleteVacancyAdress } from 'store/reducers/vacancy';
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

  const handleAdressDeleteClick = useCallback(
    (id: number): void => {
      const deleteAdressesItem = addressesValue.filter(current => current.id !== id);

      setAdressesValue(deleteAdressesItem);
      dispatch(deleteVacancyAdress(id));
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
  }, [city, addressesValue]);

  return (
    <Vacancy
      city={city}
      description={description}
      maxPrice={maxPrice}
      startPrice={startPrice}
      title={title}
      addressesValue={addressesValue}
      experienceValue={experienceValue}
      onAdressDeleteClick={handleAdressDeleteClick}
      onAddAdressClick={handleAddAdressClick}
    />
  );
};
