import { FC, memo } from 'react';

import styles from './styles/vacancy.module.scss';

import deleteIcon from 'assets/delete.png';
import vector from 'assets/Vector.png';
import { Container } from 'components/common/Container';
import { Input } from 'components/common/Input';
import { Select } from 'components/common/Select';
import { Textarea } from 'components/common/Textarea';
import { VacancyProps } from 'components/Vacancy/types';
import { cities, experience } from 'consts';
import {
  setExperience,
  setMaxPriceValue,
  setStartPriceValue,
  settVacancyCity,
  setVacancyDescription,
  setVacancyTitle,
} from 'store/reducers/vacancy';

export const Vacancy: FC<VacancyProps> = memo(
  ({
    city,
    description,
    maxPrice,
    startPrice,
    addressesValue,
    title,
    experienceValue,
    changeButtonTitle,
    handleAdressCityChange,
    handleAdressDeleteClick,
    handleAddressChange,
    handleAddressSaveBlur,
  }) => {
    const mappedAdresses = addressesValue.map((adress, index) => {
      const { id } = addressesValue[index];

      return (
        <div key={adress.id}>
          <div className={styles.adressItem}>
            <img alt="vector" src={vector} />

            <select
              value={addressesValue[index].city.id}
              onChange={event => handleAdressCityChange(event, id)}
            >
              {cities.map(item => (
                <option value={item.id} key={item.id}>
                  {item.text}
                </option>
              ))}
            </select>

            <input
              value={addressesValue[index].address}
              onChange={event => handleAddressChange(event, id)}
              onBlur={() => handleAddressSaveBlur(id)}
            />

            <img
              role="presentation"
              alt="deleteIcon"
              onKeyDown={() => handleAdressDeleteClick(id, index)}
              onClick={() => handleAdressDeleteClick(id, index)}
              src={deleteIcon}
            />
          </div>
          <hr />
        </div>
      );
    });

    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <span>О заявке</span>
        </div>
        <hr />
        <Container className={styles.vacancyName} title="Название вакансии">
          <Input actionCreator={setVacancyTitle} stateValue={title} />
        </Container>
        <hr />
        <Container
          className={styles.description}
          title="Обязанности, требования, условия"
        >
          <Textarea actionCreator={setVacancyDescription} stateValue={description} />
        </Container>
        <hr />
        <Container title="Город проживания">
          <Select actionCreator={settVacancyCity} stateValue={city} options={cities} />
        </Container>
        <hr />
        <Container title="Адрес" className={styles.AdresessList}>
          {mappedAdresses}
          {changeButtonTitle}
        </Container>
        <hr />
        <Container title="Зарплата" className={styles.price}>
          <Input
            stateValue={startPrice}
            actionCreator={setStartPriceValue}
            pattern="[0-9]*"
          />
          <Input
            stateValue={maxPrice}
            actionCreator={setMaxPriceValue}
            pattern="[0-9]*"
          />
        </Container>
        <hr />
        <Container title="Опыт работы">
          <Select
            actionCreator={setExperience}
            options={experience}
            stateValue={experienceValue}
          />
        </Container>
      </div>
    );
  },
);
