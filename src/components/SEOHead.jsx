import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEOHead = ({ 
  title = "Rakshitha Chandran - Software Engineer | SharePoint SPFx Developer | Dubai, UAE",
  description = "Professional Software Engineer with 5+ years experience in SharePoint SPFx development, AI/ML, and full-stack solutions. Based in Dubai, UAE. Expert in PowerApps integration and modern web technologies.",
  keywords = "Software Engineer, SharePoint Developer, SPFx, PowerApps, AI Developer, Machine Learning, Dubai, UAE, Full Stack Developer, Python, JavaScript",
  canonical = "https://rakshithachandran.dev/",
  ogImage = "/og-image.jpg"
}) => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonical} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
      
      {/* Canonical */}
      <link rel="canonical" href={canonical} />
    </Helmet>
  );
};

export default SEOHead;