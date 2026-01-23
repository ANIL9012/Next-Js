import React from "react";
import Link from "next/link";
function Blog() {
  return (
    <div>
      <ul className="header">
        {/* <li><Link href="/">Home</Link></li> */}
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
      <h1>Welcome to Blogs Page</h1>
      <ul style={{ display: "flex", flexDirection: "column" }}>
        <li>
          <Link href="/blogs/blogone">Blog1</Link>
        </li>
        <li>
          <Link href="/blogs/blogtwo">Blog2</Link>
        </li>
        <li>
          <Link href="/blogs/blogthree">Blog3</Link>
        </li>
      </ul>
    </div>
  );
}

export default Blog;
