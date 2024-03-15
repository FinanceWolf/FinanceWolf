"use client"

import Image from "next/image";
import Container from "./components/Container";
import Header from "./components/Header";
//import Login from "./components/login/page";
import Head from 'next/head';
import { useState } from 'react';
import DevContainer from './components/devmode/DevContainer';

export default function Home() {
  const [devMode, setDevMode] = useState(true);

  return (
    <>
      <main className="w-full h-full flex justify-center align-middle items-center">
        <Header />
        {devMode ? <DevContainer path="/pages/login" name="Página de login" /> : false}
      </main>
    </>
  );
};