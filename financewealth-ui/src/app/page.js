import Image from "next/image";
import Container from "./components/Container";
import Header from "./components/Header";
//import Login from "./components/login/page";
import Head from 'next/head';

export default function Home() {
  return (
    <>
    <main className="w-full h-full flex justify-center align-middle items-center">
      <Header />
    </main>
    </>
  );
};