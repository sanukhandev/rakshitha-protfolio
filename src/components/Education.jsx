import React from 'react';
import { GraduationCap, Calendar, Trophy } from 'lucide-react';

const Education = ({ data }) => {
  return (
    <section id="education" className="education">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Education</h2>
          <div className="section-line"></div>
        </div>
        
        <div className="education-content">
          <div className="education-card">
            <div className="education-icon">
              <GraduationCap size={32} />
            </div>
            
            <div className="education-details">
              <h3 className="degree-title">{data.degree}</h3>
              <p className="institution-name">{data.institution}</p>
              
              <div className="education-meta">
                <div className="meta-item">
                  <Calendar size={16} />
                  <span>Graduated: {data.year}</span>
                </div>
                <div className="meta-item">
                  <Trophy size={16} />
                  <span>GPA: {data.gpa}</span>
                </div>
              </div>
            </div>
            
            <div className="education-decoration">
              <div className="decoration-circle"></div>
              <div className="decoration-line"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;