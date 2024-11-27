import React from "react";
import "../Components/CSS/Projects.css";
import { ProjectsList } from "../constants";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="projects">
      <div className="projects-heading">
        <h1>Projects</h1>
      </div>
      <div>
        {ProjectsList.map((list) => (
          <ProjectCard key={list.projectTitle} project={list} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
