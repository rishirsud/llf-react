import React from 'react';
import Hero from '../Hero'

function RegisterForm (){
  return (
    <div className="container" id="profileContainer">
    <div className="row">
      <div className="col-lg-5 col-12 my-3 mx-auto">
         <div className="card" style={{width: "30rem"}}>
        <form action="">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-center">Register an account</h5>
              <hr />
              <p className="card-text">Only information you input here will be visible. All fields are optional. If you want
                to find your friends, it's suggested you fill some of them out.</p>

              <div className="row">
                <div className="col-lg-12 col-12 mx-auto">
                  <div className="form-group">
                    <label for="email">Your Email </label>
                    <input type="email" className="form-control" id="registerEmail" placeholder="" />
                  </div>
                  <div className="form-group">
                    <label for="password">Password</label>
                    <input type="password" className="form-control" id="registerPassword" placeholder="" />
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12 my-2 text-center mx-auto">
                <button id="submitRegister" type='button' className="btn btn-primary">Submit</button>
              </div>
            </div>
          </div>
        </form>

      </div>
    </div>
  </div>
  </div>
  )
}

export default RegisterForm;