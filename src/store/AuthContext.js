import React, { useState, useContext } from 'react';

export const AuthContext = React.createContext({
  user: '',
  isUserLoggedIn: false,
  login: () => {},
  logout: () => {},
});

AuthContext.displayName = 'AuthContext';

function AuthProvider(props) {
  const [username, setUsername] = useState('Mike Tyson');
  // isUserLoggedIn - infered value
  // 'james' === true
  // '' === false
  const isUserLoggedIn = !!username;

  const login = (newUsername) => {
    console.log('login on AuthContext.js');
    setUsername(newUsername);
  };

  const logout = () => {
    console.log('userLogout');
    setUsername('');
  };

  const authCtx = {
    user: username,
    isUserLoggedIn,
    login: login,
    logout: logout,
  };
  return (
    <AuthContext.Provider value={authCtx}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;

export function useAuthCtx() {
  return useContext(AuthContext);
}
