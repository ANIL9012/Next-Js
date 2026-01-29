"use client"

import { useState } from "react"

export default function Likes() {
  // console.log(window);
  // if(typeof localStorage !== "undefined"){
  //   console.log(localStorage);
  // }
  // console.log("Likes Components")
  const [increaseLikes, setIncreaseLikes] = useState(0);

  return (
    <div onClick={() => setIncreaseLikes((prev) => prev + 1)} style={{cursor:"pointer"}}>
      {increaseLikes} Likes
    </div>
  )
}

// Servers component execute only on of the server 
// Client components execute on the server as well as on the client 
