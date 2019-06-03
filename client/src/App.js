import React from 'react';
import Hero from './Components/Hero/index'
import SearchCards from './Components/SearchCards'
import Navbar from './Components/Navbar'
import Search from './Components/Search'

function App() {
  return (
    <div className="App">
     <Navbar />
     <Hero />
     {/* <Search /> */}
    </div>
  );
}

export default App;
