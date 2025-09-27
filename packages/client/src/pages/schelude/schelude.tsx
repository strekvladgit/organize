import type { FC } from 'react';

import styles from './schelude.module.css';

const Schelude: FC = () => {
  return (
    <>
      <main className={styles.content}>
        <h1 className={styles.title}>Список дел на сегодня</h1>
        <h2 className={styles.subtitle}>22.09.25, понедельник</h2>
        <div className="box"></div>
      </main>
      <aside className={styles.sidebar}></aside>
    </>
  );
};

export default Schelude;
