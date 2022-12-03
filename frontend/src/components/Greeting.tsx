import React from 'react';
import Greeting_Photo from "../images/Greeting_Photo.jpg";

const Greeting = () => {
  return (
    <div className="greeting">
        <div className="greet-text">
            <div>
            Hello, my name is Kirill Salfetnik. I am a software engineer specializing in creating modern web applications. 
            </div>
            <div>
            I am a bachelor of sociology, now I am studying computer science at college.
            </div>
        </div>
        <span className="circular-photo">
            <img src={Greeting_Photo} alt="Greeting" className="greeting-photo"></img>
        </span>
    </div>
  )
}

export default Greeting;