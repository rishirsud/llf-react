import React, { Component } from 'react';
import Hero from '../Components/Hero';
import Search from '../Components/Search';



class homePage extends Component {

  render() {
    console.log(this.props)
    return (
      <React.Fragment>
        <Hero>
          <Search />
        </Hero>
      </React.Fragment>
    )
  }

}
export default homePage;