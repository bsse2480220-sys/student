import React from 'react';

function Pagination({
  currentPage,
  totalPages,
  onPageChange
}) {
  return (
    <nav aria-label="Student directory pagination">

      <ul className="pagination justify-content-center">

        <li
          className={`page-item ${
            currentPage === 1 ? 'disabled' : ''
          }`}
        >
          <button
            className="page-link"
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
        </li>

        {Array.from(
          { length: totalPages },
          (_, index) => index + 1
        ).map((page) => (

          <li
            key={page}
            className={`page-item ${
              currentPage === page ? 'active' : ''
            }`}
          >
            <button
              className="page-link"
              onClick={() => onPageChange(page)}
            >
              {page}
            </button>
          </li>

        ))}

        <li
          className={`page-item ${
            currentPage === totalPages ? 'disabled' : ''
          }`}
        >
          <button
            className="page-link"
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </li>

      </ul>

    </nav>
  );
}

export default Pagination;
