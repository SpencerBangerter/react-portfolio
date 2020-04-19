import React from "react";
import "./ProjectCard.css";
import gitImg from "./../../images/gitimage.svg";

export default function ProjectCard(props) {

    return (
    <div className="col-md-4 col-sm-12 col-xs-12 mt-2 mb-2">
      <div className="card text-white">
        <img className="card-img" id={props.imgId} src={props.cardImg} alt={props.projName}/>
        <div className="card-img-overlay">
          <a
            href={props.liveLink}
            target="_blank"
            className="card-title text-center"
            rel="noopener noreferrer"
          >
            {props.projName}
          </a>
          <a href={props.gitLink} target="_blank" rel="noopener noreferrer">
            <img className="gitIcon" src={gitImg} alt="gitProfile" />
          </a>
        </div>
      </div>
    </div>
  );

}
