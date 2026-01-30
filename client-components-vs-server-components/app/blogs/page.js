// "use client"
import Link from "next/link"
import Likes from "@/components/Likes";
// import Comments from "@/components/Comments";
// import View from "@/components/View";
import Button from "@/components/Button";

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
      <Button />
      <Likes />
      {/* <Comments /> */}
      {/* <View /> */}
    </div>
  );
}

export default Blog;
