import React from "react";
import Link from "next/link";

export const dynamicParams = false;
// export const revalidate = 5;

export async function generateStaticParams(){
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    console.log(data);
    return data.map(({id})=> ({blogID: `${id}`}))
}

async function BlogId({ params }) {
  const { blogID } = await params;
  console.log("BlogId", blogID);
      const response = await fetch("https://jsonplaceholder.typicode.com/todos/1", {
        next: {revalidate: 5},
      });
    const data = await response.json();
    console.log(data);
  return (
    <div className="textcenter">
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
      <h1>Welcome to our Blog {blogID} </h1>
      <h2>Date: {new Date().toLocaleString()}</h2>
      <p>This is a {blogID} Page</p>
    </div>
  );
}

export default BlogId;
