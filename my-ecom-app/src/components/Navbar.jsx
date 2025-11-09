import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, Bell, User } from "lucide-react";
import LoginModal from "./LoginModal";
import { motion } from "framer-motion";

export default function Navbar(){
  const [openLogin, setOpenLogin] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // close modal on route change
    setOpenLogin(false);
  }, [pathname]);

  const nav = [
    { name: "Home", to: "/" },
    { name: "Categories", to: "/categories" },
    { name: "Paintings", to: "/paintings" },
    { name: "About", to: "/about" },
    { name: "Contact", to: "/contact" }
  ];

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all ${scrolled ? "backdrop-blur-md bg-white/80 shadow" : "bg-transparent"}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-3 flex items-center justify-between">
          <motion.div whileHover={{ scale: 1.02 }} className="flex items-center gap-3">
            <Link to="/" className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-orange-600" >
              VjArtifyGallery
            </Link>
            <span className="text-xs text-gray-500 hidden md:inline">Handcrafted Tanjore Paintings</span>
          </motion.div>

          <ul className="hidden lg:flex items-center gap-8 text-gray-700">
            {nav.map(i => (
              <li key={i.name} className="hover:text-[var(--primary)] transition">
                <Link to={i.to} className="font-medium">{i.name}</Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <Bell className="cursor-pointer text-gray-600" />
            <ShoppingCart className="cursor-pointer text-gray-600" />
            <button onClick={() => setOpenLogin(true)} className="ml-2 bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-4 py-2 rounded-full shadow">
              <User className="inline mr-2" /> Login
            </button>

            {/* mobile menu trigger (simple) */}
            <div className="lg:hidden ml-3">
              <details className="relative">
                <summary className="cursor-pointer px-3 py-2 rounded-md bg-white/60">Menu</summary>
                <div className="absolute right-0 mt-2 w-48 bg-white rounded shadow p-2">
                  {nav.map(i => (
                    <Link key={i.name} to={i.to} className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">{i.name}</Link>
                  ))}
                  <button onClick={() => setOpenLogin(true)} className="w-full text-left px-3 py-2 mt-2 bg-gradient-to-r from-yellow-500 to-orange-600 text-white rounded">Login</button>
                </div>
              </details>
            </div>
          </div>
        </div>
      </nav>

      {openLogin && <LoginModal onClose={() => setOpenLogin(false)} />}
    </>
  );
}
