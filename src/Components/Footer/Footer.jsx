import React from "react";

import "./CSS/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__content__information">
          <p>
            Gabriel Lima <i className="fal fa-user-alt"></i>
          </p>
          <p>
            55 (51) 98429-2998 <i className="fal fa-phone"></i>
          </p>
          <p>
            gabrielrtxon@gmail.com <i className="fal fa-envelope"></i>
          </p>
        </div>
        <p className="footer__content__copy">
          Copyright &copy; 2022, Portfolio - Gabriel Lima
        </p>
        <a href="#" className="btnUP">
          <i className="fal fa-arrow-circle-up"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
