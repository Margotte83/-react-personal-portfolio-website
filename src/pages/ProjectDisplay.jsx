import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import { GitHub } from "@mui/icons-material";
import "../styles/ProjectDisplay.css";

export default function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1>{project.name}</h1>
      <a href={project.link} target="_blank" rel="noreferrer">
        <img src={project.image} alt={project.name} />
      </a>
      <p>
        <b>Skills: </b>
        {project.skills}
      </p>
      <a href={project.link2} target="_blank" rel="noreferrer">
        <GitHub />
        <a />
      </a>
    </div>
  );
}
