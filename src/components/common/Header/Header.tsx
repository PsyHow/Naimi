import { FC } from 'react';

import { NavLink } from 'react-router-dom';

import styles from './styles/header.module.scss';

import { PATH } from 'enums';

export const Header: FC = () => {
  const activeStyle = ({ isActive }: any): string => (isActive ? styles.activeLink : '');
  return (
    <div className={styles.header}>
      <div>
        <NavLink to={PATH.SERVICE} className={activeStyle}>
          <span>Услуги</span>
        </NavLink>
      </div>
      <div>
        <NavLink to={PATH.VACANCY} className={activeStyle}>
          <span>Вакансии</span>
        </NavLink>
      </div>
    </div>
  );
};
