import React, { Component } from "react";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import SearchCards from '../SearchCards';
import SuperModal from '../SuperModal';


import axios from 'axios';
import './style.css';

class Search extends Component {


  state = {
    value: '',
    platform: 'All',
    dropdownOpen: false,
    searchResult: []
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

    const platform = this.state.platform;
    const value = this.state.value;

    console.log('Searching for: ' + value);
    if (platform === "All") {
      this.getAll(value)
    } else if (platform === "Steam") {
      this.searchUser(platform, value)
    } else if (platform === "PSN") {
      this.searchUser(platform, value)
    } else if (platform === "Xbox") {
      this.searchUser(platform, value)
    } /* else if (platform === "Nintendo") {
      this.searchUser(platform, value)
    } else if (platform === "Blizzard") {
      this.searchUser(platform, value)
    } */

  }

  handlePlatformChange = (event) => {

    // console.log(event.target.data)
    this.setState({ platform: event.target.value })

  }

  searchUser = (platform, query) => {

    const lowerPlatform = platform.toLowerCase();

    axios.get(`/api/search/${lowerPlatform}?${lowerPlatform}=${query}`)
      .then((response) => {
        console.log(response.data);
        this.printStuff(response.data);
        this.setState({ searchResult: response.data })
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .finally(() => {
        // always executed
      });
  };



  getAll = () => {


    axios.get('/api/all')
      .then((response) => {
        console.log(response.data);
        // print card function here
        this.printStuff(response.data);
        this.setState({ searchResult: response.data });
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .finally(() => {
        // always executed
      });
  }


  printStuff = (arr) => {
    arr.forEach(result => {
      console.log(result);

    });
  }


  render() {
    console.log(this.state)
    return (
      <React.Fragment>
        <div className="container-fluid">
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
                <div className="input-group-append">
                  <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                    <DropdownToggle caret>
                      {this.state.platform}
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem value="All" onClick={this.handlePlatformChange}>All</DropdownItem>
                      <DropdownItem value="Steam" onClick={this.handlePlatformChange}>Steam</DropdownItem>
                      <DropdownItem value="PSN" onClick={this.handlePlatformChange}>PSN</DropdownItem>
                      <DropdownItem value="Xbox" onClick={this.handlePlatformChange}>XBL</DropdownItem>
                      {/* <DropdownItem value="Nintendo" onClick={this.handlePlatformChange}>Nintendo</DropdownItem>
                    <DropdownItem value="Blizzard" onClick={this.handlePlatformChange}>Blizzard</DropdownItem> */}


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
        </div>


        {/* search results hopefully */}

        <div className="resultContainerThing">
          <div className="row">{

            this.state.searchResult.map(result => {
              console.log(result);
              return (
                <React.Fragment>
                  <SearchCards
                    key={result._id}
                    name={result.firstName}
                    location={result.location}
                    steamID={result.steam}
                    psnID={result.psn}
                    xboxID={result.xbox}
                    id={result._id}
                  >

                    {/* {
                    console.log(this.state.searchResult.length)
                  } */}
                  </SearchCards>
                  <SuperModal
                    id={result._id}
                    name={result.firstName}
                    location={result.location}
                    steamID={result.steam}
                    psnID={result.psn}
                    xboxID={result.xbox}
                  ></SuperModal>
                </React.Fragment>
              )
            })

          }

          </div>
        </div>

      </React.Fragment>
    );
  }
}

export default Search;
