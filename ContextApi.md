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
2. Create Footer component
3. Add footer to all pages
4. Create login component form or input with buton
5. Add login Component to footer
6. login new user from footer, see changes everywhere
7. Add login component to About us page, make sure it works
8. create Logout function and add it to header when user is loggedin

9. Add blog count property to Auth context === 0
10. add button to Blog section
11. create function (updateBlogCount) in AuthContext to update blog count
12. add function and blogCount propery to AuthContext
13. show blogCount in header and footer(not in login)
14. button to Blog section updates blog count in state and everywere
