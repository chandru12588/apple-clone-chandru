import React from "react";

const ProductGrid = () => {
  const products = [
    {
      title: "AirPods Pro 3",
      subtitle: "The world’s best in-ear Active Noise Cancellation.",
      img: "/src/assets/airpods.jpg",
      bg: "bg-[#f5f5f7]",
    },
    {
      title: "WATCH SERIES 11",
      subtitle: "The ultimate watch for a healthy life.",
      img: "/src/assets/watch.jpeg",
      bg: "bg-[#f5f5f7]",
    },
    {
      title: "iPad Pro",
      subtitle: "Advanced AI performance and game-changing capabilities.",
      img: "/src/assets/ipad.jpg",
      bg: "bg-black text-white",
    },
    {
      title: "MacBook Pro 14”",
      subtitle: "Supercharged by M5.",
      img: "/src/assets/macbook.jpg",
      bg: "bg-black text-white",
    },
  ];

  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-2">
      {products.map((item, index) => (
        <div
          key={index}
          className={`${item.bg} flex flex-col items-center justify-center text-center py-16 px-4`}
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-2">{item.title}</h2>
          <p className="text-sm md:text-lg mb-6">{item.subtitle}</p>
          <div className="flex justify-center gap-4 mb-6">
            <button className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm hover:bg-blue-700">
              Learn more
            </button>
            <button className="border border-blue-600 text-blue-600 px-4 py-1 rounded-full text-sm hover:bg-blue-600 hover:text-white">
              Buy
            </button>
          </div>
          <img
            src={item.img}
            alt={item.title}
            className="w-full max-w-md object-contain"
          />
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
