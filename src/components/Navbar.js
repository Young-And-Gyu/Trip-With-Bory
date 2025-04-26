import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const location = useLocation();
  return (
    <nav className="navbar">
      <div className="navbar-title">네비게이션 바</div>
      <div className="navbar-tabs">
        <Link to="/reviews" className={location.pathname.startsWith('/reviews') ? 'active' : ''}>리뷰</Link>
        <Link to="#" className="disabled">나의 여행</Link>
      </div>
    </nav>
  );
}

export default Navbar; 