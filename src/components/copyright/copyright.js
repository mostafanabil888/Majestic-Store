import React from "react";
import "./copyright.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/fontawesome-free-brands";
/*start copy right */
export default function Copyright() {
  return (
    <footer className="footer border-2 container d-md-flex align-items-center justify-content-between">
      <div>
        <p>@copyright // mostafanabil</p>
      </div>
      <div className="d-flex flex-icon">
        <NavLink to="/">
          <FontAwesomeIcon className="icon" icon={faFacebookF} />
        </NavLink>
        <NavLink to="/">
          <FontAwesomeIcon className="icon" icon={faInstagram} />
        </NavLink>
        <NavLink to="/">
          <FontAwesomeIcon className="icon" icon={faLinkedin} />
        </NavLink>
        <NavLink to="/">
          <FontAwesomeIcon className="icon" icon={faGithub} />
        </NavLink>
      </div>
    </footer>
  );
}
/*end copy right */
