import { FC, memo } from 'react';

import styles from './styles/vacancy.module.scss';

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
} from 'store/actions/vacancy';

export const Vacancy: FC<VacancyProps> = memo(
  ({
    city,
    description,
    maxPrice,
    startPrice,
    title,
    experienceValue,
    changeButtonTitle,
    mappedAdresses,
  }) => (
    <div className={styles.container}>
      <div className={styles.header}>
        <span>О заявке</span>
      </div>
      <hr />
      <Container className={styles.vacancyName} title="Название вакансии">
        <Input actionCreator={setVacancyTitle} stateValue={title} />
      </Container>
      <hr />
      <Container className={styles.description} title="Обязанности, требования, условия">
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
        <Input stateValue={maxPrice} actionCreator={setMaxPriceValue} pattern="[0-9]*" />
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
  ),
);
