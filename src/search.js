import React from "react";
import "./search.css";
import { FaHouse } from "react-icons/fa6";
import { FaMagnifyingGlass } from "react-icons/fa6";

export default function Search() {
  return (
    <div className="search">
      <div className="search-current-location">
        <a href="/" className="location">
          <FaHouse />
        </a>
      </div>
      <div className="search-bar">
        <input type="text" className="search-box" placeholder="Search..." />
        <a className="search-btn" href="/">
          <FaMagnifyingGlass />
        </a>
      </div>
    </div>
  );
}
