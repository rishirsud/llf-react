import React from 'react';
import Hero from '../Components/Hero';
import ProfileCard from '../Components/ProfileCard'
import { Redirect } from 'react-router'
// import registerPage from './pages/Register';


function profilePage(props) {
  console.log(props)//

  return (
    props.loginStatus ? (
      <React.Fragment>
        <Hero />
        <ProfileCard />
      </React.Fragment>
    ) : (
        // REDIRECT
        <Redirect to="/register" />
      )
  )
}

export default profilePage;