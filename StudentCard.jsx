import React, { useState } from 'react';

function StudentCard({
  student,
  onDelete,
  onProfile
}) {
  const [showDetails, setShowDetails] = useState(true);

  return (
    <div className="card student-card h-100">

      <div
        className="avatar-placeholder"
        aria-label="Student profile placeholder"
      >
        <svg
          viewBox="0 0 120 80"
          role="img"
          aria-label="Student avatar"
        >
          <circle
            cx="60"
            cy="27"
            r="19"
            fill="#999"
          />

          <path
            d="M25 80 C27 54 42 48 60 48 C78 48 93 54 95 80"
            fill="#999"
          />
        </svg>
      </div>

      <div className="card-body d-flex flex-column">

        <h5 className="card-title student-name">
          {student.name}
        </h5>

        <div className="student-info">

          <div>
            ID: {student.id}
          </div>

          <div>
            Major: {student.major}
          </div>

          <div>
            Year: {student.year}
          </div>

          <div>
            GPA: {student.gpa}
          </div>

        </div>

        <div className="student-buttons">

          <button
            className="btn btn-outline-primary"
            onClick={() => onProfile(student)}
          >
            View Profile
          </button>

          <button
            className="btn btn-outline-danger"
            onClick={() => onDelete(student.id)}
          >
            Delete
          </button>

        </div>

        <button className="btn btn-outline-primary extra-button">
          .btn-outline-primary
        </button>

        <button className="btn btn-outline-danger extra-button">
          .btn-outline-danger
        </button>

        <div className="profile-views">

          <span>
            Profile Views:
          </span>

          <span className="badge bg-secondary">
            {student.views}
          </span>

        </div>

        <button
          className="btn btn-light border details-button"
          onClick={() => setShowDetails(!showDetails)}
        >
          {showDetails ? 'Hide Details' : 'Show Details'}
        </button>

        {showDetails && (
          <div className="contact-details">

            <div>
              <strong>Email:</strong> {student.email}
            </div>

            <div>
              <strong>Phone:</strong> {student.phone}
            </div>

          </div>
        )}

      </div>

    </div>
  );
}

export default StudentCard;
