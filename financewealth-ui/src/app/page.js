"use client"

//import Login from "./components/login/page";
import { useState } from 'react';
import DevContainer from './components/devmode/DevContainer';
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Header from './components/Header/Header';
import './styles/home.scss';
import './styles/landingPage.scss';

export default function Home() {
  return (
    <>
      <Header mode="landing" id="landingHeader" />
      <main id="landingPage">
        <section className="text__box">
            {<Parallax />}
        </section>
        
          <Portfolio />
      </main>
    </>
  );
};