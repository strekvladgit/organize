import Container from '../../components/container/container';
import Navigation from '../../components/navigation/navigation';

import type { FC } from 'react';

import styles from './dashboard.module.css';

const Dashboard: FC = () => {
  return (
    <Container>
      <div className={styles.split}>
        <Navigation />
      </div>
    </Container>
  );
};

export default Dashboard;
