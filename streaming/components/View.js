import React from 'react'

export default async function View() {
 await new Promise((resolve) => setTimeout(resolve, 3000))
  return (
    <div>
      2k Views
    </div>
  )
}


