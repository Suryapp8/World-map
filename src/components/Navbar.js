import React from "react";
import "../css/navbar.css";
function Navbar() {
  return (
    <div className="navbar">
      <img
        className="wstf-logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOBmj_069WyxZeiAOop60S2jxIcq7dFM75Ll6EsGPqNQ&s"
        alt="logo"
      />
      <h3 className="name">WASSERSTOFF</h3>

      <div className="searchbar">
        <input type="text" />{" "}
        <img
          className="search-icon"
          src="https://cdn-icons-png.flaticon.com/512/482/482631.png"
          alt="search-icon"
        />
      </div>
      <div className="nav-info">
        <p>Statistics</p>
        <p>Overview</p>
        <p>Dashboard</p>
        <p>Analytics</p>
      </div>

      <div className="user-profile">
        <img
          className="user-img"
          src="https://cdn-icons-png.flaticon.com/512/9187/9187475.png"
          alt="profile"
        />
        <img
          className="user-setting"
          src="https://cdn-icons-png.flaticon.com/512/70/70115.png"
          alt="settings"
        />
      </div>
    </div>
  );
}

export default Navbar;
