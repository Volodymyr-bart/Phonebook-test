import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import css from './Navigation.module.css';

import { FaAddressCard } from 'react-icons/fa';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav className={css.nav}>
      <NavLink className={css.link} to="/">
        Home
      </NavLink>

      {isLoggedIn && (
        <NavLink className={css.link} to="/contacts">
          <FaAddressCard size={'30px'} />
        </NavLink>
      )}
    </nav>
  );
};
