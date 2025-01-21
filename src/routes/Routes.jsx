import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Components/Home.jsx";
import About from "../Components/About.jsx";
import Contact from "../Components/Contact.jsx";
import Blog from "../Components/Blog.jsx";

function RouteComponent() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  );
}

export default RouteComponent;
