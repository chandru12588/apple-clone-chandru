import React from "react";

const Footer = () => {
  const sections = [
    {
      title: "Shop and Learn",
      links: ["Store", "Mac", "iPad", "iPhone", "Watch", "AirPods", "TV & Home"],
    },
    {
      title: "Apple Store",
      links: ["Find a Store", "Genius Bar", "Today at Apple", "Financing", "Order Status"],
    },
    {
      title: "For Business",
      links: ["Apple and Business", "Shop for Business"],
    },
    {
      title: "Apple Values",
      links: ["Accessibility", "Environment", "Privacy", "Supplier Responsibility"],
    },
  ];

  return (
    <footer className="bg-neutral-100 text-neutral-700 py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-left">
        {sections.map((sec, idx) => (
          <div key={idx}>
            <h4 className="font-semibold text-lg mb-3">{sec.title}</h4>
            <ul className="space-y-2 text-sm">
              {sec.links.map((link, i) => (
                <li key={i}>
                  <a href="#" className="hover:underline">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="text-center text-sm text-gray-500 mt-8">
        © 2025 Apple Inc. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
