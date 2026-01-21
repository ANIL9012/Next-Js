import { notFound } from "next/navigation";
import React from "react";

export async function generateMetadata({ params }) {
  const { blog } = await params;

  return {
    title: `Blogs ID ${blog}`,
  };
}

async function Blog({ params }) {
  const { blog } = await params;
  if(!/^\d+$/.test(blog)){
    notFound();
  }
  return (
    <div>
      <h1>Blog {blog}</h1>
    </div>
  );
}

export default Blog;
