import React from 'react';
import './style.css';

function ProfileCard() {
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
                    <label for="email">Your Email </label>
                    <input type="email" className="form-control" id="profileEmail" placeholder="Your Email" disabled />
                  </div>
                  <div className="form-group">
                    <label for="firstName">First Name* </label>
                    <input type="text" className="form-control" id="firstName" placeholder="Enter first name" />
                  </div>
                  <div className="form-group">
                    <label for="location">Enter your general location* </label>
                    <input type="text" className="form-control" id="location" placeholder="Country/State" />
                  </div>
                </div>


                <div className="col-lg-4 col-12 mx-auto">
                  <div className="form-group">
                    <label for="steamID">Steam ID* </label>
                    <input type="text" className="form-control" id="steamID" placeholder="Enter Steam ID: " />
                  </div>
                  <div className="form-group">
                    <label for="psnID">PSN ID* </label>
                    <input type="text" className="form-control" id="psnID" placeholder="Enter PSN ID" />
                  </div>
                  <div className="form-group">
                    <label for="xboxID">Xbox ID* </label>
                    <input type="text" className="form-control" id="xboxID" placeholder="Enter Xbox ID" />
                  </div>
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
                <button id="saveProfile" className="btn btn-primary">Save</button>
              </div>
            </div>
          </div>
        </form>

      </div>
    </div>
  </div>
  </React.Fragment>
  )
};

export default ProfileCard;
