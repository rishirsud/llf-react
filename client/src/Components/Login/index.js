import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import './style.css';

class Login extends Component {

  state = {
    email: '',
    password: '',
    loginStatus: true
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault(event);
    const email = this.state.email;
    const password = this.state.password;

    console.log(email, password);

    axios.post('/api/user/login', {
      email: email,
      password: password
    })
      .then(token => {
        console.log(token);
        localStorage.setItem('accessToken', token);
        this.checkLogin();
        window.location.reload();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  handleLogout = (event) => {
    event.preventDefault();
    this.setState({ loginStatus: false });
    localStorage.removeItem('accessToken');
    window.location.reload();
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

  componentDidMount() {
    this.checkLogin();
  }

  render() {
    return (
      <span className="navbar-login">
        <div className="d-flex">
          <div className="dropdown mr-1">
            {!this.state.loginStatus ? (

              <button type="button" className="btn btn-secondary dropdown-toggle" id="dropdownMenuOffset"
                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-offset="10,20">
                <i className="fas fa-sign-in-alt"></i> Login
            </button>
            ) : (
                <button type="button" className="btn btn-danger" id="LogoutBtn"
                  onClick={this.handleLogout}>
                  <i className="fas fa-sign-in-alt" onClick={this.handleLogout}></i> Logout
            </button>
              )
            }
            <div id="nav-login" className="dropdown-menu ">
              <form className="px-4 py-3" id="login-form">
                <div className="form-group">
                  <label htmlFor="email-input-login">Email address</label>
                  <input className="form-control" id="email-input-login"
                    placeholder="email@example.com"
                    onChange={this.handleInputChange}
                    value={this.state.username}
                    name="email"
                    type="email" />
                </div>
                <div className="form-group">
                  <label htmlFor="password-input-login">Password</label>
                  <input type="password" className="form-control" id="password-input-login" placeholder="Password"
                    onChange={this.handleInputChange}
                    value={this.state.password}
                    name="password" />
                </div>
                <button className="btn btn-primary" id="signInButton" type="submit" onClick={this.handleSubmit}>Sign in</button>
              </form>
              <div className="dropdown-divider"></div>
              <Link className="dropdown-item" to="/register">New around here? Sign up</Link>
            </div>
          </div>
        </div>
      </span>
    )
  }

};

export default Login;