import React from 'react';

const Projects = () => {
  return (
    <div className="projects-container">
        <div className="projects-header">
            My projects:
        </div>
        <div className="projects-list">
            <a href="https://github.com/kirsalfetnik/Chat-socialize" className="projects-list-item hover-grow-shadow">
              Chat & Socialize
            </a>
            <a href="https://github.com/kirsalfetnik/Diet-Control" className="projects-list-item hover-grow-shadow">
              Diet Control
            </a>
            <a  href="https://github.com/kirsalfetnik/Finance-Manager" className="projects-list-item hover-grow-shadow">
              Finance Manager
            </a>
            <a href="https://github.com/kirsalfetnik/rock-paper-scissors" className="projects-list-item hover-grow-shadow">
              Rock-Paper-Scissors
            </a>
            <a href="https://github.com/kirsalfetnik/landing_page" className="projects-list-item hover-grow-shadow">
              Landing page
            </a>
        </div>
    </div>
  )
}

export default Projects;