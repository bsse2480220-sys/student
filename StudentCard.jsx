export function StudentCard({ student, onDelete }) {
  const initials = student.name
    .split(' ')
    .map(word => word[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="col-md-6 col-lg-3 mb-4">
      <div className="card student-card h-100">
        <div className="card-body text-center">
          <div
            className="student-avatar mx-auto mb-3"
            style={{ backgroundColor: student.color }}
          >
            {initials}
          </div>

          <h5 className="card-title">{student.name}</h5>
          <p className="text-muted small mb-3">{student.studentId}</p>

          <hr />

          <p className="mb-2">
            <i className="bi bi-book me-2 text-primary"></i>
            {student.major}
          </p>

          <p className="mb-2">
            <i className="bi bi-mortarboard me-2 text-primary"></i>
            {student.year}
          </p>

          <p className="mb-3">
            <i className="bi bi-star me-2 text-warning"></i>
            GPA: <strong>{student.gpa}</strong>
          </p>

          <button
            className="btn btn-outline-danger btn-sm"
            onClick={() => onDelete(student.id)}
          >
            <i className="bi bi-trash me-1"></i>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
