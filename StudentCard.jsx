import React, { useState } from 'react';
function StudentCard({ student, onDelete, onProfile }) {
  const [showDetails, setShowDetails] = useState(true);
  return (
    <div className="card student-card h-100">
      <div className="avatar-placeholder" aria-label="Student avatar">
        <svg viewBox="0 0 120 80" role="img" aria-label="Profile silhouette">
          <circle cx="60" cy="27" r="19" fill="#8b8b8b" />
          <path d="M25 80 C27 54 42 48 60 48 C78 48 93 54 95 80 Z" fill="#8b8b8b" />
        </svg>
      </div>
      <div className="card-body d-flex flex-column">
        <h5 className="card-title student-name">{student.name}</h5>
        <div className="student-info">
          <div>ID: {student.id}</div><div>Major: {student.major}</div>
          <div>Year: {student.year}</div><div>GPA: {student.gpa}</div>
        </div>
        <div className="d-flex gap-2 mt-3">
          <button className="btn btn-outline-primary btn-sm flex-grow-1" onClick={() => onProfile(student)}>View Profile</button>
          <button className="btn btn-outline-danger btn-sm" onClick={() => onDelete(student.id)}>Delete</button>
        </div>
        <button className="btn btn-outline-primary btn-sm demo-button mt-2" onClick={() => onProfile(student)}>.btn-outline-primary</button>
        <button className="btn btn-outline-danger btn-sm demo-button mt-2" onClick={() => onDelete(student.id)}>.btn-outline-danger</button>
        <div className="profile-views mt-3"><span>Profile Views:</span><span className="badge rounded-pill text-bg-secondary">{student.views}</span></div>
        <button className="btn btn-light border btn-sm mt-3" onClick={() => setShowDetails(!showDetails)}>{showDetails ? 'Hide Details' : 'Show Details'}</button>
        {showDetails && <div className="contact-box mt-3"><div className="text-truncate"><strong>Email:</strong> {student.email}</div><div><strong>Phone:</strong> {student.phone}</div></div>}
      </div>
    </div>
  );
}
export default StudentCard;
