import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const LoginModal = ({ onClose }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[60]"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          className="bg-white p-8 rounded-2xl shadow-2xl w-[90%] max-w-md relative border-4 border-yellow-600"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-yellow-700 hover:text-red-600"
          >
            <X size={24} />
          </button>

          <h2 className="text-3xl font-bold text-yellow-800 text-center mb-6">
            🪔 Login to ThanjaiArts
          </h2>

          <form className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Enter Email"
              className="border-2 border-yellow-400 rounded-lg px-4 py-2 focus:ring-2 focus:ring-yellow-600 outline-none"
            />
            <input
              type="password"
              placeholder="Enter Password"
              className="border-2 border-yellow-400 rounded-lg px-4 py-2 focus:ring-2 focus:ring-yellow-600 outline-none"
            />
            <button
              type="submit"
              className="bg-yellow-700 text-white py-2 rounded-lg hover:bg-yellow-600 transition"
            >
              Login
            </button>
          </form>

          <p className="text-center mt-4 text-sm text-gray-500">
            New user? <a href="#" className="text-yellow-700 font-semibold">Register</a>
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoginModal;

