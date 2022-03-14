import React from "react";

import "./CSS/Footer.css";

function Footer() {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="footer__svg"
      >
        <path
          fill="#191919"
          fill-opacity="1"
          d="M0,256L289,64L576,128L864,160L1152,96L1440,64L1440,320L1152,320L864,320L576,320L288,320L0,320Z"
        ></path>
      </svg>
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
    </>
  );
}

export default Footer;
