import React from 'react';
import Projects from '../components/Projects';

const Home = () => {
  return (
    <div>
        <div className="parallax-container"></div>
        <div className="greet">
          Hello, my name is Kirill Salfetnik. I am a software engineer specializing in creating modern web applications. 
          I am a bachelor of sociology, now I am studying computer science at the university.
          </div>
        <Projects />
    </div>
  )
}

export default Home;