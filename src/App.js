import './styles/global.css';

import { Switch, Route } from 'react-router-dom';
import BlogPage from './pages/blog/BlogPage';
import AboutPage from './pages/about/AboutPage';
import ContactPage from './pages/contact/ContactPage';
import HomePage from './pages/home/HomePage';
import Header from './components/header/Header';
import SingleBlogPage from './pages/single-blog/SingleBlogPage';
import AuthProvider from './store/AuthContext';

import MainFooter from './components/footer/MainFooter';

function App() {
  return (
    <AuthProvider>
      <div className='App'>
        <Header />
        <Switch>
          <Route path='/blog/:blogId'>
            <SingleBlogPage />
          </Route>
          <Route path='/blog'>
            <BlogPage />
          </Route>
          <Route path='/about'>
            <AboutPage />
          </Route>
          <Route path='/contact'>
            <ContactPage />
          </Route>
          <Route exact path='/'>
            <HomePage />
          </Route>
          <Route path='*'>
            <h2>Opps page not found 404 </h2>
          </Route>
        </Switch>
        <MainFooter />
      </div>
    </AuthProvider>
  );
}

export default App;
