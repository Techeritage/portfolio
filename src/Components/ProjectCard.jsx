import React from "react";
import Arrow from "../assets/arrow.svg";

const ProjectCard = ({ project }) => {
  const {
    projectTitle,
    projectDescription,
    projectStacks,
    projectRepoLink,
    projectLiveLink,
    projectImage,
  } = project;
  return (
    <div className="projects-cont">
      <div className="projects-cont1">
        <h2>{projectTitle}</h2>
        <p className="okay">{projectDescription}</p>
        <p className="p-head">
          <span className="heading">Technologies Used:</span>{" "}
          {projectStacks.map((stack, index) => (
            <span key={stack} style={{ marginRight: "5px" }}>
              {stack}
              {index !== projectStacks.length - 1 && ","}
            </span>
          ))}
        </p>
        <p className="p-head myFlex">
          <span className="heading">Code Repository:</span>{" "}
          <a
            className="myFlex"
            href={projectRepoLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Github - {projectTitle}
            <img src={Arrow} alt="arrow icon" width={15} />
          </a>
        </p>
        <p className="p-head myFlex">
          <span className="heading">Link to Live Project:</span>{" "}
          <a className="myFlex" href={projectLiveLink} target="_blank" rel="noopener noreferrer">
            {projectTitle}
            <img src={Arrow} alt="arrow icon" width={15} />
          </a>
        </p>
      </div>
      <div className="projects-cont2">
        <img src={projectImage} alt="website screenshot" />
      </div>
    </div>
  );
};

export default ProjectCard;
