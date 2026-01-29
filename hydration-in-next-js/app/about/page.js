import React from "react";
import Link from "next/link"
import Comments from "@/components/Comments";

function About() {
  return (
    <div>
      <ul className="navbar">
        <li className="navlink">
          <Link href="/about">About</Link>
        </li>
        <li className="navlink">
          <Link href="/services">Services</Link>
        </li>
        <li className="navlink">
          <Link href="/blogs">Blogs</Link>
        </li>
      </ul>
      <h1>Welcome to About Page</h1>
      <Comments />
    </div>
  );
}

export default About;
