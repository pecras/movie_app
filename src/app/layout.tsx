import type { Metadata } from "next";
import Header from "@/components/header";
import { Inter } from "next/font/google";
import "./globals.css";
import Themes from "@/themes/Themes";
import NavBar from "@/components/navBar";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
  
      <body className={inter.className}>
      <Themes>
      
      <Header/>
      <NavBar/>
        {children}
       </Themes> 
        </body>
    </html>
  );
}
