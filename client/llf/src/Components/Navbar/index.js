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

          {/* login info goes here */}

        </div>
      </nav>
    </React.Fragment>
  );
}

export default Navbar;
