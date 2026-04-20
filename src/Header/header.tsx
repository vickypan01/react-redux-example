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
                    id="navbarDropdownMenuLink"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown link
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
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
                    <li>
                      <Link className="dropdown-item" to="subchild">
                        Sub Child Component
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="jwt-token">
                        JWT Token Example
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="common-form">
                        Common Form Example
                      </Link>
                    </li>
                    <li>
                      <Link className="nav-link" to="detail-table">
                        Table with Detail Popup
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    id="navbarCommonForms"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Common Forms
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarCommonForms"
                  >
                    <li>
                      <Link className="dropdown-item" to="normal-form">
                        Normal Form
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="webSocketOne">
                        Step Form
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="google-map">
                        Tabbed Form
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="lazyLoading">
                        Dynamic Form
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="GraphqlAPI">
                        Repeated / Field Array Form
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="subchild">
                        Modal Form (Popup Form)
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="jwt-token">
                        Search / Filter Form
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="common-form">
                        Progressive Form
                      </Link>
                    </li>
                    <li>
                      <Link className="nav-link" to="detail-table">
                        File Upload Form
                      </Link>
                    </li>
                    <li>
                      <Link className="nav-link" to="heavy-validation-form">
                        Validation-Heavy Form
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
