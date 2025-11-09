import React, { useState } from "react";
import { products } from "../data/shopData";
import ProductCard from "../components/ProductCard";
import ProductModal from "../components/ProductModal";

export default function Paintings(){
  const [open, setOpen] = useState(null);
  return (
    <div className="max-w-7xl mx-auto px-6 pb-12">
      <h1 className="text-3xl font-semibold text-[var(--accent)] mt-6 mb-6">All Paintings</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(p=> <ProductCard key={p.id} product={p} onOpen={(prod)=>setOpen(prod)} />)}
      </div>
      <ProductModal product={open} onClose={()=>setOpen(null)} onAdd={(p)=>{ alert(`${p.title} added (demo)`); setOpen(null); }} />
    </div>
  );
}
