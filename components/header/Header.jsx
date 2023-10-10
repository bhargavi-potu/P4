import React from 'react';
import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="header-content">
          <div className="header-logo">
            <img src="../../bitmasters_logo.png" alt="Logo" />
          </div>
          <div className="header-title">
            <h1>Bit Masters</h1>
          </div>
          <div className="header-links">
            <a href="getting-started.html">Getting Started</a>
            <a href="p2.html">States Display</a>
            <a href="p3.html">Layout Personalization</a>
            <a href="p4.html">Dynamic View Switching</a>
            <a href="p5.html">Single Page App</a>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
