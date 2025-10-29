import { Link } from "react-router-dom";
import "../index.css";

const AppHeader: React.FC = () => {
  return (
    <div className="container-fluid px-0">
      <header>
        <nav className="navbar navbar-expand-lg bd-navbar">
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
                      <Link className="dropdown-item" to="google-map">
                        Google Map 01
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="lazyLoading">
                        Lazy Loading Example
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="GraphqlAPI">
                        Graph QL API Example
                      </Link>
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
