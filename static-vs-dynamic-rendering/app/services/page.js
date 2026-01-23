import React from "react";
import Link from "next/link";
function Services() {
  return (
    <div>
      <ul className="header">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/services">Services</Link>
        </li>
        <li>
          <Link href="/blogs">Blogs</Link>
        </li>
      </ul>
      <h1>Welcom to Services Page</h1>
    </div>
  );
}

export default Services;
