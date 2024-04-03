"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaGlobe } from "react-icons/fa";
import { faUser, faChartArea } from '@fortawesome/free-solid-svg-icons'
import "../../styles/header.scss";

const Header = ({mode, id}) => {
  return (
    <header id={id}>
      <a href="/">
        <h1 className="text-2xl select-none">
          <FontAwesomeIcon icon={faChartArea} />
          <span>Finance</span> Wealth
        </h1>
      </a>
      {mode == "landing" 

      ?

      <nav className="header__rightside">
          <ul className="header__rightside__pages">
            <li><a href="./pages/login" className="option">Ações</a></li>
            <li><a href="./pages/login" className="option">Contato</a></li>
            <li><a href="./pages/login" className="option">Sobre nós</a></li>
            <li><a href="./pages/login" className="option">FAQ</a></li>
            <li><a href="./pages/login" className="option login__button">Entrar</a></li>
            <li className="createAccount"><a href="./pages/register">Criar sua conta</a></li>
            <li>
              <FaGlobe className="language_section"/>
            </li>
          </ul>
      </nav>

      :
      
      <div>
        <div className="loginContainer cursor-pointer">
          username
          <span className="icon">
            <FontAwesomeIcon icon={faUser} />
          </span>
        </div>
      </div>}
    </header>
  );
};

export default Header;