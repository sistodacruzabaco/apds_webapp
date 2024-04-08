"use client"
import Navbar from "./components/Navbar";
import "./globals.css";
import LoginForm from "./components/LoginForm";


export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body>
        <div className="relative">
          <Navbar/>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}

