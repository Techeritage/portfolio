import React, { useEffect, useRef, useState } from "react";
import myImage from "../assets/myImage.jpg";
import { Link } from "react-router-dom";
import "../Components/CSS/Home.css";

const Home = () => {
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
    <div className="home" ref={elementRef}>
      <div className="home-cont1 desktop">
        <img src={myImage} alt="an image of myself" />
      </div>
      <div className="home-cont2">
        <div className="home-inner">
          <div className="home-heading">
            <h1>Hello</h1>
          </div>
          <div className="home-details">
            <h3>About Me</h3>
            <p>
              I am a front-end developer with expertise in modern technologies
              such as <b>React</b>, <b>Next.js</b>, <b>JavaScript</b>,
              <b>HTML</b>, <b>CSS</b>, and <b>Tailwind CSS</b>. I specialize in
              creating sleek, user-friendly interfaces that are both visually
              appealing and highly functional.
              <br />
              With a solid foundation in front-end frameworks and tools, as well
              as experience with <b>TypeScript</b> and <b>MongoDB</b>, I build
              dynamic and scalable web applications. My focus is on delivering
              seamless user experiences that align with both client goals and
              user needs.
              <br />
              Whether it's <i>crafting pixel-perfect designs</i>,{" "}
              <i>optimizing performance</i>, or <i>solving complex problems</i>,
              I bring creativity, precision, and passion to every project I
              undertake.
            </p>
          </div>
          <div className="home-buttons">
            <Link to="/resume">
              <div className="resume-btn btn">
                <h3>Resume</h3>
              </div>
            </Link>

            <Link to="/projects">
              <div className="projects-btn btn">
                <h3>Projects</h3>
              </div>
            </Link>

            <Link to="/contact">
              <div className="contact-btn btn">
                <h3>Contact</h3>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="home-cont1 mobile">
        <img src={myImage} alt="an image of myself" />
      </div>
    </div>
  );
};

export default Home;
