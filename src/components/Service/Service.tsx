import { ChangeEvent, FC, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import styles from './styles/service.module.scss';

import { Checkbox } from 'components/common/Checkbox';
import { Select } from 'components/common/Select';
import { callMethod, cities, payMethod } from 'consts';
import {
  selectAddresses,
  selectCallMethod,
  selectCity,
  selectHasPhoto,
  selectHasReview,
  selectIsVerified,
  selectWorkUnit,
} from 'selectors/serviceSelectors';
import {
  addAdress,
  changeCallMethod,
  changeWorkUnit,
  hasPhoto,
  hasReview,
  isVerified,
  selectCityApplication,
} from 'store/actions/service';
import { ICity, IWorkUnit } from 'store/types';

export const Service: FC = () => {
  const dispatch = useDispatch();

  const city = useSelector(selectCity);
  const pay = useSelector(selectWorkUnit);
  const call = useSelector(selectCallMethod);
  const photo = useSelector(selectHasPhoto);
  const review = useSelector(selectHasReview);
  const verified = useSelector(selectIsVerified);
  const adresses = useSelector(selectAddresses);

  const [citySelect, setCitySelect] = useState<ICity>(city);
  const [paySelect, setPaySelect] = useState<IWorkUnit>(pay);
  const [callSelect, setCallSelect] = useState<boolean>(call);
  const [photoChecked, setPhotoCheked] = useState<boolean>(photo);
  const [reviewChecked, setReviewChecked] = useState<boolean>(review);
  const [verifiedChecked, setVerifiedChecked] = useState<boolean>(verified);

  const handleCityChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    const id = +event.currentTarget.value;
    const { text } = cities.filter(item => item.id === id)[0];

    setCitySelect({
      id,
      text,
    });
    dispatch(selectCityApplication({ id, text }));
  };

  const handlePayChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    const { value } = event.currentTarget;
    const { text } = payMethod.filter(method => method.id === +value)[0];

    setPaySelect({
      id: +value,
      text,
    });

    dispatch(changeWorkUnit({ id: +value, text }));
  };

  const handleCallChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    const option = +event.currentTarget.value;

    setCallSelect(prevState => !prevState);
    dispatch(changeCallMethod(!!option));
  };

  const handlePhotoCheckChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const option = event.currentTarget.checked;

    setPhotoCheked(option);
    dispatch(hasPhoto(option));
  };

  const handleReviewCheckChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const option = event.currentTarget.checked;

    setReviewChecked(option);
    dispatch(hasReview(option));
  };

  const handleVerifiedCheckChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const option = event.currentTarget.checked;

    setVerifiedChecked(option);
    dispatch(isVerified(option));
  };

  const handleAddAdressClick = (id: number): void => {
    dispatch(addAdress({ city: { ...city }, address: 'sfasdfasdf', id }));
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span>О заявке</span>
      </div>
      <hr />
      <div className={styles.descriptionBlock}>
        <div className={styles.leftTitleBlock}>
          <span>Описание:</span>
        </div>
        <textarea />
      </div>
      <hr />
      <div className={styles.citySelect}>
        <div className={styles.leftTitleBlock}>
          <span>Город Заявки:</span>
        </div>
        <Select value={citySelect.id} onChange={handleCityChange} options={cities} />
      </div>
      <hr />
      <div className={styles.adress}>
        <div className={styles.leftTitleBlock}>
          <span>Адрес:</span>
        </div>
        <div>
          {adresses.map((adress, index) => (
            // const value = adresses.filter(item => item.id === index)[0];

            <div key={adress.id}>
              <Select
                value={adresses[index].city.id}
                onChange={handleCityChange}
                options={cities}
              />
              {/* <input value={adress.address} /> */}
            </div>
          ))}
          <div>
            <button type="button" onClick={() => handleAddAdressClick(adresses.length)}>
              Добавить
            </button>
          </div>
        </div>
      </div>
      <hr />
      <div className={styles.callMethod}>
        <div className={styles.leftTitleBlock}>
          <span>Способ связи:</span>
        </div>
        <Select value={+callSelect} onChange={handleCallChange} options={callMethod} />
      </div>
      <hr />
      <div className={styles.price}>
        <div className={styles.leftTitleBlock}>
          <span>Сколько готовы заплатить</span>
        </div>
        <div className={styles.selectPrice}>
          <input />
          <Select value={paySelect.id} onChange={handlePayChange} options={payMethod} />
        </div>
      </div>
      <hr />
      <div className={styles.requirements}>
        <div className={styles.leftTitleBlock}>
          <span>Требования к специалистам:</span>
        </div>
        <div className={styles.checkRequirements}>
          <Checkbox
            checked={verifiedChecked}
            onChange={handleVerifiedCheckChange}
            label="Личность подтверждена"
          />
          <Checkbox
            checked={photoChecked}
            onChange={handlePhotoCheckChange}
            label="С фото работ в анкете"
          />
          <Checkbox
            checked={reviewChecked}
            onChange={handleReviewCheckChange}
            label="С отзывами"
          />
        </div>
      </div>
      <hr />
    </div>
  );
};
