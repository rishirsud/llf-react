import React from 'react';
import './style.css'
// import Search from '../Search'


function Hero(props) {
return(
  <div className="jumbotron jumbotron-fluid wallpaper">
    <div className="container">
      <div className="row">
        <div className="col-lg-7 col-12 mx-auto text-center">
        <h1 className="display-4" id="text">Long Lost Friends</h1>
        </div>
      </div>
      {/* <Search /> */}
      {props.children}
    </div>
  </div>
)
}

export default Hero;