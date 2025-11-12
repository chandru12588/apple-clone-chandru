import React from "react";

export default function ProductSection({ title, subtitle, image, dark=false }){
  return (
    <section className={`${dark ? 'bg-black text-white' : 'bg-white text-black'} py-15`}>
      <div className="container text-center">
        <h3 className="text-3xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-500 mb-4">{subtitle}</p>
        <div className="flex justify-center gap-6 text-apple-blue font-medium mb-6">
          <a className="hover:underline" href="#">Learn more &gt;</a>
          <a className="hover:underline" href="#">Buy &gt;</a>
        </div>
        <img src={image} alt={title} className="mx-auto max-w-3xl rounded-xl shadow-sm"/>
      </div>
    </section>
  )
}
