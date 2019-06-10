import React, { Component } from 'react';
import axios from 'axios';

class RegisterForm extends Component {
  state = {
    email: "",
    password: ""
  }

  handleEmailChange = (event) => {
   
    this.setState({email: event.target.value});
    
    // console.log(this.state.email)
  };

  handlePasswordChange = (event) => {
    this.setState({password: event.target.value})
  };

  delayedLogin = () => {
    
      axios.post('/api/user/login', {
        email: this.state.email,
        password: this.state.password
      })
        .then(token => {
          console.log(token);
          localStorage.setItem('accessToken', token);
          // this.props.checkLogin()
          localStorage.getItem('accesstoken')
          window.location.assign('./profile');
        })
        .catch(function (error) {
          console.log(error);
        })
     
  }


 handleSubmit = (event) => {
   event.preventDefault(event);
  //  console.log(this.state.email, this.state.password);
   const email = this.state.email;
   const password = this.state.password;
   axios.post('/api/user/register', {
     email: email,
     password: password
   }).then(
    setTimeout(this.delayedLogin, 500)
   )

  //  auto login the user on register
 }
  

  render(){
  return (
    <div className="container" id="profileContainer">
    <div className="row">
      <div className="col-12 col-lg-5  my-3 mx-auto">
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
                    <label htmlFor="email">Your Email </label>
                    <input type="email" 
                    className="form-control" 
                    id="registerEmail" 
                  
                    name="email"
                    onChange= {this.handleEmailChange}
                    value={this.state.email} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" 
                    className="form-control" 
                    id="registerPassword" 
                    placeholder=""
                    name="password"
                    onChange={this.handlePasswordChange}
                    value={this.state.password} />
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12 my-2 text-center mx-auto">
                <button id="submitRegister" 
                type='button' 
                className="btn btn-primary"
                onClick={this.handleSubmit} >Submit</button>
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
}

export default RegisterForm;