import { useGSAP } from '@gsap/react';
import gsap from 'gsap/all';
import React, { useRef } from 'react'
import Marquee from './Common/Marquee';

const Reviews = () => {
        const sectionRef = useRef(null);
        const triggerRef = useRef(null);

  
const FadeWrapper = ({ children }) => (
  <div className="relative w-full overflow-hidden">
    {/* Left blur */}
    <div className="pointer-events-none absolute left-0 top-0 h-full w-24 
      bg-gradient-to-r from-black to-transparent bg-black z-20" />

    {/* Right blur */}
    <div className="pointer-events-none absolute right-0 top-0 h-full w-24 
      bg-gradient-to-l from-black to-transparent bg-black z-20" />

    {children}
  </div>
);






const items = [
    {
      stars: 5,
      text: "Working with Cixo Studio transformed our brand!",
      author: "Micheal Brooks",
      role: "Founder",
       color: "from-emerald-500/20 to-teal-500/20"
    },
    {
      stars: 5,
      text: "Amazing creativity and professionalism.",
      author: "Laura Bennett",
      role: "CTO",
        color: "from-purple-500/20 to-pink-500/20"
    },
    {
      stars: 5,
      text: "Couldn't be happier with the results.",
      author: "Thomas Reid",
      role: "Co-Founder",
        color: "from-yellow-500/20 to-orange-500/20"
    },
    {
      stars: 5,
      text: "Their designs truly stand out in the market.",
      color: "from-red-500/20 to-pink-500/20",
      author: "Sophie Turner",
      role: "Marketing Head"
    },
  ];


    

  return (
     <section ref={triggerRef} className="overflow-hidden min-h-screen bg-black">
            <div ref={sectionRef} className="flex flex-col  lg:p-8 p-4 my-20 mx-auto lg:max-w-[95%] w-fit">
    
   <section className="min-h-screen bg-black p-10">
      <div className="text-center flex flex-col gap-10  text-white mb-20">
        <p className="text-2xl text-[#d4d3d3]">[ Testimonials ]</p>
        <h1 className="text-8xl  tracking-tight leading-[0.8]">Client <br /> Reviews</h1>
      </div>
<FadeWrapper>
      <Marquee speed={50} direction="left" className="gap-5">
        {items.map((item, i) => (
          <div
            key={i}
            className="min-w-[400px] service-item group relative p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-600 transition-colors overflow-hidden flex  gap-6 text-black  flex-col"
          >
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`} />

            <div className="text-yellow-400">{'★'.repeat(item.stars)}</div>
            <p className="italic text-xl">"{item.text}"</p>
            <p className="font-bold text-md">{item.author}</p>
            <p className="text-md text-gray-800">{item.role}</p>
          </div>
        ))}
      </Marquee>
      </FadeWrapper>

      {/* RIGHT MARQUEE */}
      <FadeWrapper>
      <Marquee speed={50} direction="right" className="mt-10 gap-5">
        {items.map((item, i) => (
          <div
            key={i}
            className="min-w-[400px] service-item group relative p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-600 transition-colors overflow-hidden flex  gap-6 text-black flex-col "
          >
        <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`} />

            <div className="text-yellow-400">{'★'.repeat(item.stars)}</div>
            <p className="italic text-xl">"{item.text}"</p>
            <p className="font-bold text-md">{item.author}</p>
            <p className="text-md text-gray-800">{item.role}</p>

      
          </div>
        ))}
      </Marquee>
      </FadeWrapper>
    </section>
  

</div>
        </section>
  )
}

export default Reviews