import Image from "next/image";
import Container from "./components/Container";
import Header from "./components/Header";

export default function Home() {
  return (
    <main className="w-full h-full flex justify-center align-middle items-center">
      <Header />
      <Container height="320px" width="320px" list={['item','item','item']} fontsize="20px" />
    </main>
  )
}