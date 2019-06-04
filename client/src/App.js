import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import homePage from './pages/Home';
import profilePage from './pages/Profile';

function App() {
  return (
    <Router>
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component = {homePage} />
          <Route exact path="/profile" component = {profilePage} />
        </Switch>
      </React.Fragment>
    </Router>
  );
}

export default App;
