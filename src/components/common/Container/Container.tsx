import { FC } from 'react';

import styles from './styles/container.module.scss';

import { ContainerProps } from 'components/common/Container/types';

export const Container: FC<ContainerProps> = ({ title, children, className }) => (
  <div className={styles.container}>
    <div className={styles.leftContent}>
      <span>{title}:</span>
    </div>
    <div className={`${styles.rightContent} ${className}`}>{children}</div>
  </div>
);
