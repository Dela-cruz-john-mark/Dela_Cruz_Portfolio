import React from 'react';
import './About.css';
import profileImage from '../assets/about.jpg';

const About: React.FC = () => {
  return (
    <div id="about" className="about-section-container">
      {/* About Me Section */}
      <h2 className="section-heading about-heading">About Me</h2>
      <div className="about-content-wrapper">
        <div className="about-text-content">
          <h3 className="about-title">
            Hello, my name is <br />
            <span className="about-name">John Mark <br></br>
                Dela Cruz</span>
          </h3>
          <p className="about-description">
            I am a third year student taking up Bachelor of Science in <br />
            Information Technology at Romblon State University -<br />
            Romblon Campus.
          </p>
        </div>
        <div className="about-image">
          <img src={profileImage} alt="John Mark Dela Cruz" className="about-profile-img" />
        </div>
      </div>

      {/* Education Section */}
      <h2 className="section-heading education-heading">Education</h2>
      <div className="education-table-container">
        <table>
          <tbody>
            <tr>
              <td>Primary</td>
              <td>Sawang Elementary School</td>
              <td>2009-2015</td>
            </tr>
            <tr>
              <td>Secondary</td>
              <td>Romblon National High School</td>
              <td>2015-2019</td>
            </tr>
            <tr>
              <td>Senior High</td>
              <td>Romblon National High School</td>
              <td>2019-2021</td>
            </tr>
            <tr>
              <td>Tertiary</td>
              <td>RSU - Romblon Campus <br /> Bachelor of Science in Information Technology</td>
              <td>2023</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default About;