import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BlogPostPreview from "./BlogPostPreview";
import BlogPostPage from "./BlogPostPage.jsx";
import HomePage from "./HomePage.jsx";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" component={<HomePage />} />
        <Route path="/blog/:id" component={<BlogPostPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
