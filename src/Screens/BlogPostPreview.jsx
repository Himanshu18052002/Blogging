import React from "react";
import { useNavigate } from "react-router-dom";
import imaage from "../Assets/sampleImage.png";
const BlogPostPreview = ({ post }) => {
  const navigate = useNavigate();
  const handleBlogs = (id) => {
    navigate("/Blogs", {
      state: {
        id: id,
      },
    });
  };
  return (
    <div className="blog-post-preview">
      <div style={{ display: "flex", gap: 15, alignItems: "center" }}>
        <img src={imaage} alt={post.title} />
        <div>
          <h2>{post.title}</h2>
          <p>By Himanshu</p>
          <p>{post.body.substring(0, 100)}...</p>
          <a onClick={() => handleBlogs(post.id)}>Read more</a>
        </div>
      </div>
    </div>
  );
};

export default BlogPostPreview;
