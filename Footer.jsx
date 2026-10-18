import React from 'react';
function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <div><h6>Links</h6><a href="#home">Home</a><a href="#students">Students</a><a href="#courses">Courses</a></div>
        <div><h6>Contact Info</h6><a href="mailto:studentportal@example.com">Contact Us</a><p>Email: studentportal@example.com</p></div>
      </div>
    </footer>
  );
}
export default Footer;
