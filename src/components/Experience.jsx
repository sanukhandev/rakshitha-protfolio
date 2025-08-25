import React from 'react';
import { Calendar, MapPin, ChevronRight } from 'lucide-react';

const Experience = ({ data }) => {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Professional Experience</h2>
          <div className="section-line"></div>
        </div>
        
        <div className="experience-timeline">
          {data.map((job, index) => (
            <div key={job.id} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="job-header">
                  <h3 className="job-position">{job.position}</h3>
                  <div className="job-meta">
                    <span className="job-company">{job.company}</span>
                    <div className="job-details">
                      <div className="job-detail">
                        <Calendar size={16} />
                        <span>{job.period}</span>
                      </div>
                      <div className="job-detail">
                        <MapPin size={16} />
                        <span>{job.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="job-responsibilities">
                  {job.responsibilities.map((responsibility, idx) => (
                    <div key={idx} className="responsibility-item">
                      <ChevronRight size={16} />
                      <span>{responsibility}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;