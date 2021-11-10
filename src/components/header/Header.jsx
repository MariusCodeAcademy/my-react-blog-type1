import css from './Header.module.css';
import { Link } from 'react-router-dom';
import AuthContext from '../../store/AuthContext';
import { useContext } from 'react';

function Header() {
  const authCtx = useContext(AuthContext);
  console.log('authCtx', authCtx);
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
          {!authCtx.user && (
            <Link className={css['nav-link']} to='/login'>
              Login/Register
            </Link>
          )}
          {authCtx.user && (
            <Link
              onClick={(e) => e.preventDefault()}
              className={css['nav-link']}
              to='/sdsds'
            >
              User: {authCtx.user}
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
