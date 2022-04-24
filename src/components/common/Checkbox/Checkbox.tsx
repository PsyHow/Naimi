import { ChangeEvent, FC, memo, useState } from 'react';

import { useDispatch } from 'react-redux';

import styles from './styles/checkbox.module.scss';

import { ChecboxProps } from 'components/common/Checkbox/types';

export const Checkbox: FC<ChecboxProps> = memo(({ stateValue, label, actionCreator }) => {
  const dispatch = useDispatch();

  const [value, setValue] = useState<boolean>(stateValue);

  const handleCheckedChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const option = event.currentTarget.checked;

    setValue(option);
    dispatch(actionCreator(option));
  };

  return (
    <div className={styles.container}>
      <label>
        <input checked={value} onChange={handleCheckedChange} type="checkbox" />
        {label}
      </label>
    </div>
  );
});
