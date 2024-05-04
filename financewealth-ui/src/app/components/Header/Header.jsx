"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaGlobe } from "react-icons/fa";
import { faUser, faChartColumn } from '@fortawesome/free-solid-svg-icons'
import "../../styles/defaults.scss";
import "../../styles/header.scss";

const Header = ({mode, id}) => {
  return (
    <header id={id} className="flex static top-0 items-center h-6 w-full text-xl font-bold justify-between">
      <a href="/">
        <h1 className="text-2xl select-none">
          <FontAwesomeIcon icon={faChartColumn} />
          <span>Finance Wealth</span> 
        </h1>
      </a>
      <nav className="header__rightside">
          {mode == "landing"

          ?

          <ul className="header__rightside__pages">
            <li><a href="./pages/login" className="option">Ações</a></li>
            <li><a href="./pages/login" className="option">Contato</a></li>
            <li><a href="./pages/login" className="option">Sobre nós</a></li>
            <li><a href="./pages/login" className="option">FAQ</a></li>
            <li><a href="./pages/login" className="option login__button">Entrar</a></li>
            <li className="create_account"><a href="./pages/register">Criar sua conta</a></li>
            <li><FaGlobe className="language_section"/></li>
          </ul>

          :

          <div>
            <div className="loginContainer cursor-pointer">
              <div className="header__user">
                <span>Username</span>
                <FontAwesomeIcon icon={faUser} />
              </div>
            </div>
          </div>
          }
      </nav>
    </header>
  );
};

export default Header;