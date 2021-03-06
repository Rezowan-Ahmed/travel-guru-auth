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
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    name: '',
    email: '',
    password: '',
    message: ''
  });
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
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
        <PrivateRoute path='/destination'>
          <Destination></Destination>
        </PrivateRoute>
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
