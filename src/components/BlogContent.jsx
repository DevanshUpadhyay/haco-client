"use client";
import { useState, useEffect } from "react";
import Loader from "./Loader";
const BlogContent = ({ content }) => {
  const [isClient, setIsClient] = useState(false);
  const blogContent = {
    __html: `${content}`,
  };
  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <div>
      {isClient ? (
        <p className="p-2" dangerouslySetInnerHTML={blogContent}></p>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default BlogContent;
