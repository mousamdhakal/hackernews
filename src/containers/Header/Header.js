import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="container clearfix">
        <h1 className="header__brand">
          <a href="/hackernews" className="header__link">
            Fresh Hacker News
          </a>
        </h1>
      </div>
    </header>
  );
}

export default Header;
