import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Banner from './Components/Banner/Banner';
import News from './Components/News/News';
import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact';
import NoMatch from './Components/NoMatch/NoMatch';
import Destination from './Components/Destination/Destination';
import Booking from './Components/Booking/Booking';
import Login from './Components/Login/Login';

const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <p>Name: {loggedInUser.name}</p>
    <Router>
      <Switch>
        <Route path='/home'>
          <Banner></Banner>
        </Route>
        <Route path='/news'>
          <News></News>
        </Route>
        <Route path='/booking'>
          <Booking></Booking>
        </Route>
        <Route path='/login'>
          <Login></Login>
        </Route>
        <Route path='/destination'>
          <Destination></Destination>
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
    </UserContext.Provider>
  );
}

export default App;
