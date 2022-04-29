import { FC, memo } from 'react';

import { useDispatch } from 'react-redux';

import styles from './styles/select.module.scss';

import { SelectProps } from 'components/common/Select/types';
import { useSelectValue } from 'hooks/useSelectValue';

export const Select: FC<SelectProps> = memo(
  ({ options, stateValue, actionCreator, id }) => {
    const dispatch = useDispatch();

    const { valueSelect, handleCityChange } = useSelectValue(stateValue, options);

    const handleOnBlur = (): void => {
      if (typeof stateValue === 'boolean') {
        dispatch(actionCreator(valueSelect.booleanValue));
      }
      if (id) {
        dispatch(actionCreator({ id, value: valueSelect.city }));
      }
      if (typeof stateValue !== 'boolean') {
        dispatch(actionCreator(valueSelect.city));
      }
    };

    const mappedOptions = options.map(item => (
      <option value={item.id} key={item.id}>
        {item.text}
      </option>
    ));

    return (
      <select
        value={+valueSelect.booleanValue || valueSelect.city.id}
        className={styles.select}
        onChange={handleCityChange}
        onBlur={handleOnBlur}
      >
        {mappedOptions}
      </select>
    );
  },
);
