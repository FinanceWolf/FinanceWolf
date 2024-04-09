"use client"

import Header from "./components/Header/Header";
//import Login from "./components/login/page";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/landing/Services";
import Footer from "./components/Footer/Footer";
import { useState } from 'react';
import { alter } from './ReduxStore/selectedLanguage/language';
import {useDispatch, useSelector} from 'react-redux';
import './styles/home.scss';
import './styles/landingPage.scss';

export default function Home() {
  const language = useSelector(state => state.language.value);
  const dispatch = useDispatch();

  console.log('Idioma inicial: ' + language);

  return (
    <>
      <button style={{'border': '1px solid blue'}} onClick={() => {dispatch(alter({language: 'pt-br'})
      )}}>Alterar idioma</button>

      <Header mode="landing" id="landingHeader" />

      <main id="landingPage">
        <section className="text__box">
          <Parallax />
        </section>
        
          <Portfolio />
      </main>

{/*       <Footer /> */}
    </>
  );
};