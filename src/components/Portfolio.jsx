import React, { useState, useEffect } from 'react';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import Skills from './Skills';
import Education from './Education';
import Contact from './Contact';
import Footer from './Footer';
import SEOHead from './SEOHead';
import { mockData } from '../data/mock';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Update active section based on scroll position
      const sections = ['hero', 'about', 'experience', 'projects', 'skills', 'education', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="portfolio">
      <SEOHead />
      <Header activeSection={activeSection} />
      <main>
        <Hero data={mockData.hero} scrollY={scrollY} />
        <About data={mockData.about} />
        <Experience data={mockData.experience} />
        <Projects data={mockData.projects} />
        <Skills data={mockData.skills} />
        <Education data={mockData.education} />
        <Contact data={mockData.contact} />
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;