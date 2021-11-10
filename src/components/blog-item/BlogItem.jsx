import { Link } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../../store/AuthContext';
import Button from '../ui/button/Button';

function BlogItem({ item }) {
  const authCtx = useContext(AuthContext);
  return (
    <article>
      <h3>{item.title}</h3>
      <Link to={`${item.url}/${item.id}`}>Read more</Link>
      <h3>Current user: {authCtx.user}</h3>
      <button onClick={authCtx.login}>Login call</button>
    </article>
  );
}

export default BlogItem;
