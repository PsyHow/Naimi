import { FC } from 'react';

import styles from './styles/service.module.scss';

export const Service: FC = () => (
  <div className={styles.container}>
    <div className={styles.description}>О заявке</div>
    <hr />
    <div>
      <span>Описание:</span>
      <textarea />
    </div>
    <div>
      <span>Город Заявки:</span>
      <select>
        <option>123</option>
      </select>
    </div>
  </div>
);
