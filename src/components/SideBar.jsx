import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar(){
  return(
    <div>
    <style jsx>{`

      `}</style>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <a>Kegs</a>
      </Link>
      <Link to="/about" style={{ textDecoration: 'none' }}>
        <a>About</a>
      </Link>
      <Link to="/newKeg" style={{ textDecoration: 'none' }}>
    </div>
  )
}
export default Sidebar;
