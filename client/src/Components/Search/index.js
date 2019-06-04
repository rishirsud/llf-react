import React, { Component } from "react";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import axios from 'axios';

class Search extends Component {


  state = {
    value: '',
    platform: 'All',
    dropdownOpen: false
  }

  toggle = () => {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  handleChange = (event) => {
    // console.log(event.target)
    this.setState({ value: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('Searching for: ' + this.state.value);
    if (this.state.platform === "All") {
      this.getAll(this.state.value)
    } else if (this.state.platform === "Steam") {
      this.searchSteam(this.state.value)
    } else if (this.state.platform === "PSN") {
      this.searchPSN(this.state.value)
    } else if (this.state.platform === "XBL") {
      this.searchXbox(this.state.value)
    }

  }

  handlePlatformChange = (event) => {

    console.log(event.target.data)
    this.setState({ platform: event.target.value })

  }

  searchSteam = (query) => {
    axios.get('/api/search/steam?steam=' + query)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  };

  getAll = () => {
    axios.get('/api/all')
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }

  searchPSN = (query) => {
    axios.get('/api/search/psn?psn=' + query)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  };

  searchXbox = (query) => {
    axios.get('/api/search/xbox?xbox=' + query)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  };

  render() {
    console.log(this.state)
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
                onChange={this.handleChange}
                value={this.state.value}
              />
              {/* <div className="input-group-append">
                <button
                  id="btn-platform-select"
                  className="btn btn-outline-secondary btn-secondary text-light dropdown-toggle"
                  type="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {this.state.platform}
                </button>
                <div
                  id="platform-select-menu"
                  className="dropdown-menu dropdown-menu-right"
                >
                  <span className="dropdown-item text-center" value="Steam" onClick={this.handlePlatformChange}>
                    <i className="fab fa-steam" /> Steam
                </span>
                  <div role="separator" className="dropdown-divider" value="PSN" onClick={this.handlePlatformChange} />
                  <span className="dropdown-item text-center">
                    <i className="fab fa-playstation" /> PSN
                </span>
                  <div role="separator" className="dropdown-divider" value="XBL" onClick={this.handlePlatformChange} />
                  <span className="dropdown-item text-center">
                    <i className="fab fa-xbox" /> XBL
                </span>
                </div>
              </div> */}
              <div className="input-group-append">
                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                  <DropdownToggle caret>
                    {this.state.platform}
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem value="Steam" onClick={this.handlePlatformChange}>Steam</DropdownItem>
                    <DropdownItem value="PSN" onClick={this.handlePlatformChange}>PSN</DropdownItem>
                    <DropdownItem value="XBL" onClick={this.handlePlatformChange}>XBL</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
            </div>
          </div>
          <br />
          <div className="col-md-12 text-center mt-3">
            <button id="search" name="searchBtn" className="btn btn-secondary" type="submit" onClick={this.handleSubmit}>
              Search
          </button>
          </div>
        </div>

      </React.Fragment>
    );
  }
}

export default Search;
