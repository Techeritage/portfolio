import React from "react";
import "../Components/CSS/Resume.css";
import WorkExperience from "./WorkExperience";
import Education from "./Education";
import Skills from "./Skills";
import Arrow from "../assets/arrow.svg";

const Resume = () => {
  return (
    <div className="resume">
      <div className="resume-heading">
        <h1>Resume</h1>
        {/* GitHub Link */}
        <div className="github-link">
          <a
            href="https://github.com/Techeritage" // replace with your GitHub link
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            GitHub Profile
          </a>
          <img src={Arrow} alt="arrow icon" width={15} />
        </div>
      </div>
      <WorkExperience />
      <Skills />
      <Education />
    </div>
  );
};

export default Resume;
