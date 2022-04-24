import { ChangeEvent, FC, memo, useState } from 'react';

import { useDispatch } from 'react-redux';

import styles from './styles/input.module.scss';

import { InputProps } from 'components/common/Input/types';

export const Input: FC<InputProps> = memo(({ pattern, stateValue, actionCreator }) => {
  const dispatch = useDispatch();

  const [value, setValue] = useState(stateValue);

  const handlePriceValueChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (pattern) {
      return setValue(validate =>
        event.target.validity.valid ? event.target.value : validate,
      );
    }
    return setValue(event.currentTarget.value);
  };

  const handlePriceBlur = (): void => {
    dispatch(actionCreator(value));
  };

  return (
    <input
      pattern={pattern}
      className={styles.input}
      onBlur={handlePriceBlur}
      value={value}
      onChange={handlePriceValueChange}
    />
  );
});
