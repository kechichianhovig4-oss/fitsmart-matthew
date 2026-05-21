import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Services from "./components/Services";
import Contact from "./components/Contact";
import About from "./components/AboutMe";


function App() {
  return (
    <Router>
      <Routes>
        {/* Default route */}
        <Route path="/" element={<HomePage />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/AboutMe" element={<About />} />

    

       
      
      </Routes>
    </Router>
  );
}

export default App;
