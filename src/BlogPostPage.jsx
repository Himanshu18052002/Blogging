import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const BlogPostPage = ({ match }) => {
  const [post, setPost] = useState({});

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${match.params.id}`)
      .then((response) => {
        setPost(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [match.params.id]);

  return (
    <div className="blog-post-page">
      <h1>{post.title}</h1>
      <img src={post.image} alt={post.title} />
      <p>By {post.author}</p>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
      <p>
        <a
          href={`https://www.linkedin.com/in/${post.author}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit {post.author}'s LinkedIn profile
        </a>
      </p>
      <div className="social-sharing">
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=https://example.com/blog/${post.id}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Share on Facebook
        </a>
        <a
          href={`https://twitter.com/intent/tweet?url=https://example.com/blog/${post.id}&text=${post.title}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Share on Twitter
        </a>
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=https://example.com/blog/${post.id}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Share on LinkedIn
        </a>
      </div>
    </div>
  );
};

export default BlogPostPage;
