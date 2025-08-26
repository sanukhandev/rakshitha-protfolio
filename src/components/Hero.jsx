import React, { useEffect, useMemo, useState } from "react";
import * as Icons from "lucide-react"; // <— import everything safely

const {
  ChevronDown,
  Download,
  Github,
  Linkedin,
  Mail,
  Code,
  Award,
  MapPin,
  // Fallbacks we know exist:
  CircleHelp,
} = Icons;

// Helper to safely resolve an icon by name
const getIcon = (name) => {
  const Comp = Icons[name];
  return typeof Comp === "function" ? Comp : CircleHelp;
};

const Hero = ({ data = {}, scrollY = 0 }) => {
  // ---- Typewriter state ----
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  // Faster typewriter: lower base delay
  const [delta, setDelta] = useState(120 - Math.random() * 40);

  const name = data?.name ?? "Your Name";
  const social = data?.social ?? {
    linkedin: "#",
    github: "#",
    email: "you@example.com",
  };

  const textArray = useMemo(
    () => [
      "SharePoint SPFx Developer",
      "AI & Machine Learning Expert",
      "Full-Stack Developer",
      "PowerApps Specialist",
      "Software Engineer",
    ],
    []
  );

  const parallaxOffset = scrollY * 0.3;

  // Use icon *names*; we'll resolve them at render time

  // ---- Typewriter effect ----
  useEffect(() => {
    const i = loopNum % textArray.length;
    const full = textArray[i];

    const nextText = isDeleting
      ? full.substring(0, text.length - 1)
      : full.substring(0, text.length + 1);

    // Faster deleting, faster typing
    const nextDelta = isDeleting ? Math.max(30, delta / 2.5) : delta;

    const t = setTimeout(() => {
      setText(nextText);

      if (!isDeleting && nextText === full) {
        setIsDeleting(true);
        setDelta(900); // shorter pause at end
      } else if (isDeleting && nextText === "") {
        setIsDeleting(false);
        setLoopNum((n) => n + 1);
        setDelta(300);
      }
    }, nextDelta);

    return () => clearTimeout(t);
  }, [text, isDeleting, loopNum, delta, textArray]);

  const scrollToNext = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) aboutSection.scrollIntoView({ behavior: "smooth" });
  };

  const stats = [
    { icon: Code, value: "5+", label: "Years Experience" },
    { icon: Award, value: "10+", label: "Certifications" },
    { icon: Code, value: "15+", label: "Projects Completed" },
  ];

  return (
    <section id="hero" className="hero">
      <div
        className="hero-background"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
        aria-hidden="true"
      >
        <div className="hero-gradient" />
      </div>

      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge" aria-label="Location and availability">
              <MapPin size={16} />
              <span>Dubai, UAE • Available for Opportunities</span>
            </div>

            <h1 className="hero-title">
              <span className="hero-greeting">Hi, I&apos;m</span>
              <span className="hero-name">{name}</span>
              <span className="hero-dynamic-text">
                <span className="typewriter-text">{text}</span>
                <span aria-hidden="true" className="cursor">
                  |
                </span>
              </span>
            </h1>

            <p className="hero-description">
              Transforming ideas into powerful digital solutions with{" "}
              <strong>5+ years</strong> of expertise in
              <span className="highlight"> SharePoint SPFx development</span>,
              <span className="highlight"> AI/ML innovations</span>, and
              <span className="highlight"> full-stack technologies</span>.
              Currently crafting cutting-edge intranet solutions at leading UAE
              enterprises.
            </p>

            <div className="hero-stats" role="list">
              {stats.map((stat, idx) => (
                <div key={idx} className="stat-item" role="listitem">
                  <div className="stat-icon">
                    <stat.icon size={20} aria-hidden="true" />
                  </div>
                  <div className="stat-content">
                    <span className="stat-value">{stat.value}</span>
                    <span className="stat-label">{stat.label}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="hero-actions">
              <button
                type="button"
                onClick={() =>
                  window.open("/RC.pdf", "_blank", "noopener,noreferrer")
                }
                className="btn btn-primary"
              >
                <Download size={18} aria-hidden="true" />
                Download Resume
              </button>
              <button
                type="button"
                className="btn btn-outline"
                onClick={scrollToNext}
              >
                View My Work
              </button>
            </div>

            <div className="hero-social">
              <span className="social-label">Connect with me:</span>
              <div className="social-links">
                <a
                  href={social.linkedin}
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} aria-hidden="true" />
                </a>
                <a
                  href={social.github}
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github size={20} aria-hidden="true" />
                </a>
                <a
                  href={`mailto:${social.email}`}
                  className="social-link"
                  aria-label="Email"
                >
                  <Mail size={20} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="profile-container">
              <div className="profile-image-wrapper">
                <picture>
                  <source srcSet="rc.JPG" type="image/jpeg" />
                  <img
                    src="rc.JPG"
                    alt={`${name} — Software Engineer`}
                    className="profile-image"
                    width={340}
                    height={340}
                  />
                </picture>

                {/* Floating Tech Badges */}
                <span
                  className="tech-badge"
                  style={{
                    top: "-30px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    "--delay": "0s",
                  }}
                >
                  SPFX
                </span>
                <span
                  className="tech-badge"
                  style={{ top: "30%", left: "-40px", "--delay": "0.5s" }}
                >
                  React
                </span>
                <span
                  className="tech-badge"
                  style={{ bottom: "-30px", left: "30%", "--delay": "1s" }}
                >
                  JavaScript
                </span>
                <span
                  className="tech-badge"
                  style={{ bottom: "10%", right: "-40px", "--delay": "1.5s" }}
                >
                  TypeScript
                </span>
                <span
                  className="tech-badge"
                  style={{ top: "60%", right: "-30px", "--delay": "2s" }}
                >
                  Python
                </span>
              </div>
            </div>
          </div>
        </div>

        <button
          className="scroll-indicator"
          onClick={scrollToNext}
          aria-label="Scroll to next section"
        >
          <div className="scroll-arrow">
            <ChevronDown size={24} aria-hidden="true" />
          </div>
          <span className="scroll-text">Scroll to explore</span>
        </button>
      </div>
    </section>
  );
};

export default Hero;
