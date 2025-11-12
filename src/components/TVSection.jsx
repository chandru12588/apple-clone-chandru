import React, { useState, useEffect } from "react";
import tv1 from "../assets/tv1.jpg";
import tv2 from "../assets/tv2.jpg";
import tv3 from "../assets/tv3.jpeg";
import "./TVSection.css";

const posters = [tv1, tv2, tv3];

const TVSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % posters.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-black text-white py-20 px-6 text-center overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-semibold mb-3">Apple TV+</h2>
        <p className="text-lg text-gray-400 mb-6">Stream award-winning Apple Originals</p>
        <a href="#" className="text-blue-400 hover:underline">Stream now &gt;</a>
      </div>

      <div className="absolute inset-0 flex justify-center items-center opacity-50">
        {posters.map((img, index) => (
          <img
            key={index}
            src={img}
            alt=""
            className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default TVSection;
