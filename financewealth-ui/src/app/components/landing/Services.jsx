'use client';

import React from 'react';
import { faDollarSign, faChartSimple, faChartLine, faMagnifyingGlassDollar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import "../../styles/landingPage.scss";
import "../../styles/globals.css";

const Services = () => {
  const texts = {
    default: "Texto menor - Lorem Ipsum Dolor.",
    extended: "Texto maior - Lorem Ipsum Dolor Sit Amet."
  }

  const [selectedText, setText] = useState();
  const selectBox = (e) => {
    e.preventDefault();

    setText(e.currentTarget.id);
  }

    return (
        <section className='section__services'>
            <h1 className='title__services'>Lorem ipsum dolor.</h1>
            <div className="container__services">
                <div className={`block__services ${selectedText == '1' ? 'selected' : null}`}>
                  <div className="icon__box" onHover={selectBox} id='1'>
                    <FontAwesomeIcon icon={faDollarSign} />
                  </div>
                    <h3>Lorem ipsum dolor.</h3>
                    <div className="description_box">
                      <p>{selectedText == '1' ? texts.extended : texts.default}</p>
                    </div>
                </div>

                <div className={`block__services ${selectedText == '2' ? 'selected' : null}`} onHover={selectBox} id='2'>
                  <div className="icon__box">
                    <FontAwesomeIcon icon={faChartSimple} />
                  </div>
                    <h3>Lorem ipsum dolor.</h3>
                    <div className="description_box">
                      <p>{selectedText == '2' ? texts.extended : texts.default}</p>
                    </div>
                </div>

                <div className={`block__services ${selectedText == '3' ? 'selected' : null}`} onHover={selectBox} id='3'>
                  <div className="icon__box">
                    <FontAwesomeIcon icon={faMagnifyingGlassDollar} />
                  </div>
                  
                    <h3>Lorem ipsum dolor.</h3>
                    <div className="description_box">
                      <p>{selectedText == '3' ? texts.extended : texts.default}</p>
                    </div>
                </div>
            </div>
        </section>       
      )
    }

export default Services;