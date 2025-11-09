import React from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

export default function ProductModal({ product, onClose, onAdd }){
  if(!product) return null;
  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
      <motion.div initial={{ scale:0.95, opacity:0 }} animate={{ scale:1, opacity:1 }} className="bg-white rounded-2xl w-full max-w-4xl grid md:grid-cols-2 overflow-hidden shadow-2xl">
        <div className="p-4">
          <img src={product.images[0]} alt={product.title} className="w-full h-96 object-cover rounded-md" />
        </div>
        <div className="p-6 relative">
          <button onClick={onClose} className="absolute right-4 top-4 text-gray-600"><X/></button>
          <h2 className="text-2xl font-semibold text-[var(--accent)]">{product.title}</h2>
          <p className="text-gray-600 mt-2">{product.description}</p>
          <div className="mt-6 flex items-center justify-between">
            <div>
              <div className="text-sm text-gray-500">Price</div>
              <div className="text-2xl font-bold text-orange-600">₹{product.price}</div>
            </div>
            <div className="flex gap-3">
              <button onClick={()=>onAdd(product)} className="bg-orange-600 text-white px-4 py-2 rounded-lg">Add to Cart</button>
              <button onClick={()=>alert('Buy Now flow')} className="border px-4 py-2 rounded-lg">Buy Now</button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
