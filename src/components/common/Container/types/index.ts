import { ReactNode } from 'react';

export interface ContainerProps {
  title: string;
  children: ReactNode;
  className?: string;
}
