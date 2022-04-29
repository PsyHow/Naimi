import { FC, useCallback, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Service } from 'components/Service';
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
import { addAdress, deleteAdress } from 'store/reducers/service';
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

  const [adressesValue, setAdressesValue] = useState<IAddress[]>(adresses);

  const handleAdressDeleteClick = useCallback(
    (id: number): void => {
      const deleteAdressesItem = adressesValue.filter(current => current.id !== id);

      setAdressesValue(deleteAdressesItem);
      dispatch(deleteAdress(id));
    },
    [adressesValue],
  );

  const handleAddressAddClick = useCallback((): void => {
    const id = Math.random() * 1000;
    const fixedId = +id.toFixed();

    const nextState = [...adressesValue, { id: fixedId, address: '', city: { ...city } }];

    setAdressesValue(nextState);

    dispatch(addAdress({ city: { ...city }, address: '', id: fixedId }));
  }, [city, adressesValue]);

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
      adressesValue={adressesValue}
      onAddressAddClick={handleAddressAddClick}
      onAdressDeleteClick={handleAdressDeleteClick}
    />
  );
};
