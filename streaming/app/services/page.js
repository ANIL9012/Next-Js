import React from "react";
import Link from "next/link"
import { cookies } from "next/headers";

// export const dynamic = "auto";
// export const dynamic = "force-dynamic";
// export const dynamic = "error";
export const dynamic = "force-static";

async function Service ({searchParams}){
  // const search = await searchParams;
  // console.log(search);
  const myCookies = await cookies();
  console.log(myCookies);

  console.log("Running Services Component")
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
      <h1>Welcome to Services Page</h1>
    </div>
  );
}

export default Service;
