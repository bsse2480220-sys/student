import React from 'react';
function SuccessAlert({ message, onClose }) {
  if (!message) return null;
  return (
    <div className="alert alert-info alert-dismissible fade show" role="alert">
      {message}
      <button type="button" className="btn-close" aria-label="Close" onClick={onClose} />
    </div>
  );
}
export default SuccessAlert;
