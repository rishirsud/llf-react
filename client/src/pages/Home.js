import React, { Component } from 'react';
import Hero from '../Components/Hero';
import Navbar from '../Components/Navbar';
import Search from '../Components/Search';



class homePage extends Component {








  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Hero>
          <Search />
        </Hero>
      </React.Fragment>
    )
  }



}
export default homePage;