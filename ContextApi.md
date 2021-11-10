# Create context

1. Create store/AuthContext.js
2. const AuthContext = React.createContext({})
3. <AuthContext.Provider value={} > wrap our app component
4. in any child component we get the value with useContext() hook

   `import AuthContext from '../../store/AuthContext';`

   `import { useContext } from 'react';`

   `const authCtx = useContext(AuthContext);`

## uzd

1. Get current user in BlogItem
2. Create login component form or input with buton
3.
