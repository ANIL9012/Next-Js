import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <h1>Technical Agency</h1>
    <Link href="/about">About</Link> <Link href="/blogs">Blogs</Link> <Link href="/services">Services</Link> <Link href="/files">Files</Link>
    </>
  );
}
