import styles from './header.module.css';

const Header = (): React.JSX.Element => {
  return (
    <header className={`${styles.header}`}>
      <h1 className={styles.title}>Привет, Влад</h1>
      <p></p>
    </header>
  );
};

export default Header;
