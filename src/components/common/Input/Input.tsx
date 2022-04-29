import { FC, memo } from 'react';

import { useDispatch } from 'react-redux';

import styles from './styles/input.module.scss';

import { InputProps } from 'components/common/Input/types';
import { useInputValue } from 'hooks/useInputValue';

export const Input: FC<InputProps> = memo(
  ({ pattern, stateValue, id, actionCreator }) => {
    const dispatch = useDispatch();

    const { valueInput, handleValueChange } = useInputValue(stateValue);

    const handleBlur = (): void => {
      if (id) {
        dispatch(actionCreator({ id, value: valueInput as string }));
      }
      dispatch(actionCreator(valueInput));
    };

    return (
      <input
        pattern={pattern}
        className={styles.input}
        onBlur={handleBlur}
        value={valueInput}
        onChange={handleValueChange}
      />
    );
  },
);
