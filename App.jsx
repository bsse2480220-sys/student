import { useState } from 'react'

const students = [
  {
    id: 101,
    name: 'Ali Khan',
    major: 'Computer Science',
    year: 2,
    gpa: 3.8,
    views: 25,
    email: 'ali101@gmail.com',
    phone: '123-456-7890'
  },
  {
    id: 102,
    name: 'Sara Ahmed',
    major: 'Computer Science',
    year: 2,
    gpa: 3.8,
    views: 8,
    email: 'sara102@gmail.com',
    phone: '123-456-7891'
  },
  {
    id: 103,
    name: 'Ahmed Raza',
    major: 'Computer Science',
    year: 2,
    gpa: 3.8,
    views: 10,
    email: 'ahmed103@gmail.com',
    phone: '123-456-7892'
  },
  {
    id: 104,
    name: 'Ayesha Noor',
    major: 'Computer Science',
    year: 2,
    gpa: 3.8,
    views: 5,
    email: 'ayesha104@gmail.com',
    phone: '123-456-7893'
  },
  {
    id: 105,
    name: 'Usman Ali',
    major: 'Software Engineering',
    year: 3,
    gpa: 3.6,
    views: 12,
    email: 'usman105@gmail.com',
    phone: '123-456-7894'
  },
  {
    id: 106,
    name: 'Fatima Khan',
    major: 'Information Technology',
    year: 1,
    gpa: 3.7,
    views: 8,
    email: 'fatima106@gmail.com',
    phone: '123-456-7895'
  },
  {
    id: 107,
    name: 'Hamza Ahmed',
    major: 'Computer Science',
    year: 4,
    gpa: 3.5,
    views: 15,
    email: 'hamza107@gmail.com',
    phone: '123-456-7896'
  },
  {
    id: 108,
    name: 'Zara Malik',
    major: 'Software Engineering',
    year: 2,
    gpa: 3.9,
    views: 20,
    email: 'zara108@gmail.com',
    phone: '123-456-7897'
  },
  {
    id: 109,
    name: 'Bilal Hussain',
    major: 'Computer Science',
    year: 3,
    gpa: 3.4,
    views: 7,
    email: 'bilal109@gmail.com',
    phone: '123-456-7898'
  },
  {
    id: 110,
    name: 'Hina Shah',
    major: 'Information Technology',
    year: 2,
    gpa: 3.8,
    views: 9,
    email: 'hina110@gmail.com',
    phone: '123-456-7899'
  },
  {
    id: 111,
    name: 'Danish Kumar',
    major: 'Computer Science',
    year: 1,
    gpa: 3.6,
    views: 4,
    email: 'danish111@gmail.com',
    phone: '123-456-7800'
  },
  {
    id: 112,
    name: 'Priya Sharma',
    major: 'Software Engineering',
    year: 4,
    gpa: 3.9,
    views: 18,
    email: 'priya112@gmail.com',
    phone: '123-456-7801'
  }
]

function Navbar() {
  const [search, setSearch] = useState('')

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="portal-navbar">

        <a className="navbar-brand" href="#">
          StudentPortal
        </a>

        <div className="navbar-links">
          <a href="#">Dashboard</a>
          <a href="#">Students</a>
          <a href="#">Courses</a>
          <a href="#">Reports</a>
        </div>

        <div className="navbar-right">

          <div className="dropdown">
            <button
              className="settings-button dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
            >
              Settings
            </button>

            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Profile
                </a>
              </li>

              <li>
                <a className="dropdown-item" href="#">
                  Logout
                </a>
              </li>
            </ul>
          </div>

          <div className="search-area">
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
  )
}

function Breadcrumb() {
  return (
    <div className="breadcrumb-box">
      <span>Home</span>
      <span>/</span>
      <span>Students</span>
      <span>/</span>
      <strong>Directory</strong>
    </div>
  )
}

function StudentCard({ student }) {
  const [showDetails, setShowDetails] = useState(true)

  return (
    <div className="student-card">

      <div className="student-image">
        <div className="avatar">
          <div className="avatar-head"></div>
          <div className="avatar-body"></div>
        </div>
      </div>

      <div className="student-content">

        <h5>{student.name}</h5>

        <div className="student-info">
          ID: {student.id}
        </div>

        <div className="student-info">
          Major: {student.major}
        </div>

        <div className="student-info">
          Year: {student.year}
        </div>

        <div className="student-info">
          GPA: {student.gpa}
        </div>

        <div className="student-actions">

          <button className="btn btn-outline-primary profile-button">
            View Profile
          </button>

          <button className="btn btn-outline-danger delete-button">
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
          <span className="views-text">
            Profile Views:
          </span>

          <span className="views-number">
            {student.views}
          </span>
        </div>

        <button
          className="btn hide-button"
          onClick={() => setShowDetails(!showDetails)}
        >
          {showDetails ? 'Hide Details' : 'Show Details'}
        </button>

        {showDetails && (
          <div className="contact-box">

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
  )
}

function Pagination({ currentPage, setCurrentPage }) {
  return (
    <nav className="pagination-area">

      <ul className="pagination">

        <li
          className={`page-item ${
            currentPage === 1 ? 'disabled' : ''
          }`}
        >
          <button
            className="page-link"
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            Previous
          </button>
        </li>

        {[1, 2, 3].map((page) => (
          <li
            key={page}
            className={`page-item ${
              currentPage === page ? 'active' : ''
            }`}
          >
            <button
              className="page-link"
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          </li>
        ))}

        <li
          className={`page-item ${
            currentPage === 3 ? 'disabled' : ''
          }`}
        >
          <button
            className="page-link"
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Next
          </button>
        </li>

      </ul>

    </nav>
  )
}

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div>
          <h6>Links</h6>

          <a href="#">Home</a>
          <a href="#">Students</a>
          <a href="#">Courses</a>
        </div>

        <div>
          <h6>Contact Info</h6>

          <a href="#">Contact Us</a>

          <p>
            Email: studentportal@example.com
          </p>
        </div>

      </div>

    </footer>
  )
}

function App() {
  const [currentPage, setCurrentPage] = useState(1)

  const studentsPerPage = 4

  const startIndex =
    (currentPage - 1) * studentsPerPage

  const currentStudents = students.slice(
    startIndex,
    startIndex + studentsPerPage
  )

  return (
    <>
      <Navbar />

      <main className="main-container">

        <Breadcrumb />

        <div className="heading-row">

          <h2>Page Header</h2>

          <button className="btn btn-primary add-button">
            Add New Student
          </button>

        </div>

        <div className="student-grid">

          {currentStudents.map((student) => (
            <StudentCard
              key={student.id}
              student={student}
            />
          ))}

        </div>

        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />

      </main>

      <Footer />
    </>
  )
}

export default App
