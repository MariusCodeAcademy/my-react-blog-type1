import React from 'react';

const AuthContext = React.createContext({
  user: '',
  login: () => {},
});

AuthContext.displayName = 'AuthContext';

export default AuthContext;
