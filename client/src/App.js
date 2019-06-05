import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import HomePage from './pages/Home';
import ProfilePage from './pages/Profile';
import registerPage from './pages/Register';

class App extends Component {

  state = {
    loginStatus: false
  }

  checkLogin = () => {
    let token = localStorage.getItem('accessToken');
    if (token) {
      console.log('Logged in');
      this.setState({ loginStatus: true });
    } else {
      console.log('Not logged in');
      this.setState({ loginStatus: false });
    }
  };

  handleLogout = () => {
    // event.preventDefault();
    this.setState({ loginStatus: false });
    localStorage.removeItem('accessToken');
    window.location.reload();
  }

  render() {
    // console.log(this.state)
    return (
      <Router>
        <React.Fragment>
          <Navbar loginStatus={this.state.loginStatus} checkLogin={this.checkLogin} handleLogout={this.handleLogout}/>
          <Switch>
            <Route exact path="/" render={(props) => <HomePage {...props} loginStatus={this.state.loginStatus} checkLogin={this.checkLogin} />} />
            <Route exact path="/profile" render={(props) => <ProfilePage {...props} loginStatus={this.state.loginStatus} checkLogin={this.checkLogin} />} />
            <Route exact path="/register" component={registerPage} />
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
};


export default App;
