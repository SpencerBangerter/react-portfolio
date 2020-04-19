import React from "react";
import "./Nav.css";
import { Link, useLocation } from "react-router-dom";

export default function Nav() {
  const location = useLocation();

  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-light bg-light navbar-right">
        <button
          className="navbar-toggler d-lg-none navbar-right"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
          <Link to="/React-Portfolio" className="nav-item item">
              <p
                className={
                  location.pathname === "/React-Portfolio"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Home
              </p>
            </Link>

            <Link to="/about" className="nav-item item">
              <p
                className={
                  location.pathname === "/about"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                About
              </p>
            </Link>
            <Link to="/projects" className="nav-item item">
              <p
                className={
                  location.pathname === "/projects"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Projects
              </p>
            </Link>
            <Link to="/skills" className="nav-item item">
              <p
                className={
                  location.pathname === "/skills"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Skills
              </p>
            </Link>
            <Link to="/contact" className="nav-item item">
              <p
                className={
                  location.pathname === "/contact"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Contact
              </p>
            </Link>

          </ul>
        </div>
      </nav>
    </div>
  );
}
