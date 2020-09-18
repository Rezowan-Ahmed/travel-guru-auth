import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Banner from './Components/Banner/Banner';
import News from './Components/News/News';
import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact';
import NoMatch from './Components/NoMatch/NoMatch';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/home'>
          <Banner></Banner>
        </Route>
        <Route path='/news'>
          <News></News>
        </Route>
        <Route path='/blog'>
          <Blog></Blog>
        </Route>
        <Route path='/contact'>
          <Contact></Contact>
        </Route>
        <Route exact path='/'>
          <Banner></Banner>
        </Route>
        <Route path='*'>
          <NoMatch></NoMatch>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
