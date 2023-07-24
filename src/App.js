import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import ServicesPage from "./pages/servicesPage/ServicesPage";
import Investment from "./pages/servicesPage/Investment";
import Advisory from "./pages/servicesPage/Advisory";
import ScrollToTop from "react-scroll-to-top";


function App() {
  return (
    <BrowserRouter>
    <ScrollToTop smooth top="1500" />
      <Routes>
      {/* <Route path='/' element={<Navigate to= '/greenpath'/>} /> */}
      <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/finance" element={<ServicesPage/>} />
        <Route path="/investment" element={<Investment />} />
        <Route path="/advisory" element={<Advisory />} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
