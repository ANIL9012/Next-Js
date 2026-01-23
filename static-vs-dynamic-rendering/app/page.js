import React from 'react'
import Link from "next/link";
import "./globals.css";

function page() {
  return (
    <>
      <ul className='header'>
        {/* <li><Link href="/">Home</Link></li> */}
        <li><Link href="/about">About</Link></li>
        <li><Link href="/services">Services</Link></li>
        <li><Link href="/blogs">Blogs</Link></li>
      </ul>
      <h1>Welcome to Home Page </h1>
    </>
  )
}

export default page
