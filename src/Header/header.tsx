import React from "react";
import { Link } from "react-router-dom";

const AppHeader: React.FC = () => {
  return (
    <div className="container-fluid">
      <header>
        <nav
          className="navbar navbar-expand-lg"
          style={{ background: "rgba(235, 90, 90, 1)" }}
          data-bs-theme="light"
        >
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              VP
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    aria-current="page"
                    to="first-component"
                  >
                    One
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="second-component">
                    Two
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="third">
                    Three
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="Four">
                    Fourth
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown link
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="tableOne">
                        Tables
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="webSocketOne">
                        Web Scoket Example
                      </Link>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default AppHeader;
