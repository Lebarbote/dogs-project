import React from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import MyPhotos from '../../Assets/feed.svg';
import Statistics from '../../Assets/estatisticas.svg';
import Add from '../../Assets/adicionar.svg';
import Exit from '../../Assets/sair.svg';
import styles from './UserHeaderNav.module.css';
import { useNavigate } from 'react-router-dom';

const UserHeaderNav = () => {
  const [mobile, setMobile] = React.useState(null);
  const { userLogout } = React.useContext(UserContext);
  const navigate = useNavigate();

  function handleLogout() {
    userLogout();
    navigate('/login');
  }

  return (
    <nav className={styles.nav}>
      <NavLink to="/account" end>
        <img src={MyPhotos} alt="feed" />
        {mobile && 'My Photos'}
      </NavLink>
      <NavLink to="/account/statistics">
        <img src={Statistics} alt="estatisticas" />
        {mobile && 'Statistics'}
      </NavLink>
      <NavLink to="/account/post">
        <img src={Add} alt="adicionar" />
        {mobile && 'Add Photo'}
      </NavLink>
      <button onClick={handleLogout}>
        <img src={Exit} alt="sair" />
        {mobile && 'Exit'}
      </button>
    </nav>
  );
};

export default UserHeaderNav;
