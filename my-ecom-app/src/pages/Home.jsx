import React, { useState } from "react";
import { motion } from "framer-motion";
import { products } from "../data/shopData";
import ProductCard from "../components/ProductCard";
import ProductModal from "../components/ProductModal";
import Testimonials from "../components/Testimonials";

export default function Home(){
  const [open, setOpen] = useState(null);
  const handleOpen = (p) => setOpen(p);
  const handleClose = () => setOpen(null);
  const handleAdd = (p) => { alert(`${p.title} added to cart (demo)`); handleClose(); };

  const featured = products.slice(0,4);

  return (
    <div className="pb-12">
      <section className="relative h-[80vh] bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center flex items-center justify-center">
        <div className="absolute inset-0 bg-black/40"></div>
        <motion.div initial={{y:20, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:1}} className="relative z-10 text-center text-white max-w-3xl px-6">
          <h1 className="text-5xl font-playfair font-bold mb-4">Timeless Tanjore Masterpieces</h1>
          <p className="text-lg mb-6">Handcrafted by skilled artisans — gold leaf, rich pigments, eternal beauty.</p>
          <div className="flex gap-4 justify-center">
            <a href="#collection" className="bg-gradient-to-r from-yellow-500 to-orange-600 px-6 py-3 rounded-full text-white">Explore Collection</a>
            <a href="#categories" className="border border-white px-6 py-3 rounded-full">Categories</a>
          </div>
        </motion.div>
      </section>

      <section id="collection" className="max-w-7xl mx-auto px-6 mt-12">
        <h2 className="text-3xl font-semibold text-[var(--accent)] mb-6">Featured Paintings</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featured.map(p => <ProductCard key={p.id} product={p} onOpen={handleOpen} />)}
        </div>
      </section>

      <Testimonials />

      <section id="categories" className="max-w-7xl mx-auto px-6 mt-12">
        <h2 className="text-3xl font-semibold text-[var(--accent)] mb-6">Explore by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {["Divine Deities","Royal Portraits","Mythological Scenes"].map((c,i)=>(
            <motion.div key={c} whileHover={{scale:1.03}} className="bg-white rounded-xl shadow p-4">
              <div className="h-40 mb-3 overflow-hidden rounded-lg">
                <img src={`https://source.unsplash.com/800x600/?tanjore,painting,${c}`} alt={c} className="w-full h-full object-cover"/>
              </div>
              <h3 className="font-semibold text-lg text-[var(--accent)]">{c}</h3>
              <p className="text-sm text-gray-600 mt-2">Explore exquisite {c.toLowerCase()} in gold leaf finishes.</p>
            </motion.div>
          ))}
        </div>
      </section>

      <ProductModal product={open} onClose={handleClose} onAdd={handleAdd} />
    </div>
  );
}
