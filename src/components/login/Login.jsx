import { useState } from 'react';
import { useAuthCtx } from '../../store/AuthContext';

function Login() {
  const [userName, setUserName] = useState('');
  // const authCtx = useContext(AuthContext);
  const authCtx = useAuthCtx();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!userName) {
      return console.error('add username');
    }
    console.log('login action in handle submit');
    authCtx.login(userName);
  };

  const styles = {
    border: '1px solid #333',
    padding: '1rem',
    display: 'inline-block',
  };

  return (
    <div style={styles}>
      <h4>Login here</h4>
      <form onSubmit={handleSubmit}>
        <input
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
          type='text'
          placeholder='username'
        />
        <button type='submit'>Login</button>
      </form>
    </div>
  );
}

export default Login;
