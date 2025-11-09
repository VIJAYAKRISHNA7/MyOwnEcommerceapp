import React from "react";
import { motion } from "framer-motion";

const entries = [
  { name: "Anjali", text: "This art is divine — beautiful gold detailing!" },
  { name: "Vikram", text: "Excellent finish and fast delivery." },
  { name: "Meera", text: "Adds royalty to my living room." }
];

export default function Testimonials(){
  return (
    <section className="py-12 bg-[#fff7f1]">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-semibold text-[var(--accent)] mb-6 text-center">Customer Stories</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {entries.map((e, i) => (
            <motion.div key={i} whileHover={{ scale:1.03 }} className="bg-white p-6 rounded-xl shadow">
              <p className="text-gray-700 italic">“{e.text}”</p>
              <div className="mt-4 font-semibold text-[var(--primary)]">— {e.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
