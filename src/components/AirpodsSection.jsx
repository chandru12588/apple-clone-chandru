import React from "react";
import { motion } from "framer-motion";
import airpods from "../assets/airpods.jpg";

const AirpodsSection = () => {
  return (
    <section className="bg-black text-white text-center py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-semibold mb-4">AirPods Pro</h2>
        <p className="text-lg md:text-xl text-gray-400 mb-8">
          Active Noise Cancellation for immersive sound.
        </p>

        <img
          src={airpods}
          alt="AirPods Pro"
          className="w-full max-w-3xl mx-auto rounded-2xl shadow-lg mb-8"
        />

        <div className="flex gap-6 justify-center">
          <a href="#" className="text-blue-400 hover:underline">
            Learn more &gt;
          </a>
          <a href="#" className="text-blue-400 hover:underline">
            Buy &gt;
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default AirpodsSection;
