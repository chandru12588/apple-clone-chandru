import React from "react";
import { motion } from "framer-motion";
import iphone from "../assets/iphone.jpg"; // ✅ add this image inside src/assets/

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center text-center min-h-screen bg-black text-white overflow-hidden">
      {/* Background Image */}
      <img
        src={iphone}
        alt="iPhone 15 Pro"
        className="absolute inset-0 w-full h-full object-cover opacity-80"
      />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/90"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 px-6"
      >
        <h1 className="text-4xl md:text-6xl font-semibold mb-4 tracking-tight">
          iPhone 15 Pro
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-6">
          Titanium. So strong. So light. So Pro.
        </p>

        {/* Buttons */}
        <div className="flex gap-6 justify-center flex-wrap">
          <a
            href="#"
            className="text-blue-500 text-lg font-medium hover:underline"
          >
            Learn more &gt;
          </a>
          <a
            href="#"
            className="text-blue-500 text-lg font-medium hover:underline"
          >
            Buy &gt;
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
