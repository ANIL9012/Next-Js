import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Tecnical Agency",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      >
        <header style={{backgroundColor:"teal"}}>Header</header>
        {children}
        <footer style={{backgroundColor:"yellowgreen"}}>Footer</footer>
      </body>
    </html>
  );
}
