import React from 'react';

// Import components
import Projects from '../components/Projects';
import Greeting from '../components/Greeting';

const Home = () => {
  return (
    <div>
        <div className="parallax-container"></div>
        <Greeting />
        <Projects />
    </div>
  )
}

export default Home;