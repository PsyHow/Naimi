import { FC } from 'react';

import { Route, Routes } from 'react-router-dom';

import styles from './app.module.scss';

import { Header } from 'components/common/Header';
import { ServiceContainer } from 'components/Service';
import { VacancyContainer } from 'components/Vacancy';
import { PATH } from 'enums';

export const App: FC = () => (
  <div className={styles.app}>
    <Header />
    <Routes>
      <Route path={PATH.SERVICE} element={<ServiceContainer />} />
      <Route path={PATH.VACANCY} element={<VacancyContainer />} />
    </Routes>
  </div>
);
