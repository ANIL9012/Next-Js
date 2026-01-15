import React from 'react'

async function File({params}) {
    // console.log(await params)
    const {filePath} = await params;
  return (
    <div>
      File/{filePath?.join("/")}
    </div>
  )
}

export default File
