import { FC, memo } from 'react';

import styles from './styles/service.module.scss';

import deleteIcon from 'assets/delete.png';
import vector from 'assets/Vector.png';
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
  setAddress,
  changeAdressCity,
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
    adressesValue,
    onAddressAddClick,
    onAdressDeleteClick,
  }) => {
    const mappedAdresses = adressesValue.map((adress, index) => {
      const { id } = adressesValue[index];

      const handleAdressDeleteClick = (): void => {
        onAdressDeleteClick(id);
      };

      return (
        <div key={adress.id}>
          <div className={styles.adressItem}>
            <img alt="vector" src={vector} />

            <Select
              stateValue={adressesValue[index].city}
              options={cities}
              actionCreator={changeAdressCity}
              id={id}
            />

            <Input
              stateValue={adressesValue[index].address}
              id={id}
              actionCreator={setAddress}
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

    const changeButtonTitle =
      adressesValue.length === 0 ? (
        <button type="button" onClick={onAddressAddClick}>
          ???????????????? ??????????
        </button>
      ) : (
        <button type="button" onClick={onAddressAddClick}>
          ???????????????? ?????? ??????????
        </button>
      );

    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <span>?? ????????????</span>
        </div>
        <hr />
        <Container title="????????????????">
          <Textarea stateValue={description} actionCreator={setDescptiption} />
        </Container>
        <hr />
        <Container title="?????????? ????????????">
          <Select
            actionCreator={selectCityApplication}
            stateValue={city}
            options={cities}
          />
        </Container>
        <hr />
        <Container title="??????????" className={styles.AdresessList}>
          {mappedAdresses}
          {changeButtonTitle}
        </Container>
        <hr />
        <Container title="???????????? ??????????">
          <Select
            options={callMethod}
            actionCreator={changeCallMethod}
            stateValue={call}
          />
        </Container>
        <hr />
        <Container title="?????????????? ???????????? ??????????????????" className={styles.price}>
          <Input pattern="[0-9]*" stateValue={price} actionCreator={setPrice} />
          <Select actionCreator={changeWorkUnit} options={payMethod} stateValue={pay} />
        </Container>
        <hr />
        <Container title="???????????????????? ?? ????????????????????????" className={styles.requirements}>
          <Checkbox
            actionCreator={isVerified}
            stateValue={verified}
            label="???????????????? ????????????????????????"
          />
          <Checkbox
            stateValue={photo}
            actionCreator={hasPhoto}
            label="?? ???????? ?????????? ?? ????????????"
          />
          <Checkbox stateValue={review} actionCreator={hasReview} label="?? ????????????????" />
        </Container>
      </div>
    );
  },
);
