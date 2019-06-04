import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import homePage from './pages/Home';
import profilePage from './pages/Profile';
import registerPage from './pages/Register';

function App() {
  return (
    <Router>
      <React.Fragment>
        <Switch>
          <Route exact path="/" component = {homePage} />
          <Route exact path="/profile" component = {profilePage} />
          <Route exact path ="/register" component = {registerPage} />
        </Switch>
      </React.Fragment>
    </Router>
  );
}

export default App;
