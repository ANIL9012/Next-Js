import React from "react";
import Link from "next/link";


export async function generateStaticParams(){
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    return data.map(({id})=> ({blogID: `${id}`}))
    // return[
    //     {blogID: "1"},
    //     {blogID: "2"},
    //     {blogID: "3"},
    //     {blogID: "4"},
    //     {blogID: "5"},
    // ]
}

async function BlogId({ params }) {
  const { blogID } = await params;
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
      <h2>This is a {blogID} Page</h2>
    </div>
  );
}

export default BlogId;
