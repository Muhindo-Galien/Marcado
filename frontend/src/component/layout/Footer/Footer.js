import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  const currenDate = new Date().getFullYear();

  return (
    <>
    <footer className="footer-distributed">

    <div className="footer-left">

      <h3>Marcado</h3>

      <p className="footer-links">
      <Link to='/'><a>Home</a></Link>
      <Link to='/products'><a>Products</a></Link>
      <Link to='/about'><a>About Us</a></Link>
      <Link to='/contact'><a>Contact Us</a></Link>
      </p>

      <p className="footer-company-name" style={{color:"tomato"}}>Marcado © {currenDate}</p>
    </div>

    <div className="footer-center">

      <div>
        <i className="fa fa-map-marker"></i>
        <p><span></span> Uganda/Kampala, Gabba-Road kansanga</p>
      </div>

      <div>
        <i className="fa fa-phone"></i>
        <p>+256 726 006 513</p>
      </div>

      <div>
        <i className="fa fa-envelope"></i>
        <p><a href="mailto:muhindogalien512@gmail.com">muhindogalien512@gmail.com</a></p>
      </div>

    </div>

    <div className="footer-right">

      <p className="footer-company-about">
      <span>About Marcado</span>
        This is a sample wesbite made by <b style={{color:"white"}}> Muhindo Galien</b>. Only with the purpose to teach MERN Stack to improve my skills
      </p>

      <div className="footer-icons">

        <a href="https://www.facebook.com/GalienPLUME/" target='_blank'><i className="fab fa-facebook"></i></a>
        <a href="https://twitter.com/GalienMuhindo" target='_blank'><i className="fab fa-twitter"></i></a>
        <a href="https://www.linkedin.com/in/muhindo-galien-292902213/"><i className="fab fa-linkedin" target='_blank'></i></a>
        <a href="https://github.com/Muhindo-Galien/"><i className="fab fa-github" target='_blank'></i></a>

      </div>

    </div>

  </footer>
    </>
  );
};

export default Footer;

