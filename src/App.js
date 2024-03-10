import React from "react";
import Home from "./Home";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Routes, Route } from "react-router-dom";

import About from "./About";
import Contact from "./Contact";
import Service from "./Service";
import Error from "./Error";
import Navbar from "./Navbar";
import Footer from "./Footer";

function App() {
  return (
    <>
    <div style={{ paddingBottom: "60px" }}>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        <Route path="*" element={<Error />} />
      </Routes>
      </div>
      <Footer/>
    </>
  );
}

export default App;
