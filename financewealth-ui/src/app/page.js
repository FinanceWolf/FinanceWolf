import Image from "next/image";
import Container from "./components/Container";
import Header from "./components/Header";
//import Login from "./components/login/page";
import Head from 'next/head';
/* import { useState } from 'react'; */
import DevContainer from './components/devmode/DevContainer';
import Footer from './components/Footer';
import {promises as fs} from 'fs';

export default async function Home() {
  const languageFile = await fs.readFile(process.cwd() + '/src/app/languages/portuguesbr.json', 'utf8');
  const translation = JSON.parse(languageFile);

  const devContainers = [
    {
      path: '/pages/login',
      name: 'Página de login'
    },
    {
      path: '/pages/register',
      name: 'Página de registro'
    }
  ];

  return (
    <>
      <Header />
      <main className="w-full h-full flex justify-center align-middle items-center">
        <div className="flex gap-3">
          {devContainers.map((info) => {return <DevContainer path={info.path} name={info.name} />})}
        </div>
      </main>
      <Footer trademark={translation.Footer.completeTrademark} />
    </>
  );
};