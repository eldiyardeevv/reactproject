import React from "react";
import { Link } from "react-router-dom";

const HeaderProduct = () => {
  return (
    <header className="header">
      <nav className="nav">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/add">
          <li>Create</li>
        </Link>
        <Link to="/list">
          <li>List</li>
        </Link>
      </nav>
    </header>
  );
};

export default HeaderProduct;
