import React from "react";
import { Link } from "react-router-dom";

export default function Footer(){
  return (
    <footer className="mt-12 bg-gradient-to-r from-[#6b2c1c] to-[#8a3b2a] text-white py-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6">
        <div>
          <h4 className="text-xl font-bold">ArtifyGallery</h4>
          <p className="text-sm mt-2">Premium Tanjore Paintings — handcrafted with gold leaf and love.</p>
        </div>
        <div>
          <h5 className="font-semibold">Links</h5>
          <ul className="mt-2 space-y-2 text-sm">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/categories">Categories</Link></li>
            <li><Link to="/paintings">Paintings</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold">Contact</h5>
          <p className="text-sm mt-2">Email: artifygallery@gmail.com</p>
          <p className="text-sm">Phone: +91 98765 43210</p>
        </div>
      </div>
      <div className="text-center mt-8 text-sm">© {new Date().getFullYear()} ArtifyGallery — All rights reserved</div>
    </footer>
  );
}
