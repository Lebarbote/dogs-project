import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import MyPhotos from '../../Assets/feed.svg';
import Statistics from '../../Assets/estatisticas.svg';
import Add from '../../Assets/adicionar.svg';
import Exit from '../../Assets/sair.svg';
import styles from './UserHeaderNav.module.css';
import { useNavigate } from 'react-router-dom';
import useMedia from '../../Hooks/useMedia';

const UserHeaderNav = () => {
  const { userLogout } = React.useContext(UserContext);
  const navigate = useNavigate();
  const mobile = useMedia('max-width: 40rem');
  const [mobileMenu, setMobileMenu] = React.useState(false);

  function handleLogout() {
    userLogout();
    navigate('/login');
  }

  const { pathname } = useLocation();
  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <>
      {mobile && (
        <button
          aria-label="Menu"
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          }`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}
      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.navMobileActive
        }`}
      >
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
    </>
  );
};

export default UserHeaderNav;
