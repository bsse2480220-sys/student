import React from 'react';
function Pagination({ currentPage, totalPages, onPageChange }) {
  return (
    <nav aria-label="Student directory pages">
      <ul className="pagination justify-content-center mt-4">
        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
          <button className="page-link" disabled={currentPage === 1} onClick={() => onPageChange(currentPage - 1)}>Previous</button>
        </li>
        {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
          <li className={`page-item ${currentPage === page ? 'active' : ''}`} key={page}>
            <button className="page-link" onClick={() => onPageChange(page)}>{page}</button>
          </li>
        ))}
        <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
          <button className="page-link" disabled={currentPage === totalPages} onClick={() => onPageChange(currentPage + 1)}>Next</button>
        </li>
      </ul>
    </nav>
  );
}
export default Pagination;
