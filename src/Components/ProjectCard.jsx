import React from "react";

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
        <p className="p-head">
          <span className="heading">Code Repository:</span>{" "}
          <a href="#" target="_blank" rel="noopener noreferrer">
            {projectRepoLink}
          </a>
        </p>
        <p className="p-head">
          <span className="heading">Link to Live Project:</span>{" "}
          <a href={projectLiveLink} target="_blank" rel="noopener noreferrer">
            {projectLiveLink}
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
