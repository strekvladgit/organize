import Container from '../../components/container/container';

import type { FC } from 'react';

import styles from './home.module.css';

const Home: FC = () => {
  return (
    <Container>
      <div className={styles.split}>
        <div className={styles.greetins}>
          <h1>ЕЖЕДНЕКНИКЪ</h1>
        </div>
        <div className={styles.overview}></div>
      </div>
    </Container>
  );
};

export default Home;
