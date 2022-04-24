import { ChangeEvent, FC, memo, useState } from 'react';

import { useDispatch } from 'react-redux';

import styles from './styles/select.module.scss';

import { SelectProps } from 'components/common/Select/types';
import { IUni } from 'store/types';

export const Select: FC<SelectProps> = memo(({ options, stateValue, actionCreator }) => {
  const dispatch = useDispatch();

  const [value, setValue] = useState<IUni>(stateValue as IUni);
  const [booleanValue, setBooleanValue] = useState<boolean>(stateValue as boolean);

  const handleCityChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    const option = +event.currentTarget.value;
    const currentOption = options.filter(item => item.id === option)[0];

    if (typeof stateValue === 'boolean') {
      setBooleanValue(prevState => !prevState);
      dispatch(actionCreator(!!option));
    } else {
      setValue(currentOption);
      dispatch(actionCreator(currentOption));
    }
  };

  const mappedOptions = options.map(item => (
    <option value={item.id} key={item.id}>
      {item.text}
    </option>
  ));

  return (
    <select
      value={value.id || +booleanValue}
      className={styles.select}
      onChange={handleCityChange}
    >
      {mappedOptions}
    </select>
  );
});
