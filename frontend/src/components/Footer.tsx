import React from 'react'
import GitHub_Mark from "../images/GitHub_Mark.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="footer">
      <span>Copyright © {currentYear} Kirill Salfetnik</span>
      <a href="https://github.com/kirsalfetnik" target="_blank" rel="noopener noreferrer">
        <img src={GitHub_Mark} alt="Mark" className="github-image"></img>
      </a>
    </div>
  )
}

export default Footer;