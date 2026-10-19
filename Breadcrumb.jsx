import React from 'react';

function Breadcrumb() {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb custom-breadcrumb">
        <li className="breadcrumb-item">
          <a href="#home">Home</a>
        </li>

        <li className="breadcrumb-item">
          <a href="#students">Students</a>
        </li>

        <li className="breadcrumb-item active" aria-current="page">
          Directory
        </li>
      </ol>
    </nav>
  );
}

export default Breadcrumb;
