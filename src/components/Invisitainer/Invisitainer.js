import React from "react";
import "./Invisitainer.css"
export default function Invisitainer(props) {
  return (
    <div className="container">
      <div className="invisitainer">
        <section className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="bodyHeader">{props.title}</h3>
            </div>
            {props.body}
          </div>
        </section>
      </div>
    </div>
  );
}
