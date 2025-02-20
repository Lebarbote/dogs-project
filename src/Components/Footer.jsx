import React from 'react';
import styles from './Footer.module.css';
import dogsFooter from '../Assets/dogs-footer.svg';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <img src={dogsFooter} alt="DogsFooter" />
      <p>Dogs. Some rights reserved.</p>
    </footer>
  );
};

export default Footer;
