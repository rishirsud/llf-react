import React from "react";

function Navbar() {
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
              <a className="nav-link" href="#">
                Find a friend
              </a>
            </li>{" "}
            <li className="nav-item">
              <a className="nav-link" href="#">
                Your Profile
              </a>
            </li>
          </ul>

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
                    placeholder="email@example.com" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password-input-login">Password</label>
                    <input type="password" className="form-control" id="password-input-login" placeholder="Password" />
                  </div>
                  <button type="button" className="btn btn-primary" id="signInButton">Sign in</button>
                </form>
                <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="/register">New around here? Sign up</a>
                </div>
              </div>
          </div>
      </span>

        </div>
      </nav>
    </React.Fragment>
  );
}

export default Navbar;
