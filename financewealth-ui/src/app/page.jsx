"use client"

import Header from "./components/Header/Header";
import Portfolio from "./components/landing/Services";
import Footer from "./components/Footer/Footer"
import {useDispatch, useSelector} from 'react-redux';
import { WelcomePage } from "./components/WelcomePage/WelcomePage";
import  Stock  from "./components/Stock/Stock";
import './styles/home.scss';
import './styles/landingPage.scss';
import './styles/defaults.scss';

export default function Home() {
  const language = useSelector(state => state.language.value);
  const dispatch = useDispatch();

  console.log('Idioma inicial: ' + language);

  return (
    <>
      {/* <button style={{'border': '1px solid blue'}} onClick={() => {dispatch(alter({language: 'pt-br'})
      )}}>Alterar idioma</button> */}

      <Header mode="landing" id="landingHeader" />

      <main id="landingPage">

          <WelcomePage />
          <Stock />
          <Portfolio />
      </main>

      <Footer />
    </>
  );
};