import React from "react";
import "./Projects.css";
import Invisitainer from "../Invisitainer/Invisitainer";
import ProjectCard from "../ProjectCard/ProjectCard";
import moodImg from "../../images/proj1.png";
import saltImg from "../../images/saltCityServiceLogo-01.png";
export default function Projects() {
  return (
    <Invisitainer
      title="Projects"
      body={
        <div className="container">
          <div className="row">
            <ProjectCard
              cardImg={moodImg}
              imgId={"moodImg"}
              projName={"mood."}
              liveLink={"https://matthewlgrimes94.github.io/mood./"}
              gitLink={"https://github.com/SpencerBangerter/mood"}
            />
            <ProjectCard
              cardImg={saltImg}
              imgId={"saltCityServImg"}
              projName={"Salt City Services"}
              liveLink={"http://www.saltcityservice.com/"}
              gitLink={"https://github.com/SpencerBangerter/salt-city-services"}
            />
            <ProjectCard
              cardImg={saltImg}
              imgId={"saltCityServImg"}
              projName={"Salt City Services"}
              liveLink={"http://www.saltcityservice.com/"}
              gitLink={"https://github.com/SpencerBangerter/salt-city-services"}
            />
          </div>
          <div className="row">
            <ProjectCard
              cardImg={saltImg}
              imgId={"saltCityServImg"}
              projName={"Salt City Services"}
              liveLink={"http://www.saltcityservice.com/"}
              gitLink={"https://github.com/SpencerBangerter/salt-city-services"}
            />
          </div>
        </div>
      }
    />
  );
}
