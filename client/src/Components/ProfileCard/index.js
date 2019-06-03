import React from 'react';
import './style.css';

function ProfileCard() {
  return (
  <React.Fragment>
  <div class="container" id="profileContainer">
    <div class="row">
      <div class="col-lg-10 col-12 my-3 mx-auto">
        
        <form action="">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Your Profile</h5>
              <p class="card-text">Only information you input here will be visible. All fields are optional. If you want
                to find your friends, it's suggested you fill some of them out.</p>

              <div class="row">
                <div class="col-lg-4 col-12 mx-auto">
                  <div class="form-group">
                    <label for="email">Your Email </label>
                    <input type="email" class="form-control" id="profileEmail" placeholder="Your Email" disabled />
                  </div>
                  <div class="form-group">
                    <label for="firstName">First Name* </label>
                    <input type="text" class="form-control" id="firstName" placeholder="Enter first name" />
                  </div>
                  <div class="form-group">
                    <label for="location">Enter your general location* </label>
                    <input type="text" class="form-control" id="location" placeholder="Country/State" />
                  </div>
                </div>


                <div class="col-lg-4 col-12 mx-auto">
                  <div class="form-group">
                    <label for="steamID">Steam ID* </label>
                    <input type="text" class="form-control" id="steamID" placeholder="Enter Steam ID: " />
                  </div>
                  <div class="form-group">
                    <label for="psnID">PSN ID* </label>
                    <input type="text" class="form-control" id="psnID" placeholder="Enter PSN ID" />
                  </div>
                  <div class="form-group">
                    <label for="xboxID">Xbox ID* </label>
                    <input type="text" class="form-control" id="xboxID" placeholder="Enter Xbox ID" />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col text-right">
                  <small id="optionalInfo" class="form-text text-muted">* field is optional</small>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-12 my-2 text-center mx-auto">
                <button id="saveProfile" class="btn btn-primary">Save</button>
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
