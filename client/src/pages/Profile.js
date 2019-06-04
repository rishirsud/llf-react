import React, { Component } from 'react';
import Hero from '../Components/Hero';
import ProfileCard from '../Components/ProfileCard'


function profilePage() {
  return (
    <React.Fragment>
      <Hero />
      <ProfileCard />
    </React.Fragment>
  )
}

export default profilePage;