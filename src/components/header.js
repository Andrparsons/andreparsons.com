import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

const Header = ({ siteTitle }) => (
  <header className="header">
    <nav className="nav-container">
      <div className="brand">
        <Link to="/">
          {" "}
          <span className="brand-icon">></span>
          <span className="active">Andre Parsons</span>
        </Link>
      </div>
      <div className="links">
        <Link to="about">About</Link>
        <Link to="about">Coding</Link>
        <Link to="about">Photograpy</Link>
        <Link to="about">Blog</Link>
        <Link to="about">Contact</Link>
      </div>
      <div className="outsite">
        <Link to="about" className="nav-icon">
          GH
        </Link>
      </div>
    </nav>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
