import { Inter } from "next/font/google";
import styled, { css } from 'styled-components';
import "./styles/globals.css";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Finance Wealth",
  description: "App desenvolvido em Next.js, Springboot Web, SQL Server & SASS",
  icons: {
    icon: '/fav96.png'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="bg-white">{children}</body>
    </html>
  );
};
