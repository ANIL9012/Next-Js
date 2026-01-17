import React from "react";

async function Comments({ params }) {
  const paramsObj = await params;
  const { blogID, commentID } = paramsObj;
  console.log(paramsObj);
  return <div>Comments No. <i>{commentID}</i> on {blogID} page</div>;
}

export default Comments;
