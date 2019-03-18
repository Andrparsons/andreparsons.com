import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import Toggle from "../utils/Toggle";

const Header = ({ siteTitle }) => (
  <header className="header">
    <nav className="nav-container">
      <div className="brand">
        <Link to="/">
          <span className="brand-icon">></span>
          <span className="active-page">Andre Parsons</span>
          <span className="caret">|</span>
        </Link>
      </div>
      <Toggle>
        {({ on, toggle }) => (
          <>
            <div
              className={on ? "menu-btn close" : "menu-btn"}
              onClick={toggle}
            >
              <div class="btn-line" />
              <div class="btn-line" />
              <div class="btn-line" />
            </div>
            <div
              className={on ? "overlay active-overlay" : "overlay"}
              onClick={toggle}
            />
            <div className={on ? "links active-links" : "links"}>
              <Link to="/">About</Link>
              <Link to="/coding">Coding</Link>
              <Link to="/photos">Photograpy</Link>
              <Link to="/blog">Blog</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </>
        )}
      </Toggle>
      <div className="outsite">
        <a href="https://github.com/Andrparsons" className="nav-icon">
          GH
        </a>
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
