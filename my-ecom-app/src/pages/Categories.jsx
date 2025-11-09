import React, { useState } from "react";
import { categories, products } from "../data/shopData";
import ProductCard from "../components/ProductCard";
import ProductModal from "../components/ProductModal";

export default function CategoriesPage(){
  const [active, setActive] = useState(categories[0]);
  const [open, setOpen] = useState(null);

  const filtered = products.filter(p => p.category === active);

  return (
    <div className="max-w-7xl mx-auto px-6 pb-12">
      <h1 className="text-3xl font-semibold text-[var(--accent)] mt-6 mb-6">Categories</h1>

      <div className="flex gap-3 overflow-x-auto pb-4 mb-6">
        {categories.map(cat => (
          <button key={cat} onClick={()=>setActive(cat)} className={`px-4 py-2 rounded-full ${cat===active ? "bg-[var(--primary)] text-white" : "bg-white text-gray-700 border"}`}>
            {cat}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filtered.length === 0 ? <p className="text-gray-500">No paintings in this category yet.</p> : filtered.map(p => (
          <ProductCard key={p.id} product={p} onOpen={(prod)=>setOpen(prod)} />
        ))}
      </div>

      <ProductModal product={open} onClose={()=>setOpen(null)} onAdd={(p)=>{ alert(`${p.title} added (demo)`); setOpen(null); }} />
    </div>
  );
}
