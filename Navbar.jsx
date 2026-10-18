import React from 'react';

function Navbar({ search, setSearch }) {
  return (
    <nav className="navbar navbar-expand-lg bg-light border-bottom">
      <div className="container navbar-container">
        <a className="navbar-brand" href="#home">StudentPortal</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar" aria-controls="mainNavbar" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><a className="nav-link" href="#dashboard">Dashboard</a></li>
            <li className="nav-item"><a className="nav-link" href="#students">Students</a></li>
            <li className="nav-item"><a className="nav-link" href="#courses">Courses</a></li>
            <li className="nav-item"><a className="nav-link" href="#reports">Reports</a></li>
          </ul>
          <div className="dropdown me-3">
            <button className="btn btn-light btn-sm dropdown-toggle" data-bs-toggle="dropdown" type="button">Settings</button>
            <ul className="dropdown-menu dropdown-menu-end">
              <li><a className="dropdown-item" href="#profile">Profile</a></li>
              <li><a className="dropdown-item" href="#preferences">Preferences</a></li>
            </ul>
          </div>
          <form className="d-flex gap-2 navbar-search" role="search" onSubmit={(e) => e.preventDefault()}>
            <input className="form-control form-control-sm" type="search" placeholder="Search" aria-label="Search students" value={search} onChange={(e) => setSearch(e.target.value)} />
            <button className="btn btn-primary btn-sm" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
