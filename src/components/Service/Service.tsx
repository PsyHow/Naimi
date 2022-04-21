import { ChangeEvent, FC, useState } from 'react';

import { useDispatch } from 'react-redux';

import styles from './styles/service.module.scss';

import { cities } from 'consts';
import { changeCallMethod, selectCityApplication } from 'store/actions/service';
import { ICity } from 'store/types';

export const Service: FC = () => {
  const dispatch = useDispatch();

  const [citySelect, setCitySelect] = useState<ICity>({
    id: 1,
    text: 'Алма-Ата',
  });

  const [callSelect, setCallSelect] = useState<number>(1);

  const handleCitySelectChange = (name: string, value: string): void => {
    const newData = {
      ...citySelect,
      [name]: value,
    };

    setCitySelect(newData);
    dispatch(selectCityApplication(newData.id, newData.text));
  };

  const handleCityChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    const option = event.target.value;

    handleCitySelectChange('text', option);
  };

  const handleCallChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    const option = event.target.value;

    setCallSelect(+option);
    dispatch(changeCallMethod(!option));
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
        <select value={citySelect.text} onChange={handleCityChange}>
          {cities.map(city => (
            <option value={city.text} key={city.id}>
              {city.text}
            </option>
          ))}
        </select>
      </div>
      <hr />
      <div className={styles.callMethod}>
        <div className={styles.leftTitleBlock}>
          <span>Город Заявки:</span>
        </div>
        <select defaultValue={callSelect} onChange={handleCallChange}>
          <option value={0}>Написать в чате</option>
          <option value={1}>Позвонить</option>
        </select>
      </div>
    </div>
  );
};
