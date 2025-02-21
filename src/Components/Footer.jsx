import React from 'react';
import styles from './Footer.module.css';
import Dogs from '../Assets/dogs.svg';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <img src={Dogs} alt="dogs" />
      <p>Dogs. Some rights reserved.</p>
    </footer>
  );
};

export default Footer;
