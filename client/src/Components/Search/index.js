import React from "react";

function Search() {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-lg-7 col-md-9 col-12 mx-auto text-center">
          <div className="input-group">
            <input
              id="search-user"
              type="text"
              className="form-control"
              placeholder="Who are you looking for?"
              aria-label="Text input with dropdown button"
            />
            <div className="input-group-append">
              <button
                id="btn-platform-select"
                className="btn btn-outline-secondary btn-secondary text-light dropdown-toggle"
                type="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Platform
              </button>
              <div
                id="platform-select-menu"
                className="dropdown-menu dropdown-menu-right"
              >
                <span className="dropdown-item text-center">
                  <i className="fab fa-steam" /> Steam
                </span>
                <div role="separator" className="dropdown-divider" />
                <span className="dropdown-item text-center">
                  <i className="fab fa-playstation" /> PSN
                </span>
                <div role="separator" className="dropdown-divider" />
                <span className="dropdown-item text-center">
                  <i className="fab fa-xbox" /> XBL
                </span>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="col-md-12 text-center mt-3">
          <button id="search" name="searchBtn" className="btn btn-secondary">
            Search
          </button>
        </div>
      </div>

      {/* <div className="col-md-12 text-center">
        <button id="search" name="searchBtn" className="btn btn-secondary">
          Search
        </button>
      </div> */}
    </React.Fragment>
  );
}

export default Search;
