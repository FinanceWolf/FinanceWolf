/* import { Inter } from "next/font/google";
import styled, { css } from 'styled-components'; */
import { stock } from "./ReduxStore/stock";
import StoreProvider from "./reduxProvider";
import "./styles/globals.css";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Finance Wolf",
  description: "App desenvolvido em Next.js, Springboot Web, SQL Server & SCSS",
  icons: {
    icon: '/fav32.png',
    shortcut: '/fav96.png'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="bg-white">
        <StoreProvider>
          {children}
        </StoreProvider>
      </body>
    </html>
  );
};