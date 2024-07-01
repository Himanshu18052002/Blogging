import React from "react";

const BlogPostPreview = ({ post }) => {
  return (
    <div className="blog-post-preview">
      <h2>{post.title}</h2>
      <img src={post.image} alt={post.title} />
      <p>By {post.author}</p>
      <p>{post.content.substring(0, 100)}...</p>
      <a href={`/blog/${post.id}`}>Read more</a>
    </div>
  );
};

export default BlogPostPreview;
