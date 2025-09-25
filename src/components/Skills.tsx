import React from 'react';
import './Skills.css';

const Skills: React.FC = () => {
  const skillsList = [
    'Basketball',
    'Drawing',
    'Billiards',
    'Online Games',
    'Volleybal',
    'Running',
  ];

  return (
    <div id="skills" className="skills-section-container">
      <h2 className="section-heading skills-heading">Skills</h2>
      <div className="skills-grid">
        {skillsList.map((skill, index) => (
          <div key={index} className="skill-circle">
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;