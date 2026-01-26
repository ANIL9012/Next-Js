import React from 'react'
import "./globals.css"
import Link from "next/link"
function Home() {
  return (
    <div>
      <ul className="navbar">
        <li className="navlink"><Link href="/about">About</Link></li>
        <li className="navlink"><Link href="/services">Services</Link></li>
        <li className="navlink"><Link href="/blogs">Blogs</Link></li>
      </ul>
      <h1>Welcome to home page</h1>
    </div>
  )
}

export default Home
