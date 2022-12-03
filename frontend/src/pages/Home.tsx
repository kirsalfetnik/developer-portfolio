import React from 'react';

// Import components
import Projects from '../components/Projects';
import Greeting from '../components/Greeting';

const Home = () => {
  return (
    <div>
        <Greeting />
        <div className="parallax-container"></div>
        <Projects />
    </div>
  )
}

export default Home;