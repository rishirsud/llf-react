import React, { Component } from "react";
import { Link } from "react-router-dom";

class Login extends Component {

  state = {
    username: '',
    password: ''
  }

  handleUsernameChange = (event) => {
    this.setState({ value: event.target.value });
  }

  handlePasswordChange = (event) => {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <span className="navbar-login">
        <div className="d-flex">
          <div className="dropdown mr-1">
            <button type="button" className="btn btn-secondary dropdown-toggle" id="dropdownMenuOffset"
              data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-offset="10,20">
              <i className="fas fa-sign-in-alt"></i> Login
            </button>
            <div id="nav-login" className="dropdown-menu">
              <form className="px-4 py-3" id="login-form">
                <div className="form-group">
                  <label htmlFor="email-input-login">Email address</label>
                  <input type="email" className="form-control" id="email-input-login"
                    placeholder="email@example.com"
                    onChange={this.handleUsernameChange}
                    username={this.state.value} />
                </div>
                <div className="form-group">
                  <label htmlFor="password-input-login">Password</label>
                  <input type="password" className="form-control" id="password-input-login" placeholder="Password"
                    onChange={this.handlePasswordChange}
                    password={this.state.value} />
                </div>
                <button type="button" className="btn btn-primary" id="signInButton">Sign in</button>
              </form>
              <div className="dropdown-divider"></div>
              <Link className="dropdown-item" htmlTo="/register">New around here? Sign up</Link>
            </div>
          </div>
        </div>
      </span>
    )
  }

};

export default Login;