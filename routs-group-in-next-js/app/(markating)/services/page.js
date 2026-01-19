import React from 'react'
import Link from 'next/link'
export const metadata = {
   title: "Services",
}

function page() {
  return (
    <div>
      <h1>All Services Page</h1>
      <Link href="/services/seo">SEO</Link> <Link href="/services/web-dev">Web Development</Link>
    </div>
  )
}

export default page