import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Hero1 = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=200%",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      tl.to(imageRef.current, {
        opacity: 0.3,
        scale: 1,
        width: "100%",
        height: "100%",
        borderRadius: 0,
        duration: 1,
        ease: "power2.inOut",
      }).to(
        textRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
        },
        "-=0.5"
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      <div
        ref={imageRef}
        className="relative w-[40vw] h-[50vh] overflow-hidden rounded-2xl shadow-2xl z-10"
        style={{ transformOrigin: "center center" }}
      >
        <img
src="https://wallpapers.com/images/hd/mercedes-benz-4k-376xvbcp07l8a4ts.jpg"          className="w-full h-full opacity-100 object-cover"
        />
      </div>

      <div
        ref={textRef}
        className="absolute z-20 text-center opacity-0 translate-y-10 pointer-events-none mix-blend-difference"
      >
        <h1 className="text-6xl md:text-9xl font-bold text-white tracking-tighter uppercase">
          Mercedes Benz
        
          AMG GT
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mt-4 font-light tracking-widest">
          Beyond Limits
        </p>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white animate-bounce z-20 mix-blend-difference">
        <p className="text-md uppercase tracking-widest">Scroll to Explore</p>
      </div>
    </div>
  );
};

export default Hero1;
