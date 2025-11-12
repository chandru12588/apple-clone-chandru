import React from "react";
import macbook from "../assets/macbook.jpg";
import ipad from "../assets/ipad.jpeg";
import watch from "../assets/watch.jpeg";
import macair from "../assets/macair.jpeg"; // reuse macbook image for MacBook Air if needed

const products = [
  { title: "MacBook Pro 14\"", subtitle: "Mind-blowing performance.", image: macbook, dark: false },
  { title: "iPad Pro", subtitle: "Unbelievably thin. Incredibly powerful.", image: ipad, dark: true },
  { title: "Apple Watch Series 11", subtitle: "Smarter. Brighter. Mightier.", image: watch, dark: false },
  { title: "MacBook Air", subtitle: "Super light. Super powerful.", image: macair, dark: false },
];

export default function ProductsSection(){
  return (
    <section className="py-16">
      <div className="container grid gap-8 md:grid-cols-2">
        {products.map((p, i) => (
          <div key={i} data-aos="fade-up" className={`${p.dark ? 'bg-black text-white' : 'bg-white text-black'} rounded-2xl p-8`}>
            <h3 className="text-2xl font-semibold mb-2">{p.title}</h3>
            <p className="text-gray-500 mb-4">{p.subtitle}</p>
            <div className="flex gap-4 mb-6">
              <a className="text-apple-blue hover:underline" href="#">Learn more &gt;</a>
              <a className="text-apple-blue hover:underline" href="#">Buy &gt;</a>
            </div>
            <img src={p.image} alt={p.title} className="w-full rounded-lg object-cover"/>
          </div>
        ))}
      </div>
    </section>
  )
}
