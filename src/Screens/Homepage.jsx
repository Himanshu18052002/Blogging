import axios from "axios";
import React, { useEffect, useState } from "react";
import BlogPostPreview from "./BlogPostPreview";

function Homepage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")

      .then((response) => {
        setPosts(response.data);
      })

      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="home-page glass">
      <div>
        <h1>Blog Posts</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <BlogPostPreview post={post} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Homepage;
