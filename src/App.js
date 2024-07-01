import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Screens/Homepage";
import BlogPostPage from "./Screens/BlogPostPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/Blogs" element={<BlogPostPage />} />
    </Routes>
  );
};

export default App;
