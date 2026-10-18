import React from 'react';
function Breadcrumb() {
  return (
    <nav aria-label="breadcrumb" className="mb-4">
      <ol className="breadcrumb custom-breadcrumb mb-0">
        <li className="breadcrumb-item"><a href="#home">Home</a></li>
        <li className="breadcrumb-item"><a href="#students">Students</a></li>
        <li className="breadcrumb-item active" aria-current="page">Directory</li>
      </ol>
    </nav>
  );
}
export default Breadcrumb;
