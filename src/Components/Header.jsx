import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import dogs from '../Assets/dogs.svg';
import { UserContext } from '../UserContext';

const Header = () => {
  const { data } = React.useContext(UserContext);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label="Dogs - Home">
          <img src={dogs} alt="Dogs" />
        </Link>
        {data ? (
          <Link className={styles.login} to="/account">
            {data.nome}
          </Link>
        ) : (
          <Link className={styles.login} to="/login">
            Login / Create
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
