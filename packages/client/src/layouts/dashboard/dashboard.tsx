import { Outlet } from 'react-router-dom';

import Navigation from '@components/navigation/navigation';

import type { FC } from 'react';

import styles from './dashboard.module.css';

const Dashboard: FC = () => {
  return (
    <div className={styles.container}>
      <Navigation />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
