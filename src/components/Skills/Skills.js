import React from "react";
import Invisitainer from "../Invisitainer/Invisitainer";
import bootstrap from "../../images/skillsvg/bootstrap.svg";
import css from "../../images/skillsvg/css-3.svg";
import express from "../../images/skillsvg/express.svg";
import html from "../../images/skillsvg/html-5.svg";
import javascript from "../../images/skillsvg/javascript.svg";
import jquery from "../../images/skillsvg/jquery.svg";
import materialize from "../../images/skillsvg/materializecss.svg";
import mongo from "../../images/skillsvg/mongodb.svg";
import node from "../../images/skillsvg/nodejs.svg";
import mysql from "../../images/skillsvg/mysql.svg";
import "./Skills.css";
export default function Skills() {
  return (
    <Invisitainer
      title="Skills"
      body={
        <div className="container">
          <div className="row">
            <div className="col-6">
              <h3 className="skillHeader">Front End</h3>
            </div>
            <div className="col-6">
            <h3 className="skillHeader">Back End</h3>
            </div>
         
          </div>
          <div className="row">
            <div className="col-6">
              <img className="iconImg" src={html} alt="html" />
              <img className="iconImg" src={javascript} alt="javascript" />
              <img className="iconImg" src={jquery} alt="jquery" />
              <img className="iconImg" src={bootstrap} alt="bootstrap" />
              <img className="iconImg" src={css} alt="css" />
              <img className="iconImg" src={materialize} alt="materialize" />
            </div>
            <div className="col-6">
              <img className="iconImg" src={mongo} alt="mongo" />
              <img className="iconImg" src={mysql} alt="mysql" />
              <img className="iconImg" src={node} alt="node" />
              <img className="iconImg" src={express} alt="express" />
            </div>
          </div>
        </div>
      }
    ></Invisitainer>
  );
}
