// src/components/Navbar.jsx
import React from "react";
import { motion } from "framer-motion";
import { Apple, Search, ShoppingBag } from "lucide-react";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md text-gray-300 z-50"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3 text-sm">
        {/* Left - Apple Logo */}
        <a href="#" className="text-white">
          <Apple className="w-5 h-5" />
        </a>

        {/* Center Links */}
        <ul className="hidden md:flex gap-6">
          {[
            "Store",
            "Mac",
            "iPad",
            "iPhone",
            "Watch",
            "AirPods",
            "TV & Home",
            "Entertainment",
            "Accessories",
            "Support",
          ].map((item) => (
            <li key={item}>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Right - Icons */}
        <div className="flex items-center gap-5">
          <Search className="w-4 h-4 hover:text-white cursor-pointer" />
          <ShoppingBag className="w-4 h-4 hover:text-white cursor-pointer" />
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
