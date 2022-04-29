import { FC, memo } from 'react';

import styles from './styles/service.module.scss';

import { Checkbox } from 'components/common/Checkbox';
import { Container } from 'components/common/Container';
import { Input } from 'components/common/Input';
import { Select } from 'components/common/Select';
import { Textarea } from 'components/common/Textarea';
import { ServiceProps } from 'components/Service/types';
import { callMethod, cities, payMethod } from 'consts';
import {
  changeCallMethod,
  changeWorkUnit,
  hasPhoto,
  isVerified,
  selectCityApplication,
  setPrice,
  hasReview,
  setDescptiption,
} from 'store/reducers/service';

export const Service: FC<ServiceProps> = memo(
  ({
    description,
    city,
    call,
    pay,
    price,
    photo,
    review,
    verified,
    changeButtonTitle,
    mappedAdresses,
  }) => (
    <div className={styles.container}>
      <div className={styles.header}>
        <span>О заявке</span>
      </div>
      <hr />
      <Container title="Описание">
        <Textarea stateValue={description} actionCreator={setDescptiption} />
      </Container>
      <hr />
      <Container title="Город Заявки">
        <Select
          actionCreator={selectCityApplication}
          stateValue={city}
          options={cities}
        />
      </Container>
      <hr />
      <Container title="Адрес" className={styles.AdresessList}>
        {mappedAdresses}
        {changeButtonTitle}
      </Container>
      <hr />
      <Container title="Способ связи">
        <Select options={callMethod} actionCreator={changeCallMethod} stateValue={call} />
      </Container>
      <hr />
      <Container title="Сколько готовы заплатить" className={styles.price}>
        <Input pattern="[0-9]*" stateValue={price} actionCreator={setPrice} />
        <Select actionCreator={changeWorkUnit} options={payMethod} stateValue={pay} />
      </Container>
      <hr />
      <Container title="Требования к специалистам" className={styles.requirements}>
        <Checkbox
          actionCreator={isVerified}
          stateValue={verified}
          label="Личность подтверждена"
        />
        <Checkbox
          stateValue={photo}
          actionCreator={hasPhoto}
          label="С фото работ в анкете"
        />
        <Checkbox stateValue={review} actionCreator={hasReview} label="С отзывами" />
      </Container>
    </div>
  ),
);
