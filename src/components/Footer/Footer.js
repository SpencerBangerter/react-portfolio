import React from "react";
import "./Footer.css";
import linkImg from "../../images/linkedin.svg";
import gitIcon from "../../images/gitimage.svg";
export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <span className="text-center">
          Copyright &copy; Spencer Bangerter
          <a
            href="https://github.com/SpencerBangerter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="gitIcon" src={gitIcon} alt="gitProfile" />
          </a>
          <a
            href="https://www.linkedin.com/in/spencer-bangerter-336975162/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="linkedIcon" src={linkImg} alt="linkedIn" />
          </a>
        </span>
      </div>
    </footer>
  );
}
