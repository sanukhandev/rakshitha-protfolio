import React from 'react';
import { Code, Award, Zap } from 'lucide-react';

const Skills = ({ data }) => {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Skills & Expertise</h2>
          <div className="section-line"></div>
        </div>
        
        <div className="skills-content">
          <div className="skills-category">
            <div className="category-header">
              <Code size={24} />
              <h3 className="category-title">Technical Skills</h3>
            </div>
            <div className="skills-grid">
              {data.technical.map((skill, index) => (
                <div 
                  key={index} 
                  className="skill-item"
                  style={{ '--delay': `${index * 0.1}s` }}
                >
                  <span className="skill-name">{skill}</span>
                  <div className="skill-glow"></div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="skills-category">
            <div className="category-header">
              <Award size={24} />
              <h3 className="category-title">Certifications & Achievements</h3>
            </div>
            <div className="certifications-list">
              {data.certifications.map((cert, index) => (
                <div 
                  key={index} 
                  className="certification-item"
                  style={{ '--delay': `${index * 0.05}s` }}
                >
                  <Zap size={16} />
                  <span>{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;