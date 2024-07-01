import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import imaage from "../Assets/sampleImage.png";

const BlogPostPage = () => {
  const [post, setPost] = useState({});
  const location = useLocation();
  const id = location.state.id;

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        setPost(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  return (
    <div className="blog-post-page glass">
      <div className="container">
        <h1 style={{ color: "white" }}>{post.title}</h1>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "60%",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              flexDirection: "column",
              height: "400px",
            }}
          >
            <img src={imaage} alt={post.title} />
            <div>
              <span>By</span>
              <span style={{ fontSize: "25px" }}>{"  "}Himanshu Dawande</span>
            </div>
          </div>
        </div>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
        <div style={{ width: "85%" }} className="container">
          <p>
            {post.body}Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            {post.body}Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            {post.body}Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
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
    </div>
  );
};

export default BlogPostPage;
