import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <Fragment>
      <nav
        className={`${classes.navbar} navbar navbar-expand-lg ${classes.navbar_light} navbar-light bg-light py-4`}
      >
        <div className="container-fluid mainMenu">
          <Link to="/" className={`${classes["navbar-brand"]} navbar-brand`}>
            <img src={logo} alt="" className={classes.logo_img} />
          </Link>

          <div className={`d-flex d-block d-lg-none ${classes.nav_buttons}`}>
            <Link to="/signIn" className={`btn ${classes.qq_btn}`}>
              Login
            </Link>

            <button
              className={`navbar-toggler ${classes.navbar_toggle_btn}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>

          <div className="d-flex flex-wrap justify-content-end w-100  ">
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarSupportedContent"
            >
              <ul className={`navbar-nav ${classes.navbar_nav} mb-2 mb-lg-0`}>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${classes.nav_link}`}
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link ${classes.nav_link}`}
                    aria-current="page"
                    href="#about"
                  >
                    About Me
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link ${classes.nav_link}`}
                    aria-current="page"
                    href="#experience"
                  >
                    Experience
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link ${classes.nav_link}`}
                    aria-current="page"
                    href="#skills"
                  >
                    Skills
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link ${classes.nav_link}`}
                    aria-current="page"
                    href="#projects"
                  >
                    Projects
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link ${classes.nav_link}`}
                    aria-current="page"
                    href="#certifications"
                  >
                    Certifications
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link ${classes.nav_link}`}
                    aria-current="page"
                    href="#contacts"
                  >
                    Contacts
                  </a>
                </li>
              </ul>
            </div>

            <div
              className={`d-flex nav_buttons d-lg-block d-none ${classes.nav_buttons}`}
            >
              <Link
                to="/signIn"
                className={`btn ${classes.qq_btn}`}
              >
                Login
              </Link>

            </div>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
