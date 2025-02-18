import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../Components/CSS/Header.css";
import { navLinks } from "../constants";

const Header = () => {
  const location = useLocation();
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log("Element is in view");
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`Header ${isVisible ? "visible" : ""}`} ref={elementRef}>
      <div className="Header-cont1">
        <div className="color-ball"></div>
        <div className="head-link">
          <Link to="/">
            <h2>Emmanuel Fatomoye</h2>
          </Link>
          <p>Front-end Web Developer</p>
        </div>
      </div>
      <div className="Header-cont2">
        <ul>
          <li
            className={
              location.pathname === "/portfolio/resume" ? "active" : ""
            }
          >
            <Link to="/resume">Resume</Link>
          </li>
          <li
            className={
              location.pathname === "/portfolio/projects" ? "active" : ""
            }
          >
            <Link to="/projects">Projects</Link>
          </li>
          <li
            className={
              location.pathname === "/portfolio/contact" ? "active" : ""
            }
          >
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="mobile-menu">&#9776;</div>
      <div className="mobile-menu-navLink">
        <div>
          {navLinks.map((link) => (
            <Link key={link.title} to={link.link}>
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
