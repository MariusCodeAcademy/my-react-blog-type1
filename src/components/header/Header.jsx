import css from './Header.module.css';
import { Link } from 'react-router-dom';
import { useAuthCtx } from '../../store/AuthContext';

function Header() {
  const { user, logout, isUserLoggedIn } = useAuthCtx();

  const sendLogout = (e) => {
    e.preventDefault();
    logout();
  };

  return (
    <header className={css.header}>
      <div className='container'>
        <Link className={css.logo} to='/'>
          CRA<strong>Blog</strong>
        </Link>
        <nav>
          <Link className={css['nav-link']} to='/blog'>
            Our Blog
          </Link>
          <Link className={css['nav-link']} to='/about'>
            About us
          </Link>
          <Link className={css['nav-link']} to='/contact'>
            Contact Us
          </Link>
        </nav>
        <nav>
          {!isUserLoggedIn && (
            <Link className={css['nav-link']} to='/login'>
              Login/Register
            </Link>
          )}
          {isUserLoggedIn && (
            <>
              <Link
                onClick={(e) => e.preventDefault()}
                className={css['nav-link']}
                to='/sdsds'
              >
                User: {user}
              </Link>
              <Link
                onClick={sendLogout}
                className={css['nav-link']}
                to='/logout'
              >
                Logout
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
