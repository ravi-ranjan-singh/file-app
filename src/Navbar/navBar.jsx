import React from 'react';
import img from './../assets/logo.png';
import { useSelector } from 'react-redux';
import './navBar.css';

const NavBar = () => {
  const title = useSelector((state) => state.title);
  return (
    <div className="navbar">
      <div className="logo">
        <img src={img} alt="company_logo" />
      </div>
      <div className="heading">
        <span>{title}</span>
      </div>
    </div>
  );
};

export default NavBar;
