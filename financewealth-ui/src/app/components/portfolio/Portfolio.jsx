'use client';

import React from 'react';
import { faDollarSign, faChartSimple, faChartLine, faMagnifyingGlassDollar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import "../../styles/landingPage.scss";
import "../../styles/globals.css";

const Portfolio = () => {
  const [textoSelecionado, alterarTexto] = useState();
  const selecionarCaixa = (e) => {
    e.preventDefault();

    alterarTexto(e.currentTarget.id);
  }

    return (
        <section className='section__services'>
            <h1 className='title__services'>Lorem ipsum dolor.</h1>
            <div className="container__services">
                <div className={`block__services ${textoSelecionado == '1' ? 'selected' : null}`}>
                  <div className="icon__box" onClick={selecionarCaixa} id='1'>
                    <FontAwesomeIcon icon={faDollarSign} />
                  </div>
                    <h3>Lorem ipsum dolor.</h3>
                    <div className="description_box">
                      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure tenetur beatae doloremque ad veritatis architecto porro suscipit ipsa qui sed?</p>
                    </div>
                </div>

                <div className={`block__services ${textoSelecionado == '2' ? 'selected' : null}`} onClick={selecionarCaixa} id='2'>
                  <div className="icon__box">
                    <FontAwesomeIcon icon={faChartSimple} />
                  </div>
                    <h3>Lorem ipsum dolor.</h3>
                    <div className="description_box">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure tenetur beatae doloremque ad veritatis architecto porro suscipit ipsa qui sed?</p>
                    </div>
                </div>

                <div className={`block__services ${textoSelecionado == '3' ? 'selected' : null}`} onClick={selecionarCaixa} id='3'>
                  <div className="icon__box">
                    <FontAwesomeIcon icon={faMagnifyingGlassDollar} />
                  </div>
                  
                    <h3>Lorem ipsum dolor.</h3>
                    <div className="description_box">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure tenetur beatae doloremque ad veritatis architecto porro suscipit ipsa qui sed?</p>
                    </div>
                </div>
            </div>
        </section>       
      )
    }

export default Portfolio;