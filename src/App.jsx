

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Academics from "./pages/Academics";
import Admission from "./pages/Admission";
import Students from "./pages/Students";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Academics" element={<Academics />} />
        <Route path="/Admission" element={<Admission />} />
        <Route path="/Students" element={<Students />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

