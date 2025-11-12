import React from "react";
import { motion } from "framer-motion";
import tradein from "../assets/tradein.jpg";

const TradeInSection = () => {
  return (
    <section className="bg-white text-black py-20 px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-semibold mb-4">Apple Trade In</h2>
        <p className="text-lg text-gray-600 mb-8">
          Get credit toward a new product when you trade in your eligible device.  
        </p>

        <img
          src={tradein}
          alt="Apple Trade In"
          className="w-full max-w-3xl mx-auto rounded-2xl shadow-md mb-8"
        />

        <a href="#" className="text-blue-500 text-lg hover:underline">
          Learn more &gt;
        </a>
      </motion.div>
    </section>
  );
};

export default TradeInSection;
