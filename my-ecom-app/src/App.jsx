import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import FloatingCartButton from "./components/FloatingCartButton";

const Home = lazy(() => import("./pages/Home"));
const Categories = lazy(() => import("./pages/Categories"));
const Paintings = lazy(() => import("./pages/Paintings"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));

export default function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <ScrollToTop />
        <main className="pt-24">
          <Suspense fallback={<div className="h-60 flex items-center justify-center">Loading…</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/paintings" element={<Paintings />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<div className="p-16 text-center">Page not found</div>} />
            </Routes>
          </Suspense>
          {/* Shared testimonials displayed site-wide below pages */}
        </main>
        <FloatingCartButton />
        <Footer />
      </div>
    </Router>
  );
}
