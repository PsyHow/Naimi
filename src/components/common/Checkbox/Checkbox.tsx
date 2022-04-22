import { FC } from 'react';

import styles from './styles/checkbox.module.scss';

import { ChecboxProps } from 'components/common/Checkbox/types';

export const Checkbox: FC<ChecboxProps> = ({ checked, label, onChange }) => (
  <div className={styles.container}>
    <label>
      <input checked={checked} onChange={onChange} type="checkbox" />
      {label}
    </label>
  </div>
);
