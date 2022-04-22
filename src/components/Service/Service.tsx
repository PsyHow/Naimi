import { ChangeEvent, FC, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import styles from './styles/service.module.scss';

import { Select } from 'components/common/Select';
import { callMethod, cities, payMethod } from 'consts';
import { selectCallMethod, selectCity, selectWorkUnit } from 'selectors/serviceSelectors';
import {
  changeCallMethod,
  changeWorkUnit,
  selectCityApplication,
} from 'store/actions/service';
import { ICity, IWorkUnit } from 'store/types';

export const Service: FC = () => {
  const dispatch = useDispatch();

  const city = useSelector(selectCity);
  const pay = useSelector(selectWorkUnit);
  const call = useSelector(selectCallMethod);

  const [citySelect, setCitySelect] = useState<ICity>(city);

  const [paySelect, setPaySelect] = useState<IWorkUnit>(pay);

  const [callSelect, setCallSelect] = useState(call);

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

    // setCallSelect(option);
    console.log(!option, 'option');

    console.log(callSelect, 'state');

    setCallSelect(!option);

    dispatch(changeCallMethod(!option));
  };

  // console.log(call);

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
      <div className={styles.callMethod}>
        <div className={styles.leftTitleBlock}>
          <span>Город Заявки:</span>
        </div>
        <select value={+callSelect} onChange={handleCallChange}>
          {callMethod.map(item => (
            <option key={item.id} value={item.id}>
              {item.text}
            </option>
          ))}
        </select>
        {/* <Select value={+callSelect} onChange={handleCallChange} options={callMethod} /> */}
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
          <input type="checkbox" />
          <input type="checkbox" />
          <input type="checkbox" />
        </div>
      </div>
      <hr />
    </div>
  );
};
