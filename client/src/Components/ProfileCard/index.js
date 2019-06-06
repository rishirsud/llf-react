import React, { Component } from "react";
import './style.css';
import axios from "axios";

class ProfileCard extends Component {
  state = {
    email: "",
    firstName: "",
    location: "",
    gameOne: "",
    steamID: [],
    psnID: "",
    xboxID: "",
    /* nintendoID: "",
    blizzardID: "" */
  }


  getDataFromDb = () => {
    const token = localStorage.getItem('accessToken');
    axios.get('/api/user/profile', { 'headers': { token: token } })
      .then((userData) => {
        console.log(userData.data);
        this.setState({data: userData.data});
      })
      // .then((res) => this.setState({ data: res.data }))
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    this.getDataFromDb();
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const email = this.state.email;
    const firstName = this.state.firstName;
    const location = this.state.location;
    const gameOne = this.state.gameOne;
    const steamID = this.state.steamID;
    const psnID = this.state.psnID;
    const xboxID = this.state.xboxID;
   /*  const nintendoID = this.state.nintendoID;
    const blizzardID = this.state.blizzardID; */


    axios.put('/api/user/update/', {
      email: email,
      firstName: firstName,
      location: location,
      gameOne: gameOne,
      gameTwo: gameTwo,
      gameThree: gameThree,
      steam: [steamID],
      psn: [psnID],
      xbox: [xboxID],
      /* nintendo: [nintendoID],
      blizzard: [blizzardID] */
    })
  }



  render() {
    return (
      <React.Fragment>
        <div className="container" id="profileContainer">
          <div className="row">
            <div className="col-lg-10 col-12 my-3 mx-auto">

              <form action="">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Your Profile</h5>
                    <p className="card-text">Only information you input here will be visible. All fields are optional. If you want
                  to find your friends, it's suggested you fill some of them out.</p>

                    <div className="row">
                      <div className="col-lg-4 col-12 mx-auto">
                        <div className="form-group">
                          <label htmlFor="email">Your Email </label>
                          <input type="email"
                            className="form-control"
                            id="profileEmail"
                            placeholder="Your Email" disabled />
                        </div>
                        <div className="form-group">
                          <label htmlFor="firstName">First Name* </label>
                          <input type="text"
                            className="form-control"
                            id="firstName"
                            placeholder="Enter first name"
                            name="firstName"
                            onChange={this.handleInputChange} />
                        </div>
                        <div className="form-group">
                          <label htmlFor="location">Enter your general location* </label>
                          <input type="text"
                            className="form-control"
                            id="location"
                            placeholder="Country/State"
                            name="location"
                            onChange={this.handleInputChange} />
                        </div>
                        <div className="form-group">
                          <label htmlFor="games">Enter your top 3 favorite games* </label>
                          <input type="text" 
                          className="form-control" 
                          id="favGamesOne" 
                          placeholder="1." 
                          name="gameOne" 
                          onChange={this.handleInputChange} />

                          <input type="text" 
                          className="form-control" 
                          id="favGamesTwo" 
                          placeholder="2."
                          name="gameTwo"
                          onChange={this.handleInputChange} />

                          <input type="text" 
                          className="form-control" 
                          id="favGamesThree" 
                          placeholder="3."
                          name="gameThree"
                          onChange={this.handleInputChange} />
                        </div>
                      </div>


                      <div className="col-lg-4 col-12 mx-auto">
                        <div className="form-group">
                          <label htmlFor="steamID">Steam ID* </label>
                          <input type="text"
                            className="form-control"
                            id="steamID"
                            placeholder="Enter Steam ID "
                            name="steamID"
                            onChange={this.handleInputChange} />
                        </div>
                        <div className="form-group">
                          <label htmlFor="psnID">PSN ID* </label>
                          <input type="text"
                            className="form-control"
                            id="psnID"
                            placeholder="Enter PSN ID"
                            name="psnID"
                            onChange={this.handleInputChange} />
                        </div>
                        <div className="form-group">
                          <label htmlFor="xboxID">Xbox ID* </label>
                          <input type="text"
                            className="form-control"
                            id="xboxID"
                            placeholder="Enter Xbox ID"
                            name="xboxID"
                            onChange={this.handleInputChange} />
                        </div>
                        {/* <div className="form-group">
                          <label htmlFor="nintendo">Nintendo ID* </label>
                          <input type="text" className="form-control" id="nintendoID" placeholder="Enter Nintendo ID" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="blizzard">Blizzard ID* </label>
                          <input type="text" className="form-control" id="blizzardID" placeholder="Enter Blizzard ID" />
                        </div> */}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col text-right">
                        <small id="optionalInfo" className="form-text text-muted">* field is optional</small>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-12 my-2 text-center mx-auto">
                      <button id="saveProfile"
                        className="btn btn-primary"
                        onClick={this.handleSubmit}>Save</button>
                    </div>
                  </div>
                </div>
              </form>

            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }

};

export default ProfileCard;
