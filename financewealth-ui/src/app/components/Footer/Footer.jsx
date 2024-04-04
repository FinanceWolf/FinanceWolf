import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faChartColumn } from '@fortawesome/free-solid-svg-icons'
import '../../styles/footer.scss';

const Footer = () => {
  return (
    <footer>
      <div className="logo">
        <FontAwesomeIcon icon={faChartColumn}/> 
        <span>Finance Wolf</span>
      </div>
      <span className="divisor"></span>
        <div className="footer__navlist">
          <div className="footer__groups">
            <div className="footer__routes">
              <h3 className="footer__navlist__title">Servicos1</h3>
              <a href="./pages/login">Login</a>
              <a href="./pages/login">Login</a>
              <a href="./pages/login">Login</a>
              <a href="./pages/login">Login</a>


            </div>
          </div>

          <div className="footer__groups">
            <div className="footer__routes">
              <h3 className="footer__navlist__title">Servicos2</h3>
              <a href="./pages/login">Login</a>
              <a href="./pages/login">Login</a>
              <a href="./pages/login">Login</a>
              <a href="./pages/login">Login</a>
            </div>
          </div>

          <div className="footer__groups">
            <div className="footer__routes">
              <h3 className="footer__navlist__title">Servicos3</h3>
              <a href="./pages/login">Login</a>
              <a href="./pages/login">Login</a>
              <a href="./pages/login">Login</a>
              <a href="./pages/login">Login</a>
            </div>
          </div>

          <div className="footer__groups">
            <div className="footer__routes">
              <h3 className="footer__navlist__title">Servicos4</h3>
              <a href="./pages/login">Login</a>
              <a href="./pages/login">Login</a>
              <a href="./pages/login">Login</a>
              <a href="./pages/login">Login</a> 
            </div>
          </div>
        </div>
    </footer>
  )
}

export default Footer