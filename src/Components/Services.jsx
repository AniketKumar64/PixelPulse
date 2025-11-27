import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

const services =[
  {
    "id": "01",
    "title": "Understand<br />Your Goals",
    "description": "We listen, learn, and define <br /> what truly matters to you."
  },
  {
    "id": "02",
    "title": "Choose<br />the Best Path",
    "description": "Clear steps are mapped to <br /> reach your goals with focus."
  },
  {
    "id": "03",
    "title": "Design<br />and Develop",
    "description": "We shape bold ideas into <br /> modern working solutions."
  },
  {
    "id": "04",
    "title": "Deliver<br />with Impact",
    "description": "Launch results that stand out, <br /> create and inspire growth."
  }
]


const Services = () => {
    const Serciccesref = useRef(null);
    const titleRef = useRef(null);

    useGSAP(() => {
        const items = gsap.utils.toArray('.service-item');

        // Title Animation
        gsap.from(titleRef.current, {
            y: 50,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: Serciccesref.current,
                start: "top 80%",
            }
        });

        // Staggered "Stairs" Animation - Left to Right
        gsap.from(items, {
            x: 200, // Coming from left
            opacity: 0,
            duration: 1,
            stagger: 0.3, // One by one
            ease: "power3.out",
            scrollTrigger: {
                trigger: Serciccesref.current,
                start: "top 70%",
                end: "bottom 20%",
                
                scrub: 1,
                yoyo: true,
            }
        });

    }, { scope: Serciccesref });

    return (
       <section
  ref={Serciccesref}
  className="md:py-32 py-10 px-1 relative container mx-auto md:px-4 bg-black overflow-hidden"
>
         <div className="text-center flex flex-col md:gap-10 gap-2 text-white md:mb-20">
        <h1 className="md:text-7xl text-4xl  tracking-tight leading-[1]">Behind MY <br /> Process</h1>
      </div>
  {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[800px] bg-blue-900/10 rounded-full blur-3xl" />
            </div>

            <div className=" flex flex-col md:flex-row  relative z-10">
                <div ref={titleRef} className="md:text-left  w-[30%] mb-5 md:mb-20">
                    <p className='text-xl hidden md:flex text-center mb-2 md:mb-8'>[Our Process]</p>
                   
                   
                </div>

                <div className="flex flex-col w-full gap-8">
                    {services.map((service, index) => (
                        <div
                            key={service.id}
                            className={`service-item group  relative p-8  bg-black border-b border-zinc-800 hover:border-zinc-600 transition-colors overflow-hidden flex items-center gap-6`}
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`} />

                            <div className="flex flex-col md:flex-row md:text-left text-center items-center justify-between w-full">
                                <div className="relative z-10 shrink-0">
                                <div className="p-4 text-8xl inline-block   group-hover:scale-110 transition-transform duration-300">
                                    {/* {service.icon} */}
                                    {service.id}
                                </div>
                            </div>

                            <div className="relative z-10">
                                <h3 className="text-5xl  mb-2 text-white tracking-tight`">
                                    <span dangerouslySetInnerHTML={{ __html: service.title }} />
                                </h3>
                               
                            </div>
                            <div className="relative z-10">
                                <p className="text-sm max-w-sm text-slate-400">
                                    <span dangerouslySetInnerHTML={{ __html: service.description }} />
                                </p>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
