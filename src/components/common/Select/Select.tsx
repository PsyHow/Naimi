import { FC } from 'react';

import styles from './styles/select.module.scss';

import { SelectProps } from 'components/common/Select/types';

export const Select: FC<SelectProps> = ({ value, onChange, options }) => {
  const mappedOptions = options.map(item => (
    <option value={item.id} key={item.id}>
      {item.text}
    </option>
  ));

  return (
    <select value={value} className={styles.select} onChange={onChange}>
      {mappedOptions}
    </select>
  );
};
