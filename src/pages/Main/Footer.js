import React from 'react';

const Footer = () => (
  <footer className="footer">
    <div className="container-fluid">
      <nav className="pull-left">
        <ul>
          <li>
            <a href="#">
              Home
                  </a>
          </li>
          <li>
            <a href="#">
              Company
                  </a>
          </li>
          <li>
            <a href="#">
              Portfolio
                  </a>
          </li>
          <li>
            <a href="#">
              Blog
                  </a>
          </li>
        </ul>
      </nav>
      <p className="copyright pull-right">
        © {new Date().getFullYear()} <a href="http://jslancer.com">imabhi.in</a>, made with ❤️   for a better web
      </p>
    </div>
  </footer>
);

export default Footer;
