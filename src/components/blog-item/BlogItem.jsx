import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import AuthContext from '../../store/AuthContext';
import Button from '../ui/button/Button';

function BlogItem({ item }) {
  const authCtx = useContext(AuthContext);

  const [newUsername, setNewUsername] = useState('');

  const sendLogin = () => {
    // mini validation
    if (!newUsername) {
      console.warn('Please enter username');
      return;
    }
    authCtx.login(newUsername);
    // clean input
    setNewUsername('');
  };

  return (
    <article>
      <h3>{item.title}</h3>
      <Link to={`${item.url}/${item.id}`}>Read more</Link>
      <h3>Current user: {authCtx.user}</h3>
      <input
        value={newUsername}
        onChange={(e) => setNewUsername(e.target.value)}
        type='text'
        placeholder='Username'
      />
      <button onClick={sendLogin}>Login call</button>
    </article>
  );
}

export default BlogItem;
