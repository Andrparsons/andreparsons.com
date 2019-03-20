import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import Toggle from "../utils/Toggle";
import { Location } from "@reach/router";

const Header = ({ menuLinks }) => (
  <header className="header">
    <nav className="nav-container">
      <div className="brand">
        <Link to="/">
          <Location>
            {({ location }) => {
              console.log(location);
              return (
                <>
                  <span className="brand-icon">></span>
                  <span className="active-page">
                    {location.state != null
                      ? location.state.name
                      : "Andre Parsons"}
                  </span>
                  <span className="caret">|</span>
                </>
              );
            }}
          </Location>
        </Link>
      </div>
      <Toggle>
        {({ on, toggle }) => (
          <>
            <div
              className={on ? "menu-btn close" : "menu-btn"}
              onClick={toggle}
            >
              <div className="btn-line" />
              <div className="btn-line" />
              <div className="btn-line" />
            </div>
            <div
              className={on ? "overlay active-overlay" : "overlay"}
              onClick={toggle}
            />
            <div className={on ? "links active-links" : "links"}>
              {menuLinks.map(link => (
                <Link
                  to={link.link}
                  key={link.name}
                  state={{ name: link.name }}
                >
                  {link.linkName}
                </Link>
              ))}
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
