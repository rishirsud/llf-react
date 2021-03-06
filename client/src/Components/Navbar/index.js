import React from "react";
import { Link } from "react-router-dom";
import './style.css';
import Login from '../Login';

function Navbar(props) {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="navBar">
        <a className="navbar-brand" href="/">
          LLF
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/profile">
                Your Profile
              </Link>
            </li>
          </ul>

          <Login loginStatus={props.loginStatus} checkLogin={props.checkLogin} handleLogout={props.handleLogout}/>

        </div>
      </nav>
    </React.Fragment>
  );
}

export default Navbar;
