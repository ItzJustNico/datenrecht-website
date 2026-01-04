import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";

import Home from "./pages/Home";
import Product from "./pages/Product";
import About from "./pages/About";
import License from "./pages/License";
import Privacy from "./pages/Privacy";
import Imprint from "./pages/Imprint";
import Contact from "./pages/Contact";
import MediaCredits from "./pages/MediaCredits";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/license" element={<License />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/imprint" element={<Imprint />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/credits" element={<MediaCredits />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
