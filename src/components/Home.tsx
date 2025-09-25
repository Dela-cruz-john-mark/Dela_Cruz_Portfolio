import React from 'react';
import './Home.css';
import profileImage from '../assets/home.jpg';

const Home: React.FC = () => {
  return (
    <div id="home" className="home-container">
      <div className="home-image">
        <img src={profileImage} alt="John Mark Dela Cruz" className="profile-img" />
      </div>
      <div className="home-content">
        <h1 className="home-title">
          <span className="name">John Mark Dela Cruz</span>
        </h1>
        <p className="home-description">
          <span className="info-tech-student">Information Technology Student</span>
          <br /><br />
          A dedicated student trying to survive in the world of evolving 
technology.
        </p>
        <a href="#about" className="learn-more-btn">
          Learn More
        </a>
      </div>
    </div>
  );
};

export default Home;