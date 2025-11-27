import React from 'react'
import { useGSAP } from '@gsap/react';
import  { SplitText } from 'gsap/all';
import gsap from 'gsap';


const About = () => {

    const works = [
        {
            id: 1,
            number:"350+",
            title:"Projects Completed"
        },
        {
            id: 2,
            number:"99%",
            title:"Happy Clients"
        },
        {
            id: 3,
            number:"1.2+",
            title:"years  Experience"
        },
    ];
    useGSAP(()=>{
          const firstmsgsplit = SplitText.create(".title",{
            type: "words",
          });
          gsap.to(firstmsgsplit.words,{
            color:"#ffffff",
            stagger:1,
            ease:"power1.in",
            delay:0.9,
            scrollTrigger:{
                trigger:".title",
                toggleActions:"play reverse play reverse",
                start:"top bottom",
                end:"  59% bottom",
                scrub:true,
                // markers:true,
            },
          });
    })

  return (
    <section className="lg:p-8 p-4 my-20  mx-auto lg:max-w-[75%]">
<div className="flex lg:flex-row h-full w-full flex-col gap-1 lg:gap-12 ">
    <p className=" uppercase text-lg w-[55%]   mb-8 text-[#6b6868] ">
  <span>[</span>About us<span>]</span>
</p>

<div className="flex flex-col gap-12  justify-between">
    <p  className='title lg:text-5xl  text-[2.6rem] text-[#000000] leading-12 tracking-tighter '>
        Cixo Studio, founded in Dubai, thrives on redefining design with creativity and precision. We specialize in motion graphics, web design, and branding. We aim to push design beyond limits.
    </p>
    <div className="flex justify-between  mt-8">
        {works.map(work => (
            <div key={work.id} className="text-center flex flex-col gap-2">
                <p className="text-8xl ">{work.number}</p>
                <p className="text-[#747474] text-xl ">{work.title}</p>
            </div>
        ))}
    </div>
    <div className="border-t border-[#171717] flex items-center justify-between py-7 ">
        <p className='text-[#6b6868] text-lg w-[45%] '>Transforming your visions into stunning digital <br /> realities with innovation and expertise!</p>

        <p className='text-white uppercase text-xl '>learn MOre</p>
    </div>

  



</div>

</div>

<div className="relative w-full overflow-hidden py-10">

  {/* LEFT BLUR FADE */}
    <div className="pointer-events-none absolute left-0 top-0 h-full w-40 z-20 
                  bg-gradient-to-r from-black to-transparent"></div>

  {/* RIGHT SOFT FADE */}
  <div className="pointer-events-none absolute right-0 top-0 h-full w-40 z-20 
                  bg-gradient-to-l from-black to-transparent"></div>

  {/* MARQUEE */}
  <div className="marquee flex gap-6">
    {[...Array(2)].map((_, idx) => (
      <div key={idx} className="flex gap-6">
        {[
          "Cixo Studio",
          "Branding",
          "Web Design",
          "Web Development",
          "Motion Graphics",
          "Creative Agency",
          "Digital Design",
        ].map((item, i) => (
          <div
            key={i}
            className="px-18 py-10 lg:py-16 lg:px-10 bg-[#0A0A0A] rounded-xl
                       border border-white/10 text-[#F9F9F9] text-lg whitespace-nowrap"
          >
            <h1>{item}</h1>
          </div>
        ))}
      </div>
    ))}
  </div>
</div>
<style>
{`
  .marquee {
    width: max-content;
    animation: scroll 75s linear infinite;
  }

  @keyframes scroll {
    from { transform: translateX(0); }
    to { transform: translateX(-50%); }
  }
`}
</style>
    </section>
  )
}

export default About