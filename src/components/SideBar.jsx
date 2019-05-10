import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar(){
  return(
    <div>
    <style jsx>{`
      .whiteSquare{
        position: absolute;
        width: 302px;
        height: 500px;
        left: 52px;
        top: 69px;
        background: #FFFFFF;
        border-radius: 10px;
      }
      `}</style>
      <div className="whiteSquare"></div>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <a>Home</a>
      </Link>
      <Link to="/form" style={{ textDecoration: 'none' }}>
        <a>Form</a>
      </Link>
      <Link to="/wine-notes" style={{ textDecoration: 'none' }}>
        <a>Notes</a>
      </Link>
      <Link to="/wine-pairings" style={{ textDecoration: 'none' }}>
        <a>Pairings</a>
      </Link>
    </div>
  )
}
export default Sidebar;
