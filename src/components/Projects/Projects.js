import React from "react";
import "./Projects.css";
import Invisitainer from "../Invisitainer/Invisitainer";
import ProjectCard from "../ProjectCard/ProjectCard";
import moodImg from "../../images/proj1.png";
import saltImg from "../../images/saltCityServiceLogo-01.png";
import quizImg from "../../images/quizzer.png";
import weatherImg from "../../images/weather.png";
import passImg from "../../images/password.png";
import noteImg from "../../images/notes.png"
export default function Projects() {
  return (
    <Invisitainer
      title="Projects"
      body={
        <div className="container ml-md-2 ml-sm-1">
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
              cardImg={quizImg}
              imgId={"quizzerImg"}
              projName={"Code Quizzer"}
              liveLink={"https://spencerbangerter.github.io/code-quizzer/"}
              gitLink={"https://github.com/SpencerBangerter/code-quizzer"}
            />
          </div>
          <div className="row">
            <ProjectCard
              cardImg={weatherImg}
              imgId={"weatherImg"}
              projName={"Weather Dashboard"}
              liveLink={"https://spencerbangerter.github.io/weather-dashboard/"}
              gitLink={"https://github.com/SpencerBangerter/weather-dashboard"}
            />
            <ProjectCard
              cardImg={passImg}
              imgId={"passImg"}
              projName={"Password Generator"}
              liveLink={
                "https://spencerbangerter.github.io/password-generator/"
              }
              gitLink={"https://github.com/SpencerBangerter/password-generator"}
            />
            <ProjectCard
              cardImg={noteImg}
              imgId={"noteImg"}
              projName={"Note Taker"}
              liveLink={
               "https://sheltered-shore-03476.herokuapp.com/notes"
              }
              gitLink={"https://github.com/SpencerBangerter/notes-express"}
            />
          </div>
        </div>
      }
    />
  );
}
