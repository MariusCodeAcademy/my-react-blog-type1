import css from './BlogItem.module.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import Button from '../ui/button/Button';
import { useAuthCtx } from '../../store/AuthContext';

function BlogItem({ item }) {
  const authCtx = useAuthCtx();

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
    <article className={css['blog-item']}>
      <img src={item.imgUrl} alt={item.title} />
      <h3 className='title'>{item.title.slice(0, 30) + '...'}</h3>
      <p>{item.text.slice(0, 50) + ' ...'}</p>
      <a href={item.url}>Read more</a> <br />
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
