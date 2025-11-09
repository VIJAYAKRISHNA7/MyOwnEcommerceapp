import React, { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingCart, X } from "lucide-react";

export default function FloatingCartButton(){
  const [open, setOpen] = useState(false);
  // demo cart items (in later step this will come from context)
  const demo = [{ id:"p1", title:"Lord Ganesha - Gold", price:4999 }];

  return (
    <>
      <motion.div initial={{ opacity:0, y:40 }} animate={{ opacity:1, y:0 }} className="fixed bottom-6 right-6 z-50">
        <motion.button whileHover={{ scale:1.05 }} onClick={()=>setOpen(true)} className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white p-4 rounded-full shadow-2xl">
          <ShoppingCart className="w-6 h-6" />
        </motion.button>
      </motion.div>

      {open && (
        <div className="fixed inset-0 z-50 flex items-end justify-end p-6 pointer-events-auto">
          <div className="w-full max-w-md bg-white rounded-tl-2xl rounded-l-2xl shadow-2xl p-5">
            <div className="flex justify-between items-center mb-4">
              <h4 className="font-semibold">Your Cart</h4>
              <button onClick={()=>setOpen(false)} className="text-gray-600"><X/></button>
            </div>

            {demo.length===0 ? (
              <p className="text-gray-500">Your cart is empty.</p>
            ) : (
              <div className="space-y-4">
                {demo.map(d => (
                  <div key={d.id} className="flex justify-between items-center">
                    <div>
                      <div className="font-medium">{d.title}</div>
                      <div className="text-sm text-gray-500">Qty: 1</div>
                    </div>
                    <div className="text-orange-600 font-bold">₹{d.price}</div>
                  </div>
                ))}
                <div className="mt-4">
                  <button className="w-full bg-gradient-to-r from-yellow-500 to-orange-600 text-white py-3 rounded">Proceed to Pay</button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
