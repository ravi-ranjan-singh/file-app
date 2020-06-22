import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="nav-items">
        <Link to="/upload">
          <i className="fa fa-upload" aria-hidden="true"></i>
          <span className="nav">Upload Files</span>
        </Link>
      </div>
      <div className="nav-items">
        <Link to="/list">
          <i className="fa fa-list" aria-hidden="true"></i>
          <span className="nav">List/Modify Files</span>
        </Link>
      </div>
      <div className="nav-items">
        <Link to="/stats">
          <i className="fa fa-line-chart" aria-hidden="true"></i>
          <span className="nav">Statistics</span>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
