import React, { useState } from 'react';
import Hero from '../Components/Hero';
import ProfileCard from '../Components/ProfileCard';
import { Redirect } from 'react-router';
import ChatModule from '../Components/ChatModule';
// import registerPage from './pages/Register';


function ProfilePage(props) {
  console.log(props)//
  const [isChatOpen, setChat] = useState(false)

  const chatBtnStyle = {
    fontSize: '15px',
    'display': 'block',
    height: 50,
    width: 50,
    borderRadius: '50%',
    border: '1px solid black',
    zIndex: 10,
    position: 'fixed',
    bottom: 40,
    left: 40
  };

  return (
    props.loginStatus ? (
      <React.Fragment>
        <Hero />
        <ProfileCard />
        {isChatOpen && (
          <ChatModule />
        )}
        <button className="btn btn-primary" style={chatBtnStyle} onClick={() => setChat(!isChatOpen)}><i className="fas fa-envelope-open-text"></i></button>
      </React.Fragment>
    ) : (
        // REDIRECT
        <Redirect to="/register" />
      )
  )
}

export default ProfilePage;