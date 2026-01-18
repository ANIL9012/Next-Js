import React from "react";

async function Comment({ params }) {
  const paramsObj = await params;
  const { blogId } = paramsObj;
  console.log(blogId);
  return <div>All Comments on {blogId} page</div>;
}

export default Comment;
