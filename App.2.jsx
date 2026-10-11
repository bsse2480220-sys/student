import { useState } from 'react';
import { initialStudents } from './App';
import { StudentCard } from './StudentCard';



export default function App() {
  const [students, setStudents] = useState(initialStudents);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [showForm, setShowForm] = useState(false);
  const [message, setMessage] = useState('');

  const [name, setName] = useState('');
  const [major, setMajor] = useState('');
  const [year, setYear] = useState('1st Year');
  const [gpa, setGpa] = useState('');

  const perPage = 4;

  const filteredStudents = students.filter(student => `${student.name} ${student.studentId} ${student.major}`
    .toLowerCase()
    .includes(search.toLowerCase())
  );

  const totalPages = Math.max(
    1,
    Math.ceil(filteredStudents.length / perPage)
  );

  const startIndex = (currentPage - 1) * perPage;
  const visibleStudents = filteredStudents.slice(
    startIndex,
    startIndex + perPage
  );

  function deleteStudent(id) {
    setStudents(previous => previous.filter(student => student.id !== id));
    setMessage('Student deleted successfully.');
  }

  function addStudent(event) {
    event.preventDefault();

    const newStudent = {
      id: Date.now(),
      name: name.trim(),
      studentId: `STU-${String(students.length + 1).padStart(3, '0')}`,
      major,
      year,
      gpa,
      color: '#0d6efd'
    };

    setStudents(previous => [...previous, newStudent]);
    setName('');
    setMajor('');
    setYear('1st Year');
    setGpa('');
    setShowForm(false);
    setSearch('');
    setCurrentPage(Math.ceil((students.length + 1) / perPage));
    setMessage('New student added successfully.');
  }

  function changePage(page) {
    setCurrentPage(page);
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">
            <i className="bi bi-mortarboard-fill me-2"></i>
            StudentPortal
          </a>

          <span className="navbar-text text-light">
            Student Directory
          </span>
        </div>
      </nav>

      <div className="breadcrumb-bar">
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li className="breadcrumb-item active text-white">
                Student Directory
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <main className="container py-5">
        <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 mb-4">
          <div>
            <h1 className="page-title">Student Directory</h1>
            <p className="text-muted mb-0">
              View and manage student information
            </p>
          </div>

          <button
            className="btn btn-primary"
            onClick={() => setShowForm(!showForm)}
          >
            <i className="bi bi-plus-lg me-2"></i>
            Add New Student
          </button>
        </div>

        {message && (
          <div className="alert alert-info alert-dismissible fade show">
            {message}
            <button
              className="btn-close"
              onClick={() => setMessage('')}
              aria-label="Close"
            ></button>
          </div>
        )}

        {showForm && (
          <div className="card mb-4">
            <div className="card-header fw-bold">Add New Student</div>
            <div className="card-body">
              <form onSubmit={addStudent}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label">Full Name</label>
                    <input
                      className="form-control"
                      value={name}
                      onChange={event => setName(event.target.value)}
                      required
                      placeholder="Enter student name" />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Major</label>
                    <input
                      className="form-control"
                      value={major}
                      onChange={event => setMajor(event.target.value)}
                      required
                      placeholder="Enter major" />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Year</label>
                    <select
                      className="form-select"
                      value={year}
                      onChange={event => setYear(event.target.value)}
                    >
                      <option>1st Year</option>
                      <option>2nd Year</option>
                      <option>3rd Year</option>
                      <option>4th Year</option>
                    </select>
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">GPA</label>
                    <input
                      className="form-control"
                      type="number"
                      min="0"
                      max="4"
                      step="0.1"
                      value={gpa}
                      onChange={event => setGpa(event.target.value)}
                      required
                      placeholder="0.0 - 4.0" />
                  </div>

                  <div className="col-12">
                    <button className="btn btn-primary me-2" type="submit">
                      Save Student
                    </button>
                    <button
                      className="btn btn-secondary"
                      type="button"
                      onClick={() => setShowForm(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        )}

        <div className="row mb-4">
          <div className="col-md-6 col-lg-5">
            <div className="input-group">
              <span className="input-group-text bg-white">
                <i className="bi bi-search"></i>
              </span>
              <input
                className="form-control"
                type="search"
                placeholder="Search by name, ID, or major..."
                value={search}
                onChange={event => {
                  setSearch(event.target.value);
                  setCurrentPage(1);
                }} />
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="mb-0">All Students</h5>
          <span className="text-muted small">
            {filteredStudents.length} students found
          </span>
        </div>

        <div className="row">
          {visibleStudents.map(student => (
            <StudentCard
              key={student.id}
              student={student}
              onDelete={deleteStudent} />
          ))}
        </div>

        {visibleStudents.length === 0 && (
          <div className="text-center py-5">
            <i className="bi bi-search display-4 text-muted"></i>
            <h5 className="mt-3">No students found</h5>
            <p className="text-muted">Try another search term.</p>
          </div>
        )}

        {filteredStudents.length > 0 && (
          <nav className="mt-3" aria-label="Student pages">
            <ul className="pagination justify-content-center">
              <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                <button
                  className="page-link"
                  onClick={() => changePage(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  Previous
                </button>
              </li>

              {Array.from({ length: totalPages }, (_, index) => (
                <li
                  key={index + 1}
                  className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}
                >
                  <button
                    className="page-link"
                    onClick={() => changePage(index + 1)}
                  >
                    {index + 1}
                  </button>
                </li>
              ))}

              <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                <button
                  className="page-link"
                  onClick={() => changePage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  Next
                </button>
              </li>
            </ul>
          </nav>
        )}
      </main>

      <footer className="footer bg-dark text-white text-center py-4 mt-auto">
        <div className="container">
          <p className="mb-1">StudentPortal — Student Directory</p>
          <small className="text-secondary">
            React Components, Props and Bootstrap
          </small>
        </div>
      </footer>
    </>
  );
}
