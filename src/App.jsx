import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import Route from "./routes/Routes.jsx";

const App = () => {
  const menuItems = [
    { label: "Home", link: "/" },
    { label: "About", link: "/about" },
    { label: "Contact", link: "/contact" },
    { label: "Blog", link: "/blog" },
    // Add more menu items as needed
  ];

  return (
    <Router>
      <Header menuItems={menuItems} />
      <main>
        <Route />
      </main>
      <Footer />
    </Router>
  );
};

export default App;

