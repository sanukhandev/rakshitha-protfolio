import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Phone, Mail, FileText, Globe, Code } from 'lucide-react';

const About = ({ data }) => {
  const [isVisible, setIsVisible] = useState(false);
  const progressRef = useRef(null);

  const programmingSkills = [
    { name: 'SPFX', percentage: 90, color: '#BBDCE5' },
    { name: 'JavaScript', percentage: 80, color: '#BBDCE5' },
    { name: 'TypeScript', percentage: 80, color: '#BBDCE5' },
    { name: 'HTML', percentage: 80, color: '#BBDCE5' },
    { name: 'CSS', percentage: 80, color: '#BBDCE5' },
    { name: 'PowerApps', percentage: 70, color: '#BBDCE5' },
    { name: 'Python', percentage: 60, color: '#BBDCE5' }
  ];

  const languageBadges = [
    { name: 'English', level: 'Native' },
    { name: 'Malayalam', level: 'Native' },
    { name: 'Tamil', level: 'Professional' },
    { name: 'Hindi', level: 'Professional' },
    { name: 'Kannada', level: 'Professional' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (progressRef.current) {
      observer.observe(progressRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <div className="section-line"></div>
        </div>
        
        <div className="about-content">
          <div className="about-left">
            <p className="about-summary">{data.summary}</p>
            
            <div className="about-details">
              <div className="detail-item">
                <MapPin size={18} />
                <span>{data.location}</span>
              </div>
              <div className="detail-item">
                <Phone size={18} />
                <span>{data.phone}</span>
              </div>
              <div className="detail-item">
                <Mail size={18} />
                <span>{data.email}</span>
              </div>
              <div className="detail-item">
                <FileText size={18} />
                <span>{data.visaStatus}</span>
              </div>
            </div>

            <div className="languages-section">
              <h3 className="languages-title">
                <Globe size={20} />
                Known Languages
              </h3>
              <div className="language-badges">
                {languageBadges.map((language, index) => (
                  <div key={index} className="language-badge">
                    <span className="language-name">{language.name}</span>
                    <span className="language-level">{language.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="about-right">
            <div className="programming-skills" ref={progressRef}>
              <h3 className="skills-title">
                <Code size={20} />
                Programming Skills
              </h3>
              <div className="skills-list">
                {programmingSkills.map((skill, index) => (
                  <div key={index} className="skill-item-modern" style={{ '--delay': `${index * 0.1}s` }}>
                    <div className="skill-header-modern">
                      <span className="skill-name-modern">{skill.name}</span>
                      <span className="skill-percentage-modern">{skill.percentage}%</span>
                    </div>
                    <div className="skill-bar-modern">
                      <div 
                        className={`skill-progress-modern ${isVisible ? 'animate' : ''}`}
                        style={{ 
                          '--percentage': `${skill.percentage}%`,
                          '--skill-color': skill.color
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;