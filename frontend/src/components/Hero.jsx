import React, { useEffect, useState } from "react";
import "../styles/Hero.css";

export default function Hero() {
      
  const skills = [
    "Web Developer",
    "Node.js Backend Engineer",
    "React.js Frontend Developer",
    "MERN Stack",
    "Mobile App Developer",
    "Tech Enthusiast",
  ];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (index === skills.length) return;
    const timeout = setTimeout(() => {
      setText(skills[index].substring(0, subIndex + (reverse ? -1 : 1)));
      if (!reverse && subIndex === skills[index].length) {
        setReverse(true);
      } else if (reverse && subIndex === 0) {
        setReverse(false);
        setIndex((prev) => (prev + 1) % skills.length);
      } else {
        setSubIndex((prev) => prev + (reverse ? -1 : 1));
      }
    }, reverse ? 50 : 120);
    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, skills]);

  return (
    <section id="home" className="home">
      {/* Animated gradient background */}
      <div className="home-bg">
        <div className="home-bg-overlay"></div>
      </div>

      {/* Floating particles */}
      <div className="particles-container">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="home-content">
        {/* Enhanced image container with multiple border effects */}
        <div className="home-img-wrapper">
          {/* Rotating gradient border */}
          <div className="home-img-border-rotating"></div>
          
          {/* Glowing rings */}
          <div className="home-img-glow"></div>
          
          {/* Main image container */}
          <div className="home-img-container">
            {/* Hexagonal clip effect overlay */}
            <div className="home-img-overlay"></div>
            
            <img
              src="/me.jpg"
              alt="Arslan"
              className="home-img"
            />
            
            {/* Corner accents */}
            <div className="home-img-corner-top"></div>
            <div className="home-img-corner-bottom"></div>
          </div>

          {/* Orbital dots */}
          <div className="home-img-orbital">
            <div className="home-img-dot-top"></div>
            <div className="home-img-dot-bottom"></div>
          </div>
        </div>

        {/* Name with gradient text */}
        <div className="home-name-section">
          <h1 className="home-name">Arslan Latif</h1>
          
          {/* Decorative line */}
          <div className="home-divider">
            <div className="home-divider-line-left"></div>
            <div className="home-divider-dot"></div>
            <div className="home-divider-line-right"></div>
          </div>
        </div>

        {/* Typing animation with enhanced styling */}
        <div className="home-skill-wrapper">
          <div className="home-skill-glow"></div>
          <h2 className="home-skill">
            {text}
            <span className="cursor">|</span>
          </h2>
        </div>

        {/* Tech stack indicators */}
        <div className="home-tech-stack">
          {['HTML','CSS','JavaScript','React.js','MongoDB','Express JS','Node.js','Flutter','GitHub',].map((tech, i) => (
            <div
              key={tech}
              className="home-tech-badge"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}