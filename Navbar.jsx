import React from 'react';

function Navbar({ search, setSearch }) {
  return (
    <nav className="navbar navbar-expand-lg bg-light border-bottom">

      <div className="container navbar-container">

        <a className="navbar-brand" href="#home">
          StudentPortal
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="mainNavbar"
        >

          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <a className="nav-link" href="#dashboard">
                Dashboard
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#students">
                Students
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#courses">
                Courses
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#reports">
                Reports
              </a>
            </li>

          </ul>

          <div className="d-flex align-items-center gap-2">

            <div className="dropdown">
              <button
                className="btn btn-light dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
              >
                Settings
              </button>

              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#profile">
                    Profile
                  </a>
                </li>

                <li>
                  <a className="dropdown-item" href="#logout">
                    Logout
                  </a>
                </li>
              </ul>
            </div>

            <input
              type="text"
              className="form-control"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <button className="btn btn-primary">
              Search
            </button>

          </div>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;
