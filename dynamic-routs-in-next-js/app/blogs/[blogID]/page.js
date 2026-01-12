import React from "react";

export default async function Blog({ params }) {
  const { blogID } = await params;
  return (
    <div>
      <h1>Blog {blogID}</h1>
    </div>
  );
}
