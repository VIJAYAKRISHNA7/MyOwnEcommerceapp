import React from "react";
import { motion } from "framer-motion";

export default function ProductCard({ product, onOpen }){
  return (
    <motion.div whileHover={{ scale:1.02 }} className="bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer" onClick={()=>onOpen(product)}>
      <div className="w-full h-56 overflow-hidden">
        <img src={product.images[0]} alt={product.title} className="w-full h-full object-cover" />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg text-[var(--accent)]">{product.title}</h3>
        <div className="flex items-center justify-between mt-2">
          <div className="text-gray-500 text-sm">{product.size}</div>
          <div className="text-orange-600 font-bold">₹{product.price}</div>
        </div>
      </div>
    </motion.div>
  );
}
