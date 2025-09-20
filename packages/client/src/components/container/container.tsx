import type { ReactNode } from 'react';

import styles from './container.module.css';

type TContainer = {
  children: ReactNode;
};

const Container = ({ children }: TContainer) => {
  return <div className={styles.container}>{children}</div>;
};

export default Container;
