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
  changeVacancyCiy,
  setExperience,
  setMaxPriceValue,
  setStartPriceValue,
  settVacancyCity,
  setVacancyAddress,
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
    onAdressDeleteClick,
    onAddAdressClick,
  }) => {
    const mappedAdresses = addressesValue.map((adress, index) => {
      const { id } = addressesValue[index];

      const handleAddressDeleteClick = (): void => {
        onAdressDeleteClick(id, index);
      };

      return (
        <div key={adress.id}>
          <div className={styles.adressItem}>
            <img alt="vector" src={vector} />

            <Select
              stateValue={addressesValue[index].city}
              id={id}
              options={cities}
              actionCreator={changeVacancyCiy}
            />

            <Input
              stateValue={addressesValue[index].address}
              id={id}
              actionCreator={setVacancyAddress}
            />

            <img
              role="presentation"
              alt="deleteIcon"
              onKeyDown={handleAddressDeleteClick}
              onClick={handleAddressDeleteClick}
              src={deleteIcon}
            />
          </div>
          <hr />
        </div>
      );
    });

    const changeButtonTitle =
      addressesValue.length === 0 ? (
        <button type="button" onClick={onAddAdressClick}>
          Добавить адрес
        </button>
      ) : (
        <button type="button" onClick={onAddAdressClick}>
          Добавить еще адрес
        </button>
      );

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
