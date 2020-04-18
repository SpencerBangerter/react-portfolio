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
              <a
                className={
                  location.pathname === "/React-Portfolio"
                    ? "nav-link active"
                    : "nav-link"
                }
                href="#"
              >
                Home
              </a>
            </Link>

            <Link to="/about" className="nav-item item">
              <a
                className={
                  location.pathname === "/about"
                    ? "nav-link active"
                    : "nav-link"
                }
                href="#"
              >
                About
              </a>
            </Link>
            <Link to="/projects" className="nav-item item">
              <a
                className={
                  location.pathname === "/projects"
                    ? "nav-link active"
                    : "nav-link"
                }
                href="#"
              >
                Projects
              </a>
            </Link>
            <Link to="/skills" className="nav-item item">
              <a
                className={
                  location.pathname === "/skills"
                    ? "nav-link active"
                    : "nav-link"
                }
                href="#"
              >
                Skills
              </a>
            </Link>
            <Link to="/contact" className="nav-item item">
              <a
                className={
                  location.pathname === "/contact"
                    ? "nav-link active"
                    : "nav-link"
                }
                href="#"
              >
                Contact
              </a>
            </Link>

          </ul>
        </div>
      </nav>
    </div>
  );
}
