import { FC } from 'react';

import styles from './app.module.scss';

import { Service } from 'components/Service';

export const App: FC = () => (
  <div className={styles.app}>
    <Service />
  </div>
);
