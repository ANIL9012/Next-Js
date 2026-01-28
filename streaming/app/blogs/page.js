import React, { Suspense } from "react";
import Link from "next/link"
import Likes from "@/components/Likes";
import View from "@/components/View";
import Comments from "@/components/Comments";
import Loading from "@/components/Loading";

function Blog() {
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
      <h1>Welcome to Blogs Page</h1>
      <Suspense fallback={<Loading>Views...</Loading>}>
        <View />
      </Suspense>
      <Suspense fallback={<Loading>Likes...</Loading>}>
      <Likes />
      </Suspense>
      <Suspense fallback={<Loading>Comments...</Loading>}>
      <Comments />
      </Suspense>
    </div>
  );
}

export default Blog;
