import React, { useState } from 'react';
import { ExternalLink, Code, ChevronRight } from 'lucide-react';

const Projects = ({ data }) => {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <div className="section-line"></div>
        </div>
        
        <div className="projects-grid">
          {data.map((project, index) => (
            <div 
              key={project.id} 
              className={`project-card ${hoveredProject === project.id ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{ '--delay': `${index * 0.1}s` }}
            >
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-icons">
                  <Code size={20} />
                  <ExternalLink size={20} />
                </div>
              </div>
              
              <p className="project-description">{project.description}</p>
              
              <div className="project-technologies">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
              
              <div className="project-highlights">
                {project.highlights.map((highlight, highlightIndex) => (
                  <div key={highlightIndex} className="highlight-item">
                    <ChevronRight size={14} />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;