import React, { useMemo, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Breadcrumb from './components/Breadcrumb.jsx';
import StudentCard from './components/StudentCard.jsx';
import Pagination from './components/Pagination.jsx';
import SuccessAlert from './components/SuccessAlert.jsx';
import Footer from './components/Footer.jsx';
import initialStudents from './data/students.js';

function App() {
  const [students, setStudents] = useState(initialStudents);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [message, setMessage] = useState('Student records have been successfully updated.');
  const studentsPerPage = 4;

  const filteredStudents = useMemo(() => {
    const query = search.trim().toLowerCase();
    return students.filter((student) => [student.name, String(student.id), student.major, student.email]
      .some((value) => value.toLowerCase().includes(query)));
  }, [students, search]);

  const totalPages = Math.max(1, Math.ceil(filteredStudents.length / studentsPerPage));
  const safePage = Math.min(currentPage, totalPages);
  const visibleStudents = filteredStudents.slice((safePage - 1) * studentsPerPage, safePage * studentsPerPage);

  function deleteStudent(id) {
    const student = students.find((item) => item.id === id);
    if (!student || !window.confirm(`Delete ${student.name}?`)) return;
    setStudents((previous) => previous.filter((item) => item.id !== id));
    setMessage(`${student.name} has been deleted successfully.`);
    setCurrentPage(1);
  }

  function viewProfile(student) {
    window.alert(`Student Profile\n\nName: ${student.name}\nID: ${student.id}\nMajor: ${student.major}\nYear: ${student.year}\nGPA: ${student.gpa}\nEmail: ${student.email}\nPhone: ${student.phone}`);
  }

  function addStudent() {
    const name = window.prompt('Enter student name:');
    if (!name || !name.trim()) return;
    const nextId = Math.max(100, ...students.map((s) => s.id)) + 1;
    const newStudent = {
      id: nextId, name: name.trim(), major: 'Computer Science', year: 2,
      gpa: '3.5', views: 0, email: `student${nextId}@gmail.com`, phone: '123-456-7800'
    };
    setStudents((previous) => [...previous, newStudent]);
    setSearch('');
    setCurrentPage(Math.ceil((students.length + 1) / studentsPerPage));
    setMessage(`${newStudent.name} has been added successfully.`);
  }

  function updateSearch(value) {
    setSearch(value);
    setCurrentPage(1);
  }

  return (
    <>
      <Navbar search={search} setSearch={updateSearch} />
      <main className="container directory-container" id="students">
        <Breadcrumb />
        <div className="d-flex justify-content-between align-items-center gap-3 mb-3 page-title-row">
          <h1 className="page-heading">Page Header</h1>
          <button className="btn btn-primary add-student-button" onClick={addStudent}>Add New Student</button>
        </div>
        <div className="row g-4 student-grid">
          {visibleStudents.map((student) => (
            <div className="col-12 col-sm-6 col-lg-3" key={student.id}>
              <StudentCard student={student} onDelete={deleteStudent} onProfile={viewProfile} />
            </div>
          ))}
        </div>
        {visibleStudents.length === 0 && <div className="alert alert-warning mt-4">No students found. Try another search.</div>}
        {filteredStudents.length > 0 && <Pagination currentPage={safePage} totalPages={totalPages} onPageChange={setCurrentPage} />}
        <div className="directory-alert"><SuccessAlert message={message} onClose={() => setMessage('')} /></div>
      </main>
      <Footer />
    </>
  );
}
export default App;
